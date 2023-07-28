package com.neo.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.security.entity.Borrow;
//import com.neo.security.entity.Lend;

public interface BorrowRepo extends JpaRepository<Borrow, Integer> {
	List<Borrow> findByEmail(String email);

}