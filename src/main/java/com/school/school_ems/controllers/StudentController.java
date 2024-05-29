package com.school.school_ems.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.school.school_ems.models.Student;
import com.school.school_ems.models.User;
import com.school.school_ems.services.StudentService;
import com.school.school_ems.services.UserService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



@AllArgsConstructor
@RestController
@RequestMapping("api/students")
public class StudentController {

    private UserService userService;
    private StudentService studentService;

    @PostMapping("create")
    public ResponseEntity<Student> CreateStudent(@RequestBody Student student) {
        User user = new User();
        user.setName(student.getFirstName());
        user.setPassword(student.getFirstName());
        User createdUser = userService.CreateUser(user);
        student.setUser_id(createdUser.getId());
        Student createdStudent = studentService.CreateStudent(student);
        return new ResponseEntity<>(createdStudent, HttpStatus.CREATED);
    }

    @GetMapping("all")
    public ResponseEntity<List<Student>> GetStudents(){
        List<Student> students = studentService.GetStudents();
        return ResponseEntity.ok(students);
    }

     @GetMapping("student/{id}")
    public ResponseEntity<Student> GetStudent(@PathVariable("id") Long studentId) {
        Student  student = studentService.GetStudent(studentId);
        return  ResponseEntity.ok(student);
    }
    
}