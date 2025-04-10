package fr.rezo.backend.controller;


import fr.rezo.backend.model.Users;
import fr.rezo.backend.service.UserService;
import fr.rezo.backend.utils.Debug;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {

    private final UserService userService;
    private final Debug console = new Debug();

    public UserController(UserService userService) {
        this.userService = userService;
    }

    //---- BASE ----\\

    @GetMapping("/users")
    public ResponseEntity<Map<String, Object>> getAllUsers() {
        Map<String, Object> response = userService.getAllUsers();
        return ResponseEntity.ok(response);
    }

    @PostMapping("/user/create")
    public ResponseEntity<Map<String, Object>> createUser(@RequestBody Users user) {
        Map<String, Object> response = userService.createUser(user);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/user/update")
    public ResponseEntity<Map<String, Object>> updateUser(@RequestBody Users user) {
        Map<String, Object> response = userService.updateUser(user);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/user/delete/id/{id}")
    public ResponseEntity<Map<String, Object>> deleteUser(@PathVariable Long id) {
        Map<String, Object> response = userService.deleteUser(id);
        return ResponseEntity.ok(response);
    }

    //---- GET ----\\

    @GetMapping("/user/get/id/{id}")
    public ResponseEntity<Map<String, Object>> getOneUserById(@PathVariable Long id) {
        Map<String, Object> response = userService.getOneUserById(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/user/get/username/{username}")
    public ResponseEntity<Map<String, Object>> getOneUserByUsername(@PathVariable String username) {
        Map<String, Object> response = userService.getOneUserByUsername(username);
        return ResponseEntity.ok(response);
    }

    //---- AUTHENTICATE ----\\

    @PostMapping("/user/register")
    public ResponseEntity<Map<String, Object>> registerUser(@RequestBody Users user) {
        Map<String, Object> response = userService.registerUser(user);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/user/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody Users user) {
        Map<String, Object> response = userService.loginUser(user);
        return ResponseEntity.ok(response);
    }
}
