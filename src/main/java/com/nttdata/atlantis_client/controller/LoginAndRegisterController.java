package com.nttdata.atlantis_client.controller;

import java.io.IOException;

import javax.ws.rs.QueryParam;

import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.nttdata.atlantis_client.security.User;
import com.nttdata.atlantis_client.security.UserService;

@Controller
public class LoginAndRegisterController {
	@Autowired
	UserService userService;
	
	@RequestMapping(method = RequestMethod.GET, path = "/")
	public ModelAndView getLogin(Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		if ((authentication != null) && authentication.isAuthenticated()) {
			ModelAndView m = new ModelAndView("home");
			User user=userService.findByEmail(authentication.getName());
			m.addObject("userId", user.getId());
			m.addObject("placeId", user.getPlaceId());
			m.addObject("role", user.getRole());
			return m;
		}
		return new ModelAndView("login");
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/confirm")
	public ModelAndView confirm(@QueryParam("code")String code,Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		ModelAndView m=new ModelAndView("confirm");
		m.addObject("code", code);
		return m;
	}
}
