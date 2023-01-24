package com.rucsrate.api.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.rucsrate.api.model.Course;
import com.rucsrate.api.model.Review;
import com.rucsrate.api.repository.CourseRepository;
import com.rucsrate.api.repository.ProfessorRepository;
import com.rucsrate.api.repository.ReviewRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CourseServiceImp implements CourseService {
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private ProfessorRepository professorRepository;
    @Override
    public ObjectNode findCourseById(String CourseId){
        ObjectMapper mapper = new ObjectMapper();
        Course target=courseRepository.findBy_id(CourseId);
        ObjectNode returnObject = mapper.createObjectNode();
        returnObject.put("code", target.getCode());
        returnObject.put("name",target.getName());
        returnObject.put("prof",target.getProf());
        returnObject.put("score",target.getScore());
        List<Review> reviews = reviewRepository.findAllByCourseId(CourseId);
        ArrayNode arrayNode = returnObject.putArray("review");
        for(Review review:reviews){
            ObjectNode jsonReview = mapper.createObjectNode();
            jsonReview.put("content",review.getContent());
            jsonReview.put("preference",review.getPreference());
            jsonReview.put("difficulty",review.getDifficulty());
            jsonReview.put("prof",review.getProf());
            jsonReview.put("helpfulness",review.getHelpfulness());
            arrayNode.add(jsonReview);
        }
        return returnObject;
    }
    @Override
    public List<Course> findAll(){
        return courseRepository.findAll();
    }

    @Override
    public ObjectNode findCourseByDepartment() {
        List<Course> all_course = findAll();
        Map<String, Integer> course_num = new HashMap<>();
        // calculate the number of courses in the department
        for (Course course:all_course){
            int count = course_num.getOrDefault(course.getDepartment(), 0);
            course_num.put(course.getDepartment(), count + 1);
        }
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode returnObject = mapper.createObjectNode();
        // put inside the return object
        for (String course_name:course_num.keySet()){
            returnObject.put(course_name, course_num.get(course_name));
        }
        return returnObject;
    }

    @Override
    public ObjectNode findCourseByProf(String ProfessorName) {
        ObjectMapper mapper = new ObjectMapper();
        List<Course> all_course = courseRepository.findAllByProf(ProfessorName);
        ObjectNode returnObject = mapper.createObjectNode();
        returnObject.put("name",ProfessorName);
        ArrayNode arrayNode = returnObject.putArray("course");
        for (Course course:all_course){
            ObjectNode jsonCourse = mapper.createObjectNode();
            jsonCourse.put("course_code",course.getCode());
            jsonCourse.put("course_id", course.get_id());
            arrayNode.add(jsonCourse);
        }
        returnObject.put("pid",
                String.valueOf(professorRepository.findByName(ProfessorName).get_id()));
        return returnObject;
    }
}
