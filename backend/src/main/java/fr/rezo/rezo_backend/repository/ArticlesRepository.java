package fr.rezo.rezo_backend.repository;

import fr.rezo.rezo_backend.model.Articles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticlesRepository extends JpaRepository<Articles, Long> {
    List<Articles> findByTitle(String title);
}
