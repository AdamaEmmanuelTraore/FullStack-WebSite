package com.shop.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "product")    // SERVE A MAPPARE LA CLASSE DELLA TABELLA(IN QUESTO CASO "Product")
@Data   // ANNOTAZIONE LOMBOK PER GENERARE AUTOMATICAMENTE I GETTER E I SETTER
public class Product {

    @Id     // AGGIUNGO I MAPPING JPA
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")    // QUESTA "@Column" SI ASSOCIA ALL'ID O AL VALORE ASSOCIATO DELLA COLONNA DEL DATABASE
    private Long id;

    @ManyToOne      // RELAZIONE MOLTI A UNO NEL DB
    @JoinColumn(name = "category_id", nullable = false)       // CORRISPONDE ALLA CHIAVE ESTERNA
    private ProductCategory category;

    @Column(name = "sku")
    private String sku;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "unit_Price")
    private BigDecimal unitPrice;

    @Column(name = "image_Url")
    private String imageUrl;

    @Column(name = "active")
    private boolean active;

    @Column(name = "units_In_Stock")
    private int unitsInStock;

    @Column(name = "date_Created")
    @CreationTimestamp      // CON QUESTA ANOTAZIONE, HIBERNATE AGGIORNA AUTOMATICAMENTE IL TIMESTAMPS
    private Date dateCreated;

    @Column(name = "last_Updated")
    @UpdateTimestamp    // CON QUESTA ANOTAZIONE, HIBERNATE AGGIORNA AUTOMATICAMENTE IL TIMESTAMPS
    private Date lastUpdated;
}
