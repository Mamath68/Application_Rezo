package fr.rezo.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "offres_et_demandes")
public class Savoirs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "savoir_id", nullable = false)
    private Long id;
    @Column(name = "nom_savoir", nullable = false)
    private String nom;
    @Enumerated(EnumType.STRING)
    @Column(name = "role_savoir", nullable = false)
    private ERole role;

    public Savoirs() {
    }

    public Savoirs(String nom, String role) {
        this.nom = nom;
        this.role = ERole.valueOf(role.toUpperCase());
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public ERole getRole() {
        return this.role;
    }

    public void setRole(ERole role) {
        this.role = role;
    }
}
