package com.neo.security.dto;

import java.util.List;

import lombok.Data;

@Data
public class UserDto {
	private int id;
	private String userName;
	private String email;
//	private String password;
	private List<IncomeDto> income;
}
