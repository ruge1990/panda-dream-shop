import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProducts } from '../state/products.selectors';
import { getProductList } from '../state/products.actions';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  rippleColor: string = "#ff4081";
  products$ = this.store.select(selectProducts);

  displayedColumns: string[] = ['id', 'product_name', 'department', 'material', 'color', 'price'];

  constructor(
    private productsService: ProductsService,
    private store: Store
  ) { 
  }

  ngOnInit(): void {
    this.productsService
    .getProducts()
    .subscribe((products) => this.store.dispatch(getProductList({products})));
  }

  newDream() {
    this.productsService
    .getProducts()
    .subscribe((products) => this.store.dispatch(getProductList({ products })));
  }
}
