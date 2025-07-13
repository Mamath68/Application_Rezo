package fr.rezo.backend.service;

import fr.rezo.backend.dto.PermanenceDto;
import fr.rezo.backend.dto.SavoirDto;
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

    private Map<String, Object> response() {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Permanences not found");
        return response;
    }

    private Map<String, Object> responseData(Map<String, Object> data) {
        data.put("message", "Request was successful");
        return data;
    }

    public Map<String, Object> getAllPermanences() {
        List<PermanenceDto> permanenceDtos = permanenceRepository.findAllByOrderByDateAscPermanenceDebut()
                .stream()
                .map(permanence -> new PermanenceDto(
                        permanence.getAddress(),
                        permanence.getNomLocal(),
                        permanence.getShortLocal(),
                        permanence.getContact(),
                        permanence.getPhoneContact(),
                        permanence.getDate().toString(),
                        permanence.getPermanenceDebut().toString(),
                        permanence.getPermanenceFin().toString(),
                        permanence.getSavoirs().stream()
                                .map(s -> new SavoirDto(s.getNom(), s.getRole().name()))
                                .toList()
                ))
                .toList();

        Map<String, Object> data = new HashMap<>();
        data.put("message", "Request was successful");
        data.put("permanences", permanenceDtos);
        return data;
    }

    public Map<String, Object> getOneById(Long id) {
        System.out.println("----- START | PermanenceService : getOneById -----");
        System.out.println("Args: permanence id=" + id);

        Permanences permanence = permanenceRepository.findById(id).orElse(null);
        if (permanence == null) {
            return response();
        }

        Map<String, Object> data = new HashMap<>();
        data.put("permanence", permanence);

        System.out.println("----- END | PermanenceService : getOneById -----");
        return responseData(data);
    }
}
