package com.sunbeam.DTO;

import javax.persistence.Column;

import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.entities.Category;
import com.sunbeam.entities.Owner;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PropertyDTO {
	
	
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
    
    private String main_image;

//    private Owner owner;
    
    //edited
//   private MultipartFile file;
    
    
    
    private AddressDTO propAddress;
	
	
	

}
