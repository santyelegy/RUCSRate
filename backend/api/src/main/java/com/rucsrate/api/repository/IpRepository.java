package com.rucsrate.api.repository;

import com.rucsrate.api.model.Ip;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IpRepository extends MongoRepository<Ip, String> {
    Ip findByCourseIdAndIp(String courseId,String ip);
}
