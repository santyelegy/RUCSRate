package com.rucsrate.api.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document("Review")
public class Review {
    String id;

    @Field("CourseId")
    String courseId;
    Double Preference;
    Double Difficulty;
    Double Prof;
    Double Helpfulness;
    String Content;

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
