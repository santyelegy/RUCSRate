package com.rucsrate.api.service;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.rucsrate.api.model.Review;
import org.springframework.util.MultiValueMap;

import java.util.Map;

public interface ReviewService {
    public boolean save(Map<String,String> review, String ip);

    ObjectNode findCourseScore(String courseId);
}
