package com.neo.security.controller;

import java.util.List;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.neo.security.entity.Expense;
import com.neo.security.repository.ExpenseRepo;
import com.neo.security.service.ExpenseService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ExpenseController {
	

	@Autowired
	ExpenseService expenseService;
	
	@Autowired
	ExpenseRepo expenseRepository;
	@PostMapping("/expense/{email}")
	public String addExpense(@RequestBody Expense expense,@PathVariable String email) {
		expenseService.addExpenseDetails(expense,email);
		return "Added";
    }
//	@PostMapping("/expense")
//	public String addExpense(@RequestBody Expense expense,@PathVariable int expenseId)
//	{
//		expenseService.addExpenseDetails(expenseId);
//	}
//	@GetMapping("/getExpenseBalance/{userEmail}")
//	
//		public double getBalance(@PathVariable String userEmail) {
//		return expenseRepository.findBalanceByEmail(userEmail);
//	}
	@GetMapping("/expense")
	public List<Expense> getAll(){
		return expenseService.getAllExpense();
	}
	
	@GetMapping("/expense/getExpense/{email}")
	public List<Expense> getById(@PathVariable String email){
		return expenseRepository.findByEmail(email);
	}
	
	@PutMapping("/expense/update/{expenseId}")
	public Expense updateById(@PathVariable int expenseId,@RequestBody Expense expense) {
		return expenseService.updateExpenseById(expenseId,expense);
	}
	
	@DeleteMapping("/expense/{expenseId}")
	public String deleteExpense(@PathVariable int expenseId) {
		expenseService.deleteByExpenseId(expenseId);
		return "Details deleted";
	}

}