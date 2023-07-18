package com.example.demo.Model;

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
	private int g_id;
	private String g_source;
	private double targetAmount;
	private double savedAmount;
	private String g_desc;
	private Date desiredDate;
	public int getG_id() {
		return g_id;
	}
	public void setG_id(int g_id) {
		this.g_id = g_id;
	}
	public String getG_source() {
		return g_source;
	}
	public void setG_source(String g_source) {
		this.g_source = g_source;
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
	public String getG_desc() {
		return g_desc;
	}
	public void setG_desc(String g_desc) {
		this.g_desc = g_desc;
	}
	public Date getDesiredDate() {
		return desiredDate;
	}
	public void setDesiredDate(Date desiredDate) {
		this.desiredDate = desiredDate;
	}
	
	
	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL )
	private User user; 
	
}