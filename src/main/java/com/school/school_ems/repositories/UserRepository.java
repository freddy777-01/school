package com.school.school_ems.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.school.school_ems.models.User;

public interface UserRepository extends JpaRepository<User,Long>{

    
}  
