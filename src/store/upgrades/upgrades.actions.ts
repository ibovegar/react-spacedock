import { IUpgrade } from 'models';

export type ActionTypes =
  | { type: 'LOAD_INVENTORY_REQUEST' }
  | { type: 'LOAD_INVENTORY_SUCCESS'; upgrades: IUpgrade[] }
  | { type: 'LOAD_INVENTORY_FAILURE'; error: any };

export const loadInventoryRequest = () => ({
  type: 'LOAD_INVENTORY_REQUEST'
});

export const loadInventorySuccess = (upgrades: IUpgrade[]): ActionTypes => ({
  type: 'LOAD_INVENTORY_SUCCESS',
  upgrades
});

export const loadInventoryFailure = (error: any): ActionTypes => ({
  type: 'LOAD_INVENTORY_FAILURE',
  error
});
