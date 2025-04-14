package fr.rezo.backend.service;

import fr.rezo.backend.repository.PermanencesRepository;
import org.springframework.stereotype.Service;

@Service
public class PermanenceService {
    private final PermanencesRepository permanenceRepository;

    public PermanenceService(PermanencesRepository permanenceRepository) {
        this.permanenceRepository = permanenceRepository;
    }
}
