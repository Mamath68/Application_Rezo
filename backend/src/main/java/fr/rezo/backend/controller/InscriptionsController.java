package fr.rezo.backend.controller;

import fr.rezo.backend.service.InscriptionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class InscriptionsController {

    private final InscriptionService inscriptionService;

    public InscriptionsController(InscriptionService inscriptionService) {
        this.inscriptionService = inscriptionService;
    }

    // --- GET ALL ---
    @GetMapping("/inscriptions")
    public ResponseEntity<Map<String, Object>> getAllInscriptions() {
        Map<String, Object> response = inscriptionService.getAllInscriptions();
        return buildResponse(response);
    }

    // --- GET ONE ---
    @GetMapping("/inscription/get/id/{id}")
    public ResponseEntity<Map<String, Object>> getOneInscriptionById(@PathVariable Long id) {
        Map<String, Object> response = inscriptionService.getOneInscriptionById(id);
        return buildResponse(response);
    }

    // --- CREATE ---
    @PostMapping("/inscription/create")
    public ResponseEntity<Map<String, Object>> createInscription(
            @RequestParam Long userId,
            @RequestParam Long permanenceId,
            @RequestParam Long savoirId
    ) {
        Map<String, Object> response = inscriptionService.createInscription(userId, permanenceId, savoirId);
        return buildResponse(response);
    }

    // --- UPDATE ---
    @PutMapping("/inscription/update/{id}")
    public ResponseEntity<Map<String, Object>> updateInscription(
            @PathVariable Long id,
            @RequestParam Long userId,
            @RequestParam Long permanenceId,
            @RequestParam Long savoirId
    ) {
        Map<String, Object> response = inscriptionService.updateInscription(id, userId, permanenceId, savoirId);
        return buildResponse(response);
    }

    // --- DELETE ---
    @DeleteMapping("/inscription/delete/{id}")
    public ResponseEntity<Map<String, Object>> deleteInscription(@PathVariable Long id) {
        Map<String, Object> response = inscriptionService.deleteInscription(id);
        return buildResponse(response);
    }

    /* ---- RESPONSE BUILDER ---- */
    private ResponseEntity<Map<String, Object>> buildResponse(Map<String, Object> response) {
        String message = (String) response.get("message");

        if (message != null && message.toLowerCase().contains("non trouvée")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else if (message != null && message.toLowerCase().contains("non trouvé")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else if (message != null && message.toLowerCase().contains("déjà existante")) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }

        return ResponseEntity.ok(response);
    }
}
