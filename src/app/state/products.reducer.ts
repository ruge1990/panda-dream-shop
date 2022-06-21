import { createReducer, on } from "@ngrx/store";

import { getProductList } from "./products.actions";
import { Product, ChartData } from "../product-list/products.model";

export const initialState: ReadonlyArray<Product> = [];

export const productsReducer = createReducer(
    initialState,
    on(getProductList, ( state, {products} ) => ( products )),
);