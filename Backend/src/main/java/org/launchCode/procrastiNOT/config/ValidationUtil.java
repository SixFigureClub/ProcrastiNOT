// Package declaration for the configuration of the ProcrastiNOT application
package org.launchCode.procrastiNOT.config;

import org.springframework.validation.Errors;
import java.util.HashMap;
import java.util.Map;

// Utility class for handling validation errors
public class ValidationUtil {

    // Static method to convert Errors object to a Map of field errors
    public static Map<String, String> getErrorsMap(Errors errors) {
        // HashMap to store field errors (field name -> error message)
        Map<String, String> errorMap = new HashMap<>();

        // Iterate through field errors in the Errors object
        errors.getFieldErrors().forEach(error -> {
            // Add each field error to the errorMap
            // Key: Field name, Value: Default error message
            errorMap.put(error.getField(), error.getDefaultMessage());
        });

        // Return the populated errorMap
        return errorMap;
    }
}
