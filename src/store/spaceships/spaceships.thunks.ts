import { ISpaceship } from 'models';
import { Dispatch } from 'redux';
import * as actions from './spaceships.actions';
import * as API from 'api/spaceship.api';

export const loadSpaceships = () => {
  return (dispatch: Dispatch) => {
    dispatch(actions.loadSpaceshipsRequest());

    API.getAll()
      .then((spaceships: ISpaceship[]) => {
        dispatch(actions.loadSpaceshipsSuccess(spaceships));
      })
      .catch(error => {
        dispatch(actions.loadSpaceshipsFailure(error));
      });
  };
};
