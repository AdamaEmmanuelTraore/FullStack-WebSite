import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // L'HO IMPORTATO MANUALMENTE
import { ProductComponent } from '../common/product/product.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // L'HO IMPORTATO MANUALMENTE


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products'; // QUI DEFINISCO L'URL(URL DEL BACK-END) DI BASE PER IL SERVIZIO

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<ProductComponent[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponse {
  _embedded: {
    products: ProductComponent[];
  }
}
