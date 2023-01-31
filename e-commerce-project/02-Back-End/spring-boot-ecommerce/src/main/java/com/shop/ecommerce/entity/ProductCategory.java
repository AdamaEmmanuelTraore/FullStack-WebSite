package com.shop.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "product_category")   // SERVE A MAPPARE LA CLASSE DELLA TABELLA(IN QUESTO CASO "productCategory")
// @Data    // BUG PER I DB "UNO A MOLTI" E "MOLTI A UNO", IN QUESTO CASO USO GETTER E SETTER
@Getter     // ANNOTAZIONE LOMBOK (ALTERNATIVA A @Data)
@Setter     // ANNOTAZIONE LOMBOK (ALTERNATIVA A @Data)
public class ProductCategory {

    @Id     // AGGIUNGO I MAPPING JPA
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "category_name")
    private String categoryName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")    // RELAZIONE UNO A MOLTI NEL DB
    private Set<Product> products;
}
