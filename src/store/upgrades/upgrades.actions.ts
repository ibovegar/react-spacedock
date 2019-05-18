import { IUpgrade } from 'models';

export enum ActionTypes {
  LOAD_UPGRADES_REQUEST = 'LOAD_UPGRADES_REQUEST',
  LOAD_UPGRADES_SUCCESS = 'LOAD_UPGRADES_SUCCESS',
  LOAD_UPGRADES_FAILURE = 'LOAD_UPGRADES_FAILURE'
}

export const loadUpgradesRequest = () => ({
  type: ActionTypes.LOAD_UPGRADES_REQUEST
});

export const loadUpgradesSuccess = (upgrades: IUpgrade[]) => ({
  type: ActionTypes.LOAD_UPGRADES_SUCCESS,
  upgrades
});

export const loadUpgradesFailure = (error: any) => ({
  type: ActionTypes.LOAD_UPGRADES_FAILURE,
  error
});
