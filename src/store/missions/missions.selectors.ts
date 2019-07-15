import { createSelector, Selector } from 'reselect';
import { AppState } from 'store';
import { Mission } from 'models';
import { toArray } from 'utils/helpers';

const getMissionEnities = (state: AppState) => state.missions.entities;

export const getAllMissions: Selector<AppState, Mission[]> = createSelector(
  getMissionEnities,
  entities => toArray(entities)
);
