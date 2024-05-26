package com.school.school_ems.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.school.school_ems.forms.RegisterForm;
import com.school.school_ems.models.Teacher;
import com.school.school_ems.models.User;
import com.school.school_ems.services.TeacherService;
import com.school.school_ems.services.UserService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;



// @AllArgsConstructor
// @CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/user")
public class UserController {
    
    private UserService userService;
    private TeacherService teacherService;
    
    @PostMapping("/create")
    public ResponseEntity<User> CreateUser(@RequestBody RegisterForm registerForm){
        User user = new User();
        Teacher teacher = new Teacher();
        user.setName(registerForm.getFirstName());
        user.setEmail(registerForm.getEmail());
        user.setPassword(registerForm.getPassword());

        User createdUser = userService.CreateUser(user);

        teacher.setFirstName(registerForm.getFirstName());
        teacher.setLastName(registerForm.getLastName());
        teacher.setUser(createdUser);
        Teacher createdTeacher = teacherService.CreateTeacher(teacher);



        return new ResponseEntity<User>(createdUser,HttpStatus.CREATED);
    }
}

