package com.ersiol;

import com.ersiol.model.Courses;
import com.ersiol.repository.CoursesRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CoursesRepository coursesRepository) {
		return args -> {
			coursesRepository.deleteAll();
			
			Courses c = new Courses();
			c.setName("Angular");
			c.setCategory("Front-end");
			coursesRepository.save(c);

			Courses c1 = new Courses();
			c1.setName("Spring");
			c1.setCategory("back-end");
			coursesRepository.save(c1);


		};
	}
}
