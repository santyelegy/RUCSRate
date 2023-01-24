package com.rucsrate.api.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.rucsrate.api.model.Course;
import com.rucsrate.api.model.Review;
import com.rucsrate.api.repository.IpRepository;
import com.rucsrate.api.repository.ReviewRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Service
public class ReviewServiceImp implements ReviewService{
    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    IpRepository ipRepository;

    @Override
    public boolean save(Map<String,String> review, String ip){
        try{
            System.out.println(review);
            Review tosave=new Review();
            tosave.setContent(String.valueOf(review.get("content")));
            tosave.setCourseId(String.valueOf(review.get("courseId")));
            tosave.setPreference(Double.valueOf((String) review.get("preference")));
            tosave.setDifficulty(Double.valueOf((String) review.get("difficulty")));
            tosave.setProf(Double.valueOf((String) review.get("prof")));
            tosave.setHelpfulness(Double.valueOf((String) review.get("helpfulness")));
            tosave.setTime(LocalDateTime.now());
            if(ipRepository.findByCourseIdAndIp(String.valueOf(review.get("courseId")),ip)!=null){
                throw new Exception("Duplicate Ip address");
            }else{
                reviewRepository.save(tosave);
            }
            return true;
        }catch (Exception e){
            System.out.println("Get my error");
            System.out.println(e.toString());
            return false;
        }
    }

    @Override
    public ObjectNode findCourseScore(String courseId) {
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode returnObject = mapper.createObjectNode();
        List<Review> reviews = reviewRepository.findAllByCourseId(courseId);
        returnObject.put("courseId", courseId);
        double avg_preference = 0;
        double avg_difficulty = 0;
        double avg_prof = 0;
        double avg_helpfulness = 0;
        int cnt = 0;
        for (Review review:reviews){
            avg_preference += review.getPreference();
            avg_difficulty += review.getDifficulty();
            avg_prof += review.getProf();
            avg_helpfulness += review.getHelpfulness();
            cnt++;
        }
        returnObject.put("avg_preference", avg_preference/cnt);
        returnObject.put("avg_difficulty", avg_difficulty/cnt);
        returnObject.put("avg_prof", avg_prof/cnt);
        returnObject.put("avg_helpfulness", avg_helpfulness/cnt);
        return returnObject;
    }
}
