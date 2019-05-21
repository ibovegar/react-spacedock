import { ActionTypes } from './upgrades.actions';
import State from './upgrades.interfaces';
import { toEntities } from 'utils/helpers';
import { IUpgrade } from 'models';

const initialState: State = {
  ids: [],
  entities: {},
  isLoading: false
};

export function reducer(
  state: State = initialState,
  action: ActionTypes
): State {
  switch (action.type) {
    case 'LOAD_INVENTORY_REQUEST':
      return {
        ...state,
        isLoading: true
      };

    case 'LOAD_INVENTORY_SUCCESS':
      return {
        ...state,
        isLoading: false,
        entities: toEntities(action.upgrades, 'id'),
        ids: action.upgrades.map((upgrade: IUpgrade) => upgrade.id)
      };

    case 'LOAD_INVENTORY_FAILURE':
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}
