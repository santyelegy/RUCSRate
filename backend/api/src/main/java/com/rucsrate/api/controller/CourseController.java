package com.rucsrate.api.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.rucsrate.api.model.Course;
import com.rucsrate.api.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/course")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping(value = "/all")
    public List<Course> getAllCourse(){
        return courseService.findAll();
    }

    @GetMapping(value = "/findid/{courseid}")
    public ObjectNode getCourseById(@PathVariable("courseid") String courseId){
        return courseService.findCourseById(courseId);
    }
    @GetMapping(value = "/department")
    public ObjectNode getCourseByDepartment(){
        return courseService.findCourseByDepartment();
    }

    @GetMapping(value = "/findprofessor/{professorname}")
    public ObjectNode getCourseByProf(@PathVariable("professorname") String ProfessorName){
        return courseService.findCourseByProf(ProfessorName);
    }
}
