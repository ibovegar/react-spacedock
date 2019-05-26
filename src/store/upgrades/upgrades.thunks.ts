import { Dispatch } from 'redux';
import * as actions from './upgrades.actions';
import * as API from 'api/upgrades.api';
import { IUpgrade } from 'models';

export const loadUpgrades = (spaceshipId: string) => async (
  dispatch: Dispatch
) => {
  dispatch(actions.loadUpgradesRequest());
  try {
    const response: IUpgrade[] = await API.get(spaceshipId);
    dispatch(actions.loadUpgradesSuccess(response));
  } catch (error) {
    dispatch(actions.loadUpgradesFailure(error));
  }
};

export const loadAllUpgrades = () => async (dispatch: Dispatch) => {
  dispatch(actions.loadUpgradesRequest());
  try {
    const response: IUpgrade[] = await API.getAll();
    dispatch(actions.loadUpgradesSuccess(response));
  } catch (error) {
    dispatch(actions.loadUpgradesFailure(error));
  }
};
