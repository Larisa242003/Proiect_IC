package com.cofetarie.cofetarie.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import java.util.*;

@RestController
@RequestMapping("/api/cake-matchmaker")
public class CakeMatchmakerController {

    @Value("${openai.api.key}")
    private String openAiApiKey;

    @PostMapping
    public ResponseEntity<Map<String, String>> getCakeSuggestion(@RequestBody Map<String, Object> requestBody) {
        String event = (String) requestBody.get("event");
        boolean forKids = (Boolean) requestBody.get("forKids");
        String interests = (String) requestBody.get("interests");
        String personality = (String) requestBody.get("personality");

        String prompt = "Based on the following details, suggest a fun personalized cake idea:\n"
                + "Event: " + event + "\n"
                + "For kids: " + (forKids ? "Yes" : "No") + "\n"
                + "Interests: " + interests + "\n"
                + "Personality: " + personality + "\n\n"
                + "Respond with just the cake suggestion (flavor and style).";

        // Prepare the OpenAI request
        RestTemplate restTemplate = new RestTemplate();
        String apiUrl = "https://api.openai.com/v1/chat/completions";

        Map<String, Object> request = new HashMap<>();
        request.put("model", "gpt-3.5-turbo");
        request.put("messages", List.of(
            Map.of("role", "system", "content", "You are a creative cake designer."),
            Map.of("role", "user", "content", prompt)
        ));
        request.put("temperature", 0.8);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(openAiApiKey);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(request, headers);

        try {
            ResponseEntity<Map> response = restTemplate.postForEntity(apiUrl, entity, Map.class);
            List<Map<String, Object>> choices = (List<Map<String, Object>>) response.getBody().get("choices");
            Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
            String suggestion = (String) message.get("content");

            return ResponseEntity.ok(Map.of("suggestion", suggestion.trim()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("suggestion", "Sorry, we couldn't generate a cake idea right now."));
        }
    }
}
