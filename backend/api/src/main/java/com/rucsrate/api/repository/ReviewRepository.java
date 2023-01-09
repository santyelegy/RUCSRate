package com.rucsrate.api.repository;

import com.rucsrate.api.model.Course;
import com.rucsrate.api.model.Review;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends MongoRepository<Review, String> {
    @Override
    List<Review> findAll();

    @Query("{'Course_id' : ?0}")
    List<Review> findAllByCourse_id(Course course);

}
