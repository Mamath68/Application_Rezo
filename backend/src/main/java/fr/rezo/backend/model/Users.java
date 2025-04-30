package fr.rezo.backend.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.StringJoiner;
import java.util.UUID;

@Entity
@Table(name = "membres")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "membre_id", nullable = false)
    private Long id;

    @Column(name = "membre_prenom")
    private String firstName;
    @Column(name = "membre_nom")
    private String lastName;
    @Column(name = "membre_pseudo", nullable = false, unique = true)
    private String username;
    @Column(name = "membre_telephone", nullable = false, unique = true)
    private String phone;
    @Column(name = "membre_email", nullable = false, unique = true)
    private String email;
    @Column(name = "membre_mdp", nullable = false)
    private String password;
    @Column(name = "membre_inscription", nullable = false, updatable = false, columnDefinition = "DATETIME(0)")
    private LocalDateTime dateInscription;

    @Column(name = "membre_genre", nullable = false)
    private String genre;

    @OneToMany(mappedBy = "user")
    private List<Inscription> inscriptions;

    @Column(name = "user_token")
    private String token;

    public Users() {
    }

    public Users(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public Users(String firstName, String lastName, String username, String email, String password, String genre, String phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.genre = genre;
        this.phone = phone;
    }


    @PrePersist
    protected void onCreate() {
        dateInscription = LocalDateTime.now();
        if (this.token == null || this.token.isEmpty()) {
            this.token = UUID.randomUUID().toString();
        }
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getToken() {
        return this.token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public LocalDateTime getDateInscription() {
        return this.dateInscription;
    }

    public void setDateInscription(LocalDateTime dateInscription) {
        this.dateInscription = dateInscription;
    }

    public List<Inscription> getInscriptions() {
        return this.inscriptions;
    }

    public void setInscriptions(List<Inscription> inscriptions) {
        this.inscriptions = inscriptions;
    }

    public String getGenre() {
        return this.genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", Users.class.getSimpleName() + "[", "]")
                .add("firstName='" + firstName + "'")
                .add("lastName='" + lastName + "'")
                .add("username='" + username + "'")
                .add("email='" + email + "'")
                .add("password='" + password + "'")
                .add("token='" + token + "'")
                .toString();
    }
}
