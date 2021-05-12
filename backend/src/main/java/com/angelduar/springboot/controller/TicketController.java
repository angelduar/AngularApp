package com.angelduar.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angelduar.springboot.model.Tickets;
import org.springframework.http.ResponseEntity;

import com.angelduar.springboot.repository.TicketRepository;
import java.util.Optional;

import java.util.List;


@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class TicketController {
	@Autowired
	private TicketRepository ticketRepository;
	
	@GetMapping("/tickets")
	public List<Tickets> getAllTickets(){
		return ticketRepository.findAll();
		}
	
	    //student rest API
		@PostMapping("/tickets")
		public Tickets createCostumer(@RequestBody Tickets ticket) {
			return ticketRepository.save(ticket);
		}
			
		@GetMapping("/tickets/{id}")
		public ResponseEntity<Tickets> getCostumerById(@PathVariable Long id) {
			Optional<Tickets> optionalEntity = ticketRepository.findById(id);
			Tickets costumer = optionalEntity.get();
			return ResponseEntity.ok(costumer);
		}
}