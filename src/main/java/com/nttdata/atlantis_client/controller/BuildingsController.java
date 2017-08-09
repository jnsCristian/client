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
public class BuildingsController {
	@Autowired
	UserService userService;

	@RequestMapping(method = RequestMethod.GET, value = "/building")
	public ModelAndView getConstructionBuilding(@QueryParam("id")String id,Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		if ((authentication != null) && authentication.isAuthenticated()) {
			ModelAndView m = new ModelAndView("constructionBuilding");
			User user=userService.findByEmail(authentication.getName());
			m.addObject("userId", user.getId());
			System.out.println(id);
			m.addObject("buildingId",id);
			m.addObject("role", user.getRole());
			return m;
		} else
			return new ModelAndView("redirect:/");
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/war-building")
	public ModelAndView getWarBuilding(@QueryParam("id")String id,Authentication authentication)
			throws ClientProtocolException, ParseException, IOException, JSONException {
		if ((authentication != null) && authentication.isAuthenticated()) {
			ModelAndView m = new ModelAndView("warBuilding");
			User user=userService.findByEmail(authentication.getName());
			m.addObject("userId", user.getId());
			m.addObject("buildingId",id);
			m.addObject("placeId", user.getPlaceId());
			m.addObject("role", user.getRole());
			return m;
		} else
			return new ModelAndView("redirect:/");
	}
}
