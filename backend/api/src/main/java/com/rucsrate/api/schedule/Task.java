package com.rucsrate.api.schedule;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.rucsrate.api.service.IpService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class Task {
    private static final Logger log = LoggerFactory.getLogger(Task.class);

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
    @Autowired
    IpService ipService;

    @Scheduled(cron = "@daily")
    //@Scheduled(fixedRate = 5000)
    public void reportCurrentTime() {
        ipService.deleteAll();
        log.info("Clearing the database {}", dateFormat.format(new Date()));
    }
}
