package com.neo.security.entity;

import lombok.Getter;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
import lombok.NoArgsConstructor;
//import lombok.Setter;
import lombok.Setter;

import java.sql.Date;
import java.sql.Time;
//import java.util.List;

import javax.persistence.CascadeType;
//import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.ManyToOne;
//import javax.persistence.ManyToOne;


@NoArgsConstructor
@Getter
@Setter
@Entity
public class Expense {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int expenseId;
	private String email;
	private double expenseAmount;
	private String expenseSource;
	private String expenseDesc;
	private Date expenseDate;
	
	
	
	



//	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
//	private User user; 
	
}