import { ActionTypes } from './spaceships.actions';
import State from './spaceships.interfaces';
import { ISpaceship } from 'models';

const initialState: State = {
  entities: [],
  isLoading: false
};

export function reducer(
  state: State = initialState,
  action: ActionTypes
): State {
  switch (action.type) {
    case 'LOAD_ALL_SPACESHIPS_REQUEST':
      return {
        ...state,
        isLoading: true
      };

    case 'LOAD_ALL_SPACESHIPS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        entities: action.spaceships
      };

    case 'LOAD_ALL_SPACESHIPS_FAILURE':
      return {
        ...state,
        isLoading: false
      };

    case 'LOAD_SPACESHIP_REQUEST':
      return {
        ...state,
        isLoading: true
      };

    case 'LOAD_SPACESHIP_SUCCESS':
      const newSpaceships: ISpaceship[] = [...state.entities, action.spaceship];

      return {
        ...state,
        isLoading: false,
        entities: newSpaceships
      };

    case 'LOAD_SPACESHIP_FAILURE':
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}
