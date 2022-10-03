package com.brillio.tokenization;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class TokenHubBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(TokenHubBackendApplication.class, args);
	}

}
