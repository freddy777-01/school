package com.school.school_ems.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
@SecondaryTable(name = "students")
@SecondaryTable(name = "teachers")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;

    // @OneToOne(mappedBy = "user")
    // private Student student;
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", table = "students")
    private Student student;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", table = "teachers")
    private Teacher teacher;
}
