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

    case 'DETACH_UPGRADE_SUCCESS': {
      const entities: any = { ...state.entities };
      const upgrade: Upgrade = entities[action.upgrade.id];
      upgrade.isAttached = false;
      upgrade.spaceshipId = '';

      return {
        ...state,
        entities
      };
    }

    case 'ATTACH_UPGRADE_REQUEST': {
      return {
        ...state,
        isLoading: true
      };
    }

    case 'ATTACH_UPGRADE_SUCCESS': {
      const entities: any = { ...state.entities };
      const newUpgrade: Upgrade = entities[action.upgrade.id];
      newUpgrade.isAttached = true;
      newUpgrade.spaceshipId = action.spacecraft.id;

      return {
        ...state,
        isLoading: false,
        entities
      };
    }

    case 'ATTACH_UPGRADE_FAILURE': {
      return {
        ...state,
        isLoading: false
      };
    }

    default:
      return state;
  }
}
