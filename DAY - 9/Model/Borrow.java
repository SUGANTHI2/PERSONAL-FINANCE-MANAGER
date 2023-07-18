package com.example.demo.Model;

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
	private int bo_id;
	private String bo_name;
	private double bo_amt;
	private Date bo_date;
	private Date bo_duedate;
	private String e_desc;
	public int getBo_id() {
		return bo_id;
	}
	public void setBo_id(int bo_id) {
		this.bo_id = bo_id;
	}
	public String getBo_name() {
		return bo_name;
	}
	public void setBo_name(String bo_name) {
		this.bo_name = bo_name;
	}
	public double getBo_amt() {
		return bo_amt;
	}
	public void setBo_amt(double bo_amt) {
		this.bo_amt = bo_amt;
	}
	public Date getBo_date() {
		return bo_date;
	}
	public void setBo_date(Date bo_date) {
		this.bo_date = bo_date;
	}
	public Date getBo_duedate() {
		return bo_duedate;
	}
	public void setBo_duedate(Date bo_duedate) {
		this.bo_duedate = bo_duedate;
	}
	public String getE_desc() {
		return e_desc;
	}
	public void setE_desc(String e_desc) {
		this.e_desc = e_desc;
	}
	
	
	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
	private Debt debt; 
	
}