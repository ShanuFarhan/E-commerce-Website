

import { createAction, props } from '@ngrx/store';
import { Product } from '../reducers/products.reducer';

export const fetchProducts = createAction('[Products] Fetch Products');
export const fetchProductsSuccess = createAction(
  '[Products] Fetch Products Success',
  props<{ data: Product[] }>()
);
export const fetchProductsFailure = createAction(
  '[Products] Fetch Products Failure',
  props<{ error: any }>()
);
