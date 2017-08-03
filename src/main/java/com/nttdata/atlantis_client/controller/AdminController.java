package com.nttdata.atlantis_client.controller;

import java.io.IOException;

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
public class AdminController {
	@Autowired
	UserService userService;
	
	@RequestMapping(method = RequestMethod.GET, path = "/admin")
	public ModelAndView getAdmin(Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		if ((authentication != null) && authentication.isAuthenticated()) {
			User user=userService.findByEmail(authentication.getName());
			ModelAndView m = new ModelAndView("admin");
			if(!user.getRole().equals("ROLE_ADMIN")){
				m.setViewName("home");
			}
			m.addObject("userId", user.getId());
			m.addObject("role", user.getRole());
			return m;
		} else
			return new ModelAndView("redirect:/");
	}
}
