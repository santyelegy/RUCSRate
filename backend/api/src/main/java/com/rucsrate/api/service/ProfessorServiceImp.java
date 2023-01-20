package com.rucsrate.api.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.rucsrate.api.model.Course;
import com.rucsrate.api.model.Professor;
import com.rucsrate.api.model.Review;
import com.rucsrate.api.repository.ProfessorRepository;
import com.rucsrate.api.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProfessorServiceImp implements ProfessorService{
    @Autowired
    private ProfessorRepository professorRepository;
    @Autowired
    private ReviewRepository reviewRepository;
    @Override
    public ObjectNode findProfessorByName(String ProfessorName) {
        ObjectMapper mapper = new ObjectMapper();
        Professor target = professorRepository.findByName(ProfessorName);
        ObjectNode returnObject = mapper.createObjectNode();
        returnObject.put("name",target.getName());
        returnObject.put("email",target.getEmail());
        returnObject.put("score",target.getScore());
        List<Review> reviews = reviewRepository.findAllByProfessor(ProfessorName);
        ArrayNode arrayNode = returnObject.putArray("review");
        for(Review review:reviews){
            ObjectNode jsonReview = mapper.createObjectNode();
            jsonReview.put("course",review.getCourse());
            jsonReview.put("professor",review.getProfessor());
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
        List<Review> reviews = reviewRepository.findAllByProfessor(target.getName());
        ArrayNode arrayNode = returnObject.putArray("review");
        for(Review review:reviews){
            ObjectNode jsonReview = mapper.createObjectNode();
            jsonReview.put("course",review.getCourse());
            jsonReview.put("professor",review.getProfessor());
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
    public List<Course> findAll() {
        return null;
    }

    @Override
    public ObjectNode findProfessorPerformance(String professorId) {
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode returnObject = mapper.createObjectNode();
        ObjectNode professor_info = this.findProfessorById(professorId);
        // double avg_preference = 0;
        // double avg_difficulty = 0;
        double avg_prof = 0;
        // double avg_helpfulness = 0;
        int cnt = 0;
        ArrayNode reviews = (ArrayNode) professor_info.get("review");
        for (JsonNode review:reviews){
            // avg_preference += Double.parseDouble(String.valueOf(review.get("preference")));
            // avg_difficulty += Double.parseDouble(String.valueOf(review.get("difficulty")));
            avg_prof += Double.parseDouble(String.valueOf(review.get("prof")));
            // avg_helpfulness += Double.parseDouble(String.valueOf(review.get("helpfulness")));
            cnt++;
        }
        returnObject.put("name", String.valueOf(professor_info.get("name")));
        returnObject.put("email", String.valueOf(professor_info.get("email")));
        // returnObject.put("avg_preference", avg_preference/cnt);
        // returnObject.put("avg_difficulty", avg_difficulty/cnt);
        returnObject.put("avg_prof", avg_prof/cnt);
        // returnObject.put("avg_helpfulness", avg_helpfulness/cnt);
        return returnObject;
    }
}
