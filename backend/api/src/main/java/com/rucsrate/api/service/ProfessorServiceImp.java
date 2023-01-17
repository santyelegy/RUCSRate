package com.rucsrate.api.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.rucsrate.api.model.Course;
import com.rucsrate.api.model.Professor;
import com.rucsrate.api.model.Review;
import com.rucsrate.api.repository.ProfessorRepository;
import com.rucsrate.api.repository.ReviewRepository;
import org.bson.types.ObjectId;
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
        List<Review> reviews=reviewRepository.findAllByProfessor(ProfessorName);
        ArrayNode arrayNode = returnObject.putArray("review");
        for(Review review:reviews){
            ObjectNode jsonReview=mapper.createObjectNode();
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
}
