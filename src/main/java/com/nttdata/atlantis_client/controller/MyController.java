package com.nttdata.atlantis_client.controller;

import java.io.IOException;

import javax.websocket.server.PathParam;
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
public class MyController {
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

	@RequestMapping(method = RequestMethod.GET, path = "/home")
	public ModelAndView getHome(Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		if ((authentication != null) && authentication.isAuthenticated()) {
			ModelAndView m = new ModelAndView("home");
			User user=userService.findByEmail(authentication.getName());
			m.addObject("userId", user.getId());
			m.addObject("placeId", user.getPlaceId());
			m.addObject("role", user.getRole());
			return m;
		} else
			return new ModelAndView("redirect:/");
	}

	@RequestMapping(method = RequestMethod.GET, path = "/users")
	public ModelAndView getUsers(Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		if ((authentication != null) && authentication.isAuthenticated()) {
			ModelAndView m = new ModelAndView("allUsers");
			User user=userService.findByEmail(authentication.getName());
			m.addObject("userId", user.getId());
			return m;
		} else
			return new ModelAndView("redirect:/");
	}

	@RequestMapping(method = RequestMethod.GET, path = "/map")
	public ModelAndView getMap(Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		if ((authentication != null) && authentication.isAuthenticated()) {
			ModelAndView m = new ModelAndView("map");
			User user=userService.findByEmail(authentication.getName());
			m.addObject("userId", user.getId());
			return m;
		} else
			return new ModelAndView("redirect:/");
	}

	@RequestMapping(method = RequestMethod.GET, path = "/profile")
	public ModelAndView getProfile(Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		if ((authentication != null) && authentication.isAuthenticated()) {
			ModelAndView m = new ModelAndView("user");
			User user=userService.findByEmail(authentication.getName());
			m.addObject("userId", user.getId());
			return m;
		} else
			return new ModelAndView("redirect:/");
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/confirm")
	public ModelAndView confirm(@QueryParam("code")String code,Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		ModelAndView m=new ModelAndView("confirm");
		m.addObject("code", code);
		return m;
	}

	@RequestMapping(method = RequestMethod.GET, value = "/building")
	public ModelAndView getConstructionBuilding(@QueryParam("id")String id,Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		if ((authentication != null) && authentication.isAuthenticated()) {
			ModelAndView m = new ModelAndView("constructionBuilding");
			User user=userService.findByEmail(authentication.getName());
			m.addObject("userId", user.getId());
			System.out.println(id);
			m.addObject("buildingId",id);
			return m;
		} else
			return new ModelAndView("redirect:/");
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/war-building")
	public ModelAndView getWarBuilding(@QueryParam("id")String id,Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		if ((authentication != null) && authentication.isAuthenticated()) {
			System.out.println(id);
			ModelAndView m = new ModelAndView("warBuilding");
			User user=userService.findByEmail(authentication.getName());
			m.addObject("userId", user.getId());
			m.addObject("buildingId",id);
			m.addObject("placeId", user.getPlaceId());
			return m;
		} else
			return new ModelAndView("redirect:/");
	}
	@RequestMapping(method = RequestMethod.GET, path = "/admin")
	public ModelAndView getAdmin(Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		if ((authentication != null) && authentication.isAuthenticated()) {
			ModelAndView m = new ModelAndView("admin");
			User user=userService.findByEmail(authentication.getName());
			m.addObject("userId", user.getId());
			return m;
		} else
			return new ModelAndView("redirect:/");
	}
}
