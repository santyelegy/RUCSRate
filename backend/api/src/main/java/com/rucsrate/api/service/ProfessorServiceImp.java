package com.rucsrate.api.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.rucsrate.api.model.Course;
import com.rucsrate.api.model.Professor;
import com.rucsrate.api.model.Review;
import com.rucsrate.api.repository.CourseRepository;
import com.rucsrate.api.repository.ProfessorRepository;
import com.rucsrate.api.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class ProfessorServiceImp implements ProfessorService{
    @Autowired
    private ProfessorRepository professorRepository;
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    CourseService courseService;

    @Override
    public ObjectNode findProfessorByName(String ProfessorName) {
        ObjectMapper mapper = new ObjectMapper();
        Professor target = professorRepository.findByName(ProfessorName);
        ObjectNode returnObject = mapper.createObjectNode();
        returnObject.put("_id", target.get_id());
        returnObject.put("name",target.getName());
        returnObject.put("email",target.getEmail());
        returnObject.put("score",target.getScore());
        List<Review> reviews = reviewRepository.findAllByProfessor(ProfessorName);
        ArrayNode arrayNode = returnObject.putArray("review");
        for(Review review:reviews){
            ObjectNode jsonReview = mapper.createObjectNode();
            Course course= courseRepository.findBy_id(review.getCourseId());
            jsonReview.put("course",course.getName());
            jsonReview.put("professor",course.getProf());
            jsonReview.put("preference",review.getPreference());
            jsonReview.put("difficulty",review.getDifficulty());
            jsonReview.put("prof",review.getProf());
            jsonReview.put("helpfulness",review.getHelpfulness());
            jsonReview.put("content",review.getContent());
            arrayNode.add(jsonReview);
        }
        return returnObject;
    }

    @Override
    public ObjectNode findProfessorById(String ProfessorId) {
        ObjectMapper mapper = new ObjectMapper();
        Professor target = professorRepository.findBy_id(ProfessorId);
        ObjectNode returnObject = mapper.createObjectNode();
        returnObject.put("name",target.getName());
        returnObject.put("email",target.getEmail());
        returnObject.put("score",target.getScore());
        List<Course> courses= courseRepository.findAllByProf(target.getName());
        List<Review> reviews=new ArrayList<>();
        for(Course course:courses) {
            reviews.addAll(reviewRepository.findAllByCourseId(course.get_id()));
        }
        ArrayNode arrayNode = returnObject.putArray("review");
        for (Review review:reviews){
            ObjectNode jsonReview = mapper.createObjectNode();
            Course course= courseRepository.findBy_id(review.getCourseId());
            jsonReview.put("course",course.getCode());
            jsonReview.put("professor",course.getProf());
            jsonReview.put("preference",review.getPreference());
            jsonReview.put("difficulty",review.getDifficulty());
            jsonReview.put("prof",review.getProf());
            jsonReview.put("helpfulness",review.getHelpfulness());
            jsonReview.put("content",review.getContent());
            if(review.getTime()!=null){
                jsonReview.put("time",review.getTime().toString());
            }
            arrayNode.add(jsonReview);
        }
        return returnObject;
    }

    @Override
    public List<ObjectNode> findAll() {
        List<Professor> all_professor = professorRepository.findAll();
        List<ObjectNode> all_professor_with_course = new ArrayList<>();
        for (Professor professor:all_professor){
            all_professor_with_course.add(courseService.findCourseByProf(professor.getName()));
        }
        return all_professor_with_course;
    }

    @Override
    public ObjectNode findProfessorPerformance(String professorId) {
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode returnObject = mapper.createObjectNode();
        ObjectNode professor_info = this.findProfessorById(professorId);
        double avg_prof = 0;
        int cnt = 0;
        ArrayNode reviews = (ArrayNode) professor_info.get("review");
        for (JsonNode review:reviews){
            avg_prof += Double.parseDouble(String.valueOf(review.get("prof")));
            cnt++;
        }
        returnObject.put("name", String.valueOf(professor_info.get("name")));
        returnObject.put("email", String.valueOf(professor_info.get("email")));
        returnObject.put("avg_prof", avg_prof/cnt);
        return returnObject;
    }
}
