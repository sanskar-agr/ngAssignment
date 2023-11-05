import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';


import { of } from 'rxjs';
import { loadProducts, loadProductsSuccess } from '../actions/product.actions';
import { ProductService } from 'src/app/service/product.service';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((products) => loadProductsSuccess({ products })),
          catchError((error) => of())
        )
      )
    )
  );

  constructor(private actions$: Actions, private productService: ProductService) {}
}