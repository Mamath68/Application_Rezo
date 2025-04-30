package fr.rezo.backend.service;

import fr.rezo.backend.model.Inscription;
import fr.rezo.backend.model.Permanences;
import fr.rezo.backend.model.Savoirs;
import fr.rezo.backend.model.Users;
import fr.rezo.backend.repository.InscriptionRepository;
import fr.rezo.backend.repository.PermanencesRepository;
import fr.rezo.backend.repository.SavoirRepository;
import fr.rezo.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class InscriptionService {
    private final InscriptionRepository inscriptionRepository;
    private final UserRepository userRepository;
    private final PermanencesRepository permanenceRepository;
    private final SavoirRepository savoirRepository;

    public InscriptionService(
            InscriptionRepository inscriptionRepository,
            UserRepository userRepository,
            PermanencesRepository permanenceRepository,
            SavoirRepository savoirRepository
    ) {
        this.inscriptionRepository = inscriptionRepository;
        this.userRepository = userRepository;
        this.permanenceRepository = permanenceRepository;
        this.savoirRepository = savoirRepository;
    }

    // --- GET ALL ---
    public Map<String, Object> getAllInscriptions() {
        System.out.println("----- START | InscriptionService : getAll -----");
        Map<String, Object> response = new HashMap<>();
        List<Inscription> inscriptions = inscriptionRepository.findAll();
        if (inscriptions.isEmpty()) {
            response.put("message", "Aucune inscription trouvée");
            return response;
        }

        response.put("message", "Request was successful");
        response.put("inscriptions", inscriptions);
        System.out.println("----- END | InscriptionService : getAll -----");
        return response;
    }

    // --- CREATE ---
    public Map<String, Object> createInscription(Long userId, Long permanenceId, Long savoirId) {
        System.out.println("----- START | InscriptionService : create -----");
        System.out.println("Args: userId=" + userId + ", permanenceId=" + permanenceId + ", savoirId=" + savoirId);
        Map<String, Object> response = new HashMap<>();

        Users user = userRepository.findById(userId).orElse(null);
        Permanences permanence = permanenceRepository.findById(permanenceId).orElse(null);
        Savoirs savoir = savoirRepository.findById(savoirId).orElse(null);

        if (user == null || permanence == null || savoir == null) {
            response.put("message", "User, Permanence ou Savoir non trouvé");
            return response;
        }

        Inscription inscription = new Inscription();
        inscription.setUser(user);
        inscription.setPermanence(permanence);
        inscription.setSavoir(savoir);

        inscriptionRepository.save(inscription);
        response.put("message", "Inscription créée avec succès");
        response.put("inscription", inscription);
        System.out.println("----- END | InscriptionService : create -----");
        return response;
    }

    // --- UPDATE ---
    public Map<String, Object> updateInscription(Long inscriptionId, Long userId, Long permanenceId, Long savoirId) {
        System.out.println("----- START | InscriptionService : update -----");
        System.out.println("Args: inscriptionId=" + inscriptionId + ", userId=" + userId + ", permanenceId=" + permanenceId + ", savoirId=" + savoirId);
        Map<String, Object> response = new HashMap<>();

        Inscription inscription = inscriptionRepository.findById(inscriptionId).orElse(null);
        if (inscription == null) {
            response.put("message", "Inscription non trouvée");
            return response;
        }

        Users user = userRepository.findById(userId).orElse(null);
        Permanences permanence = permanenceRepository.findById(permanenceId).orElse(null);
        Savoirs savoir = savoirRepository.findById(savoirId).orElse(null);

        if (user == null || permanence == null || savoir == null) {
            response.put("message", "User, Permanence ou Savoir non trouvé");
            return response;
        }

        inscription.setUser(user);
        inscription.setPermanence(permanence);
        inscription.setSavoir(savoir);

        inscriptionRepository.save(inscription);
        response.put("message", "Inscription mise à jour avec succès");
        response.put("inscription", inscription);
        System.out.println("----- END | InscriptionService : update -----");
        return response;
    }

    // --- DELETE ---
    public Map<String, Object> deleteInscription(Long id) {
        System.out.println("----- START | InscriptionService : delete -----");
        System.out.println("Args: id=" + id);
        Map<String, Object> response = new HashMap<>();

        Inscription inscription = inscriptionRepository.findById(id).orElse(null);
        if (inscription == null) {
            response.put("message", "Inscription non trouvée");
            return response;
        }

        inscriptionRepository.delete(inscription);
        response.put("message", "Inscription supprimée avec succès");
        System.out.println("----- END | InscriptionService : delete -----");
        return response;
    }

    // --- GET ONE ---
    public Map<String, Object> getOneInscriptionById(Long id) {
        System.out.println("----- START | InscriptionService : getOneById -----");
        System.out.println("Args: id=" + id);
        Map<String, Object> response = new HashMap<>();

        Inscription inscription = inscriptionRepository.findById(id).orElse(null);
        if (inscription == null) {
            response.put("message", "Inscription non trouvée");
            return response;
        }

        response.put("message", "Request was successful");
        response.put("inscription", inscription);
        System.out.println("----- END | InscriptionService : getOneById -----");
        return response;
    }
}
