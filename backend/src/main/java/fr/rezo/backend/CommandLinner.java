package fr.rezo.backend;

import fr.rezo.backend.model.Permanences;
import fr.rezo.backend.model.Users;
import fr.rezo.backend.repository.PermanencesRepository;
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

@Configuration
public class CommandLinner {

    private final DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");

    @Bean
    public CommandLineRunner initData(UserRepository userRepo, PermanencesRepository permRepo) {
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
            ), "14:00:00", "17:00:00", "briand");

            createPermanencesIfNotExist(permRepo, "Collectivité Européenne D'alsace", "61 rue de Pfastatt", List.of(
                    "2025-06-16", "2025-06-30"
            ), "09:00:00", "11:00:00", "cea");

            createPermanencesIfNotExist(permRepo, "CSC Porte du Miroir", "3 rue saint Michel", List.of(
                    "2025-06-05", "2025-06-12", "2025-06-19", "2025-06-26"
            ), "19:00:00", "20:30:00", "miroir");

            createPermanencesIfNotExist(permRepo, "CSC Drouot-Barbanègre", "67 rue de Sausheim", List.of(
                    "2025-06-02", "2025-06-09", "2025-06-16", "2025-06-23", "2025-06-30"
            ), "14:30:00", "16:30:00", "boat");

            createPermanencesIfNotExist(permRepo, "Maison des Association Bourtzwiller", "62 rue de Soultz", List.of(
                    "2025-06-03", "2025-06-06", "2025-06-10", "2025-06-13",
                    "2025-06-17", "2025-06-20", "2025-06-24", "2025-06-27"
            ), "10:00:00", "12:00:00", "mda");

            createPermanencesIfNotExist(permRepo, "Collectif \"Quart lieu\"", "2 rue Jean Grimont", List.of(
                    "2025-06-05", "2025-06-12", "2025-06-19",  "2025-06-26"
            ), "09:00:00", "12:00:00", "grimz");

            createPermanencesIfNotExist(permRepo, "Restos du Coeur", "36 rue Jean Jaurès", List.of(
                    "2025-06-06", "2025-06-13", "2025-06-20", "2025-06-27"
            ), "10:00:00", "12:00:00", "rdc");

            createPermanencesIfNotExist(permRepo, "CSC Lavoisier-Brustlein", "51 allée Glück", List.of(
                    "2025-06-20"
            ), "10:00:00", "12:00:00", "lavoisier");

            createPermanencesIfNotExist(permRepo, "Bibliothèque de Dornach", "3 rue de Thann", List.of(
                    "2025-06-04", "2025-06-11", "2025-06-18", "2025-06-25"
            ), "14:00:00", "15:00:00", "bibdornach");
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

    private void createPermanencesIfNotExist(PermanencesRepository repo, String nomLocal, String adresse, List<String> dates, String heureDebut, String heureFin, String shortLocal) {
        if (repo.findByNomLocal(nomLocal).isEmpty()) {
            List<Permanences> permanences = dates.stream()
                    .map(date -> new Permanences(
                            adresse,
                            nomLocal,
                            LocalDate.parse(date),
                            LocalTime.parse(heureDebut, timeFormatter),
                            LocalTime.parse(heureFin, timeFormatter),
                            shortLocal
                    )).toList();

            repo.saveAll(permanences);
            System.out.printf("✅ Permanences de %s ajoutées !%n", nomLocal);
        } else {
            System.out.printf("ℹ️ Les permanences de %s existent déjà.%n", nomLocal);
        }
    }
}
