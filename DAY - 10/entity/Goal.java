package com.neo.security.entity;

//import lombok.AllArgsConstructor;
//import lombok.Getter;
import lombok.NoArgsConstructor;
//import lombok.Setter;

import java.sql.Date;
//import java.sql.Time;

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
public class Goal {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int gId;
	private String gSource;
	private double targetAmount;
	private double savedAmount;
	private String gDesc;
	private Date desiredDate;
	
	
	
	public int getgId() {
		return gId;
	}



	public void setgId(int gId) {
		this.gId = gId;
	}



	public String getgSource() {
		return gSource;
	}



	public void setgSource(String gSource) {
		this.gSource = gSource;
	}



	public double getTargetAmount() {
		return targetAmount;
	}



	public void setTargetAmount(double targetAmount) {
		this.targetAmount = targetAmount;
	}



	public double getSavedAmount() {
		return savedAmount;
	}



	public void setSavedAmount(double savedAmount) {
		this.savedAmount = savedAmount;
	}



	public String getgDesc() {
		return gDesc;
	}



	public void setgDesc(String gDesc) {
		this.gDesc = gDesc;
	}



	public Date getDesiredDate() {
		return desiredDate;
	}



	public void setDesiredDate(Date desiredDate) {
		this.desiredDate = desiredDate;
	}



	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		this.user = user;
	}



	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL )
	private User user; 
	
}