package com.rucsrate.api.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document("Review")
public class Review {
    String id;

    @Field("CourseId")
    String courseId;
    @Field("Preference")
    Double preference;
    @Field("Difficulty")
    Double difficulty;
    @Field("Prof")
    Double prof;
    @Field("Helpfulness")
    Double helpfulness;
    @Field("Content")
    String content;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String course_id) {
        this.courseId = course_id;
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
