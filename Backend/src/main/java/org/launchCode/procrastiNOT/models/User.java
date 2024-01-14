package org.launchCode.procrastiNOT.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

// An entity class representing a User, extending the AbstractEntity as the base entity
@Entity
public class User extends AbstractEntity {

    // User's username, marked as not nullable
    @NotNull
    private String username;

    // User's email, marked as not nullable
    @NotNull
    private String email;

    // User's password hash, generated using BCryptPasswordEncoder
    @NotNull
    private String pwHash;

    // Transient field to hold the password verification (not persisted in the database)
    @Transient
    private String verifyPassword;

    // Static instance of BCryptPasswordEncoder for password encoding and matching
    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    // Default constructor required by JPA
    public User() {}

    // Constructor for creating a new User with provided username, email, password, and verification
    public User(String username, String email, String password, String verifyPassword) {
        this.username = username;
        this.email = email;
        this.pwHash = encoder.encode(password);
        this.verifyPassword = verifyPassword;
    }

    // Getter method for retrieving the username
    public String getUsername() {
        return username;
    }

    // Getter method for retrieving the email
    public String getEmail() {
        return email;
    }

    // Getter method for retrieving the verification password
    public String getVerifyPassword() {
        return verifyPassword;
    }

    // Setter method for setting the verification password
    public void setVerifyPassword(String verifyPassword) {
        this.verifyPassword = verifyPassword;
    }

    // Method to check if a provided password matches the stored hashed password
    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }
}

