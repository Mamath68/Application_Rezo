package fr.rezo.back.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;


@Setter
@Getter
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

}
