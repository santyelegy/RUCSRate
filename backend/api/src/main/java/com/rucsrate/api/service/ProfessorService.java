package com.rucsrate.api.service;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.rucsrate.api.model.Course;

import java.util.List;

public interface ProfessorService {
    ObjectNode findProfessorByName(String ProfessorName);
    List<Course> findAll();
}
