import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // L'HO IMPORTATO MANUALMENTE
import { ProductComponent } from '../common/product/product.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // L'HO IMPORTATO MANUALMENTE
import { ProductCategoryComponent } from '../common/product-category/product-category.component';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products'; // QUI DEFINISCO L'URL(URL DEL BACK-END) DI BASE PER IL SERVIZIO / (?size=100) cosi cambio le dimensioni della pagina
  private categoryUrl = 'http://localhost:8080/api/product-category';  // QUI DEFINISCO L'URL(URL DEL BACK-END) DI BASE PER IL SERVIZIO

  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId: number): Observable<ProductComponent[]> {

    // CREAZIONE DELL'URL DI RICERCA IN BASE ALLA CATEGORY ID
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getProductCategories(): Observable<ProductCategoryComponent[]> {
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }
}

interface GetResponseProducts {
  _embedded: {
    products: ProductComponent[];
  }
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategoryComponent[];
  }
}
