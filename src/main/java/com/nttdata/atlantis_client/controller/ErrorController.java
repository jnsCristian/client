package com.nttdata.atlantis_client.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ErrorController {
	@RequestMapping(method = RequestMethod.GET, path = "/login-error")
	public ModelAndView getLoginError(){
			return new ModelAndView("login-error");
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/bad-url")
	public ModelAndView getBadURL(){

			return new ModelAndView("bad-url");
	}
}
