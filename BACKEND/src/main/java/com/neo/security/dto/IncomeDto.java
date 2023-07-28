package com.neo.security.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class IncomeDto {
	private int iId;
	private String iAmt;
	private String iSource;
	private String iDesc;
	private Date iDate;
}