package com.school.school_ems;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SchoolEmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(SchoolEmsApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer crosConfigurer(){
		return new WebMvcConfigurer() {
			@SuppressWarnings("null")
			@Override
			public void addCorsMappings(CorsRegistry registry){
				registry.addMapping("/**")
				.allowedOrigins( "http://localhost:5173")
				.allowedHeaders("*")
				.allowCredentials(true);
			}
		};
	}

}
