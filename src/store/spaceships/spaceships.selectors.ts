import { createSelector, Selector } from 'reselect';
import { AppState } from 'store';
import { ISpaceship } from 'models';

const getSpaceshipsEnities = (state: AppState) => state.spaceships.entities;
const getSelectedSpaceshipId = (state: AppState) => state.spaceships.selectedId;

export const getAllSpaceships: Selector<
  AppState,
  ISpaceship[]
> = createSelector(
  getSpaceshipsEnities,
  entities => Object.values(entities)
);

export const getSelectedSpaceship: Selector<
  AppState,
  ISpaceship
> = createSelector(
  [getSpaceshipsEnities, getSelectedSpaceshipId],
  (entities, id) => {
    return entities[id];
  }
);
