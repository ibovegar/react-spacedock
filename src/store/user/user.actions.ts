import { UserStats } from 'models';

export type ActionTypes =
  | { type: 'LOAD_USER_REQUEST' }
  | { type: 'LOAD_USER_SUCCESS'; user: UserStats }
  | { type: 'LOAD_USER_FAILURE'; error: any }
  | { type: 'UPDATE_CREDITS_REQUEST' }
  | { type: 'UPDATE_CREDITS_SUCCESS'; credits: number }
  | { type: 'UPDATE_CREDITS_FAILURE'; error: any };

export const loadUserRequest = () => ({
  type: 'LOAD_USER_REQUEST'
});

export const loadUserSuccess = (user: UserStats): ActionTypes => ({
  type: 'LOAD_USER_SUCCESS',
  user
});

export const loadUserFailure = (error: any): ActionTypes => ({
  type: 'LOAD_USER_FAILURE',
  error
});

export const updateCreditsRequest = () => ({
  type: 'UPDATE_CREDITS_REQUEST'
});

export const updateCreditsSuccess = (credits: number): ActionTypes => ({
  type: 'UPDATE_CREDITS_SUCCESS',
  credits
});

export const updateCreditsFailure = (error: any): ActionTypes => ({
  type: 'UPDATE_CREDITS_FAILURE',
  error
});
