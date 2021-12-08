package com.ersiol.controller;

import java.util.List;

import com.ersiol.model.Courses;
import com.ersiol.repository.CoursesRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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

}
