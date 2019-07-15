import { ActionTypes } from './missions.actions';
import State from './missions.interfaces';
import { toEntities, upsertEntities } from 'utils/helpers';
import { Mission } from 'models';

const initialState: State = {
  ids: [],
  entities: {},
  isLoading: true
};

export function reducer(
  state: State = initialState,
  action: ActionTypes
): State {
  switch (action.type) {
    case 'LOAD_MISSIONS_REQUEST': {
      return {
        ...state,
        isLoading: true
      };
    }

    case 'LOAD_MISSIONS_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        entities: upsertEntities(
          state.entities,
          toEntities(action.missions, 'id')
        ),
        ids: action.missions.map((mission: Mission) => mission.id)
      };
    }

    case 'LOAD_MISSIONS_FAILURE': {
      return {
        ...state,
        isLoading: false
      };
    }

    default:
      return state;
  }
}
