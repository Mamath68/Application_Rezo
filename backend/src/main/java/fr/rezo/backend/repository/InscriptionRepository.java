package fr.rezo.backend.repository;

import fr.rezo.backend.model.Inscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InscriptionRepository extends JpaRepository<Inscription, Long> {
}
