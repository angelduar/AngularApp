package com.angelduar.springboot.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.angelduar.springboot.repository.MovieRepository;
import com.angelduar.springboot.model.Movies;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class MovieController {
	
	@Autowired
	private MovieRepository movieRepository;
	

	// get movies
	@GetMapping("/movies")
	public List<Movies> getAllMovies(){
		return movieRepository.findAll();
		}
	
	//get movie by id
	
		@GetMapping("/movies/{id}")
		public ResponseEntity<Movies> getMovieById(@PathVariable Long id) {
			Optional<Movies> optionalEntity = movieRepository.findById(id);
			Movies movie = optionalEntity.get();
			return ResponseEntity.ok(movie);
		}
		
}
