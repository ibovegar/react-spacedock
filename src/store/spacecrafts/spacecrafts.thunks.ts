import { Spacecraft } from 'models';
import { Dispatch } from 'redux';
import API from 'api';
import * as actions from './spacecrafts.actions';

export const loadSpacecrafts = () => async (dispatch: Dispatch) => {
  dispatch(actions.loadAllspacecraftsRequest());

  try {
    const response: Spacecraft[] = await API.spacecraft.getAll();
    dispatch(actions.loadAllspacecraftsSuccess(response));
  } catch (error) {
    dispatch(actions.loadAllspacecraftsFailure(error));
  }
};

// export const loadSpacecraft = (spacecraftId: string) => async (
//   dispatch: Dispatch
// ) => {
//   dispatch(actions.loadspacecraftRequest());

//   try {
//     const response: spacecraft[] = await API.getAll();
//     dispatch(actions.loadAllspacecraftsSuccess(response));
//   } catch (error) {
//     dispatch(actions.loadAllspacecraftsFailure(error));
//   }
// };
