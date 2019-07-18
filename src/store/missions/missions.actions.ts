import { Mission } from 'models';

export type ActionTypes =
  | { type: 'LOAD_MISSIONS_REQUEST' }
  | { type: 'LOAD_MISSIONS_SUCCESS'; missions: Mission[] }
  | { type: 'LOAD_MISSIONS_FAILURE'; error: any }
  | { type: 'COMPLETE_MISSION_REQUEST' }
  | { type: 'COMPLETE_MISSION_SUCCESS'; mission: Mission }
  | { type: 'COMPLETE_MISSION_FAILURE'; error: any };

export const loadMissionsRequest = () => ({
  type: 'LOAD_MISSIONS_REQUEST'
});

export const loadMissionsSuccess = (missions: Mission[]): ActionTypes => ({
  type: 'LOAD_MISSIONS_SUCCESS',
  missions
});

export const loadMissionsFailure = (error: any): ActionTypes => ({
  type: 'LOAD_MISSIONS_FAILURE',
  error
});

export const completeMissionRequest = () => ({
  type: 'COMPLETE_MISSION_REQUEST'
});

export const completeMissionSuccess = (mission: Mission): ActionTypes => ({
  type: 'COMPLETE_MISSION_SUCCESS',
  mission
});

export const completeMissionFailure = (error: any): ActionTypes => ({
  type: 'COMPLETE_MISSION_FAILURE',
  error
});
