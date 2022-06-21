import { createAction, props } from '@ngrx/store';
import { Product } from './products.model';

export const loadProducts = createAction(
    '[Products/PAGE] Get Product List'
    );

export const loadProductsSuccess = createAction(
    '[Products/API] Product loaded success',
    props<{ payload: ReadonlyArray<Product> }> ()
    );