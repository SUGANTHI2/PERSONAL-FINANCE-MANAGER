package com.neo.security.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ExpenseDto {
	private int eId;
	private String eAmt;
	private String eSource;
	private String eDesc;
	private Date eDate;
}
