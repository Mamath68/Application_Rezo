package fr.rezo.backend.service;

import fr.rezo.backend.model.Users;
import fr.rezo.backend.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //---- BASE ----\\

    public Map<String, Object> getAllUsers() {
        System.out.println("----- START | UserService : getAll -----");
        Map<String, Object> response = new HashMap<>();
        List<Users> users = userRepository.findAll();
        if (users.isEmpty()) {
            response.put("message", "No users found");
            return response;
        }

        response.put("message", "Request was successful");
        response.put("users", users);
        System.out.println("----- END | UserService : getAll -----");
        return response;
    }

    public Map<String, Object> createUser(Users user) {
        System.out.println("----- START | UserService : create -----");
        System.out.println("Args: user=" + user);
        Map<String, Object> response = new HashMap<>();
        Users existingUser = userRepository.findOneUserByUsername(user.getUsername()).orElse(null);
        if (existingUser != null) {
            response.put("message", "Users already exists");
            return response;
        }

        Users createdUser = new Users();
        createdUser.setFirstName(user.getFirstName());
        createdUser.setLastName(user.getLastName());
        createdUser.setUsername(user.getUsername());
        createdUser.setPhone(user.getPhone());
        createdUser.setEmail(user.getEmail());
        createdUser.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(createdUser);
        response.put("message", "Users created successfully");
        response.put("user", createdUser);
        System.out.println("----- END | UserService : create -----");
        return response;
    }

    public Map<String, Object> updateUser(Users user) {
        System.out.println("----- START | UserService : update -----");
        System.out.println("Args: user=" + user);
        Map<String, Object> response = new HashMap<>();
        Users updatedUser = userRepository.findById(user.getId()).orElse(null);
        if (updatedUser == null) {
            response.put("message", "Users not found");
            return response;
        }

        updatedUser.setFirstName(user.getFirstName());
        updatedUser.setLastName(user.getLastName());
        updatedUser.setUsername(user.getUsername());
        updatedUser.setEmail(user.getEmail());
        updatedUser.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(updatedUser);
        response.put("message", "Users updated successfully");
        response.put("user", updatedUser);
        System.out.println("----- END | UserService : update -----");
        return response;
    }

    public Map<String, Object> deleteUser(Long id) {
        System.out.println("----- START | UserService : delete -----");
        System.out.println("Args: id=" + id);
        Map<String, Object> response = new HashMap<>();
        Users user = userRepository.findById(id).orElse(null);
        if (user == null) {
            response.put("message", "Users not found");
            return response;
        }
        userRepository.delete(user);
        response.put("message", "Users deleted successfully");
        System.out.println("----- END | UserService : delete -----");
        return response;
    }

    //---- GET ----\\

    public Map<String, Object> getOneUserById(Long id) {
        System.out.println("----- START | UserService : getOneById -----");
        System.out.println("Args: user id=" + id);
        Map<String, Object> response = new HashMap<>();
        Users user = userRepository.findById(id).orElse(null);
        if (user == null) {
            response.put("message", "Users not found");
            return response;
        }

        response.put("message", "Request was successful");
        response.put("user", user);
        System.out.println("----- END | UserService : getOneById -----");
        return response;
    }

    public Map<String, Object> getOneUserByUsername(String username) {
        System.out.println("----- START | UserService : getOneUserByUsername -----");
        System.out.println("Args: user username=" + username);
        Map<String, Object> response = new HashMap<>();
        Users user = userRepository.findOneUserByUsername(username).orElse(null);
        if (user == null) {
            response.put("message", "No users found for this username");
            return response;
        }

        response.put("message", "Request was successful");
        response.put("user", user);
        System.out.println("----- END | UserService : getOneById -----");
        return response;
    }

    //---- AUTHENTICATE ----\\

    public Map<String, Object> registerUser(Users user) {
        System.out.println("----- START | UserService : registerUser -----");
        System.out.println("Args: user=" + user);
        Map<String, Object> response = this.createUser(user);
        System.out.println("----- END | UserService : register -----");
        return response;
    }

    public Map<String, Object> loginUser(Users user) {
        System.out.println("----- START | UserService : loginUser -----");
        System.out.println("Args: user=" + user);
        Map<String, Object> response = new HashMap<>();
        Optional<Users> existingUser = userRepository.findOneUserByUsername(user.getUsername());
        if (existingUser.isEmpty() || !passwordEncoder.matches(user.getPassword(), existingUser.get().getPassword())) {
            response.put("message", "No matching user");
            return response;
        }
        response.put("message", "Login successful");
        response.put("user", existingUser);
        System.out.println("----- END | UserService : loginUser -----");
        return response;
    }

}
