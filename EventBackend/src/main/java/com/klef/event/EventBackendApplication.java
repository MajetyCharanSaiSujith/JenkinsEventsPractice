package com.klef.event;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class EventBackendApplication extends SpringBootServletInitializer  {

	public static void main(String[] args) {
		SpringApplication.run(EventBackendApplication.class, args);
		System.out.println("I am here to entertain you...");
	}

}
