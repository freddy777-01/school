package com.school.school_ems.forms;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Setter
@Getter
public class RegisterForm {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
}
