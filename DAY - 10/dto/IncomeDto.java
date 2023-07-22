package com.neo.security.dto;

import java.sql.Date;
import java.sql.Time;

import lombok.Data;


@Data
public class IncomeDto {
	private int iId;
	private String iAmt;
	private String iSource;
	private String iDesc;
	private Date iDate;
	
}
