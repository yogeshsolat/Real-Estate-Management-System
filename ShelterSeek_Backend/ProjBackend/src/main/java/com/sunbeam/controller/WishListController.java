package com.sunbeam.controller;

import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.WishListItemDTO;
import com.sunbeam.services.WishListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wishlist")
@CrossOrigin(origins = "http://localhost:5173")
public class WishListController {
    @Autowired
    private WishListService wishListService;

    @GetMapping("/{userId}")
    public ResponseEntity<List<WishListItemDTO>> getWishlistItems(@PathVariable Long userId) {
        List<WishListItemDTO> items = wishListService.getWishlistItems(userId);
        return ResponseEntity.ok(items);
    }

    @PostMapping("/{userId}/add/{propertyId}")
    public ResponseEntity<?> addItemToWishlist(@PathVariable Long userId, @PathVariable Long propertyId) {
//        WishListItemDTO item = wishListService.addItemToWishlist(userId, propertyId);
//        return ResponseEntity.ok(item);
    	
    	try {
			return ResponseEntity.status(HttpStatus.CREATED).body(wishListService.addItemToWishlist(userId, propertyId));
		}
		catch(RuntimeException e){
			System.out.println("error"+e);
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
    	 	
    }

    @DeleteMapping("/{userId}/{propertyId}")
	public ResponseEntity<?> removeAllProperties(@PathVariable Long userId,@PathVariable Long propertyId){
		System.out.println("in remove property");
		try {
			return ResponseEntity.status(HttpStatus.OK).body(wishListService.removeProperty(userId, propertyId));
		}
		catch(RuntimeException e){
			System.out.println("error"+e);
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
		
	}
}
