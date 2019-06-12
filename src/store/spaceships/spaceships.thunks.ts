import { Spaceship } from 'models';
import { Dispatch } from 'redux';
import API from 'api';
import * as actions from './spaceships.actions';

export const loadSpacecrafts = () => async (dispatch: Dispatch) => {
  dispatch(actions.loadAllSpaceshipsRequest());

  try {
    const response: Spaceship[] = await API.spacecraft.getAll();
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
//     const response: Spaceship[] = await API.getAll();
//     dispatch(actions.loadAllSpaceshipsSuccess(response));
//   } catch (error) {
//     dispatch(actions.loadAllSpaceshipsFailure(error));
//   }
// };
