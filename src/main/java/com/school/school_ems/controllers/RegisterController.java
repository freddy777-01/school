package com.school.school_ems.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.school.school_ems.forms.RegisterForm;
import com.school.school_ems.models.Teacher;
import com.school.school_ems.models.User;
import com.school.school_ems.services.TeacherService;
import com.school.school_ems.services.UserService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@AllArgsConstructor
@RestController
@RequestMapping("api")
public class RegisterController {

    private UserService userService;
    private TeacherService teacherService;


    @PostMapping("register")
    public ResponseEntity<User> CreateUser(@RequestBody RegisterForm registerForm){
        User user = new User();
        Teacher teacher = new Teacher();

        user.setName(registerForm.getFirstName());
        user.setEmail(registerForm.getEmail());
        user.setPassword(registerForm.getPassword());

        User createdUser = userService.CreateUser(user);

        teacher.setFirstName(registerForm.getFirstName());
        teacher.setLastName(registerForm.getLastName());
        teacher.setUser_id(createdUser.getId());
        Teacher createdTeacher = teacherService.CreateTeacher(teacher);

        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }
    
}
