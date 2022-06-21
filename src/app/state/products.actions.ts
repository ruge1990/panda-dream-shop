import { createAction, props } from '@ngrx/store';
import { Product } from '../product-list/products.model';

export const getProductList = createAction(
    '[Product List/API] Get Product List',
    props<{ products: ReadonlyArray<Product> }> ()
    );
