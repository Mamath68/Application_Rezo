package fr.rezo.back.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Map;

public class ResponseBuilder {

    public static ResponseEntity<Map<String, Object>> buildResponse(Map<String, Object> response) {
        String message = (String) response.get("message");

        if (message != null && message.toLowerCase().contains("not found")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else if (message != null && message.toLowerCase().contains("already exists")) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        } else if (message != null && message.toLowerCase().contains("no matching")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }

        return ResponseEntity.ok(response);
    }
}
