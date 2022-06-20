import { Product } from "../product-list/products.model";

export interface AppState {
    products: ReadonlyArray<Product>;
}