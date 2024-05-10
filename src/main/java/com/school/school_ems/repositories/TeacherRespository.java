package com.school.school_ems.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.school.school_ems.models.Teacher;

public interface TeacherRespository extends JpaRepository<Teacher,Long> {
    
}
