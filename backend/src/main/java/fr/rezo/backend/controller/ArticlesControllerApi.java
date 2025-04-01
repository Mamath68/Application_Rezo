package fr.rezo.backend.controller;

import fr.rezo.backend.model.Articles;
import fr.rezo.backend.repository.ArticlesRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class ArticlesControllerApi {

    private final ArticlesRepository articlesRepository;

    public ArticlesControllerApi(ArticlesRepository articlesRepository) {
        this.articlesRepository = articlesRepository;
    }

    // De l'autre côté
    @GetMapping("/articles")
    public List<Articles> getArticles() {
        return this.articlesRepository.findAll();
    }

    @GetMapping("/article/{id}")
    public Optional<Articles> getArticlesById(@PathVariable Long id) {
        return articlesRepository.findById(id);
    }

    // De l'autre côté
    @PostMapping("/articles")
    public ResponseEntity<Articles> addArticles(@RequestBody Articles articles) {
        try {
            Articles saveArticles = articlesRepository.save(articles);
            return new ResponseEntity<>(saveArticles, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/article/{id}")
    public ResponseEntity<Articles> updateArticles(@PathVariable Long id, @RequestBody Articles articles) {
        try {
            Optional<Articles> existingArticles = articlesRepository.findById(id);
            if (existingArticles.isPresent()) {
                Articles updatedArticles = existingArticles.get();
                updatedArticles.setTitle(articles.getTitle());
                updatedArticles.setDescription(articles.getContent());
                updatedArticles.setImage(articles.getImage());
                updatedArticles.setLien(articles.getLien());
                updatedArticles.setContent(articles.getContent());
                updatedArticles.setAuthor(articles.getAuthor());
                updatedArticles.setUpdated_date(articles.getUpdated_date());
                Articles saveArticles = articlesRepository.save(updatedArticles);
                return new ResponseEntity<>(saveArticles, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/article/{id}")
    public ResponseEntity<Void> deleteArticles(@PathVariable Long id) {
        System.out.println("back delete article");
        try {
            System.out.println("back delete article - OK");
            if (articlesRepository.existsById(id)) {
                System.out.println("back delete article - OK - ARTICLE EXISTE");
                articlesRepository.deleteById(id);
                System.out.println("ResponseEntity<>(HttpStatus.NO_CONTENT);");
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                System.out.println("back delete article - OK - ARTICLE EXISTE PAS");
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            System.out.println("back delete article - ERREUR");
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
