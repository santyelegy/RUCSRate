package com.rucsrate.api.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("Review")
public class Review {
    Course course_id;
    Double preference;
    Double difficulty;
    Double prof;
    Double helpfulness;
    String content;
    

    public Course getCourse_id() {
        return course_id;
    }

    public void setCourse_id(Course course_id) {
        this.course_id = course_id;
    }

    public Double getPreference() {
        return preference;
    }

    public void setPreference(Double preference) {
        this.preference = preference;
    }

    public Double getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(Double difficulty) {
        this.difficulty = difficulty;
    }

    public Double getProf() {
        return prof;
    }

    public void setProf(Double prof) {
        this.prof = prof;
    }

    public Double getHelpfulness() {
        return helpfulness;
    }

    public void setHelpfulness(Double helpfulness) {
        this.helpfulness = helpfulness;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
