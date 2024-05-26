package com.school.school_ems.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.school.school_ems.models.User;
import com.school.school_ems.repositories.UserRepository;

public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User CreateUser(User user) {
        User u = userRepository.save(user);
        return u;
    }

}
