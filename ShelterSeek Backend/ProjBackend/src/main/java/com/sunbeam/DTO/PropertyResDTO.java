package com.sunbeam.DTO;

import com.sunbeam.entities.Category;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PropertyResDTO {
	
	private long id;

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
    
    private String mainImgUrl;
    
    private Category category;
    
    private AddressDTO propAddress;
    
    
}
