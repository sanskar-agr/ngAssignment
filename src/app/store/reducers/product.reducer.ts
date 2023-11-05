import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { loadProductsSuccess } from '../actions/product.actions';


export interface ProductState extends EntityState<Product> {}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();
export const {
    selectAll,
  } = adapter.getSelectors();

export const initialState: ProductState = adapter.getInitialState();

export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => {
    return adapter.setAll(products, state);
  })
);

export function reducer(state: ProductState | undefined, action: any) {
  return productReducer(state, action);
}



