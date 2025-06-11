package fr.rezo.backend.model;

import jakarta.persistence.*;

import java.time.LocalDate;
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

    @ManyToMany
    @JoinTable(
            name = "savoirs_permanences",
            joinColumns = @JoinColumn(name = "permanences_id"),
            inverseJoinColumns = @JoinColumn(name = "savoirs_id")
    )
    private List<Savoirs> savoirs;

    @Column
    private String shortLocal;

    @Column
    private String contact;

    @Column
    private String phoneContact;

    public Permanences() {
    }

    public Permanences(String address, String nomLocal, LocalDate date, LocalTime permanenceDebut, LocalTime permanenceFin, String shortLocal, String contact, String phoneContact) {
        this.address = address;
        this.nomLocal = nomLocal;
        this.date = date;
        this.permanenceDebut = permanenceDebut;
        this.permanenceFin = permanenceFin;
        this.shortLocal = shortLocal;
        this.contact = contact;
        this.phoneContact = phoneContact;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return this.date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getPermanenceDebut() {
        return this.permanenceDebut;
    }

    public void setPermanenceDebut(LocalTime permanenceDebut) {
        this.permanenceDebut = permanenceDebut;
    }

    public LocalTime getPermanenceFin() {
        return this.permanenceFin;
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

    public List<Savoirs> getSavoirs() {
        return this.savoirs;
    }

    public void setSavoirs(List<Savoirs> savoirs) {
        this.savoirs = savoirs;
    }

    public String getShortLocal() {
        return this.shortLocal;
    }

    public void setShortLocal(String shortLocal) {
        this.shortLocal = shortLocal;
    }

    public String getContact() {
        return this.contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getPhoneContact() {
        return this.phoneContact;
    }

    public void setPhoneContact(String phoneContact) {
        this.phoneContact = phoneContact;
    }
}
