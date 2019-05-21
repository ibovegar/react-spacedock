import { Dispatch } from 'redux';
import * as actions from './upgrades.actions';
import * as API from 'api/upgrades.api';
import { IUpgrade } from 'models';

export const loadInventory = () => async (dispatch: Dispatch) => {
  dispatch(actions.loadInventoryRequest());
  try {
    const response: IUpgrade[] = await API.getInventory();
    dispatch(actions.loadInventorySuccess(response));
  } catch (error) {
    dispatch(actions.loadInventoryFailure(error));
  }
};
