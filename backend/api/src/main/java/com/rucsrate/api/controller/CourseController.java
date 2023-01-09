package com.rucsrate.api.controller;

import com.rucsrate.api.model.Course;
import com.rucsrate.api.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/course")
public class CourseController {
    @Autowired
    private CourseRepository courseRepository;

    @GetMapping(value = "/all")
    public List<Course> getAllCourse(){
        return courseRepository.findAll();
    }
}
