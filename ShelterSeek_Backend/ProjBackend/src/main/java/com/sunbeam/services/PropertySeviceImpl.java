package com.sunbeam.services;

import java.io.File;
import java.io.IOError;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;


import com.sunbeam.DAO.OwnerDao;
import com.sunbeam.DAO.PropertyDao;
import com.sunbeam.DTO.AddressDTO;
import com.sunbeam.DTO.PropertyDTO;
import com.sunbeam.DTO.PropertyDesDTO;
import com.sunbeam.DTO.PropertyReqDTO;
import com.sunbeam.DTO.PropertyResDTO;
import com.sunbeam.custom_exceptions.ResourceNotFoundException;
import com.sunbeam.entities.Category;
import com.sunbeam.entities.Owner;
import com.sunbeam.entities.Property;

@Service
@Transactional
public class PropertySeviceImpl implements PropertyService {
	@Autowired
	PropertyDao propertyDao;

//	@Autowired                   //may not needed
//	CategoryDao categoryDao;
	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	OwnerDao ownerDao;
	
	
	//edited
	@Value("${image.upload.dir}")
	private String uploadDir;

	@Override
	public List<PropertyResDTO> getAllProperties() {
		// TODO Auto-generated method stub
		List<Property> propertyList = propertyDao.findAll();
		List<PropertyResDTO> propertyDTOList = new ArrayList<PropertyResDTO>();
		for (Property property : propertyList) {
			PropertyResDTO propertyDTO = modelMapper.map(property, PropertyResDTO.class);
			String imgarr[] = property.getMainImgUrl().split("images");
			String mimg="http://localhost:8080/images/"+imgarr[imgarr.length-1].substring(1);
			propertyDTO.setMainImgUrl(mimg);
			propertyDTOList.add(propertyDTO);
		}

		return propertyDTOList;
	}

	@Override
	public PropertyDesDTO getProperty(Long id) {
		// TODO Auto-generated method stub
		Property property = propertyDao.findById(id).orElseThrow();
		System.out.println(property.getMainImgUrl());
		System.out.println(property.getOwner().getFirstName());
		PropertyDesDTO propertyDTO = modelMapper.map(property, PropertyDesDTO.class);
//		propertyDao.save(property);
		String imgarr[] = property.getMainImgUrl().split("images");
		String mimg="http://localhost:8080/images/"+imgarr[imgarr.length-1].substring(1);
		propertyDTO.setMainImgUrl(mimg);
//		propertyDTO.setOwner(property.getOwner());

//		propertyDTO.setOwner(property.getOwner());
//		System.out.println(property.getOwner());
		propertyDao.save(property);
		
		
		
		
		
//		@Override
//		public PropertyDesDTO getProperty(Long id) {
//			// TODO Auto-generated method stub
//			Property property = propertyDao.findById(id).orElseThrow();
//			System.out.println(property.getMainImgUrl());
//			
//			PropertyDesDTO propertyDTO = modelMapper.map(property, PropertyDesDTO.class);
////			propertyDao.save(property);
//			String imgarr[] = property.getMainImgUrl().split("images");
//			String mimg="http://localhost:8080/images/"+imgarr[imgarr.length-1].substring(1);
//			propertyDTO.setMainImgUrl(mimg);
//			propertyDTO.setOwner(property.getOwner());
		
		
		
	return propertyDTO;
		
	}
	
	public String uploadImage(MultipartFile file) throws IOException {
		File directory = new File(uploadDir);
        if (!directory.exists()) {
            directory.mkdirs(); // Create the directory if it doesn't exist
        }
        Path filePath = Paths.get(uploadDir, file.getOriginalFilename());
        Files.write(filePath, file.getBytes());
        System.out.println("here"+" "+filePath.toString());
        return filePath.toString();
    }

    public byte[] getImage(String filename) throws IOException {
        Path filePath = Paths.get(uploadDir, filename);
        return Files.readAllBytes(filePath);
    }


	@Override
	public PropertyDTO addProperty(PropertyDTO propertyDTO, Long ownerId) throws IOException {
		// TODO Auto-generated method stub
		Property property = modelMapper.map(propertyDTO, Property.class);

		Owner owner = ownerDao.findById(ownerId).orElseThrow();

		property.setOwner(owner);
		
		//edited
		//Handle file upload for main image
//		MultipartFile file = propertyDTO.getFile();
//        if (file != null && !file.isEmpty()) {
//            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//            Path filePath = Paths.get(uploadDir, fileName).toAbsolutePath().normalize();
//            Files.createDirectories(filePath.getParent()); // Ensure the directory exists
//            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
//            property.setMainImgUrl(fileName); // Set the file path in the product entity
//        }
		
		propertyDao.save(property);
		
		PropertyDTO prop=	modelMapper.map(property, PropertyDTO.class );

		return prop;
	}
	@Override
	public PropertyDTO addNProperty(PropertyReqDTO propertyDTO, Long ownerId) throws IOException {
		// TODO Auto-generated method stub
		Property property = modelMapper.map(propertyDTO, Property.class);

		Owner owner = ownerDao.findById(ownerId).orElseThrow();
		System.out.println("this");

		property.setOwner(owner);

		property.setMainImgUrl(uploadImage(propertyDTO.getFile()));
		
		propertyDao.save(property);
		
		return null;
	}
	

	@Override
	public String deleteProperty(Long id) {
		// TODO Auto-generated method stub
//	Property property =	propertyDao.findById(id).orElseThrow();
		propertyDao.deleteById(id);
		return "Property deleted";
	}

	public PropertyDTO updateProperty(PropertyDTO propertyDTO, Long id) {
//public String updateProperty(PropertyDTO propertyDTO,Long id)
		// TODO Auto-generated method stub
//	Property property1 = modelMapper.map(propertyDTO, Property.class);

		Property property = propertyDao.findById(id).orElseThrow();
		System.out.println(property);
		property.setBalcony(propertyDTO.getBalcony());
		property.setBathrooms(propertyDTO.getBathrooms());
		property.setDeposit(propertyDTO.getDeposit());
		property.setFlatType(propertyDTO.getFlatType());
		property.setIsfurnished(propertyDTO.isIsfurnished());
		property.setTitle(propertyDTO.getTitle());
		property.setParking(propertyDTO.isParking());
		property.setPrice(propertyDTO.getPrice());
		property.setPropSize(propertyDTO.getPropSize());
		property.setPropType(propertyDTO.getPropType());
		property.setRent(propertyDTO.getRent());
		property.setCategory(property.getCategory());
		propertyDao.save(property);

		PropertyDTO propertyDTO2 = modelMapper.map(property, PropertyDTO.class);
		System.out.println(propertyDTO2);

		return propertyDTO2;
	}
	
	public List<PropertyResDTO> getAllProp(Long id) {
	  List<Property> propertyList =  propertyDao.findPropertiesByOwnerId(id);
	  
	  List<PropertyResDTO> list = new ArrayList<PropertyResDTO>();
	  for(Property prop : propertyList) {
		PropertyResDTO property =  modelMapper.map(prop, PropertyResDTO.class);
		String imgarr[] = property.getMainImgUrl().split("images");
		String mimg="http://localhost:8080/images/"+imgarr[imgarr.length-1].substring(1);
		property.setMainImgUrl(mimg);
		list.add(property);
	  }
	  
	  
	  return list;
	}

	 public PropertyDesDTO getPropertyWithOwner(Long id) {
	        Property property = propertyDao.findPropertyByIdWithOwner(id);
	        if (property == null) {
	            throw new ResourceNotFoundException("Property with ID " + id + " not found");
	        }

	        // Ensure the owner is being fetched
	        Owner owner = property.getOwner();
	        if (owner == null) {
	            throw new ResourceNotFoundException("Owner not found for Property ID " + id);
	        }

	        PropertyDesDTO propertyDTO = modelMapper.map(property, PropertyDesDTO.class);

	        // Process the image URL
	        String imgarr[] = property.getMainImgUrl().split("images");
	        String mimg = "http://localhost:8080/images/" + imgarr[imgarr.length - 1].substring(1);
	        propertyDTO.setMainImgUrl(mimg);

	        return propertyDTO;
	    }
	
	
	
	
	
}
