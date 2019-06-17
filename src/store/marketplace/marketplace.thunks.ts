import { Dispatch } from 'redux';
import * as actions from './marketplace.actions';
import * as API from 'api/store.api';
import { Spaceship, Upgrade } from 'models';

export const loadStore = () => async (dispatch: Dispatch) => {
  dispatch(actions.loadStoreRequest());
  try {
    const response: any = await API.get();
    dispatch(actions.loadStoreSuccess(response));
  } catch (error) {
    dispatch(actions.loadStoreFailure(error));
  }
};

export const purchase = (cart: (Spaceship | Upgrade)[]) => async (
  dispatch: Dispatch
) => {
  dispatch(actions.purchaseRequest());
  try {
    await API.purchase(cart);
    dispatch(actions.purchaseSuccess());
  } catch (error) {
    dispatch(actions.purchaseFailure(error));
  }
};
