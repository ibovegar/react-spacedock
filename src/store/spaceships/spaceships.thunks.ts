import { ISpaceship, IUpgrade } from 'models';
import { Dispatch } from 'redux';
import API from 'api';
import * as actions from './spaceships.actions';

export const loadSpacecrafts = () => async (dispatch: Dispatch) => {
  dispatch(actions.loadAllSpaceshipsRequest());

  try {
    const response: ISpaceship[] = await API.spacecraft.getAll();
    dispatch(actions.loadAllSpaceshipsSuccess(response));
  } catch (error) {
    dispatch(actions.loadAllSpaceshipsFailure(error));
  }
};

export const setActiveUpgrade = (
  spacecraft: ISpaceship,
  upgrade: IUpgrade
) => async (dispatch: Dispatch) => {
  console.log('thunk', spacecraft, upgrade, dispatch);

  try {
    await API.spacecraft.setUpgrade(spacecraft.id, upgrade);
    // dispatch(actions.loadAllSpaceshipsSuccess(response));
  } catch (error) {
    // dispatch(actions.loadAllSpaceshipsFailure(error));
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
