package fr.rezo.backend.model;

import jakarta.persistence.*;

@Entity
public class Inscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    @ManyToOne
    @JoinColumn(name = "permanence_id")
    private Permanences permanence;

    // Lien vers Savoir
    @ManyToOne
    @JoinColumn(name = "savoir_id")
    private Savoirs savoir;

    public Long getId() {
        return id;
    }

    public Users getUser() {
        return user;
    }

    public Permanences getPermanence() {
        return permanence;
    }

    public Savoirs getSavoir() {
        return savoir;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setPermanence(Permanences permanence) {
        this.permanence = permanence;
    }

    public void setSavoir(Savoirs savoir) {
        this.savoir = savoir;
    }

    public void setUser(Users user) {
        this.user = user;
    }
}
