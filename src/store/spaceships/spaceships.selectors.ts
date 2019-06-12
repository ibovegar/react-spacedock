import { createSelector, Selector } from 'reselect';
import { AppState } from 'store';
import { Spaceship } from 'models';
import { toArray } from 'utils/helpers';

const getSpaceshipsEnities = (state: AppState) => state.spaceships.entities;

export const getAllSpaceships: Selector<AppState, Spaceship[]> = createSelector(
  getSpaceshipsEnities,
  entities => {
    return toArray(entities);
  }
);
