import { Spaceship } from 'models';

export type ActionTypes =
  | { type: 'LOAD_ALL_SPACESHIPS_REQUEST' }
  | { type: 'LOAD_ALL_SPACESHIPS_SUCCESS'; spaceships: Spaceship[] }
  | { type: 'LOAD_ALL_SPACESHIPS_FAILURE'; error: any }
  | { type: 'SET_SELECTED_SPACECRAFT'; spacecraftId: string };

export const loadAllSpaceshipsRequest = (): ActionTypes => ({
  type: 'LOAD_ALL_SPACESHIPS_REQUEST'
});

export const loadAllSpaceshipsSuccess = (
  spaceships: Spaceship[]
): ActionTypes => ({
  type: 'LOAD_ALL_SPACESHIPS_SUCCESS',
  spaceships
});

export const loadAllSpaceshipsFailure = (error: any): ActionTypes => ({
  type: 'LOAD_ALL_SPACESHIPS_FAILURE',
  error
});

export const setSelectedSpacecraft = (spacecraftId: string): ActionTypes => ({
  type: 'SET_SELECTED_SPACECRAFT',
  spacecraftId
});
