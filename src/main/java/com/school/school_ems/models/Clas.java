package com.school.school_ems.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Table(name = "classes")
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Clas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToMany(mappedBy = "clas")
    private List<Student> students;

    @ManyToMany
    @JoinTable(
        name = "class_teacher",
        joinColumns = @JoinColumn(name="class_id",referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name="teacher_id",referencedColumnName = "id")
        )
    private List<Teacher> teachers;

}
