package fr.rezo.backend.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;


@Entity
public class Permanences {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "permanence_id", nullable = false)
    private Long id;

    @Column(name = "permanence_debut", nullable = false)
    private LocalDateTime dateDebut;

    @Column(name = "permanence_fin", nullable = false)
    private LocalDateTime dateFin;

    @Column(nullable = false)
    private String address;

    @Column(name = "nom_local")
    private String nomLocal;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(LocalDateTime dateDebut) {
        this.dateDebut = dateDebut;
    }

    public LocalDateTime getDateFin() {
        return dateFin;
    }

    public void setDateFin(LocalDateTime dateFin) {
        this.dateFin = dateFin;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getNomLocal() {
        return nomLocal;
    }

    public void setNomLocal(String nomLocal) {
        this.nomLocal = nomLocal;
    }
}
