
import { createReducer, on } from '@ngrx/store';
import * as ProductActions from '../actions/products.action';

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface ProductsState {
  data: Product[]; 
  loading: boolean;
  error: any;
}

const initialState: ProductsState = {
  data: [],
  loading: false,
  error: null,
};

export const productsReducer = createReducer(
  initialState,
  on(ProductActions.fetchProductsSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(ProductActions.fetchProductsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(ProductActions.fetchProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })
  )
)
