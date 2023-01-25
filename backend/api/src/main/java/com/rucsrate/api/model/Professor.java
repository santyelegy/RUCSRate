package com.rucsrate.api.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document("Professor")
public class Professor implements Comparable<Professor>{
    @Field("Name")
    String name;
    String Email;
    Double Score;
    private String _id;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    @Override
    public int compareTo(Professor o) {
        return this.name.compareTo(o.name);
    }
}
