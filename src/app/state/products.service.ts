import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from './products.model';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Product[]>(
      'https://random-data-api.com/api/commerce/random_commerce?size=100'
      );
  }
}
