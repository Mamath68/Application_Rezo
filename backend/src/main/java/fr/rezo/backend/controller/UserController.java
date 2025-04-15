package fr.rezo.backend.controller;

import fr.rezo.backend.model.Users;
import fr.rezo.backend.repository.UserRepository;
import fr.rezo.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public ResponseEntity<Map<String, Object>> getAllUsers() {
        Map<String, Object> response = userService.getAllUsers();
        return buildResponse(response);
    }

    @PostMapping("/user/create")
    public ResponseEntity<Map<String, Object>> createUser(@RequestBody Users user) {
        Map<String, Object> response = userService.createUser(user);
        return buildResponse(response);
    }

    @PutMapping("/user/update")
    public ResponseEntity<Map<String, Object>> updateUser(@RequestBody Users user) {
        Map<String, Object> response = userService.updateUser(user);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/user/delete/id/{id}")
    public ResponseEntity<Map<String, Object>> deleteUser(@PathVariable Long id) {
        Map<String, Object> response = userService.deleteUser(id);
        return buildResponse(response);
    }

    //---- GET ----\\

    @GetMapping("/user/get/id/{id}")
    public ResponseEntity<Map<String, Object>> getOneUserById(@PathVariable Long id) {
        Map<String, Object> response = userService.getOneUserById(id);
        return buildResponse(response);
    }

    @GetMapping("/user/get/username/{username}")
    public ResponseEntity<Map<String, Object>> getOneUserByUsername(@PathVariable String username) {
        Map<String, Object> response = userService.getOneUserByUsername(username);
        return buildResponse(response);
    }

    //---- AUTHENTICATE ----\\

    @PostMapping("/user/register")
    public ResponseEntity<Map<String, Object>> registerUser(@RequestBody Users user) {
        Map<String, Object> response = userService.registerUser(user);
        return buildResponse(response);
    }

    @PostMapping("/user/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody Users user) {
        Map<String, Object> response = userService.loginUser(user);
        return buildResponse(response);
    }

    //---- RESPONSE BUILDER ----\\

    private ResponseEntity<Map<String, Object>> buildResponse(Map<String, Object> response) {
        String message = (String) response.get("message");

        if (message != null && message.toLowerCase().contains("not found")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else if (message != null && message.toLowerCase().contains("already exists")) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        } else if (message != null && message.toLowerCase().contains("no matching")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }

        return ResponseEntity.ok(response);
    }
}
