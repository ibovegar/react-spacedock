import { IUpgrade, ISpaceship } from 'models';

export type ActionTypes =
  | { type: 'LOAD_STORE_REQUEST' }
  | { type: 'LOAD_STORE_SUCCESS'; store: Array<IUpgrade | ISpaceship> }
  | { type: 'LOAD_STORE_FAILURE'; error: any };

export const loadStoreRequest = () => ({
  type: 'LOAD_UPGRADES_REQUEST'
});

export const loadStoreSuccess = (
  store: Array<IUpgrade | ISpaceship>
): ActionTypes => ({
  type: 'LOAD_STORE_SUCCESS',
  store
});

export const loadStoreFailure = (error: any): ActionTypes => ({
  type: 'LOAD_STORE_FAILURE',
  error
});
