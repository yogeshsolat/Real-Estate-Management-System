package com.sunbeam.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sunbeam.entities.WishListItem;

public interface WishListItemDao extends JpaRepository<WishListItem, Long> {
}

