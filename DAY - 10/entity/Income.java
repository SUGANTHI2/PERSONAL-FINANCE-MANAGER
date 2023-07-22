package com.neo.security.entity;


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
public class Income {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int iId;
	private String iAmt;
	private String iSource;
	private String iDesc;
	private Date iDate;
	private Time iTime;
	
	
	public int getiId() {
		return iId;
	}


	public void setiId(int iId) {
		this.iId = iId;
	}


	public String getiAmt() {
		return iAmt;
	}


	public void setiAmt(String iAmt) {
		this.iAmt = iAmt;
	}


	public String getiSource() {
		return iSource;
	}


	public void setiSource(String iSource) {
		this.iSource = iSource;
	}


	public String getiDesc() {
		return iDesc;
	}


	public void setiDesc(String iDesc) {
		this.iDesc = iDesc;
	}


	public Date getiDate() {
		return iDate;
	}


	public void setiDate(Date iDate) {
		this.iDate = iDate;
	}


	public Time getiTime() {
		return iTime;
	}


	public void setiTime(Time iTime) {
		this.iTime = iTime;
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