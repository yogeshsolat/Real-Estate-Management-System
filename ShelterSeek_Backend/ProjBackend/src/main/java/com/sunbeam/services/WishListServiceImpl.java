package com.sunbeam.services;

import com.sunbeam.DTO.PropertyResDTO;
import com.sunbeam.DTO.WishListItemDTO;
import com.sunbeam.entities.Property;

import com.sunbeam.entities.User;
import com.sunbeam.entities.WishList;
import com.sunbeam.entities.WishListItem;
import com.sunbeam.DAO.PropertyDao;

import com.sunbeam.DAO.UserDao;
import com.sunbeam.DAO.WishListItemDao;
import com.sunbeam.DAO.WishListDao;
import com.sunbeam.services.WishListService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WishListServiceImpl implements WishListService {
    @Autowired
    private WishListDao wishListDao;

    @Autowired
    private WishListItemDao wishListItemDao;

    @Autowired
    private PropertyDao propertyDao;

    @Autowired
    private UserDao userDao;
    
    @Autowired
    private ModelMapper modelMapper;
    
    
//    @Autowired
//    private TenantDao tenantDao; // Use TenantDao instead of UserDao

    @Override
    public WishList getWishlistByUserId(Long userId) {
        return wishListDao.findByUserId(userId);
    }

    @Override
    public String addItemToWishlist(Long userId, Long propertyId) {
    	User user = userDao.findById(userId).orElseThrow();
    	Property property = propertyDao.findById(propertyId).orElseThrow();
       WishList wishlist= user.getWishlist();
//        WishList wishlist = getWishlistByUserId(userId);
        if (wishlist == null) {
            wishlist = new WishList();
//            User user = userDao.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
           user.setWishlist(wishlist);
           wishlist.setUser(user);
//            wishlist.setUser(user);
            wishListDao.save(wishlist);
        }
        
//        for (WishListItem item : wishlist.getItems()) {
//            if (item.getProperty().equals(property)) {
//                return "Product already in wishlist";
//            }
        for (WishListItem item : wishlist.getItems()) {
            if (item.getProperty().getTitle().equals(property.getTitle())) {
                return "Property already in wishlist";
            }
        }
        
        WishListItem wishlistItem = new WishListItem();
        wishlistItem.setProperty(property);
        
        wishlist.addItem(wishlistItem);
       

        wishListDao.save(wishlist);
        
        
        
        
        
        

//        Property property = propertyDao.findById(propertyId).orElseThrow(() -> new RuntimeException("Property not found"));
//        WishListItem item = new WishListItem();
//        item.setWishlist(wishlist);
//        item.setProperty(property);
//        wishListItemDao.save(item);
//        
//        wishlist.addItem(item); // Update the wishlist with the new item
//        wishListDao.save(wishlist); // Save the wishlist with the updated items
//
//        WishListItemDTO itemDTO = new WishListItemDTO();
//        itemDTO.setId(item.getId());
//        itemDTO.setWishlistId(wishlist.getId());
//        itemDTO.setPropertyId(property.getId());

        return "added in wishlist";
    }


	@Override
	public String removeProperty(Long propertyId, Long userId) {
	    
	    User user = userDao.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

	    
	    WishList wishList = user.getWishlist();
	    if (wishList == null) {
	        throw new RuntimeException("Wishlist not found");
	    }

	   
	    WishListItem itemToDelete = null;
	    for (WishListItem wishlistItem : wishList.getItems()) {
	        if (wishlistItem.getProperty().getId().equals(propertyId)) {
	            itemToDelete = wishlistItem;
	            break;
	        }
	    }

	    
	    if (itemToDelete != null) {
	        wishList.getItems().remove(itemToDelete);  
	        wishListItemDao.deleteById(itemToDelete.getId());  
	    } else {
	        throw new RuntimeException("Property not found in wishlist");
	    }

	    return "Item deleted";
	}


    @Override
    public List<WishListItemDTO> getWishlistItems(Long userId) {
        WishList wishlist = getWishlistByUserId(userId);
        if (wishlist != null) {
            List<WishListItemDTO> itemDTOs = new ArrayList<>();
            for (WishListItem item : wishlist.getItems()) {
                WishListItemDTO itemDTO = new WishListItemDTO();
                itemDTO.setId(item.getId());
                itemDTO.setPropertyId(item.getProperty().getId());
                Property property = propertyDao.findById(itemDTO.getPropertyId()).orElseThrow();
                PropertyResDTO propertyDTO =  modelMapper.map(property, PropertyResDTO.class);
            	String imgarr[] = property.getMainImgUrl().split("images");
            	String mimg="http://localhost:8080/images/"+imgarr[imgarr.length-1].substring(1);
            	propertyDTO.setMainImgUrl(mimg);
            	itemDTO.setPropDT(propertyDTO);
                itemDTO.setWishlistId(wishlist.getId());
                itemDTOs.add(itemDTO);
            }
            return itemDTOs;
        }
        return new ArrayList<>();
    }

    
}
