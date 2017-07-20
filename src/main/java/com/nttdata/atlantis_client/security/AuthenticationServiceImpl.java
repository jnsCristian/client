/**
 * 
 */
package com.nttdata.atlantis_client.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.http.ParseException;
import org.json.JSONException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * @author stefan.cristian
 *
 */
@Service("authenticationService")
public class AuthenticationServiceImpl implements AuthenticationService {

	private static final long serialVersionUID = -4705767006620048453L;

	private final Logger slf4jLogger = LoggerFactory.getLogger(AuthenticationServiceImpl.class);

	@Autowired
	UserService userService;

	@Override
	public UserDetails loadUserByUsername(String arg0) throws UsernameNotFoundException {
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
		SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ROLE_USER");
		authorities.add(authority);
		slf4jLogger.info("Loading user with email " + arg0);
		User user = null;
		try {
			user = userService.findByEmail(arg0);
		} catch (ParseException | IOException | JSONException e1) {
			e1.printStackTrace();
		}
		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), authorities);

	}

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		slf4jLogger.info("Authenticating the user " + authentication.getName());
		String name = authentication.getName();
		String password = authentication.getCredentials().toString();
		MD5Encode md5 = new MD5Encode();
		User user = null;
		try {
			user = userService.findByEmail(name);
		} catch (ParseException | IOException | JSONException e1) {
			e1.printStackTrace();
		}
		if (user != null && md5.encode(password).equals(user.getPassword()) && user.isConfirmed()) {
			slf4jLogger.info("The credentials are matching");
			return new UsernamePasswordAuthenticationToken(name, password,
					Arrays.asList(new SimpleGrantedAuthority(user.getRole())));
		}
		name = null;
		password = null;
		slf4jLogger.info("The credentials didn't match");
		return null;
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}

}
