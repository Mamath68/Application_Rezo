package fr.rezo.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "offres_et_demandes")
public class Savoirs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;
    @Enumerated(EnumType.STRING)
    @Column(name = "role_savoir", nullable = false)
    private ERole role;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ERole getRole() {
        return this.role;
    }

    public void setRole(ERole role) {
        this.role = role;
    }
}
