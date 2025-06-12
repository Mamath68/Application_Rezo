package fr.rezo.backend;

import fr.rezo.backend.model.ERole;
import fr.rezo.backend.model.Permanences;
import fr.rezo.backend.model.Savoirs;
import fr.rezo.backend.model.Users;
import fr.rezo.backend.repository.PermanencesRepository;
import fr.rezo.backend.repository.SavoirRepository;
import fr.rezo.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Configuration
public class CommandLinner {

    private final DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");

    @Bean
    public CommandLineRunner initData(UserRepository userRepo, PermanencesRepository permRepo, SavoirRepository savoirRepo) {
        return _ -> {
            PasswordEncoder encoder = new BCryptPasswordEncoder();

            createUserIfNotExists(userRepo, "administrateur", new Users(
                    "Admin", "User", "administrateur", "mathieu.stamm@gmail.com",
                    "Admmin@68200", "Ils/Elles/Eux", "0102030405"), encoder);

            createUserIfNotExists(userRepo, "test", new Users(
                    "", "", "test", "mamath68200@gmail.com",
                    "Teutin@181166", "Il/Lui", "0203040506"), encoder);

            createPermanencesIfNotExist(permRepo, "88 Briand", "88 avenue Briand", List.of(
                    "2025-06-03", "2025-06-10", "2025-06-17", "2025-06-24"
            ), "14:00:00", "17:00:00", "88", "Elodie", "+33610494003");

            createPermanencesIfNotExist(permRepo, "Collectivité Européenne D'alsace", "61 rue de Pfastatt", List.of(
                    "2025-06-16", "2025-06-30"
            ), "09:00:00", "11:00:00", "cea", "Tina", "+33648137046");

            createPermanencesIfNotExist(permRepo, "CSC Porte du Miroir", "3 rue saint Michel", List.of(
                    "2025-06-05", "2025-06-12", "2025-06-19", "2025-06-26"
            ), "19:00:00", "20:30:00", "miroir", "Sandrine", "+33625853376");

            createPermanencesIfNotExist(permRepo, "CSC Drouot-Barbanègre", "67 rue de Sausheim", List.of(
                    "2025-06-02", "2025-06-09", "2025-06-16", "2025-06-23", "2025-06-30"
            ), "14:30:00", "16:30:00", "boat", "Sandrine", "+33625853376");

            createPermanencesIfNotExist(permRepo, "Maison des Association Bourtzwiller", "62 rue de Soultz", List.of("2025-06-03", "2025-06-10", "2025-06-17", "2025-06-24"), "10:00:00", "12:00:00", "mda", "Sandrine", "+33625853376");

            createPermanencesIfNotExist(permRepo, "Collectif \"Quart lieu\"", "2 rue Jean Grimont", List.of(
                    "2025-06-05", "2025-06-12", "2025-06-19", "2025-06-26"
            ), "09:00:00", "12:00:00", "grimz", "Elodie", "+33610494003");

            createPermanencesIfNotExist(permRepo, "Restos du Coeur", "36 rue Jean Jaurès", List.of(
                    "2025-06-06", "2025-06-13", "2025-06-20", "2025-06-27"
            ), "10:00:00", "12:00:00", "rdc", "Sandrine", "+33625853376");

            createSavoirsIfNotExist(savoirRepo, List.of("Informatique", "Patchwork", "Maquillage", "Tricot", "Couture", "Comptabilité", "Peinture", "Management", "Communication non verbale", "Beat Box", "Patisserie", "Cuisine", "Psychomotricité", "Gestion du Stress", "Echecs", "Création d'auto-entreprise", "Français Langue étrangère", "Français", "Langue Arabe", "Atelier d'écriture", "Français par la poésie", "Boxe", "Comportement Animal", "Crochet", "Bricolage" ,"Cuisine Marocaine", "Cuisine africaine", "Cuisine kabyle", "Plantes", "Art thérapie", "Excel", "Football"), "OFFRE");

            createSavoirsIfNotExist(savoirRepo, List.of("Allemand", "Langue Arabe", "Bricolage", "Dessin", "Anglais", "Informatique", "Mah-jong", "Jardinage", "Couture (Découper un Patron)", "Vidéo", "Confiance en soi", "Cuisine Indienne", "Prendre la parole à l'oral", "Comptabilité", "Crochet", "Chant", "Danse", "Français", "Français Langue étrangère", "Remise à niveau en Mathématique", "Piano", "Site internet", "Tricot"), "DEMANDE");
        };
    }

    private void createUserIfNotExists(UserRepository repo, String username, Users user, PasswordEncoder encoder) {
        if (repo.findByUsername(username).isEmpty()) {
            user.setPassword(encoder.encode(user.getPassword()));
            user.setDateInscription(LocalDate.now().atStartOfDay());
            repo.save(user);
            System.out.printf("✅ Utilisateur %s créé !%n", username);
        } else {
            System.out.printf("ℹ️ L'utilisateur %s existe déjà.%n", username);
        }
    }

    private void createSavoirsIfNotExist(SavoirRepository repo, List<String> noms, String role) {
        ERole enumRole;
        try {
            enumRole = ERole.valueOf(role.toUpperCase());
        } catch (IllegalArgumentException e) {
            System.out.printf("❌ Rôle invalide : %s%n", role);
            return;
        }

        noms.forEach(nom -> {
            Optional<Savoirs> existing = repo.findByNomIgnoreCaseAndRole(nom, enumRole);
            if (existing.isEmpty()) {
                Savoirs savoir = new Savoirs();
                savoir.setNom(nom);
                savoir.setRole(enumRole);
                repo.save(savoir);
                System.out.printf("✅ Savoir %s (%s) créé !%n", nom, role);
            } else {
                System.out.printf("ℹ️ Le savoir %s (%s) existe déjà.%n", nom, role);
            }
        });
    }


    private void createPermanencesIfNotExist(PermanencesRepository repo, String nomLocal, String adresse, List<String> dates, String heureDebut, String heureFin, String shortLocal, String contact, String phoneContact) {
        if (repo.findByNomLocal(nomLocal).isEmpty()) {
            List<Permanences> permanences = dates.stream()
                    .map(date -> new Permanences(
                            adresse,
                            nomLocal,
                            LocalDate.parse(date),
                            LocalTime.parse(heureDebut, timeFormatter),
                            LocalTime.parse(heureFin, timeFormatter),
                            shortLocal,
                            contact,
                            phoneContact
                    )).toList();

            repo.saveAll(permanences);
            System.out.printf("✅ Permanences de %s ajoutées !%n", nomLocal);
        } else {
            System.out.printf("ℹ️ Les permanences de %s existent déjà.%n", nomLocal);
        }
    }
}
