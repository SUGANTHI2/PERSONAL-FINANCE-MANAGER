package com.neo.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

//import org.springframework.data.jpa.repository.Query;

import com.neo.security.entity.Goal;

//import com.neo.security.entity.Expense;

public interface GoalRepo extends JpaRepository <Goal,Integer>{
	// @Query(value="select COALESCE(sum(income_amt), 0) from Income where email=:email", nativeQuery=true)
	 public List<Goal> findByEmail(String email);
}
