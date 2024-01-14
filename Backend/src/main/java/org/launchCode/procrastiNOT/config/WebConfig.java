package org.launchCode.procrastiNOT.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// Configuration class for handling Cross-Origin Resource Sharing (CORS)
@Configuration
public class WebConfig {

    // Bean method to configure CORS for the application
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        // Returning an anonymous implementation of WebMvcConfigurer
        return new WebMvcConfigurer() {
            // Overriding method to add CORS mappings to the registry
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                // Configuring CORS for all endpoints (/**)
                registry.addMapping("/**")
                        // Allowing requests from the specified origin
                        .allowedOrigins("http://localhost:3000")
                        // Allowing specified HTTP methods
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        // Allowing credentials (e.g., cookies) to be included in the request
                        .allowCredentials(true);
            }
        };
    }
}

