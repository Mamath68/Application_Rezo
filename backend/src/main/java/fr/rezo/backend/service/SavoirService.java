package fr.rezo.backend.service;

import fr.rezo.backend.model.ERole;
import fr.rezo.backend.model.Savoirs;
import fr.rezo.backend.repository.SavoirRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SavoirService {
    private final SavoirRepository savoirRepository;

    public SavoirService(SavoirRepository savoirRepository) {
        this.savoirRepository = savoirRepository;
    }

    public Map<String, Object> getAllSavoirs() {
        System.out.println("----- START | SavoirService : getAll -----");
        Map<String, Object> response = new HashMap<>();
        List<Savoirs> savoirs = savoirRepository.findAll();
        if (savoirs.isEmpty()) {
            response.put("message", "Aucun Savoirs trouvé");
            return response;
        }

        response.put("message", "Request was successful");
        response.put("savoirs", savoirs);
        System.out.println("----- END | SavoirService : getAll -----");
        return response;
    }

    public Map<String, Object> createSavoirs(Savoirs savoirs) {
        System.out.println("----- START | UserService : create -----");
        System.out.println("Args: savoirs=" + savoirs);
        Map<String, Object> response = new HashMap<>();

        Savoirs createdSavoir = new Savoirs();
        createdSavoir.setNom(savoirs.getNom());
        createdSavoir.setRole(ERole.DEMANDES);
        savoirRepository.save(createdSavoir);
        response.put("message", "Savoirs created successfully");
        response.put("savoirs", createdSavoir);
        System.out.println("----- END | SavoirService : create -----");
        return response;
    }

    public Map<String, Object> updateSavoir(Savoirs savoirs) {
        System.out.println("----- START | SavoirService : update -----");
        System.out.println("Args: savoirs=" + savoirs);
        Map<String, Object> response = new HashMap<>();
        Savoirs updatedSavoirs = savoirRepository.findById(savoirs.getId()).orElse(null);
        if (updatedSavoirs == null) {
            response.put("message", "Savoirs not found");
            return response;
        }

        updatedSavoirs.setNom(savoirs.getNom());
        savoirRepository.save(updatedSavoirs);
        response.put("message", "Savoirs updated successfully");
        response.put("savoirs", updatedSavoirs);
        System.out.println("----- END | SavoirService : update -----");
        return response;
    }

    public Map<String, Object> deleteSavoirs(Long id) {
        System.out.println("----- START | SavoirService : delete -----");
        System.out.println("Args: id=" + id);
        Map<String, Object> response = new HashMap<>();
        Savoirs savoirs = savoirRepository.findById(id).orElse(null);
        if (savoirs == null) {
            response.put("message", "Savoirs not found");
            return response;
        }
        savoirRepository.delete(savoirs);
        response.put("message", "Savoirs deleted successfully");
        System.out.println("----- END | SavoirService : delete -----");
        return response;
    }

    //---- GET ----\\

    public Map<String, Object> getOneSavoirById(Long id) {
        System.out.println("----- START | SavoirService : getOneById -----");
        System.out.println("Args: savoir id=" + id);
        Map<String, Object> response = new HashMap<>();
        Savoirs savoirs = savoirRepository.findById(id).orElse(null);
        if (savoirs == null) {
            response.put("message", "Savoirs not found");
            return response;
        }

        response.put("message", "Request was successful");
        response.put("savoirs", savoirs);
        System.out.println("----- END | SavoirService : getOneById -----");
        return response;
    }

    public Map<String, Object> getOneUserByName(String name) {
        System.out.println("----- START | SavoirService : getOneSavoirByName -----");
        System.out.println("Args: savoirs name=" + name);
        Map<String, Object> response = new HashMap<>();
        Savoirs savoirs = savoirRepository.findByNomIgnoreCase(name).orElse(null);
        if (savoirs == null) {
            response.put("message", "No users found for this username");
            return response;
        }

        response.put("message", "Request was successful");
        response.put("savoirs", savoirs);
        System.out.println("----- END | SavoirService : findByNomIgnoreCase -----");
        return response;
    }

}
