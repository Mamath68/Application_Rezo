package fr.rezo.backend.repository;

import fr.rezo.backend.model.Permanences;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PermanencesRepository extends JpaRepository<Permanences, Long> {

    List<Permanences> findByNomLocal(String nomLocal);

    List<Permanences> findAllByOrderByDateAscPermanenceDebut();

}
