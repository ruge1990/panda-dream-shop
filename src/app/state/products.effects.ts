import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, from } from "rxjs";
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as fromActions from './products.actions';
import { ProductsService } from "./products.service";

@Injectable()
export class ProductsEffects {
    loadProducts$ = createEffect(() =>
    this.actions$.pipe(
        ofType(fromActions.loadProducts),
        mergeMap(()=>
        this.productsService.getProducts().pipe(
            map(products => fromActions.loadProductsSuccess({payload: products})),
            catchError(()=> EMPTY)
        ))
    )
    );

    constructor(
        private actions$: Actions,
        private productsService: ProductsService
    ) {}
}