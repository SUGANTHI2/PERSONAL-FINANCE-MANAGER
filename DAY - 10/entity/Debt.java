package com.neo.security.entity;


//import lombok.Getter;
import lombok.NoArgsConstructor;
//import lombok.Setter;

import java.util.List;

import javax.persistence.CascadeType;

//import java.util.List;

//import javax.persistence.CascadeType;

//import java.sql.Date;
//import java.sql.Time;
//import java.util.List;

//import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
//import javax.persistence.FetchType;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.OneToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

//import javax.persistence.OneToMany;



@NoArgsConstructor

@Entity
public class Debt {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int dId;
	
	
	
	public int getdId() {
		return dId;
	}

	public void setdId(int dId) {
		this.dId = dId;
	}

	@OneToMany(fetch=FetchType.LAZY,cascade=CascadeType.ALL,mappedBy="debt")
	private List<Borrow> borrow;
	
	@OneToMany(fetch=FetchType.LAZY,cascade=CascadeType.ALL,mappedBy="debt")
	private List<Lend> lend;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL,mappedBy="debt")
	private User user;
}