package fr.rezo.backend.service;

import fr.rezo.backend.model.Users;
import fr.rezo.backend.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Helper pour créer des réponses simples
    private Map<String, Object> response(String key, Object value) {
        Map<String, Object> response = new HashMap<>();
        response.put(key, value);
        return response;
    }

    private Map<String, Object> response(String message, Map<String, Object> data) {
        data.put("message", message);
        return data;
    }

    //---- BASE ----\\

    public Map<String, Object> getAllUsers() {
        System.out.println("----- START | UserService : getAll -----");

        List<Users> users = userRepository.findAll();
        if (users.isEmpty()) {
            return response("message", "No users found");
        }

        Map<String, Object> data = new HashMap<>();
        data.put("users", users);

        System.out.println("----- END | UserService : getAll -----");
        return response("Request was successful", data);
    }

    public Map<String, Object> createUser(Users user) {
        System.out.println("----- START | UserService : create -----");
        System.out.println("Args: user=" + user);

        Optional<Users> existingUser = userRepository.findOneUserByUsername(user.getUsername());
        if (existingUser.isPresent()) {
            return response("message", "Users already exists");
        }

        Users createdUser = new Users();
        createdUser.setFirstName(user.getFirstName());
        createdUser.setLastName(user.getLastName());
        createdUser.setUsername(user.getUsername());
        createdUser.setPhone(user.getPhone());
        createdUser.setEmail(user.getEmail());
        createdUser.setGenre(user.getGenre());
        createdUser.setToken(user.getToken());
        createdUser.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepository.save(createdUser);

        Map<String, Object> data = new HashMap<>();
        data.put("user", createdUser);

        System.out.println("----- END | UserService : create -----");
        return response("Users created successfully", data);
    }

    public Map<String, Object> updateUser(Users user) {
        System.out.println("----- START | UserService : update -----");
        System.out.println("Args: user=" + user);

        Map<String, Object> response = new HashMap<>();

        if (user.getId() == null) {
            response.put("message", "ID ne peut pas être nul");
            return response;
        }

        Users updatedUser = userRepository.findById(user.getId()).orElse(null);
        if (updatedUser == null) {
            response.put("message", "User not found");
            return response;
        }

        updatedUser.setFirstName(user.getFirstName());
        updatedUser.setLastName(user.getLastName());
        updatedUser.setUsername(user.getUsername());
        updatedUser.setEmail(user.getEmail());
        updatedUser.setPhone(user.getPhone());
        updatedUser.setGenre(user.getGenre());
        updatedUser.setToken(user.getToken());
        updatedUser.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(updatedUser);

        response.put("message", "User updated successfully");
        response.put("user", updatedUser);

        System.out.println("----- END | UserService : update -----");
        return response;
    }

    public Map<String, Object> deleteUser(Long id) {
        System.out.println("----- START | UserService : delete -----");
        System.out.println("Args: id=" + id);

        Users user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return response("message", "Users not found");
        }

        userRepository.delete(user);

        System.out.println("----- END | UserService : delete -----");
        return response("message", "Users deleted successfully");
    }

    //---- GET ----\\

    public Map<String, Object> getOneUserById(Long id) {
        System.out.println("----- START | UserService : getOneById -----");
        System.out.println("Args: user id=" + id);

        Users user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return response("message", "Users not found");
        }

        Map<String, Object> data = new HashMap<>();
        data.put("user", user);

        System.out.println("----- END | UserService : getOneById -----");
        return response("Request was successful", data);
    }

    public Map<String, Object> getOneUserByUsername(String username) {
        System.out.println("----- START | UserService : getOneUserByUsername -----");
        System.out.println("Args: user username=" + username);

        Users user = userRepository.findOneUserByUsername(username).orElse(null);
        if (user == null) {
            return response("message", "No users found for this username");
        }

        Map<String, Object> data = new HashMap<>();
        data.put("user", user);

        System.out.println("----- END | UserService : getOneUserByUsername -----");
        return response("Request was successful", data);
    }

    //---- AUTHENTICATE ----\\

    public Map<String, Object> registerUser(Users user) {
        System.out.println("----- START | UserService : registerUser -----");
        System.out.println("Args: user=" + user);

        Map<String, Object> response = this.createUser(user);

        System.out.println("----- END | UserService : registerUser -----");
        return response;
    }

    public Map<String, Object> loginUser(Users user) {
        System.out.println("----- START | UserService : loginUser -----");
        System.out.println("Args: user=" + user);

        Optional<Users> existingUser = userRepository.findOneUserByUsername(user.getUsername());
        if (existingUser.isEmpty() || !passwordEncoder.matches(user.getPassword(), existingUser.get().getPassword())) {
            return response("message", "No matching user");
        }

        Map<String, Object> data = new HashMap<>();
        data.put("user", existingUser.get());

        System.out.println("----- END | UserService : loginUser -----");
        return response("Login successful", data);
    }
}
