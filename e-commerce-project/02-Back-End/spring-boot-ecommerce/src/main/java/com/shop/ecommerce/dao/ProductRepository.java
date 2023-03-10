package com.shop.ecommerce.dao;

import com.shop.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200") // CONSENTE L'ACCESSO A QUALSIASI SITO WEB PER EVITARE ERRORI(VISTO CHE SPRING BOOT USA LA PORTA 8080, MENTRE ANGULAR USA 4200)
public interface ProductRepository extends JpaRepository<Product, Long> {

    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);    // QUESTO EQUIVALE A UNA QUERY

}
