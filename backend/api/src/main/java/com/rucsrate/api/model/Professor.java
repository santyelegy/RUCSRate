package com.rucsrate.api.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("Professor")
public class Professor {
    String name;
    String email;
    Double score;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }
}
