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
  const newUpgrade = { ...upgrade };
  newUpgrade.isAttached = false;
  newUpgrade.spaceshipId = '';

  try {
    await API.update(newUpgrade);
    dispatch(actions.detachUpgradeSuccess(newUpgrade));
  } catch (error) {
    console.log(error);
  }
};

export const attachUpgrade = (
  spacecraft: Spaceship,
  upgrade: Upgrade
) => async (dispatch: Dispatch) => {
  const newUpgrade = { ...upgrade };
  newUpgrade.isAttached = true;
  newUpgrade.spaceshipId = spacecraft.id;

  try {
    await API.update(newUpgrade);
    dispatch(actions.attachUpgradeSuccess(newUpgrade));
  } catch (error) {
    console.log(error);
  }
};
