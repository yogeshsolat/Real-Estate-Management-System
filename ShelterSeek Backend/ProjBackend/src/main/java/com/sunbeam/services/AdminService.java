package com.sunbeam.services;

import java.util.List;

import com.sunbeam.DTO.OwnerDTO;
import com.sunbeam.DTO.UserDTO;

public interface AdminService {
	public List<UserDTO> getAllUsers();
	public List<OwnerDTO> getAllOwners();
	public String blockUser(Long id);
	public String UnblockUser(Long id);
}
