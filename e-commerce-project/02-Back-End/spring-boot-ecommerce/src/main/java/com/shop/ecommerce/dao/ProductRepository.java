package com.shop.ecommerce.dao;

import com.shop.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200") // CONSENTE L'ACCESSO A QUALSIASI SITO WEB PER EVITARE ERRORI
public interface ProductRepository extends JpaRepository<Product, Long> {
}
