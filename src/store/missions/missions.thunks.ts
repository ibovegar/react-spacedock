import { Dispatch } from 'redux';
import * as actions from './missions.actions';
import * as API from 'api/missions.api';

export const loadMissions = () => async (dispatch: Dispatch) => {
  dispatch(actions.loadMissionsRequest());
  try {
    const response: any = await API.getAll();
    dispatch(actions.loadMissionsSuccess(response));
  } catch (error) {
    dispatch(actions.loadMissionsFailure(error));
  }
};
