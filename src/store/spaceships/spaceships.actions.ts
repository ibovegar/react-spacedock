import { ISpaceship } from 'models';

export type ActionTypes =
  | { type: 'LOAD_SPACESHIPS_REQUEST' }
  | { type: 'LOAD_SPACESHIPS_SUCCESS'; spaceships: ISpaceship[] }
  | { type: 'LOAD_SPACESHIPS_FAILURE'; error: any };

export const loadSpaceshipsRequest = (): ActionTypes => ({
  type: 'LOAD_SPACESHIPS_REQUEST'
});

export const loadSpaceshipsSuccess = (
  spaceships: ISpaceship[]
): ActionTypes => ({
  type: 'LOAD_SPACESHIPS_SUCCESS',
  spaceships
});

export const loadSpaceshipsFailure = (error: any): ActionTypes => ({
  type: 'LOAD_SPACESHIPS_FAILURE',
  error
});
