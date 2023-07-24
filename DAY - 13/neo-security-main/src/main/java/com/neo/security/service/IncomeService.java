package com.neo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.neo.security.entity.Income;
import com.neo.security.repository.IncomeRepo;
import com.neo.security.repository.UserRepository;

@Service
public class IncomeService {

	@Autowired
	IncomeRepo incomeRepository;
	@Autowired
	UserRepository userRepository;
	
	public String addIncomeDetails(Income income) {
	incomeRepository.save(income);
	return "Income Details added";
}
	public List<Income> getAllIncome() {
      return incomeRepository.findAll();
  }
  
  public Income getIncomeById(int incomeId) {
      return incomeRepository.findById(incomeId).get();
  }
  
  
  public Income updateIncomeById(int incomeId, Income income) {
  	Income inc = incomeRepository.findById(incomeId).get();
      inc.setIncomeAmount(income.getIncomeAmount());
      inc.setIncomeSource(income.getIncomeSource());
      inc.setIncomeDesc(income.getIncomeDesc());
      inc.setIncomeDate(income.getIncomeDate());
    return incomeRepository.save(inc);
  }
  
  public String deleteByIncomeId(int incomeId) {
      if(incomeRepository.findById(incomeId).isPresent()){
    	  incomeRepository.deleteById(incomeId);
        return "Income Details Deleted"; } 
      return "Id not found";
  }




}