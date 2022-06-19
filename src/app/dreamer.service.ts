import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Product {
  id: number;
  uid: string;
  color: string;
  department: string;
  material: string;
  product_name: string;
  price: number;
  price_string: string;
  promo_code: string;
}

@Injectable({
  providedIn: 'root'
})

export class DreamerService {

  constructor(
    private http: HttpClient
  ) { }

  getProductList() {
    return this.http.get<Product[]>('https://random-data-api.com/api/commerce/random_commerce?size=100');
  }
}
