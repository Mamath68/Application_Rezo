package fr.rezo.backend.service;

import fr.rezo.backend.model.Permanences;
import fr.rezo.backend.repository.PermanencesRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PermanenceService {
    private final PermanencesRepository permanenceRepository;

    public PermanenceService(PermanencesRepository permanenceRepository) {
        this.permanenceRepository = permanenceRepository;
    }

    private Map<String, Object> response(Object value) {
        Map<String, Object> response = new HashMap<>();
        response.put("message", value);
        return response;
    }

    private Map<String, Object> response(Map<String, Object> data) {
        data.put("message", "Request was successful");
        return data;
    }

    public Map<String, Object> getAllPermanences() {
        System.out.println("----- START | PermanenceService : getAll -----");

        List<Permanences> permanences = permanenceRepository.findAllByOrderByDateAscPermanenceDebut();
        if (permanences.isEmpty()) {
            return response("No permanences found");
        }

        Map<String, Object> data = new HashMap<>();
        data.put("permanences", permanences);

        System.out.println("----- END | PermanenceService : getAll -----");
        return response(data);
    }

    public Map<String, Object> getOneById(Long id) {
        System.out.println("----- START | PermanenceService : getOneById -----");
        System.out.println("Args: permanence id=" + id);

        Permanences permanence = permanenceRepository.findById(id).orElse(null);
        if (permanence == null) {
            return response("Permanences not found");
        }

        Map<String, Object> data = new HashMap<>();
        data.put("permanence", permanence);

        System.out.println("----- END | PermanenceService : getOneById -----");
        return response(data);
    }
}
