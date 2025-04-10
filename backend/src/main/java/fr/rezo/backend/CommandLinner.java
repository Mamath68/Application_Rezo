package fr.rezo.backend;

import fr.rezo.backend.model.Users;
import fr.rezo.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;

@Configuration
public class CommandLinner {

    @Bean
    public CommandLineRunner initData(UserRepository userRepository) {
        final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        return args -> {

            // 🔹 Création de l'utilisateur admin si non existant
            if (userRepository.findByUsername("admin").isEmpty()) {
                Users adminUser = new Users(
                        "Admin",
                        "User",
                        "admin",
                        "admin@example.com",
                        "1234",
                        "",
                        "0669142804"
                );
                adminUser.setPassword(passwordEncoder.encode(adminUser.getPassword()));
                adminUser.setDateInscription(LocalDateTime.now());
                userRepository.save(adminUser);
                System.out.println("✅ Utilisateur admin créé !");
            } else {
                System.out.println("ℹ️ L'utilisateur admin existe déjà.");
            }

            System.out.println("🎉 Données initialisées !");
        };
    }
}
