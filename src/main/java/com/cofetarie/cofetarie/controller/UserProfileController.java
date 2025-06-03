package com.cofetarie.cofetarie.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserProfileController {

    @GetMapping("/profile")
    public String getProfile(HttpServletRequest request) {
        String email = (String) request.getAttribute("email");
        if (email == null) {
            return "Token invalid sau lipsă.";
        }
        // aici poți folosi email-ul pentru a încărca date din DB dacă vrei
        return "Profil utilizator pentru: " + email;
    }
}
