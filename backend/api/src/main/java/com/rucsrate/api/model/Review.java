package com.rucsrate.api.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("Review")
public class Review {
    Course Course_id;
    Double Preference;
    Double Difficulty;
    Double Prof;
    Double Helpfulness;
    String Content;


    public Course getCourse_id() {
        return Course_id;
    }

    public void setCourse_id(Course course_id) {
        this.Course_id = course_id;
    }

    public Double getPreference() {
        return Preference;
    }

    public void setPreference(Double preference) {
        this.Preference = preference;
    }

    public Double getDifficulty() {
        return Difficulty;
    }

    public void setDifficulty(Double difficulty) {
        this.Difficulty = difficulty;
    }

    public Double getProf() {
        return Prof;
    }

    public void setProf(Double prof) {
        this.Prof = prof;
    }

    public Double getHelpfulness() {
        return Helpfulness;
    }

    public void setHelpfulness(Double helpfulness) {
        this.Helpfulness = helpfulness;
    }

    public String getContent() {
        return Content;
    }

    public void setContent(String content) {
        this.Content = content;
    }
}
