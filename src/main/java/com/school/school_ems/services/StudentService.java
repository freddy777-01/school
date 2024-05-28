package com.school.school_ems.services;

import java.util.List;

// import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.school.school_ems.models.Student;
import com.school.school_ems.repositories.StudentRepository;

@Service
public class StudentService {
    
    @Autowired
    private StudentRepository studentRepository;

    public Student CreateStudent(Student student){
        Student s = studentRepository.save(student);
        return s;
    }
    public List<Student> GetStudents(){
        List<Student> students = studentRepository.findAll();
        return students;
    }
}
