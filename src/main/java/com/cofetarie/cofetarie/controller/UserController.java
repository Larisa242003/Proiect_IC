package com.cofetarie.cofetarie.controller;

import com.cofetarie.cofetarie.config.JwtUtil;
import com.cofetarie.cofetarie.entity.User;
import com.cofetarie.cofetarie.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        Optional<User> existUser = userRepository.findByEmail(user.getEmail());
        if (existUser.isPresent()) {
            return ResponseEntity.badRequest().body("Email already exists!");
        }

        // criptează parola
        user.setParola(passwordEncoder.encode(user.getParola()));
        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        Optional<User> userOpt = userRepository.findByEmail(loginRequest.getEmail());
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(401).body("Invalid credentials!");
        }

        User user = userOpt.get();

        // verificare parola
        if (!passwordEncoder.matches(loginRequest.getParola(), user.getParola())) {
            return ResponseEntity.status(401).body("Invalid credentials!");
        }

        // generează token JWT
        String token = jwtUtil.generateToken(user.getEmail());
        return ResponseEntity.ok(token);
    }
}



