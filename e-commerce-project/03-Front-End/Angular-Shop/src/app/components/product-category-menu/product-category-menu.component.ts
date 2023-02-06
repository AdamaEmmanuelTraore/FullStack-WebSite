import { Component, OnInit } from '@angular/core';
import { ProductCategoryComponent } from 'src/app/common/product-category/product-category.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {

  productCategories: ProductCategoryComponent[] = [];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.listProductCategories();
  }

  public listProductCategories(): void {
    this.productService.getProductCategories().subscribe(data => {
      console.log('Product Categories =' + JSON.stringify(data));
      this.productCategories = data;
    }
    );
  }
}
