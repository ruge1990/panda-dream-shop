import { Product } from "./products.model";

export interface AppState {
    products: ReadonlyArray<Product>;
}