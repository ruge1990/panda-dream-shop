import { createFeatureSelector } from "@ngrx/store";
import { Product } from "../product-list/products.model";

export const selectProducts = createFeatureSelector<ReadonlyArray<Product>>('products');