import { ActionTypes } from './marketplace.actions';
import State from './marketplace.interfaces';

const initialState: State = {
  products: [],
  cart: [],
  isLoading: true
};

export function reducer(
  state: State = initialState,
  action: ActionTypes
): State {
  switch (action.type) {
    case 'LOAD_STORE_REQUEST':
      return {
        ...state,
        isLoading: true
      };

    case 'LOAD_STORE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        products: action.products
      };

    case 'LOAD_STORE_FAILURE':
      return {
        ...state,
        isLoading: false
      };

    case 'ADD_CART':
      return {
        ...state,
        cart: [...state.cart, action.product]
      };

    case 'REMOVE_CART':
      return {
        ...state,
        cart: state.cart.filter((_, i) => i !== action.index)
      };

    default:
      return state;
  }
}
