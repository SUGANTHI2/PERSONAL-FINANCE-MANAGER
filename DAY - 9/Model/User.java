package com.example.demo.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
@Getter
@Setter
@NoArgsConstructor

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String fName;
	private String lName;
	private String userName;
	private String password;
	private double balance;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="user")
	private List<Income> income; 
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="user")
	private List<Expense> expense; 
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="user")
	private List<Budget> budget; 
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="user")
	private List<Goal> goal; 
	
	@OneToOne(targetEntity=Debt.class)
	private Debt debt;
}