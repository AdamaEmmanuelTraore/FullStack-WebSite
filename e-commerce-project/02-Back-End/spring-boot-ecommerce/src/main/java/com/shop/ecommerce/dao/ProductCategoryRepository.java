package com.shop.ecommerce.dao;

import com.shop.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category") // QUI HO MODIFICATO IL PERCORSO
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}