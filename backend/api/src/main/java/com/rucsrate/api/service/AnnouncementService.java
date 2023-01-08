package com.rucsrate.api.service;

import com.rucsrate.api.model.Announcement;

import java.util.List;

public interface AnnouncementService {
    Announcement findByTitle(String title);

    List<Announcement> findAll();
}
