package fr.rezo.backend.repository;

import fr.rezo.backend.model.Permanences;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface PermanencesRepository extends JpaRepository<Permanences, Long> {

    Permanences findByDateDebut(LocalDateTime dateDebut);

    List<Permanences> findByNomLocal(String nomLocal);
}
