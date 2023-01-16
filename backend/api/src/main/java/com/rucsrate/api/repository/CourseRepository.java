package com.rucsrate.api.repository;

import com.rucsrate.api.model.Course;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository  extends MongoRepository<Course, String> {
    List<Course> findAll();
    List<Course> findAllByProf(String prof);
    List<Course> findAllByDepartment(String department);
    List<Course> findAllByYear(int year);
    List<Course> findAllByName(String name);
    List<Course> findAllByCode(String name);
    Course findBy_id(String id);
}
