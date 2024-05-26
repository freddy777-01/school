package com.school.school_ems.controllers;

import com.school.school_ems.models.Teacher;
import com.school.school_ems.services.TeacherService;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@AllArgsConstructor
@RestController
@RequestMapping("/api/teacher")
public class TeacherController {

    private TeacherService teacherService;

    @CrossOrigin(origins = "http://localhost:5173/api/teacher")
    @PostMapping
    public ResponseEntity<Teacher> createTeacher(@RequestBody Teacher teacher){
        return new ResponseEntity<Teacher>(teacherService.CreateTeacher(teacher),HttpStatus.CREATED);
    }
}
