package com.neo.security.entity;



import lombok.NoArgsConstructor;


import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;





@NoArgsConstructor

@Entity
public class Lend {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int lId;
	private String lName;
	private double lAmt;
	private Date lDate;
	private Date lDuedate;
	private String lDesc;
	
	
	public int getlId() {
		return lId;
	}


	public void setlId(int lId) {
		this.lId = lId;
	}


	public String getlName() {
		return lName;
	}


	public void setlName(String lName) {
		this.lName = lName;
	}


	public double getlAmt() {
		return lAmt;
	}


	public void setlAmt(double lAmt) {
		this.lAmt = lAmt;
	}


	public Date getlDate() {
		return lDate;
	}


	public void setlDate(Date lDate) {
		this.lDate = lDate;
	}


	public Date getlDuedate() {
		return lDuedate;
	}


	public void setlDuedate(Date lDuedate) {
		this.lDuedate = lDuedate;
	}


	public String getlDesc() {
		return lDesc;
	}


	public void setlDesc(String lDesc) {
		this.lDesc = lDesc;
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