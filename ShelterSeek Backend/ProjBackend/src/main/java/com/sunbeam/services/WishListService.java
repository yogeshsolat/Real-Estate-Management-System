package com.sunbeam.services;

import com.sunbeam.DTO.WishListItemDTO;
import com.sunbeam.entities.WishList;

import java.util.List;

public interface WishListService {
    WishList getWishlistByUserId(Long userId);
//    WishListItemDTO addItemToWishlist(Long userId, Long propertyId);
    public String addItemToWishlist(Long userId, Long propertyId);
    public String removeProperty(Long propertyId, Long userId);
    List<WishListItemDTO> getWishlistItems(Long userId);
}

