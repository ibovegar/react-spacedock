import { Dispatch } from 'redux';
import * as actions from './marketplace.actions';
import * as fromUserStore from '../user';
import * as API from 'api/store.api';
import { Spacecraft, Upgrade } from 'models';

export const loadStore = () => async (dispatch: Dispatch) => {
  dispatch(actions.loadStoreRequest());
  try {
    const response: any = await API.get();
    dispatch(actions.loadStoreSuccess(response));
  } catch (error) {
    dispatch(actions.loadStoreFailure(error));
  }
};

export const purchase =
  (cart: (Spacecraft | Upgrade)[]) => async (dispatch: Dispatch) => {
    const totalPrice = cart.reduce((sum, i) => {
      return sum + i.price;
    }, 0);

    dispatch(actions.purchaseRequest());

    API.purchase(cart)
      .then(() => {
        dispatch(actions.purchaseSuccess());
        dispatch(fromUserStore.subtractCredits(totalPrice));
      })
      .catch((error) => {
        dispatch(actions.purchaseFailure(error));
      });
  };
