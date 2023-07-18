package com.example.demo.Model;


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
	private int i_id;
	private String i_amt;
	private String i_source;
	private String i_desc;
	private Date i_date;
	private Time i_time;
	public int getI_id() {
		return i_id;
	}
	public void setI_id(int i_id) {
		this.i_id = i_id;
	}
	public String getI_amt() {
		return i_amt;
	}
	public void setI_amt(String i_amt) {
		this.i_amt = i_amt;
	}
	public String getI_source() {
		return i_source;
	}
	public void setI_source(String i_source) {
		this.i_source = i_source;
	}
	public String getI_desc() {
		return i_desc;
	}
	public void setI_desc(String i_desc) {
		this.i_desc = i_desc;
	}
	public Date getI_date() {
		return i_date;
	}
	public void setI_date(Date i_date) {
		this.i_date = i_date;
	}
	public Time getI_time() {
		return i_time;
	}
	public void setI_time(Time i_time) {
		this.i_time = i_time;
	}
	
	
	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
	private User user; 
	
}