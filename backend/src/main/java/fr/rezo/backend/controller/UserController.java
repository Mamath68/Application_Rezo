package fr.rezo.backend.controller;

import fr.rezo.backend.model.Users;
import fr.rezo.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static fr.rezo.backend.controller.ResponseBuilder.buildResponse;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public ResponseEntity<Map<String, Object>> getAllUsers() {
        Map<String, Object> response = userService.getAllUsers();
        return buildResponse(response);
    }

    @PostMapping("/users")
    public ResponseEntity<Map<String, Object>> createUser(@RequestBody Users user) {
        Map<String, Object> response = userService.createUser(user);
        return buildResponse(response);
    }

    @PutMapping("/users")
    public ResponseEntity<Map<String, Object>> updateUser(@RequestBody Users user) {
        Map<String, Object> response = userService.updateUser(user);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<Map<String, Object>> deleteUser(@PathVariable Long id) {
        Map<String, Object> response = userService.deleteUser(id);
        return buildResponse(response);
    }

    //---- GET ----\\

    @GetMapping("/user/id/{id}")
    public ResponseEntity<Map<String, Object>> getOneUserById(@PathVariable Long id) {
        Map<String, Object> response = userService.getOneUserById(id);
        return buildResponse(response);
    }

    @GetMapping("/user/username/{username}")
    public ResponseEntity<Map<String, Object>> getOneUserByUsername(@PathVariable String username) {
        Map<String, Object> response = userService.getOneUserByUsername(username);
        return buildResponse(response);
    }

    //---- AUTHENTICATE ----\\

    @PostMapping("/users/register")
    public ResponseEntity<Map<String, Object>> registerUser(@RequestBody Users user) {
        Map<String, Object> response = userService.registerUser(user);
        return buildResponse(response);
    }

    @PostMapping("/users/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody Users user) {
        Map<String, Object> response = userService.loginUser(user);
        return buildResponse(response);
    }


}
