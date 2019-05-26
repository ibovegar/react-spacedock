import { IUpgrade, ISpaceship } from 'models';

export type ActionTypes =
  | { type: 'LOAD_UPGRADES_REQUEST' }
  | { type: 'LOAD_UPGRADES_SUCCESS'; upgrades: IUpgrade[] }
  | { type: 'LOAD_UPGRADES_FAILURE'; error: any }
  | { type: 'SET_ATTACHED_UPGRADE_REQUEST' }
  | {
      type: 'SET_ATTACHED_UPGRADE_SUCCESS';
      spacecraft: ISpaceship;
      oldUpgrade: IUpgrade;
      newUpgrade: IUpgrade;
    }
  | { type: 'SET_ATTACHED_UPGRADE_FAILURE'; error: any };

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

export const setAttachedUpgradeRequest = () => ({
  type: 'SET_ATTACHED_UPGRADE_REQUEST'
});

export const setAttachedUpgradeSuccess = (
  spacecraft: ISpaceship,
  oldUpgrade: IUpgrade,
  newUpgrade: IUpgrade
): ActionTypes => ({
  type: 'SET_ATTACHED_UPGRADE_SUCCESS',
  spacecraft,
  oldUpgrade,
  newUpgrade
});

export const setAttachedUpgradeFailure = (error: any): ActionTypes => ({
  type: 'SET_ATTACHED_UPGRADE_FAILURE',
  error
});
