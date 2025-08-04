package fr.rezo.back.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Entity
@Table(name = "offres_et_demandes")
public class Savoirs {
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "savoir_id", nullable = false)
    private Long id;
    @Getter
    @Column(name = "nom_savoir", nullable = false)
    private String nom;
    @Getter
    @Enumerated(EnumType.STRING)
    @Column(name = "role_savoir", nullable = false)
    private ERole role;

    @ManyToMany
    @JoinTable(
            name = "savoirs_permanences",
            joinColumns = @JoinColumn(name = "savoirs_id"),
            inverseJoinColumns = @JoinColumn(name = "permanences_id")
    )
    private List<Permanences> permanences;

    public Savoirs() {
    }

    public Savoirs(String nom, String role) {
        this.nom = nom;
        this.role = ERole.valueOf(role.toUpperCase());
    }

    @JsonIgnore
    public List<Permanences> getPermanences() {
        return this.permanences;
    }

}
