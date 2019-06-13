import { ActionTypes } from './spaceships.actions';
import State from './spaceships.interfaces';
import { Spaceship } from 'models';
import { toEntities } from 'utils/helpers';

const initialState: State = {
  selected: undefined,
  entities: {},
  ids: [],
  isLoading: true
};

export function reducer(
  state: State = initialState,
  action: ActionTypes
): State {
  switch (action.type) {
    case 'LOAD_ALL_SPACESHIPS_REQUEST': {
      return {
        ...state,
        isLoading: true
      };
    }

    case 'LOAD_ALL_SPACESHIPS_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        entities: toEntities(action.spaceships, 'id'),
        ids: action.spaceships.map((spaceship: Spaceship) => spaceship.id)
      };
    }

    case 'LOAD_ALL_SPACESHIPS_FAILURE': {
      return {
        ...state,
        isLoading: false
      };
    }

    case 'SET_SELECTED_SPACECRAFT': {
      return {
        ...state,
        selected: state.entities[action.spacecraftId]
      };
    }

    // case 'LOAD_SPACECRAFT_SUCCESS':
    //   const newSpaceships = { ...state.entities };
    //   newSpaceships[action.spaceship.id] = action.spaceship;

    //   return {
    //     ...state,
    //     isLoading: false,
    //     entities: newSpaceships,
    //     ids: [...state.ids, action.spaceship.id],
    //     selectedId: action.spaceship.id
    //   };

    default:
      return state;
  }
}
