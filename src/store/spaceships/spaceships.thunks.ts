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

export const loadSpaceship = (spaceshipId: string) => (dispatch: Dispatch) => {
  dispatch(actions.loadSpaceshipRequest());

  API.get(spaceshipId)
    .then((spaceship: ISpaceship) => {
      dispatch(actions.loadSpaceshipSuccess(spaceship));
    })
    .catch(error => {
      dispatch(actions.loadSpaceshipFailure(error));
    });
};
