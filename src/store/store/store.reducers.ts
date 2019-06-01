import { ActionTypes } from './store.actions';
import State from './store.interfaces';

const initialState: State = {
  store: [],
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
        store: action.store
      };

    case 'LOAD_STORE_FAILURE':
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}
