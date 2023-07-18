package com.example.demo.Model;



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
	private int l_id;
	private String l_name;
	private double l_amt;
	private Date l_date;
	private Date l_duedate;
	private String l_desc;
	public int getL_id() {
		return l_id;
	}
	public void setL_id(int l_id) {
		this.l_id = l_id;
	}
	public String getL_name() {
		return l_name;
	}
	public void setL_name(String l_name) {
		this.l_name = l_name;
	}
	public double getL_amt() {
		return l_amt;
	}
	public void setL_amt(double l_amt) {
		this.l_amt = l_amt;
	}
	public Date getL_date() {
		return l_date;
	}
	public void setL_date(Date l_date) {
		this.l_date = l_date;
	}
	public Date getL_duedate() {
		return l_duedate;
	}
	public void setL_duedate(Date l_duedate) {
		this.l_duedate = l_duedate;
	}
	public String getL_desc() {
		return l_desc;
	}
	public void setL_desc(String l_desc) {
		this.l_desc = l_desc;
	}

	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
	private Debt debt; 
	
}