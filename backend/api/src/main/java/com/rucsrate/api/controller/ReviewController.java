package com.rucsrate.api.controller;

import com.rucsrate.api.model.Review;
import com.rucsrate.api.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/review")
public class ReviewController {
    @Autowired
    private ReviewRepository reviewRepository;

    @GetMapping(value = "/all")
    public List<Review> getAllReview(){
        return reviewRepository.findAll();
    }
}
