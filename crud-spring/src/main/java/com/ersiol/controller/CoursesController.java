package com.ersiol.controller;

import java.util.List;

import com.ersiol.model.Courses;
import com.ersiol.repository.CoursesRepository;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CoursesController {

    private final CoursesRepository coursesRepository;

    @GetMapping
    public List<Courses> list() {
        return coursesRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(code =  HttpStatus.CREATED)
    public Courses create(@RequestBody Courses course){

        return coursesRepository.save(course);

        // return ResponseEntity.status(HttpStatus.CREATED)
        // .body(coursesRepository.save(course));

    }
}
