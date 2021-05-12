package com.angelduar.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angelduar.springboot.model.Costumers;
import org.springframework.http.ResponseEntity;

import com.angelduar.springboot.repository.CostumerRepository;
import java.util.Optional;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class CostumerController {
	@Autowired
	private CostumerRepository costumerRepository;
	
	@GetMapping("/costumers")
	public List<Costumers> getAllCostumers(){
		return costumerRepository.findAll();
		}
	
	    //student rest API
		@PostMapping("/costumers")
		public Costumers createCostumer(@RequestBody Costumers costumer) {
			return costumerRepository.save(costumer);
		}
			
		@GetMapping("/costumers/{id}")
		public ResponseEntity<Costumers> getCostumerById(@PathVariable Long id) {
			Optional<Costumers> optionalEntity = costumerRepository.findById(id);
			Costumers costumer = optionalEntity.get();
			return ResponseEntity.ok(costumer);
		}
}
