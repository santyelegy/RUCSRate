package com.rucsrate.api.service;

import com.rucsrate.api.model.Ip;
import com.rucsrate.api.repository.IpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IpServiceImp implements IpService{
    @Autowired
    IpRepository ipRepository;
    @Override
    public boolean save(String courseId,String ip){
        Ip toinsert=new Ip();
        toinsert.setCourseId(courseId);
        toinsert.setIp(ip);
        ipRepository.save(toinsert);
        return true;
    }
    @Override
    public void deleteAll(){
        ipRepository.deleteAll();
    }
}
