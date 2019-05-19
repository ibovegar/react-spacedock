import { ActionTypes } from './upgrades.actions';
import State from './upgrades.interfaces';

const initialState: State = {
  entities: [],
  isLoading: false
};

export function reducer(
  state: State = initialState,
  action: ActionTypes
): State {
  switch (action.type) {
    case 'LOAD_UPGRADES_REQUEST':
      return {
        ...state,
        isLoading: true
      };

    case 'LOAD_UPGRADES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        entities: action.upgrades
      };

    case 'LOAD_UPGRADES_FAILURE':
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}
