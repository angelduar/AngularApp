package com.angelduar.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.angelduar.springboot.model.Movies;

@Repository
public interface MovieRepository extends JpaRepository<Movies, Long>{
	
}
