import { Dispatch } from 'redux';
import * as actions from './missions.actions';
import * as API from 'api/missions.api';
import { Mission } from 'models';

export const loadMissions = () => async (dispatch: Dispatch) => {
  dispatch(actions.loadMissionsRequest());
  try {
    const response: any = await API.getAll();
    dispatch(actions.loadMissionsSuccess(response));
  } catch (error) {
    dispatch(actions.loadMissionsFailure(error));
  }
};

export const completeMission = (mission: Mission) => async (
  dispatch: Dispatch
) => {
  const updatedMission = { ...mission };
  updatedMission.completed = true;

  API.update(updatedMission)
    .then(() => {
      dispatch(actions.completeMissionSuccess(updatedMission));
    })
    .catch(error => {
      dispatch(actions.completeMissionFailure(error));
    });
};
