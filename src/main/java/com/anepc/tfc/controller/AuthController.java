package com.anepc.tfc.controller;

import com.anepc.tfc.DTO.LoginForm;
import com.anepc.tfc.entity.User;
import com.anepc.tfc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@Controller
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody LoginForm loginForm) {
        // Authenticate user
        boolean authenticated = userService.authenticateUser(loginForm.getEmail(), loginForm.getPassword());
        if (authenticated) {
            // Redirect to dashboard upon successful login

            return "redirect:/xmpls";
        } else {
            return "login";
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        // Check if user with the same email already exists
        if (userService.findByEmail(user.getEmail()) != null) {
            // Return error response
            // Example: return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already in use");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        // Save the user
        userService.saveUser(user);
        // Return success response
        // Example: return ResponseEntity.ok("User registered successfully");
        return ResponseEntity.ok().build();
    }
}
