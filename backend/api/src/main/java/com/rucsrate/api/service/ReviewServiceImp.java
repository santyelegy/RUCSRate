package com.rucsrate.api.service;

import com.rucsrate.api.model.Review;
import com.rucsrate.api.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;

import java.util.Map;

@Service
public class ReviewServiceImp implements ReviewService{
    @Autowired
    ReviewRepository reviewRepository;
    @Override
    public boolean save(Map review){
        try{
            System.out.println(review);
            Review tosave=new Review();
            tosave.setContent(String.valueOf(review.get("content")));
            tosave.setCourseId(String.valueOf(review.get("courseId")));
            tosave.setPreference(Double.valueOf((String) review.get("preference")));
            tosave.setDifficulty(Double.valueOf((String) review.get("difficulty")));
            tosave.setProf(Double.valueOf((String) review.get("prof")));
            tosave.setHelpfulness(Double.valueOf((String) review.get("helpfulness")));
            reviewRepository.save(tosave);
            return true;
        }catch (Exception e){
            System.out.println("Get my error");
            System.out.println(e.toString());
            return false;
        }
    }
}
