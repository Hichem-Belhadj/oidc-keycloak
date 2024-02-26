package com.hbtheme.inventoryservice.repositories;

import com.hbtheme.inventoryservice.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, String> {
}
