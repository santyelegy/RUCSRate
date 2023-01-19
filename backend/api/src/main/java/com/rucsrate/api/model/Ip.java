package com.rucsrate.api.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("Ip")
public class Ip {
    String ip;
    String courseId;

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }
}
