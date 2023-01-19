package com.rucsrate.api.service;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.rucsrate.api.model.Course;

import java.util.List;

public interface CourseService {
    ObjectNode findCourseById(String CourseId);
    List<Course> findAll();
    ObjectNode findCourseByDepartment();
}
