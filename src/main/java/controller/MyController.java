package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MyController {
	
	@RequestMapping(method=RequestMethod.GET,path="/")
	public ModelAndView get(){
		return new ModelAndView("allUsers");
	}
}
