package com.sunbeam.services;

import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.DAO.UserDao;
import com.sunbeam.DTO.OwnerDTO;
import com.sunbeam.DTO.SignInRequest;
import com.sunbeam.DTO.UserDTO;
import com.sunbeam.custom_exceptions.AuthenticationException;
import com.sunbeam.entities.Role;
import com.sunbeam.entities.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private UserDao userDao;
	@Override
	public User addUser(UserDTO userDto) {
		// TODO Auto-generated method stub
		User user = modelMapper.map(userDto, User.class);
		user.setRole(Role.USER);
		user.setBlocked(false);
		
		
		return userDao.save(user);
	}
	@Override
	public Optional<User> getUserDetails(Long userId) {
		// TODO Auto-generated method stub
			
		return userDao.findById(userId);
	}
	@Override
	public UserDTO authenticateUser(SignInRequest request) {
		
		User userEntity = userDao.findByEmailAndPassword(request.getEmail(), request.getPassword())
				.orElseThrow(() -> new AuthenticationException("Invalid Email Or Password"));
		
		if(userEntity.getRole()== Role.valueOf("OWNER")) {
			return modelMapper.map(userEntity, OwnerDTO.class);
		}
		else if(userEntity.getRole()==Role.valueOf("USER")) {
			return modelMapper.map(userEntity, UserDTO.class);
		}
		else {
			return modelMapper.map(userEntity, UserDTO.class);
		}
	}
	@Override
	public UserDTO updateUser(UserDTO userDTO, Long id) {
		
		User user = userDao.findById(id).orElseThrow();
		user.setFirstName(userDTO.getFirstName());
		user.setLastName(userDTO.getLastName());
		user.setEmail(userDTO.getEmail());
		user.setPassword(userDTO.getPassword());
		user.setPhoneNumber(userDTO.getPhoneNumber());
		user.setRole(userDTO.getRole());
		user.setDob(userDTO.getDob());
		
		userDao.save(user);
		
		UserDTO userDTO2 = modelMapper.map(user, UserDTO.class);
		return userDTO2;
	}
	
	
}
