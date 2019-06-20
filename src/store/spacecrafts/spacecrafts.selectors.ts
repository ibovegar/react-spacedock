import { createSelector, Selector } from 'reselect';
import { AppState } from 'store';
import { Spacecraft } from 'models';
import { toArray } from 'utils/helpers';

const getspacecraftsEnities = (state: AppState) => state.spacecrafts.entities;

export const getAllspacecrafts: Selector<
  AppState,
  Spacecraft[]
> = createSelector(
  getspacecraftsEnities,
  entities => {
    return toArray(entities);
  }
);
