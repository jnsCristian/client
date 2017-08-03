package com.nttdata.atlantis_client.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import javax.ws.rs.QueryParam;

import org.apache.http.HttpEntity;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.FileBody;
import org.apache.http.impl.client.HttpClientBuilder;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.nttdata.atlantis_client.security.User;
import com.nttdata.atlantis_client.security.UserService;

@Controller
public class NormalPagesController {
	@Autowired
	UserService userService;



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
			m.addObject("role", user.getRole());
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
			m.addObject("role", user.getRole());
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
			m.addObject("role", user.getRole());
			return m;
		} else
			return new ModelAndView("redirect:/");
	}
	@RequestMapping(method = RequestMethod.POST, path = "/upload")
	public ModelAndView addAvatar(Authentication authentication,@RequestParam(name="file",required=true)MultipartFile  files,
			@QueryParam("id")String id) throws IOException {
		if(files!= null){
			
		File file = convert(files);
		
		HttpClient httpclient = HttpClientBuilder.create().build();
		HttpPut httpput = new HttpPut("http://localhost:8085/atlantis/users/"+id+"/avatar");
		
		FileBody fileBody = new FileBody(file);
		MultipartEntityBuilder multipartEntityBuilder = MultipartEntityBuilder.create();
		multipartEntityBuilder.setMode(HttpMultipartMode.BROWSER_COMPATIBLE);
		multipartEntityBuilder.addPart("file", fileBody);
		HttpEntity httpEntity = multipartEntityBuilder.build();
		httpput.setEntity(httpEntity);
		httpclient.execute(httpput);
		}
		
		return new ModelAndView("redirect:/profile");
	}

	public File convert(MultipartFile file) throws IOException
	{    
	    File convFile = new File(file.getOriginalFilename());
	    convFile.createNewFile(); 
	    FileOutputStream fos = new FileOutputStream(convFile); 
	    fos.write(file.getBytes());
	    fos.close(); 
	    return convFile;
	}
}
