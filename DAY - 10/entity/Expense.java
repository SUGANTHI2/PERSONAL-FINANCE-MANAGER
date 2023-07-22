package com.neo.security.entity;

//import lombok.AllArgsConstructor;
//import lombok.Getter;
import lombok.NoArgsConstructor;
//import lombok.Setter;

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
import javax.persistence.ManyToOne;


@NoArgsConstructor

@Entity
public class Expense {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int eId;
	private String eAmt;
	private String eSource;
	private String eDesc;
	private Date eDate;
	private Time eTime;
	
	
	
	public int geteId() {
		return eId;
	}



	public void seteId(int eId) {
		this.eId = eId;
	}



	public String geteAmt() {
		return eAmt;
	}



	public void seteAmt(String eAmt) {
		this.eAmt = eAmt;
	}



	public String geteSource() {
		return eSource;
	}



	public void seteSource(String eSource) {
		this.eSource = eSource;
	}



	public String geteDesc() {
		return eDesc;
	}



	public void seteDesc(String eDesc) {
		this.eDesc = eDesc;
	}



	public Date geteDate() {
		return eDate;
	}



	public void seteDate(Date eDate) {
		this.eDate = eDate;
	}



	public Time geteTime() {
		return eTime;
	}



	public void seteTime(Time eTime) {
		this.eTime = eTime;
	}



	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		this.user = user;
	}



	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
	private User user; 
	
}