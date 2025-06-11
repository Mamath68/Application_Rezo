package fr.rezo.backend.repository;

import fr.rezo.backend.model.ERole;
import fr.rezo.backend.model.Savoirs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SavoirRepository extends JpaRepository<Savoirs, Long> {

    List<Savoirs> findByPermanences_IdAndRole(Long permanenceId, ERole role);

    Optional<Savoirs> findByNomIgnoreCaseAndRole(String nom, ERole eRole);
}
