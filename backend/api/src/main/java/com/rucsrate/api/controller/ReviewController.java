package com.rucsrate.api.controller;

import com.rucsrate.api.model.Review;
import com.rucsrate.api.repository.ReviewRepository;
import com.rucsrate.api.service.ReviewService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/review")
public class ReviewController {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private ReviewService reviewService;
    @GetMapping(value = "/all")
    public List<Review> getAllReview(){
        return reviewRepository.findAll();
    }
    @GetMapping(value = "getByCourse/{courseid}")
    public List<Review> getAllByCouseId(@PathVariable("courseid") String courseId){
        return reviewRepository.findAllByCourseId(new ObjectId(courseId));
    }
    @PostMapping(value = "/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    public Review newReview(@RequestBody Map<String,String> paramMap)throws Exception {
        if(paramMap==null){
            throw new IllegalArgumentException("No input");
        }
        reviewService.save(paramMap);
        return null;
    }

}
