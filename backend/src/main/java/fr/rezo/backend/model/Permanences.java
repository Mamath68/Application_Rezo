package fr.rezo.backend.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;


@Entity
public class Permanences {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "permanence_id", nullable = false)
    private Long id;

    @Column(name = "permanence_date", nullable = false)
    private LocalDate date;

    @Column(name = "permanence_debut", nullable = false)
    private LocalTime permanenceDebut;

    @Column(name = "permanence_fin", nullable = false)
    private LocalTime permanenceFin;

    @Column(nullable = false)
    private String address;

    @Column(name = "nom_local")
    private String nomLocal;

    @OneToMany(mappedBy = "permanence")
    private List<Inscription> inscriptions;

    public Permanences() {
    }

    public Permanences(String address, String nomLocal, LocalDate date, LocalTime permanenceDebut, LocalTime permanenceFin) {
        this.address = address;
        this.nomLocal = nomLocal;
        this.date = date;
        this.permanenceDebut = permanenceDebut;
        this.permanenceFin = permanenceFin;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getPermanenceDebut() {
        return permanenceDebut;
    }

    public LocalTime getPermanenceFin() {
        return permanenceFin;
    }

    public List<Inscription> getInscriptions() {
        return inscriptions;
    }

    public void setInscriptions(List<Inscription> inscriptions) {
        this.inscriptions = inscriptions;
    }

    public void setPermanenceDebut(LocalTime permanenceDebut) {
        this.permanenceDebut = permanenceDebut;
    }

    public void setPermanenceFin(LocalTime permanenceFin) {
        this.permanenceFin = permanenceFin;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getNomLocal() {
        return this.nomLocal;
    }

    public void setNomLocal(String nomLocal) {
        this.nomLocal = nomLocal;
    }
}
