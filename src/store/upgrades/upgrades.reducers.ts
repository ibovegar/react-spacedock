import { ActionTypes } from './upgrades.actions';
import State from './upgrades.interfaces';
import { toEntities, upsertEntities } from 'utils/helpers';
import { Upgrade } from 'models';

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
    case 'LOAD_UPGRADES_REQUEST': {
      return {
        ...state,
        isLoading: true
      };
    }

    case 'LOAD_UPGRADES_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        entities: upsertEntities(
          state.entities,
          toEntities(action.upgrades, 'id')
        ),
        ids: action.upgrades.map((upgrade: Upgrade) => upgrade.id)
      };
    }

    case 'LOAD_UPGRADES_FAILURE': {
      return {
        ...state,
        isLoading: false
      };
    }

    case 'DETACH_UPGRADE_SUCCESS':
    case 'ATTACH_UPGRADE_SUCCESS': {
      let entities: any = { ...state.entities };
      entities[action.upgrade.id] = action.upgrade;

      return {
        ...state,
        entities
      };
    }

    default:
      return state;
  }
}
