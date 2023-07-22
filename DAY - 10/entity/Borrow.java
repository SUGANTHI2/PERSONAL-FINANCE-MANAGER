package com.neo.security.entity;

//import lombok.AllArgsConstructor;
//import lombok.Getter;
import lombok.NoArgsConstructor;
//import lombok.Setter;

import java.sql.Date;
//import java.sql.Time;
//import java.util.List;

import javax.persistence.CascadeType;
//import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
//import javax.persistence.ManyToOne;


@NoArgsConstructor

@Entity
public class Borrow {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int borrowId;
	private String borrowName;
	private double borrowAmt;
	private Date borrowDate;
	private Date borrowDuedate;
	private String borrowDesc;
	
	
	
	public int getBorrowId() {
		return borrowId;
	}



	public void setBorrowId(int borrowId) {
		this.borrowId = borrowId;
	}



	public String getBorrowName() {
		return borrowName;
	}



	public void setBorrowName(String borrowName) {
		this.borrowName = borrowName;
	}



	public double getBorrowAmt() {
		return borrowAmt;
	}



	public void setBorrowAmt(double borrowAmt) {
		this.borrowAmt = borrowAmt;
	}



	public Date getBorrowDate() {
		return borrowDate;
	}



	public void setBorrowDate(Date borrowDate) {
		this.borrowDate = borrowDate;
	}



	public Date getBorrowDuedate() {
		return borrowDuedate;
	}



	public void setBorrowDuedate(Date borrowDuedate) {
		this.borrowDuedate = borrowDuedate;
	}



	public String getBorrowDesc() {
		return borrowDesc;
	}



	public void setBorrowDesc(String borrowDesc) {
		this.borrowDesc = borrowDesc;
	}



	public Debt getDebt() {
		return debt;
	}



	public void setDebt(Debt debt) {
		this.debt = debt;
	}



	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
	private Debt debt; 
	
}