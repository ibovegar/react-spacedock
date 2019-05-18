import * as actionTypes from './actionTypes';
import * as API from 'api/spaceship.api';
import { ISpaceship } from 'models';

export const loadSpaceshipsRequest = () => ({
  type: actionTypes.LOAD_SPACESHIPS_REQUEST
});

export const loadSpaceshipsSuccess = (spaceships: ISpaceship[]) => ({
  type: actionTypes.LOAD_SPACESHIPS_SUCCESS,
  spaceships
});

export const loadSpaceshipsFailure = (error: any) => ({
  type: actionTypes.LOAD_SPACESHIPS_FAILURE,
  error
});

export const loadSpaceships = () => {
  return (dispatch: any) => {
    dispatch(loadSpaceshipsRequest());

    API.getAll()
      .then((spaceships: ISpaceship[]) => {
        dispatch(loadSpaceshipsSuccess(spaceships));
      })
      .catch(error => {
        dispatch(loadSpaceshipsFailure(error));
      });
  };
};
