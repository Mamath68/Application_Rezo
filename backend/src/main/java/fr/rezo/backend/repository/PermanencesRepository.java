package fr.rezo.backend.repository;

import fr.rezo.backend.model.Permanences;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PermanencesRepository extends JpaRepository<Permanences, Long> {
}
