package org.launchCode.procrastiNOT.models.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

// Data transfer object (DTO) representing the data structure for login form
public class LoginFormDTO {

    // Username field with validation annotations
    @NotNull
    @NotBlank(message = "Username is required!")
    @Size(min = 4, max = 20, message = "Invalid username")
    private String username;

    // Password field with validation annotations
    @NotNull
    @NotBlank(message = "Password is required!")
    @Size(min = 6, max = 30, message = "Invalid password")
    // Regular expression pattern for enforcing password complexity://
    // - (?=.*[a-z]): At least one lowercase letter
    // - (?=.*[A-Z]): At least one uppercase letter
    // - (?=.*\d): At least one digit
    // - .{6,30}: Between 6 and 30 characters in total
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{6,30}$", message = "Invalid password")
    private String password;

    // Getter method for retrieving the username
    public String getUsername() {
        return username;
    }

    // Setter method for setting the username
    public void setUsername(String username) {
        this.username = username;
    }

    // Getter method for retrieving the password
    public String getPassword() {
        return password;
    }

    // Setter method for setting the password
    public void setPassword(String password) {
        this.password = password;
    }
}




