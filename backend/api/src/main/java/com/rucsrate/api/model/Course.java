package com.rucsrate.api.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("Courses")
public class Course implements Comparable<Course>{
    private String _id;
    private String Department;
    private String code;
    private String name;
    private String prof;
    private int score;
    private String Topics;
    private int Year;
    private String Season;
    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }
    public String getDepartment() {
        return Department;
    }

    public void setDepartment(String department) {
        this.Department = department;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProf() {
        return prof;
    }

    public void setProf(String prof) {
        this.prof = prof;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getTopics() {
        return Topics;
    }

    public void setTopics(String topics) {
        this.Topics = topics;
    }

    public int getYear() {
        return Year;
    }

    public void setYear(int year) {
        this.Year = year;
    }

    public String getSeason() {
        return Season;
    }

    public void setSeason(String season) {
        this.Season = season;
    }

    @Override
    public int compareTo(Course o) {
        return this.code.compareTo(o.code);
    }
}
