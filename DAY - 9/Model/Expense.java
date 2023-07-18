package com.example.demo.Model;

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
	private int e_id;
	private String e_amt;
	private String e_source;
	private String e_desc;
	private Date e_date;
	private Time e_time;
	public int getE_id() {
		return e_id;
	}
	public void setE_id(int e_id) {
		this.e_id = e_id;
	}
	public String getE_amt() {
		return e_amt;
	}
	public void setE_amt(String e_amt) {
		this.e_amt = e_amt;
	}
	public String getE_source() {
		return e_source;
	}
	public void setE_source(String e_source) {
		this.e_source = e_source;
	}
	public String getE_desc() {
		return e_desc;
	}
	public void setE_desc(String e_desc) {
		this.e_desc = e_desc;
	}
	public Date getE_date() {
		return e_date;
	}
	public void setE_date(Date e_date) {
		this.e_date = e_date;
	}
	public Time getE_time() {
		return e_time;
	}
	public void setE_time(Time e_time) {
		this.e_time = e_time;
	}
	
	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
	private User user; 
	
}