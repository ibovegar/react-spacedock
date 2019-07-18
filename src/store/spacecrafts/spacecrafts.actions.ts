import { Spacecraft } from 'models';

export type ActionTypes =
  | { type: 'LOAD_ALL_SPACECRAFTS_REQUEST' }
  | { type: 'LOAD_ALL_SPACECRAFTS_SUCCESS'; spacecrafts: Spacecraft[] }
  | { type: 'LOAD_ALL_SPACECRAFTS_FAILURE'; error: any }
  | { type: 'SET_SELECTED_SPACECRAFT'; spacecraftId: string };

export const loadAllspacecraftsRequest = (): ActionTypes => ({
  type: 'LOAD_ALL_SPACECRAFTS_REQUEST'
});

export const loadAllspacecraftsSuccess = (
  spacecrafts: Spacecraft[]
): ActionTypes => ({
  type: 'LOAD_ALL_SPACECRAFTS_SUCCESS',
  spacecrafts
});

export const loadAllspacecraftsFailure = (error: any): ActionTypes => ({
  type: 'LOAD_ALL_SPACECRAFTS_FAILURE',
  error
});

export const setSelectedSpacecraft = (spacecraftId: string): ActionTypes => ({
  type: 'SET_SELECTED_SPACECRAFT',
  spacecraftId
});
