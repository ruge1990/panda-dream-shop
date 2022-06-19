import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DreamerService, Product } from '../dreamer.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  rippleColor: string = "#ff4081";
  productList !: Observable<Product[]>;
  displayedColumns: string[] = ['id', 'product_name', 'department', 'material', 'color', 'price'];

  constructor(
    private dreamerService: DreamerService
  ) { }

  ngOnInit(): void {
    this.productList = this.dreamerService.getProductList();
  }

  newDream() {
    this.productList = this.dreamerService.getProductList();
  }
}
