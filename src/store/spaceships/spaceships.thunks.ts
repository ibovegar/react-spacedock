import { ISpaceship } from 'models';
import { Dispatch } from 'redux';
import * as actions from './spaceships.actions';
import * as API from 'api/spaceship.api';

export const loadAllSpaceships = () => async (dispatch: Dispatch) => {
  dispatch(actions.loadAllSpaceshipsRequest());

  try {
    const response: ISpaceship[] = await API.getAll();
    dispatch(actions.loadAllSpaceshipsSuccess(response));
  } catch (error) {
    dispatch(actions.loadAllSpaceshipsFailure(error));
  }
};
