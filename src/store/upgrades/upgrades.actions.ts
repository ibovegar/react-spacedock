import { Upgrade, Spaceship } from 'models';

export type ActionTypes =
  | { type: 'LOAD_UPGRADES_REQUEST' }
  | { type: 'LOAD_UPGRADES_SUCCESS'; upgrades: Upgrade[] }
  | { type: 'DETACH_UPGRADE_FAILURE'; error: any }
  | { type: 'DETACH_UPGRADE_REQUEST' }
  | { type: 'DETACH_UPGRADE_SUCCESS'; upgrade: Upgrade }
  | { type: 'LOAD_UPGRADES_FAILURE'; error: any }
  | { type: 'SET_ATTACHED_UPGRADE_REQUEST' }
  | {
      type: 'SET_ATTACHED_UPGRADE_SUCCESS';
      spacecraft: Spaceship;
      oldUpgrade: Upgrade;
      newUpgrade: Upgrade;
    }
  | { type: 'SET_ATTACHED_UPGRADE_FAILURE'; error: any };

export const loadUpgradesRequest = () => ({
  type: 'LOAD_UPGRADES_REQUEST'
});

export const loadUpgradesSuccess = (upgrades: Upgrade[]): ActionTypes => ({
  type: 'LOAD_UPGRADES_SUCCESS',
  upgrades
});

export const loadUpgradesFailure = (error: any): ActionTypes => ({
  type: 'LOAD_UPGRADES_FAILURE',
  error
});

export const detachUpgradeRequest = () => ({
  type: 'DETACH_UPGRADE_REQUEST'
});

export const detachUpgradeSuccess = (upgrade: Upgrade): ActionTypes => ({
  type: 'DETACH_UPGRADE_SUCCESS',
  upgrade
});

export const detachUpgradeFailure = (error: any): ActionTypes => ({
  type: 'DETACH_UPGRADE_FAILURE',
  error
});

export const setAttachedUpgradeRequest = () => ({
  type: 'SET_ATTACHED_UPGRADE_REQUEST'
});

export const setAttachedUpgradeSuccess = (
  spacecraft: Spaceship,
  oldUpgrade: Upgrade,
  newUpgrade: Upgrade
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
