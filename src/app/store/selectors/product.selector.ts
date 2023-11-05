// product.selectors.ts

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from '../reducers/product.reducer'

export const selectProductState = createFeatureSelector<fromProduct.ProductState>('products');

export const selectAllProducts = createSelector(
  selectProductState,
  fromProduct.selectAll
);
