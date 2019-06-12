import { Dispatch } from 'redux';
import * as actions from './upgrades.actions';
import * as API from 'api/upgrades.api';
import { Upgrade, Spaceship } from 'models';

export const loadUpgrades = (spaceshipId: string) => async (
  dispatch: Dispatch
) => {
  dispatch(actions.loadUpgradesRequest());
  try {
    const response: Upgrade[] = await API.get(spaceshipId);
    dispatch(actions.loadUpgradesSuccess(response));
  } catch (error) {
    dispatch(actions.loadUpgradesFailure(error));
  }
};

export const loadAllUpgrades = () => async (dispatch: Dispatch) => {
  dispatch(actions.loadUpgradesRequest());
  try {
    const response: Upgrade[] = await API.getAll();
    dispatch(actions.loadUpgradesSuccess(response));
  } catch (error) {
    dispatch(actions.loadUpgradesFailure(error));
  }
};

export const detachUpgrade = (upgrade: Upgrade) => async (
  dispatch: Dispatch
) => {
  dispatch(actions.detachUpgradeSuccess(upgrade));
};

export const setAttachedUpgrade = (
  spacecraft: Spaceship,
  oldUpgrade: Upgrade,
  newUpgrade: Upgrade
) => async (dispatch: Dispatch) => {
  dispatch(
    actions.setAttachedUpgradeSuccess(spacecraft, oldUpgrade, newUpgrade)
  );
};
