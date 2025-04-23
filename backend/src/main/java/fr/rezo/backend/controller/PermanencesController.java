package fr.rezo.backend.controller;

import fr.rezo.backend.repository.PermanencesRepository;
import fr.rezo.backend.service.PermanenceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class PermanencesController {

    private final PermanenceService permanenceService;
    private final PermanencesRepository permanencesRepository;

    public PermanencesController(PermanenceService permanenceService, PermanencesRepository permanencesRepository) {
        this.permanenceService = permanenceService;
        this.permanencesRepository = permanencesRepository;
    }

    @GetMapping("/permanences")
    public ResponseEntity<Map<String, Object>> getAllPermanences() {
        Map<String, Object> response = permanenceService.getAllPermanences();
        return buildResponse(response);
    }

    //---- RESPONSE BUILDER ----\\

    private ResponseEntity<Map<String, Object>> buildResponse(Map<String, Object> response) {
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
