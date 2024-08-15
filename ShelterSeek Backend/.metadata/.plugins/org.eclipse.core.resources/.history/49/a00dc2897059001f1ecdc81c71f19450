package com.sunbeam.services;

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
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.DAO.CategoryDao;
import com.sunbeam.DAO.OwnerDao;
import com.sunbeam.DAO.PropertyDao;
import com.sunbeam.DTO.PropertyDTO;
import com.sunbeam.custom_exceptions.ResourceNotFoundException;
import com.sunbeam.entities.Category;
import com.sunbeam.entities.Owner;
import com.sunbeam.entities.Property;

@Service
@Transactional
public class PropertySeviceImpl implements PropertyService {
	@Autowired
	PropertyDao propertyDao;

	@Autowired
	CategoryDao categoryDao;
	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	OwnerDao ownerDao;
	
//	@Value("${image.upload.dir}")
//	private String uploadDir;

	@Override
	public List<PropertyDTO> getAllProperties() {
		// TODO Auto-generated method stub
		List<Property> propertyList = propertyDao.findAll();
		List<PropertyDTO> propertyDTOList = new ArrayList<PropertyDTO>();
		for (Property property : propertyList) {
			PropertyDTO propertyDTO = modelMapper.map(property, PropertyDTO.class);
			propertyDTOList.add(propertyDTO);
		}

		return propertyDTOList;
	}

	@Override
	public PropertyDTO getProperty(Long id) {
		// TODO Auto-generated method stub
		Property property = propertyDao.findById(id).orElseThrow();
		PropertyDTO propertyDTO = modelMapper.map(property, PropertyDTO.class);
		propertyDao.save(property);
		return propertyDTO;
	}

	@Override
	public PropertyDTO addProperty(PropertyDTO propertyDTO, Long ownerId, Long categoryId) throws IOException {
		// TODO Auto-generated method stub
		Property property = modelMapper.map(propertyDTO, Property.class);

		Owner owner = ownerDao.findById(ownerId).orElseThrow();
		Category category = categoryDao.findById(categoryId).orElseThrow();
		property.setOwner(owner);
		property.setCategory(category);
		
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
	
	public List<PropertyDTO> getAllProp(Long id) {
	  List<Property> propertyList =  propertyDao.findPropertiesByOwnerId(id);
	  
	  List<PropertyDTO> list = new ArrayList<PropertyDTO>();
	  for(Property prop : propertyList) {
		PropertyDTO property =  modelMapper.map(prop, PropertyDTO.class);
		list.add(property);
	  }
	  
	  
	  return list;
	}
	
	
}
