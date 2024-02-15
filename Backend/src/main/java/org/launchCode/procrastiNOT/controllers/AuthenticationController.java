package org.launchCode.procrastiNOT.controllers;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.launchCode.procrastiNOT.config.ValidationUtil;
import org.launchCode.procrastiNOT.data.UserRepository;
import org.launchCode.procrastiNOT.models.User;
import org.launchCode.procrastiNOT.models.dto.LoginFormDTO;
import org.launchCode.procrastiNOT.models.dto.RegisterFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

// RestController annotation indicates that the data returned by each method will be written straight into the response body
@RestController
// CrossOrigin annotation allows cross-origin resource sharing from the specified origin
@CrossOrigin("http://localhost:3000")
public class AuthenticationController {

    // Autowired annotation injects the UserRepository bean
    @Autowired
    UserRepository userRepository;

    // Static constant for the key used to store the user ID in the session
    private static final String userSessionKey = "user";

    // Method to get a User object from the session using the stored user ID
    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            return null;
        }
        return user.get();
    }

    // Static method to set the user ID in the session
    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }

    // Handler for displaying the registration form
    @GetMapping("/register")
    public String displayRegistrationForm(Model model) {
        model.addAttribute(new RegisterFormDTO());
        model.addAttribute("title", "Register");
        return "register";
    }

    // Handler for processing the registration form submission
    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> processRegistrationForm(@ModelAttribute @Valid RegisterFormDTO registerFormDTO,
                                                                       Errors errors, HttpServletRequest request, Model model) {

        // Checking for validation errors
        if (errors.hasErrors()) {
            // Log validation errors
            errors.getAllErrors().forEach(error -> System.err.println(error));

            // Construct and return validation errors in the expected format
            Map<String, Object> response = new HashMap<>();
            response.put("errors", ValidationUtil.getErrorsMap(errors));
            return ResponseEntity.badRequest().body(response);
        }

        // Check for existing user with the same username or email
        User existingUser = userRepository.findByUsername(registerFormDTO.getUsername());
        User existingUserByEmail = userRepository.findByEmail(registerFormDTO.getEmail());

        // Handling duplicate username
        if (existingUser != null) {
            errors.rejectValue("username", "username.alreadyexists", "That username already exists, try a different one");
            model.addAttribute("title", "Register");
            return ResponseEntity.badRequest().body(Collections.singletonMap("error", "User with the given username already exists"));
        }

        // Handling duplicate email
        if (existingUserByEmail != null) {
            errors.rejectValue("email", "email.alreadyexists", "That email already exists, try a different one.");
            model.addAttribute("title", "Register");
            return ResponseEntity.badRequest().body(Collections.singletonMap("error", "User with the given email already exists"));
        }

        // Checking if passwords match
        String password = registerFormDTO.getPassword();
        String verifyPassword = registerFormDTO.getVerifyPassword();
        if (!password.equals(verifyPassword)) {
            errors.rejectValue("password", "passwords.mismatch", "Passwords do not match, please try again.");
            model.addAttribute("title", "Register");
            return ResponseEntity.badRequest().body(Collections.singletonMap("error", "Passwords do not match"));
        }

        // Creating a new user and saving to the database
        User newUser = new User(registerFormDTO.getUsername(), registerFormDTO.getEmail(), password, verifyPassword);
        userRepository.save(newUser);
        setUserInSession(request.getSession(), newUser);

        return ResponseEntity.ok(Collections.emptyMap());
    }

    // Handler for displaying the login form
    @GetMapping("/login")
    public String displayLoginForm(Model model) {
        model.addAttribute(new LoginFormDTO());
        model.addAttribute("title", "Log In");
        return "login";
    }

    // Handler for processing the login form submission
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> processLoginForm(@ModelAttribute @Valid LoginFormDTO loginFormDTO,
                                                                Errors errors, HttpServletRequest request,
                                                                Model model) {

        // Checking for validation errors
        if (errors.hasErrors()) {
            Map<String, Object> response = new HashMap<>();
            response.put("errors", errors.getAllErrors());
            return ResponseEntity.badRequest().body(response);
        }

        // Finding the user by username
        User theUser = userRepository.findByUsername(loginFormDTO.getUsername());

        // Handling invalid username
        if (theUser == null) {
            errors.rejectValue("username", "user.invalid", "The given username does not exist");
            model.addAttribute("title", "Log In");

            // Initialize the response map
            Map<String, Object> response = new HashMap<>();
            response.put("errors", Collections.singletonMap("username", "The given username does not exist"));
            return ResponseEntity.badRequest().body(response);
        }

        // Checking if the password matches
        String password = loginFormDTO.getPassword();
        if (!theUser.isMatchingPassword(password)) {
            errors.rejectValue("password", "password.invalid", "Incorrect password");
            model.addAttribute("title", "Log In");

            // Initialize the response map
            Map<String, Object> response = new HashMap<>();
            response.put("errors", Collections.singletonMap("password", "Incorrect password"));
            return ResponseEntity.badRequest().body(response);
        }

        // Setting the user in the session
        setUserInSession(request.getSession(), theUser);
        return ResponseEntity.ok(Collections.emptyMap());
    }

    // Handler for logging out
    @GetMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request) {
        request.getSession().invalidate();
        return ResponseEntity.ok("success");
    }
}

