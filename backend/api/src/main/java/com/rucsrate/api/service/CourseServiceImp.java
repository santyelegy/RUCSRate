package com.rucsrate.api.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.rucsrate.api.model.Course;
import com.rucsrate.api.model.Review;
import com.rucsrate.api.repository.CourseRepository;
import com.rucsrate.api.repository.ReviewRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class CourseServiceImp implements CourseService {
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private ReviewRepository reviewRepository;
    @Override
    public ObjectNode findCourseById(String CourseId){
        ObjectMapper mapper = new ObjectMapper();
        Course target=courseRepository.findBy_id(CourseId);
        ObjectNode returnObject=mapper.createObjectNode();
        returnObject.put("code", target.getCode());
        returnObject.put("name",target.getName());
        returnObject.put("prof",target.getProf());
        returnObject.put("score",target.getScore());
        List<Review> reviews=reviewRepository.findAllByCourseId(new ObjectId(CourseId));
        ArrayNode arrayNode = returnObject.putArray("review");
        for(Review review:reviews){
            ObjectNode jsonReview=mapper.createObjectNode();
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
}
