import { ActionTypes } from './spaceships.actions';
import * as fromInterface from './spaceships.interfaces';

const initialState: fromInterface.State = {
  entities: [],
  isLoading: false
};

export function reducer(
  state: fromInterface.State = initialState,
  action: any
): fromInterface.State {
  switch (action.type) {
    case ActionTypes.LOAD_SPACESHIPS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case ActionTypes.LOAD_SPACESHIPS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        entities: action.spaceships
      };

    case ActionTypes.LOAD_SPACESHIPS_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}
