package com.sunbeam.services;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import com.sunbeam.DTO.PropertyDTO;
import com.sunbeam.DTO.PropertyDesDTO;
import com.sunbeam.DTO.PropertyReqDTO;
import com.sunbeam.DTO.PropertyResDTO;
import com.sunbeam.entities.Property;

public interface PropertyService {
	public List<PropertyResDTO> getAllProperties();

	public PropertyDesDTO getProperty(Long id);
	
	public PropertyDTO addProperty(PropertyDTO propertyDTO, Long ownerId) throws IOException;
	
	public PropertyDesDTO getPropertyWithOwner(Long id);
	
	public PropertyDTO updateProperty(PropertyDTO propertyDTO,Long id);
//	public void deleteById(Long id);
	
	public String deleteProperty(Long id);
	
	public List<PropertyResDTO> getAllProp(Long id) ;
	
	public PropertyDTO addNProperty(PropertyReqDTO propertyDTO, Long ownerId) throws IOException;

 
}
