import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from 'src/app/common/product/product.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductComponent[] = []; // QUI DEFINISCO UNA PROPRIETA'
  currentCategoryId: number = 1;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }          // ACTIVATEDROUTE VIENE USATO PER ACCEDERE A UN DETERMINATO ID.

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  public listProducts(): void {

    // CONTROLLA SE IL PARAMETRO ID È DISPONIBILE
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId) {
      // SE HA LA CATEGORIA ID, LEGGILO E CONVERTILO DA STRINGA A NUMERO
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;    // ('')!: non è nullo
    } else {
      // IN CASO CONTRARIO, SE L'ID NON È DISPONIBILE PASSA DI DEFAULT ALL'ID 1
      this.currentCategoryId = 1;
    }

    // VOGLIO I PRODOTTI PER LA CATEGORIA ID DATA
    this.productService.getProductList(this.currentCategoryId).subscribe(data => {    // IL METODO VIENE INVOCATO UNA VOLTA CHE MI INSCRIVO
      this.products = data;
    }) 
  }
}
