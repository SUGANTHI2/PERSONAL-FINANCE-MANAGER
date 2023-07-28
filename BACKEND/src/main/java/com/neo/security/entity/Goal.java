package com.neo.security.entity;

import lombok.Getter;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
import lombok.NoArgsConstructor;
//import lombok.Setter;
import lombok.Setter;

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
@Getter
@Setter
@Entity
public class Goal {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int gId;
	private String email;
	private String gSource;
	private double targetAmount;
	private double savedAmount;
	private String gDesc;
	private Date desiredDate;
	
	
	

	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL )
	private User user; 
	
}