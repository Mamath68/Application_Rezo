package fr.rezo.rezo_backend.controller;

import fr.rezo.rezo_backend.model.Articles;
import fr.rezo.rezo_backend.repository.ArticlesRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/web/articles")
public class ArticlesControllerWeb {
    private final ArticlesRepository articlesRepository;

    public ArticlesControllerWeb(ArticlesRepository articlesRepository) {
        this.articlesRepository = articlesRepository;
    }

    @GetMapping
    public String getArticles(Model model) {
        List<Articles> articles = articlesRepository.findAll();
        model.addAttribute("articles", articles);
        return "Articles/index";
    }
}
