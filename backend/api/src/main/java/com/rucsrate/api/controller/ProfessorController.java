package com.rucsrate.api.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.rucsrate.api.repository.ProfessorRepository;
import com.rucsrate.api.service.ProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/professor")
public class ProfessorController {
    @Autowired
    private ProfessorService professorService;
    @Autowired
    private ProfessorRepository professorRepository;

    @GetMapping(value = "/all")
    public List<ObjectNode> getAllProfessor(){
        return professorService.findAll();
    }

    @GetMapping(value = "/findname/{professorname}")
    public ObjectNode getProfessorByName(@PathVariable("professorname") String ProfessorName){
        return professorService.findProfessorByName(ProfessorName);
    }

    @GetMapping(value = "/findId/{professorId}")
    public ObjectNode getProfessorById(@PathVariable("professorId") String ProfessorId){
        return professorService.findProfessorById(ProfessorId);
    }

    @GetMapping(value = "/findId/{professorId}/average_score")
    public ObjectNode getProfessorPerformance(@PathVariable("professorId") String professorId){
        return professorService.findProfessorPerformance(professorId);
    }
}
