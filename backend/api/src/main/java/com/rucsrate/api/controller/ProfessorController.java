package com.rucsrate.api.controller;

import com.rucsrate.api.model.Professor;
import com.rucsrate.api.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/professor")
public class ProfessorController {
    @Autowired
    private ProfessorRepository professorRepository;

    @GetMapping(value = "/all")
    public List<Professor> getAllProfessor(){
        return professorRepository.findAll();
    }
}
