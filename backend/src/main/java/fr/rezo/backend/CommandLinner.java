package fr.rezo.backend;

import fr.rezo.backend.model.Permanences;
import fr.rezo.backend.model.Users;
import fr.rezo.backend.repository.PermanencesRepository;
import fr.rezo.backend.repository.SavoirRepository;
import fr.rezo.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Configuration
public class CommandLinner {

    @Bean
    public CommandLineRunner initData(
            UserRepository userRepository,
            PermanencesRepository permanencesRepository,
            SavoirRepository savoirRepository) {

        final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        return args -> {

            // 🔹 Création de l'utilisateur admin si non existant
            if (userRepository.findByUsername("administrateur").isEmpty()) {
                Users adminUser = new Users(
                        "Mathieu",
                        "Stamm",
                        "administrateur",
                        "mathieu.stamm@gmail.com",
                        "Teutin@181166",
                        "+33669142804"
                );
                adminUser.setPassword(passwordEncoder.encode(adminUser.getPassword()));
                adminUser.setDateInscription(LocalDateTime.now());
                userRepository.save(adminUser);
                System.out.println("✅ Utilisateur administrateur créé !");
            } else {
                System.out.println("ℹ️ L'utilisateur administrateur existe déjà.");
            }

            if (permanencesRepository.findByNomLocal("88 Briand").isEmpty()) {
                List<Permanences> briand = List.of(
                        new Permanences(
                                "88 avenue Briand",
                                "88 Briand",
                                LocalDateTime.parse("2025-04-01 14:00:00", formatter),
                                LocalDateTime.parse("2025-04-01 17:00:00", formatter)
                        ),
                        new Permanences(
                                "88 avenue Briand",
                                "88 Briand",
                                LocalDateTime.parse("2025-04-08 14:00:00", formatter),
                                LocalDateTime.parse("2025-04-08 17:00:00", formatter)
                        ),
                        new Permanences(
                                "88 avenue Briand",
                                "88 Briand",
                                LocalDateTime.parse("2025-04-15 14:00:00", formatter),
                                LocalDateTime.parse("2025-04-15 17:00:00", formatter)
                        ),
                        new Permanences(
                                "88 avenue Briand",
                                "88 Briand",
                                LocalDateTime.parse("2025-04-22 14:00:00", formatter),
                                LocalDateTime.parse("2025-04-22 17:00:00", formatter)
                        ),
                        new Permanences(
                                "88 avenue Briand",
                                "88 Briand",
                                LocalDateTime.parse("2025-04-29 14:00:00", formatter),
                                LocalDateTime.parse("2025-04-29 17:00:00", formatter)
                        )

                );

                permanencesRepository.saveAll(briand);
                System.out.println("✅ Permanences du 88 AJouté !");
            } else {
                System.out.println("ℹ️ Les Permanences du 88 existent déjà.");
            }

            if (permanencesRepository.findByNomLocal("Collectivité Européenne D'alsace").isEmpty()) {
                List<Permanences> cea = List.of(
                        new Permanences(
                                "61 rue de Pfastatt",
                                "Collectivité Européenne D'alsace",
                                LocalDateTime.parse("2025-04-07 09:00:00", formatter),
                                LocalDateTime.parse("2025-04-07 11:00:00", formatter)
                        ),
                        new Permanences(
                                "61 rue de Pfastatt",
                                "Collectivité Européenne D'alsace",
                                LocalDateTime.parse("2025-04-28 09:00:00", formatter),
                                LocalDateTime.parse("2025-04-28 11:00:00", formatter)
                        )
                );

                permanencesRepository.saveAll(cea);
                System.out.println("✅ Permanences de la CEA AJouté !");
            } else {
                System.out.println("ℹ️ Les Permanences de la CEA existent déjà.");
            }

            if (permanencesRepository.findByNomLocal("CSC Drouot Barbanègre").isEmpty()) {
                List<Permanences> CSCDB = List.of(
                        new Permanences(
                                "67 rue de Sausheim",
                                "CSC Drouot Barbanègre",
                                LocalDateTime.parse("2025-04-28 14:30:00", formatter),
                                LocalDateTime.parse("2025-04-28 16:30:00", formatter)
                        )
                );

                permanencesRepository.saveAll(CSCDB);
                System.out.println("✅ Permanences du CSC Drouot Barbanègre AJouté !");
            } else {
                System.out.println("ℹ️ Les Permanences du CSC Drouot Barbanègre existent déjà.");
            }

            if (permanencesRepository.findByNomLocal("Maison des Association Bourtzwiller").isEmpty()) {
                List<Permanences> mda = List.of(
                        new Permanences(
                                "62 rue de Soultz",
                                "Maison des Association Bourtzwiller",
                                LocalDateTime.parse("2025-04-01 10:00:00", formatter),
                                LocalDateTime.parse("2025-04-01 12:00:00", formatter)
                        ),
                        new Permanences(
                                "62 rue de Soultz",
                                "Maison des Association Bourtzwiller",
                                LocalDateTime.parse("2025-04-08 10:00:00", formatter),
                                LocalDateTime.parse("2025-04-08 12:00:00", formatter)
                        ),
                        new Permanences(
                                "62 rue de Soultz",
                                "Maison des Association Bourtzwiller",
                                LocalDateTime.parse("2025-04-15 10:00:00", formatter),
                                LocalDateTime.parse("2025-04-15 12:00:00", formatter)
                        ),
                        new Permanences(
                                "62 rue de Soultz",
                                "Maison des Association Bourtzwiller",
                                LocalDateTime.parse("2025-04-22 10:00:00", formatter),
                                LocalDateTime.parse("2025-04-22 12:00:00", formatter)
                        ),
                        new Permanences(
                                "62 rue de Soultz",
                                "Maison des Association Bourtzwiller",
                                LocalDateTime.parse("2025-04-29 10:00:00", formatter),
                                LocalDateTime.parse("2025-04-29 12:00:00", formatter)
                        ),
                        new Permanences(
                                "62 rue de Soultz",
                                "Maison des Association Bourtzwiller",
                                LocalDateTime.parse("2025-04-04 10:00:00", formatter),
                                LocalDateTime.parse("2025-04-04 12:00:00", formatter)
                        ),
                        new Permanences(
                                "62 rue de Soultz",
                                "Maison des Association Bourtzwiller",
                                LocalDateTime.parse("2025-04-18 10:00:00", formatter),
                                LocalDateTime.parse("2025-04-18 12:00:00", formatter)
                        ),
                        new Permanences(
                                "62 rue de Soultz",
                                "Maison des Association Bourtzwiller",
                                LocalDateTime.parse("2025-04-25 10:00:00", formatter),
                                LocalDateTime.parse("2025-04-25 12:00:00", formatter)
                        )

                );

                permanencesRepository.saveAll(mda);
                System.out.println("✅ Permanences de la Maison des Association de Bourtzwiller AJouté !");
            } else {
                System.out.println("ℹ️ Les Permanences la Maison des Association de Bourtzwiller existent déjà.");
            }

            if (permanencesRepository.findByNomLocal("Bibliothèque de Dornach").isEmpty()) {
                List<Permanences> bibDornach = List.of(
                        new Permanences(
                                "3 rue de Thann",
                                "Bibliothèque de Dornach",
                                LocalDateTime.parse("2025-04-02 14:00:00", formatter),
                                LocalDateTime.parse("2025-04-02 15:00:00", formatter)
                        ),
                        new Permanences(
                                "3 rue de Thann",
                                "Bibliothèque de Dornach",
                                LocalDateTime.parse("2025-04-09 14:00:00", formatter),
                                LocalDateTime.parse("2025-04-09 15:00:00", formatter)
                        ),
                        new Permanences(
                                "3 rue de Thann",
                                "Bibliothèque de Dornach",
                                LocalDateTime.parse("2025-04-16 14:00:00", formatter),
                                LocalDateTime.parse("2025-04-16 15:00:00", formatter)
                        ),
                        new Permanences(
                                "3 rue de Thann",
                                "Bibliothèque de Dornach",
                                LocalDateTime.parse("2025-04-23 14:00:00", formatter),
                                LocalDateTime.parse("2025-04-23 15:00:00", formatter)
                        ),
                        new Permanences(
                                "3 rue de Thann",
                                "Bibliothèque de Dornach",
                                LocalDateTime.parse("2025-04-30 14:00:00", formatter),
                                LocalDateTime.parse("2025-04-30 15:00:00", formatter)
                        )

                );

                permanencesRepository.saveAll(bibDornach);
                System.out.println("✅ Permanences de la Bibliothèque de Dornach AJouté !");
            } else {
                System.out.println("ℹ️ Les Permanences de la Bibliothèque de Dornach existent déjà.");
            }

            if (permanencesRepository.findByNomLocal("CSC Porte du Miroir").isEmpty()) {
                List<Permanences> miroir = List.of(
                        new Permanences(
                                "3 rue saint-Michel",
                                "CSC Porte du Miroir",
                                LocalDateTime.parse("2025-04-03 19:00:00", formatter),
                                LocalDateTime.parse("2025-04-03 20:30:00", formatter)
                        ),
                        new Permanences(
                                "3 rue saint-Michel",
                                "CSC Porte du Miroir",
                                LocalDateTime.parse("2025-04-24 19:00:00", formatter),
                                LocalDateTime.parse("2025-04-24 20:30:00", formatter)
                        )

                );

                permanencesRepository.saveAll(miroir);
                System.out.println("✅ Permanences du CSC Porte Miroir AJouté !");
            } else {
                System.out.println("ℹ️ Les Permanences du CSC Porte Miroir existent déjà.");
            }

            if (permanencesRepository.findByNomLocal("Collectif \"Quart lieu\"").isEmpty()) {
                List<Permanences> grimont = List.of(
                        new Permanences(
                                "2 rue Jean Grimont",
                                "Collectif \"Quart lieu\"",
                                LocalDateTime.parse("2025-04-03 09:00:00", formatter),
                                LocalDateTime.parse("2025-04-03 12:00:00", formatter)
                        ),
                        new Permanences(
                                "2 rue Jean Grimont",
                                "Collectif \"Quart lieu\"",
                                LocalDateTime.parse("2025-04-10 09:00:00", formatter),
                                LocalDateTime.parse("2025-04-10 12:00:00", formatter)
                        ),
                        new Permanences(
                                "2 rue Jean Grimont",
                                "Collectif \"Quart lieu\"",
                                LocalDateTime.parse("2025-04-17 09:00:00", formatter),
                                LocalDateTime.parse("2025-04-17 12:00:00", formatter)
                        ),
                        new Permanences(
                                "2 rue Jean Grimont",
                                "Collectif \"Quart lieu\"",
                                LocalDateTime.parse("2025-04-24 09:00:00", formatter),
                                LocalDateTime.parse("2025-04-24 12:00:00", formatter)
                        )
                );

                permanencesRepository.saveAll(grimont);
                System.out.println("✅ Permanences du 88 AJouté !");
            } else {
                System.out.println("ℹ️ Les Permanences du collectif \"Quart lieu\" existent déjà.");
            }

            if (permanencesRepository.findByNomLocal("Restos du coeur").isEmpty()) {
                List<Permanences> restoCoeur = List.of(
                        new Permanences(
                                "36 rue Jean Jaurès",
                                "Restos du coeur",
                                LocalDateTime.parse("2025-04-04 10:00:00", formatter),
                                LocalDateTime.parse("2025-04-04 12:00:00", formatter)
                        ),
                        new Permanences(
                                "36 rue Jean Jaurès",
                                "Restos du coeur",
                                LocalDateTime.parse("2025-04-18 10:00:00", formatter),
                                LocalDateTime.parse("2025-04-18 12:00:00", formatter)
                        ),
                        new Permanences(
                                "36 rue Jean Jaurès",
                                "Restos du coeur",
                                LocalDateTime.parse("2025-04-25 10:00:00", formatter),
                                LocalDateTime.parse("2025-04-25 12:00:00", formatter)
                        )

                );

                permanencesRepository.saveAll(restoCoeur);
                System.out.println("✅ Permanences des Restos du coeur AJouté !");
            } else {
                System.out.println("ℹ️ Les Permanences des Restos du coeur existent déjà.");
            }

            if (permanencesRepository.findByNomLocal("CSC Lavoisier-Brustlein").isEmpty()) {
                List<Permanences> lavoisier = List.of(
                        new Permanences(
                                "51 allée Glück",
                                "CSC Lavoisier-Brustlein",
                                LocalDateTime.parse("2025-04-11 10:00:00", formatter),
                                LocalDateTime.parse("2025-04-11 12:00:00", formatter)
                        )
                );

                permanencesRepository.saveAll(lavoisier);
                System.out.println("✅ Permanences du CSC Lavoisier-Brustlein AJouté !");
            } else {
                System.out.println("ℹ️ Les Permanences du CSC Lavoisier-Brustlein existent déjà.");
            }

            System.out.println("🎉 Données initialisées !");
        };
    }
}
