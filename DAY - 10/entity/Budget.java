package com.neo.security.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class Budget {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bId;
	private String bAmt;
	private String bSource;
	
	
	public int getbId() {
		return bId;
	}


	public void setbId(int bId) {
		this.bId = bId;
	}


	public String getbAmt() {
		return bAmt;
	}


	public void setbAmt(String bAmt) {
		this.bAmt = bAmt;
	}


	public String getbSource() {
		return bSource;
	}


	public void setbSource(String bSource) {
		this.bSource = bSource;
	}


	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
	private User user; 
	
}