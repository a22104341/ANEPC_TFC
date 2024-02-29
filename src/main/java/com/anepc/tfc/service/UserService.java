package com.anepc.tfc.service;

import com.anepc.tfc.entity.User;
import com.anepc.tfc.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User saveUser(User user) {
        // Encode password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public boolean authenticateUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            // Use password encoder to check if the provided password matches the encoded password in the database
            return passwordEncoder.matches(password, user.getPassword());
        }
        return false;
    }
}
