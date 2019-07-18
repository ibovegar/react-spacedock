import { Dispatch } from 'redux';
import * as actions from './user.actions';
import * as API from 'api/user.api';
import { AppState } from 'store';

export const loadUserStats = () => async (dispatch: Dispatch) => {
  dispatch(actions.loadUserRequest());
  try {
    const response: any = await API.get();
    dispatch(actions.loadUserSuccess(response));
  } catch (error) {
    dispatch(actions.loadUserFailure(error));
  }
};

export const subtractCredits: any = (amount: number) => async (
  dispatch: Dispatch,
  getState: any
) => {
  const state: AppState = getState();
  const credits = state.user.credits - amount;

  try {
    await API.updateCredits(credits);
    dispatch(actions.updateCreditsSuccess(credits));
  } catch (error) {
    console.log('failed to update credits');
  }
};

export const addCredits: any = (amount: number) => async (
  dispatch: Dispatch,
  getState: any
) => {
  const state: AppState = getState();
  const credits = state.user.credits + amount;

  try {
    await API.updateCredits(credits);
    dispatch(actions.updateCreditsSuccess(credits));
  } catch (error) {
    console.log('failed to update credits');
  }
};
