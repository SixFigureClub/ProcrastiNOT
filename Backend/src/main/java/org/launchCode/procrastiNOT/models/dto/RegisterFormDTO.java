package org.launchCode.procrastiNOT.models.dto;

import jakarta.validation.constraints.*;

// Data Transfer Object (DTO) for handling user registration form data
public class RegisterFormDTO {

    // Username field with validation annotations
    @NotNull
    @NotBlank(message = "Username is required!")
    @Size(min = 4, max = 20, message = "Username must be between 4 and 20 characters")
    private String username;

    // Email field with validation annotations
    @Email(message = "Please enter a valid email")
    @NotNull
    @NotBlank(message = "Email is required!")
    private String email;

    // Password field with validation annotations
    // Regular expression pattern for enforcing password complexity:
    // - (?=.*[a-z]): At least one lowercase letter
    // - (?=.*[A-Z]): At least one uppercase letter
    // - (?=.*\d): At least one digit
    // - .{6,30}: Between 6 and 30 characters in total
    @NotNull
    @NotBlank(message = "Password is required!")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{6,30}$", message = "Password requires at least one uppercase letter, one lowercase, and a digit (6-30 characters).")
    private String password;

    // Verify password field with validation annotations
    @NotNull
    @NotBlank(message = "Verify password is required!")
    private String verifyPassword;

    // Getter method for retrieving the username
    public String getUsername() {
        return username;
    }

    // Setter method for setting the username
    public void setUsername(String username) {
        this.username = username;
    }

    // Getter method for retrieving the email
    public String getEmail() {
        return email;
    }

    // Setter method for setting the email
    public void setEmail(String email) {
        this.email = email;
    }

    // Getter method for retrieving the password
    public String getPassword() {
        return password;
    }

    // Setter method for setting the password
    public void setPassword(String password) {
        this.password = password;
    }

    // Getter method for retrieving the verifyPassword
    public String getVerifyPassword() {
        return verifyPassword;
    }

    // Setter method for setting the verifyPassword
    public void setVerifyPassword(String verifyPassword) {
        this.verifyPassword = verifyPassword;
    }
}



