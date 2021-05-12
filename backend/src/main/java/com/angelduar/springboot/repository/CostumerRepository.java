package com.angelduar.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.angelduar.springboot.model.Costumers;


@Repository
public interface CostumerRepository extends JpaRepository<Costumers, Long>{
	
    
}

