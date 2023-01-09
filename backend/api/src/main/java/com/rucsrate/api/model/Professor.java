package com.rucsrate.api.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("Professor")
public class Professor {
    String Name;
    String Email;
    Double Score;


    public String getName() {
        return Name;
    }

    public void setName(String name) {
        this.Name = name;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        this.Email = email;
    }

    public Double getScore() {
        return Score;
    }

    public void setScore(Double score) {
        this.Score = score;
    }
}
