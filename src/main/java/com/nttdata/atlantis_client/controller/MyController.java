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

import com.nttdata.atlantis_client.security.UserService;

@Controller
public class MyController {
	@Autowired
	UserService userService;

	@RequestMapping(method = RequestMethod.GET, path = "/")
	public ModelAndView getLogin(Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		if ((authentication != null) && authentication.isAuthenticated()) {
			ModelAndView m = new ModelAndView("home");
			m.addObject("userId", userService.findByEmail(authentication.getName()).getId());
			return m;
		}
		return new ModelAndView("login");
	}

	@RequestMapping(method = RequestMethod.GET, path = "/home")
	public ModelAndView getHome(Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		if ((authentication != null) && authentication.isAuthenticated()) {
			ModelAndView m = new ModelAndView("home");
			m.addObject("userId", userService.findByEmail(authentication.getName()).getId());
			return m;
		} else
			return new ModelAndView("redirect:/");
	}

	@RequestMapping(method = RequestMethod.GET, path = "/users")
	public ModelAndView getUsers(Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		if ((authentication != null) && authentication.isAuthenticated()) {
			ModelAndView m = new ModelAndView("allUsers");
			m.addObject("userId", userService.findByEmail(authentication.getName()).getId());
			return m;
		} else
			return new ModelAndView("redirect:/");
	}

	@RequestMapping(method = RequestMethod.GET, path = "/map")
	public ModelAndView getMap(Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		if ((authentication != null) && authentication.isAuthenticated()) {
			ModelAndView m = new ModelAndView("map");
			m.addObject("userId", userService.findByEmail(authentication.getName()).getId());
			return m;
		} else
			return new ModelAndView("redirect:/");
	}

	@RequestMapping(method = RequestMethod.GET, path = "/profile")
	public ModelAndView getProfile(Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		if ((authentication != null) && authentication.isAuthenticated()) {
			ModelAndView m = new ModelAndView("user");
			m.addObject("userId", userService.findByEmail(authentication.getName()).getId());
			return m;
		} else
			return new ModelAndView("redirect:/");
	}

}
