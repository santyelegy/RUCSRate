package com.rucsrate.api.repository;

import com.rucsrate.api.model.Review;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends MongoRepository<Review, String> {
    @Override
    List<Review> findAll();

    List<Review> findAllByCourseId(ObjectId courseId);

    List<Review> findAllByProfessor(String Professor);

}
