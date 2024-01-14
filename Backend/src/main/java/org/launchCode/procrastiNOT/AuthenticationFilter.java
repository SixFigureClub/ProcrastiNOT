package org.launchCode.procrastiNOT;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.launchCode.procrastiNOT.controllers.AuthenticationController;
import org.launchCode.procrastiNOT.data.UserRepository;
import org.launchCode.procrastiNOT.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

// Custom interceptor to handle authentication filtering
public class AuthenticationFilter implements HandlerInterceptor {

    // Autowired UserRepository to access user data
    @Autowired
    UserRepository userRepository;

    // Autowired AuthenticationController to handle user authentication
    @Autowired
    AuthenticationController authenticationController;

    // Whitelist of paths that do not require authentication
    private static final List<String> whitelist = Arrays.asList("/login", "/register", "/logout", "/css");

    // Method to check if a path is in the whitelist
    private static boolean isWhitelisted(String path) {
        for (String pathRoot : whitelist) {
            if (path.startsWith(pathRoot)) {
                return true;
            }
        }
        return false;
    }

    // Method executed before handling a request to check authentication
    @Override
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response,
                             Object handler) throws IOException {

        // If the path is whitelisted, allow the request
        if (isWhitelisted(request.getRequestURI())) {
            return true;
        }

        // Retrieve user from the session using AuthenticationController
        HttpSession session = request.getSession();
        User user = authenticationController.getUserFromSession(session);

        // If the user is authenticated, allow the request
        if (user != null) {
            return true;
        }

        // If not authenticated, redirect to the login page
        response.sendRedirect("/login");
        return false;
    }
}

