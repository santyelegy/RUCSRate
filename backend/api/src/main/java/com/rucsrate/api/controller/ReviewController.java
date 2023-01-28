package com.rucsrate.api.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.rucsrate.api.model.Review;
import com.rucsrate.api.repository.ReviewRepository;
import com.rucsrate.api.service.IpService;
import com.rucsrate.api.service.ReviewService;
import jakarta.servlet.http.HttpServletRequest;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/review")
public class ReviewController {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private ReviewService reviewService;
    @Autowired
    private IpService ipService;

    @GetMapping(value = "/all")
    public List<Review> getAllReview(){
        return reviewRepository.findAll();
    }

    @GetMapping(value = "getByCourse/{courseid}")
    public List<Review> getAllByCourseId(@PathVariable("courseid") String courseId){
        return reviewRepository.findAllByCourseId(courseId);
    }

    @GetMapping(value = "getByCourse/{courseid}/average_score")
    public ObjectNode getCourseScore(@PathVariable("courseid") String courseId){
        return reviewService.findCourseScore(courseId);
    }


    @PostMapping(value = "/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    public boolean newReview(@RequestBody Map<String,String> paramMap, HttpServletRequest request)throws Exception {
        if(paramMap==null){
            throw new IllegalArgumentException("No input");
        }
        //System.out.println(request.getRemoteAddr());
        String ipAddress = request.getHeader("X-FORWARDED-FOR");
        boolean success=reviewService.save(paramMap,ipAddress);
        if(success){
            ipService.save(String.valueOf(paramMap.get("courseId")),ipAddress);
        }
        return success;
    }

}
