package fr.rezo.backend.controller;

import fr.rezo.backend.service.PermanenceService;
import fr.rezo.backend.service.SavoirService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static fr.rezo.backend.controller.ResponseBuilder.buildResponse;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class PermanencesController {

    private final PermanenceService permanenceService;
    private final SavoirService savoirService;

    public PermanencesController(PermanenceService permanenceService, SavoirService savoirService) {
        this.permanenceService = permanenceService;
        this.savoirService = savoirService;
    }

    @GetMapping("/permanences")
    public ResponseEntity<Map<String, Object>> getAllPermanences() {
        Map<String, Object> response = permanenceService.getAllPermanences();
        return buildResponse(response);
    }

    @GetMapping("/permanence/get/id/{id}")
    public ResponseEntity<Map<String, Object>> getOneUserById(@PathVariable Long id) {
        Map<String, Object> response = permanenceService.getOneById(id);
        return buildResponse(response);
    }

    @GetMapping("/savoirs/id/{permanenceId}/role/{role}")
    public ResponseEntity<Map<String, Object>> getSavoirsByPermanenceAndRole(
            @PathVariable("permanenceId") Long permanenceId,
            @PathVariable("role") String role
    ) {
        Map<String, Object> response = savoirService.getSavoirsByPermanences(permanenceId, role);
        return buildResponse(response);
    }

}
