package com.neo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.entity.Borrow;
import com.neo.security.entity.Lend;
import com.neo.security.repository.BorrowRepo;
//import com.neo.security.repository.BorrowRepository;
//import com.neo.security.repository.LendRepo;
//import com.neo.security.repository.LendRepository;
@Service
public class BorrowService {
	@Autowired
	BorrowRepo borrowRepo;
	
	public String addLendDetails(Borrow borrow,String email) {
		borrow.setEmail(email);
//		lend.setExpenseAmt((-1)*expense.getExpenseAmt());
		borrowRepo.save(borrow);
		return "Income Details added";
}
//	public List<Expense> getAllIncome() {
//      return lendrepo.findAll();
//  }
  
//  public Lend getIncomeById(int lendingId) {
//      return lendrepo.findById(lendingId).get();
//  }
  
  public List<Borrow> findByEmail(String email) {
      return borrowRepo.findByEmail(email);
  }
  
  public Borrow updateLendById(int BorrowId, Borrow borrow) {
  	Borrow bo = borrowRepo.findById(BorrowId).get();
  	bo.setBorrowName(borrow.getBorrowName());
  	bo.setBorrowAmount(borrow.getBorrowAmount());
  	bo.setBorrowDate(borrow.getBorrowDate());
  	bo.setBorrowDueDate(borrow.getBorrowDueDate());
  	bo.setBorrowDesc(borrow.getBorrowDesc());
    return borrowRepo.save(bo);
  }
  
  public String deleteByLendId(int borrowId) {
      if(borrowRepo.findById(borrowId).isPresent()){
    	  borrowRepo.deleteById(borrowId);
        return "Lend Details Deleted"; } 
      return "Id not found";
  }

}