import { createReducer, on } from "@ngrx/store";

import { loadProductsSuccess } from "./products.actions";
import { Product } from "./products.model";

export const initialState: ReadonlyArray<Product> = [];

export const productsReducer = createReducer(
    initialState,
    on(loadProductsSuccess, (state, {payload}) => ( payload ))
);