package com.sunbeam.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sunbeam.entities.WishList;

public interface WishListDao extends JpaRepository<WishList, Long> {
    WishList findByUserId(Long userId);
}
