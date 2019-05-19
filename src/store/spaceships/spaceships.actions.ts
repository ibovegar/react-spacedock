import { ISpaceship } from 'models';

export type ActionTypes =
  | { type: 'LOAD_ALL_SPACESHIPS_REQUEST' }
  | { type: 'LOAD_ALL_SPACESHIPS_SUCCESS'; spaceships: ISpaceship[] }
  | { type: 'LOAD_ALL_SPACESHIPS_FAILURE'; error: any }
  | { type: 'LOAD_SPACESHIP_REQUEST' }
  | { type: 'LOAD_SPACESHIP_SUCCESS'; spaceship: ISpaceship }
  | { type: 'LOAD_SPACESHIP_FAILURE'; error: any };

export const loadAllSpaceshipsRequest = (): ActionTypes => ({
  type: 'LOAD_ALL_SPACESHIPS_REQUEST'
});

export const loadAllSpaceshipsSuccess = (
  spaceships: ISpaceship[]
): ActionTypes => ({
  type: 'LOAD_ALL_SPACESHIPS_SUCCESS',
  spaceships
});

export const loadAllSpaceshipsFailure = (error: any): ActionTypes => ({
  type: 'LOAD_ALL_SPACESHIPS_FAILURE',
  error
});

export const loadSpaceshipRequest = (): ActionTypes => ({
  type: 'LOAD_SPACESHIP_REQUEST'
});

export const loadSpaceshipSuccess = (spaceship: ISpaceship): ActionTypes => ({
  type: 'LOAD_SPACESHIP_SUCCESS',
  spaceship
});

export const loadSpaceshipFailure = (error: any): ActionTypes => ({
  type: 'LOAD_SPACESHIP_FAILURE',
  error
});
