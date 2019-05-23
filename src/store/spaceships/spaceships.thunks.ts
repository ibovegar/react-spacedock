import { ISpaceship } from 'models';
import { Dispatch } from 'redux';
import * as actions from './spaceships.actions';
import * as API from 'api/spaceship.api';

export const loadSpacecrafts = () => async (dispatch: Dispatch) => {
  dispatch(actions.loadAllSpaceshipsRequest());

  try {
    const response: ISpaceship[] = await API.getAll();
    dispatch(actions.loadAllSpaceshipsSuccess(response));
  } catch (error) {
    dispatch(actions.loadAllSpaceshipsFailure(error));
  }
};

// export const loadSpacecraft = (spacecraftId: string) => async (
//   dispatch: Dispatch
// ) => {
//   dispatch(actions.loadSpaceshipRequest());

//   try {
//     const response: ISpaceship[] = await API.getAll();
//     dispatch(actions.loadAllSpaceshipsSuccess(response));
//   } catch (error) {
//     dispatch(actions.loadAllSpaceshipsFailure(error));
//   }
// };
