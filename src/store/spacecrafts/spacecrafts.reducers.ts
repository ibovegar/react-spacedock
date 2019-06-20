import { ActionTypes } from './spacecrafts.actions';
import State from './spacecrafts.interfaces';
import { Spacecraft } from 'models';
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
    case 'LOAD_ALL_spacecraftS_REQUEST': {
      return {
        ...state,
        isLoading: true
      };
    }

    case 'LOAD_ALL_spacecraftS_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        entities: toEntities(action.spacecrafts, 'id'),
        ids: action.spacecrafts.map((spacecraft: Spacecraft) => spacecraft.id)
      };
    }

    case 'LOAD_ALL_spacecraftS_FAILURE': {
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
    //   const newspacecrafts = { ...state.entities };
    //   newspacecrafts[action.spacecraft.id] = action.spacecraft;

    //   return {
    //     ...state,
    //     isLoading: false,
    //     entities: newspacecrafts,
    //     ids: [...state.ids, action.spacecraft.id],
    //     selectedId: action.spacecraft.id
    //   };

    default:
      return state;
  }
}
