package com.sunbeam.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class OwnerDesDTO {
	private String firstName;
	private String lastName;
	private String phoneNumber;
	private String email;
}
