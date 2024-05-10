package com.school.school_ems.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.school.school_ems.models.Student;

public interface StudentRepository extends JpaRepository<Student,Long>{
    
}
