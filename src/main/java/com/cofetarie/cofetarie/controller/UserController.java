package com.cofetarie.cofetarie.controller;

import com.cofetarie.cofetarie.entity.*;
import com.cofetarie.cofetarie.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // daca frontendul tau e pe port 3000
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return "Email already exists!";
        }
        userRepository.save(user);
        return "User registered successfully!";
    }

    @PostMapping("/login")
    public String login(@RequestBody User loginRequest) {
        User user = userRepository.findByEmail(loginRequest.getEmail())
                .orElse(null);

        if (user == null || !user.getParola().equals(loginRequest.getParola())) {
            return "Invalid credentials!";
        }

        // aici normal am genera un JWT token, dar deocamdată returnăm "success"
        return "Login successful!";
    }
}

