package com.school.school_ems.security;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;

@Configuration
public class SchoolEmsSecurityConfig {

    //add support for jdbc authenticaation scheme

    @Bean
    public UserDetailsManager userDetailsManager(DataSource dataSource){
        JdbcUserDetailsManager jdbcUserDetailsManager = new JdbcUserDetailsManager(dataSource);

          //define query to retireve user by username
          jdbcUserDetailsManager.setUsersByUsernameQuery(
            "select email, password from users where email = ?"
          );

          //to define query to fetch roles use setAuthoritiesByUserNameQuery method of jdbcUserDetailsManager

        return jdbcUserDetailsManager;
    }
}
