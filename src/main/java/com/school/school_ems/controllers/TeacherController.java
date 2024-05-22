package com.school.school_ems.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/teacher")
public class TeacherController {

    public ResponseEntity<Teacher> creatTeacher(){}
}
