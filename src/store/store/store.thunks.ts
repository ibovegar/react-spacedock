import { Dispatch } from 'redux';
import * as actions from './store.actions';
import * as API from 'api/store.api';

export const loadStore = () => async (dispatch: Dispatch) => {
  dispatch(actions.loadStoreRequest());
  try {
    const response: any = await API.get();
    dispatch(actions.loadStoreSuccess(response));
  } catch (error) {
    dispatch(actions.loadStoreFailure(error));
  }
};
