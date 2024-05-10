package com.school.school_ems.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "teachers")
@NoArgsConstructor
@AllArgsConstructor
@SecondaryTable(name = "users")
public class Teacher {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String first_name;
    private String last_name;

    @ManyToMany(mappedBy = "teachers")
    private List<Clas> classes;

    @OneToOne
    @JoinColumn(name = "user_id",referencedColumnName = "id",table = "users")
    private User user;
}
