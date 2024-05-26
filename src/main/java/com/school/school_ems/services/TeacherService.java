package com.school.school_ems.services;

import com.school.school_ems.models.Teacher;
import com.school.school_ems.repositories.TeacherRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeacherService {

    @Autowired
   private TeacherRespository teacherRespository;

    public Teacher CreateTeacher(Teacher teacher){
        Teacher t = teacherRespository.save(teacher);
        return t;
    }
}
