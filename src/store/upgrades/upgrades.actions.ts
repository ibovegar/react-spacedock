import { IUpgrade } from 'models';

export type ActionTypes =
  | { type: 'LOAD_UPGRADES_REQUEST' }
  | { type: 'LOAD_UPGRADES_SUCCESS'; upgrades: IUpgrade[] }
  | { type: 'LOAD_UPGRADES_FAILURE'; error: any };

export const loadUpgradesRequest = () => ({
  type: 'LOAD_UPGRADES_REQUEST'
});

export const loadUpgradesSuccess = (upgrades: IUpgrade[]): ActionTypes => ({
  type: 'LOAD_UPGRADES_SUCCESS',
  upgrades
});

export const loadUpgradesFailure = (error: any): ActionTypes => ({
  type: 'LOAD_UPGRADES_FAILURE',
  error
});
