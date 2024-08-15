package com.sunbeam.DTO;

import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.entities.Category;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PropertyReqDTO {
private String propType;
	
    private double propSize;
	
	private String title;
	
    private double price;
	
    private String flatType;

    private int bathrooms;
	
    private boolean isfurnished;
	
    private boolean isParking;
	
    private int balcony;
	
    private double rent;
	
    private double deposit;
    
    private Category category;
    
    private MultipartFile file;
    
    
    private AddressDTO propAddress;
}
