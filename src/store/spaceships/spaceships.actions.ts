import { ISpaceship } from 'models';

export enum ActionTypes {
  LOAD_SPACESHIPS_REQUEST = 'LOAD_SPACESHIPS_REQUEST',
  LOAD_SPACESHIPS_SUCCESS = 'LOAD_SPACESHIPS_SUCCESS',
  LOAD_SPACESHIPS_FAILURE = 'LOAD_SPACESHIPS_FAILURE'
}

export const loadSpaceshipsRequest = () => ({
  type: ActionTypes.LOAD_SPACESHIPS_REQUEST
});

export const loadSpaceshipsSuccess = (spaceships: ISpaceship[]) => ({
  type: ActionTypes.LOAD_SPACESHIPS_SUCCESS,
  spaceships
});

export const loadSpaceshipsFailure = (error: any) => ({
  type: ActionTypes.LOAD_SPACESHIPS_FAILURE,
  error
});
