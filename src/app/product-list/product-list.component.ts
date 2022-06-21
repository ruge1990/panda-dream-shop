import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProducts } from '../state/products.selectors';
import * as fromActions from '../state/products.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products$ = this.store.select(selectProducts);

  displayedColumns: string[] = ['id', 'product_name', 'department', 'material', 'color', 'price'];

  constructor(
    private store: Store
  ) { 
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadProducts());
  }

  newDream() {
    this.store.dispatch(fromActions.loadProducts());
  }
}
