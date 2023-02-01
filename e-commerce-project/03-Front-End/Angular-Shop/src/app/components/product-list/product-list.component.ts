import { Component, OnInit } from '@angular/core';
import { ProductComponent } from 'src/app/common/product/product.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductComponent[] = []; // QUI DEFINISCO UNA PROPRIETA'

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProductList().subscribe(data => {    // IL METODO VIENE INVOCATO UNA VOLTA CHE MI INSCRIVO
      this.products = data;
    }) 
  }
}
