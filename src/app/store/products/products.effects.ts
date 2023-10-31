
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductService } from '../../services/product.service'; 
import * as ProductActions from '../actions/products.action';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions: Actions,
    private productService: ProductService 
  ) {}

  fetchProducts$ = createEffect(() =>
    this.actions.pipe(
      ofType(ProductActions.fetchProducts),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((data) => ProductActions.fetchProductsSuccess({ data })),
          catchError((error) => of(ProductActions.fetchProductsFailure({ error })))
        )
      )
    )
  );
}
