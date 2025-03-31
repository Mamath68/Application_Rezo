package fr.rezo.backend.controller;

import fr.rezo.backend.model.Articles;
import fr.rezo.backend.repository.ArticlesRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/web")
public class ArticlesControllerWeb {
    private final ArticlesRepository articlesRepository;

    public ArticlesControllerWeb(ArticlesRepository articlesRepository) {
        this.articlesRepository = articlesRepository;
    }

    @GetMapping("/articles")
    public String getArticles(Model model) {
        List<Articles> articles = articlesRepository.findAll();
        model.addAttribute("articles", articles);
        model.addAttribute("pageTitle", "Liste des Articles"); // Titre de la page
        return "Articles/index";
    }

    @GetMapping("/article/{id}")
    public String getArticlesById(@PathVariable Long id, Model model) {
        Optional<Articles> article = articlesRepository.findById(id);
        if (article.isPresent()) {
            model.addAttribute("article", article.get());
            model.addAttribute("pageTitle", article.get().getTitle());
        } else {
            model.addAttribute("pageTitle", "Erreur 404");
            return "error";
        }

        return "Articles/show";
    }
}
