import { createSelector, Selector } from 'reselect';
import { AppState } from 'store';
import { Mission } from 'models';
import { toArray } from 'utils/helpers';

const getMissionEnities = (state: AppState) => state.missions.entities;
const selectMissionId = (_state: AppState, missionId: string) => missionId;

export const getAllMissions: Selector<AppState, Mission[]> = createSelector(
  getMissionEnities,
  entities => toArray(entities)
);

export const getMissionById = createSelector(
  [getMissionEnities, selectMissionId],
  (items, itemId) => items[itemId]
);
