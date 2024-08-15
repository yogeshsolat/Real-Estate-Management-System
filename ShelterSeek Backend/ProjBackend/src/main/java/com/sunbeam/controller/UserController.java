package com.sunbeam.controller;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.PropertyDTO;
import com.sunbeam.DTO.SignInRequest;
import com.sunbeam.DTO.UserDTO;
import com.sunbeam.entities.Owner;
import com.sunbeam.services.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

	@Autowired
	private UserService userService;
	@PostMapping("/registeruser")
	public ResponseEntity<?> addNewUser(@RequestBody UserDTO userdto){
		System.out.println("in add new user"+userdto);
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(userService.addUser(userdto));
		}
		catch(RuntimeException e){
			System.out.println("error"+e);
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
		
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> signInUser(@RequestBody 
			@Valid SignInRequest request) {
		System.out.println("in sign in " + request);
		
			return ResponseEntity
					.ok(userService.authenticateUser(request));
		
	}

}
