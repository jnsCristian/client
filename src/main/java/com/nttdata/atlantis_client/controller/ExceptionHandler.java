package com.nttdata.atlantis_client.controller;

import java.io.IOException;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.servlet.ModelAndView;

@ControllerAdvice
public class ExceptionHandler {
		@org.springframework.web.bind.annotation.ExceptionHandler(IOException.class)
		public ModelAndView handleIOException(IOException e){
			return new ModelAndView("redirect:/profile");
		} 

		@org.springframework.web.bind.annotation.ExceptionHandler(MaxUploadSizeExceededException.class)
		public ModelAndView handleMaxUploadSizeExceededException(IOException e){
			return new ModelAndView("redirect:/profile");
		} 
		
}
