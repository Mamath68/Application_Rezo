package fr.rezo.backend.repository;

import fr.rezo.backend.model.Savoirs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SavoirRepository extends JpaRepository<Savoirs, Long> {

    Optional<Savoirs> findByNomIgnoreCase(String nom);
}
