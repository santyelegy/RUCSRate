package com.rucsrate.api.repository;

import com.rucsrate.api.model.Announcement;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnnouncementRepository extends MongoRepository<Announcement, String> {
    Announcement findByTitle(String title);

    List<Announcement> findAll();
}
