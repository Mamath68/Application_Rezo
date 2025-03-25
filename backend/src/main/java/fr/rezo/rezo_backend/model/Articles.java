package fr.rezo.rezo_backend.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Articles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;
    @Column
    private String title;
    @Column
    private String author;
    @Column
    private String image;
    private String link;
    private String description;
    @Column(columnDefinition = "TEXT")
    private String content;
    @Column(nullable = false, updatable = false)
    private LocalDateTime published_date;

    @Column(nullable = false)
    private LocalDateTime updated_date;

    @PrePersist
    protected void onCreate() {
        published_date = LocalDateTime.now();
        updated_date = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updated_date = LocalDateTime.now();
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthor() {
        return this.author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getPublished_date() {
        return this.published_date;
    }

    public String getImage() {
        return this.image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public LocalDateTime getUpdated_date() {
        return this.updated_date;
    }

    public void setUpdated_date(LocalDateTime updated_date) {
        this.updated_date = updated_date;
    }

    public String getLink() {
        return this.link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
