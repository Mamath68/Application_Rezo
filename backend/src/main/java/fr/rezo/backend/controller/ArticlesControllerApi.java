package fr.rezo.backend.controller;

import fr.rezo.backend.model.Articles;
import fr.rezo.backend.repository.ArticlesRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/articles")
public class ArticlesControllerApi {

    private final ArticlesRepository articlesRepository;

    public ArticlesControllerApi(ArticlesRepository articlesRepository) {
        this.articlesRepository = articlesRepository;
    }

    @GetMapping
    public List<Articles> getArticles() {
        return this.articlesRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Articles> addArticles(@RequestBody Articles articles) {
        try {
            Articles saveArticles = articlesRepository.save(articles);
            return new ResponseEntity<>(saveArticles, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
