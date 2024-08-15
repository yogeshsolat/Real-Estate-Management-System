package com.sunbeam.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.DAO.AdminDao;
import com.sunbeam.DTO.OwnerDTO;
import com.sunbeam.DTO.UserDTO;
import com.sunbeam.entities.Role;
import com.sunbeam.entities.User;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
     
	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private AdminDao adminDao;
	
	@Override
	public List<UserDTO> getAllUsers() {
    List<User>	tenantslist =	adminDao.findByRole(Role.valueOf("USER"));
    List<UserDTO> userDtoList=new ArrayList<UserDTO>();
    for (User user : tenantslist) {
    	UserDTO userDTO = modelMapper.map(user, UserDTO.class);
    	userDtoList.add(userDTO);
	}
    
    	return userDtoList;
	}
	@Override
	public List<OwnerDTO> getAllOwners() {
	    List<User>	ownerslist =	adminDao.findByRole(Role.valueOf("OWNER"));
	    List<OwnerDTO> ownerDtoList=new ArrayList<OwnerDTO>();
	    for (User user : ownerslist) {
	    	OwnerDTO ownerDto = modelMapper.map(user, OwnerDTO.class);
	    	ownerDtoList.add(ownerDto);
		}
	    
	    return ownerDtoList;
	}
	@Override
	public String blockUser(Long id) {
		User user=adminDao.findById(id).orElseThrow();
		user.setBlocked(true);
		return "blocked";
	}
	
	@Override
	public String UnblockUser(Long id) {
		User user=adminDao.findById(id).orElseThrow();
		user.setBlocked(false);
		return "Unblocked";
	}
}
