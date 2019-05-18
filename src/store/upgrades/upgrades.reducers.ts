import { ActionTypes } from './upgrades.actions';
import * as fromInterface from './upgrades.interfaces';

const initialState: fromInterface.State = {
  entities: [],
  isLoading: false
};

export function reducer(
  state: fromInterface.State = initialState,
  action: any
): fromInterface.State {
  switch (action.type) {
    case ActionTypes.LOAD_UPGRADES_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case ActionTypes.LOAD_UPGRADES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        entities: action.upgrades
      };

    case ActionTypes.LOAD_UPGRADES_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}
