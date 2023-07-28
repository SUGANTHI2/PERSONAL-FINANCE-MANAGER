package com.neo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.entity.Goal;
import com.neo.security.repository.GoalRepo;
//import com.neo.security.repository.IncomeRepo;

@Service
public class GoalService {

	@Autowired
	GoalRepo goalRepo;

	
	public String addGoalDetails(Goal goal,String email) {
	goal.setEmail(email);
	goalRepo.save(goal);
	return "Goal Details added";
}

  
  
  public Goal updateGoalById(int gId, Goal goal) {
  	Goal go = goalRepo.findById(gId).get();
  	go.setTargetAmount(goal.getTargetAmount());
  	go.setSavedAmount(goal.getSavedAmount());
  	go.setGSource(goal.getGSource());
  	go.setGDesc(goal.getGDesc());
  	go.setDesiredDate(goal.getDesiredDate());
    return goalRepo.save(go);
  }
  
  public String deleteByGId(int gId) {
      if(goalRepo.findById(gId).isPresent()){
    	  goalRepo.deleteById(gId);
        return "Income Details Deleted"; } 
      return "Id not found";
  }




}