package com.angelduar.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.angelduar.springboot.model.Tickets;

@Repository
public interface TicketRepository extends JpaRepository<Tickets, Long>{
	
}
