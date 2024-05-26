package com.school.school_ems.models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.Getter;


import java.io.Serializable;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@SecondaryTable(name = "users")
@Entity
@Table(name = "students")
public class Student implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    private String gender;
    @Column(name = "reg_number")
    private String regNumber;

    @ManyToOne
    @JoinColumn(name = "class_id")
    private Clas clas;

    /* @OneToOne
    @JoinColumn(name = "user_id",referencedColumnName ="id",table = "users")
    private User user; */

    @OneToOne(mappedBy = "student")
    private User user;

    @ManyToMany
    @JoinTable(
            name = "student_subject",
            joinColumns = @JoinColumn(name = "student_id",referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "subject_id",referencedColumnName = "id")
    )
    private List<Subject> subjects;
}
