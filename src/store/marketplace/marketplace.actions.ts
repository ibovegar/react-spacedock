import { Upgrade, Spacecraft } from 'models';

export type ActionTypes =
  | { type: 'LOAD_STORE_REQUEST' }
  | { type: 'LOAD_STORE_SUCCESS'; products: (Upgrade | Spacecraft)[] }
  | { type: 'LOAD_STORE_FAILURE'; error: any }
  | { type: 'PURCHASE_REQUEST' }
  | { type: 'PURCHASE_SUCCESS' }
  | { type: 'PURCHASE_FAILURE'; error: any }
  | { type: 'ADD_CART'; product: Upgrade | Spacecraft }
  | { type: 'REMOVE_CART'; index: number };

export const loadStoreRequest = () => ({
  type: 'LOAD_UPGRADES_REQUEST'
});

export const loadStoreSuccess = (
  products: (Upgrade | Spacecraft)[]
): ActionTypes => ({
  type: 'LOAD_STORE_SUCCESS',
  products
});

export const loadStoreFailure = (error: any): ActionTypes => ({
  type: 'LOAD_STORE_FAILURE',
  error
});

export const addToCart = (product: Upgrade | Spacecraft) => ({
  type: 'ADD_CART',
  product
});

export const removeFromCart = (index: number) => ({
  type: 'REMOVE_CART',
  index
});

export const purchaseRequest = () => ({
  type: 'PURCHASE_REQUEST'
});

export const purchaseSuccess = () => ({
  type: 'PURCHASE_SUCCESS'
});

export const purchaseFailure = (error: any) => ({
  type: 'PURCHASE_FAILURE',
  error
});
