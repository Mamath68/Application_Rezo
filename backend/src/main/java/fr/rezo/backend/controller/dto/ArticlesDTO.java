package fr.rezo.backend.controller.dto;

import fr.rezo.backend.model.Articles;

import java.time.format.DateTimeFormatter;

public class ArticlesDTO {
    private final Long id;
    private final String title;
    private final String author;
    private final String content;
    private final String image;
    private final String lien;
    private final String description;
    private final String publishedDate; // Formaté
    private final String updatedDate;   // Formaté

    public ArticlesDTO(Articles article) {
        this.id = article.getId();
        this.title = article.getTitle();
        this.author = article.getAuthor();
        this.content = article.getContent();
        this.image = article.getImage();
        this.lien = article.getLien();
        this.description = article.getDescription();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
        this.publishedDate = article.getPublished_date().format(formatter);
        this.updatedDate = article.getUpdated_date().format(formatter);
    }


}
