package fr.rezo.backend.repository;

import fr.rezo.backend.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    Optional<Users> findOneUserByUsername(String username);

    List<Users> findByUsername(String username);
}
