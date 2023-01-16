package com.rucsrate.api.controller;

import com.rucsrate.api.model.Announcement;
import com.rucsrate.api.repository.AnnouncementRepository;
import com.rucsrate.api.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/announcement")
public class AnnouncementController {
    @Autowired
    private AnnouncementService announcementService;

    @GetMapping(value = "/")
    public List<Announcement> getAllAnnouncement() {
        return announcementService.findAll();
    }
}