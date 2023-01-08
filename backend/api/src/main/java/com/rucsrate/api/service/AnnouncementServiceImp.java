package com.rucsrate.api.service;

import com.rucsrate.api.model.Announcement;
import com.rucsrate.api.repository.AnnouncementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnnouncementServiceImp implements AnnouncementService{

    @Autowired
    private AnnouncementRepository announcementRepository;
    @Override
    public Announcement findByTitle(String title){
        return announcementRepository.findByTitle(title);
    }
    @Override
    public List<Announcement> findAll(){
        return announcementRepository.findAll();
    }
}
