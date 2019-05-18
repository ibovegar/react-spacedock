import * as actions from './spaceships.actions';
import * as API from 'api/spaceship.api';
import { ISpaceship } from 'models';

export const loadSpaceships = () => {
  return (dispatch: any) => {
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
