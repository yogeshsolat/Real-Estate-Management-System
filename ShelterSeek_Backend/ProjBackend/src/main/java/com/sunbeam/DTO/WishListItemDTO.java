package com.sunbeam.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WishListItemDTO {
    private Long id;
    private Long wishlistId;
    private Long propertyId;
  private PropertyResDTO PropDT;
//    private Long userId;
}

