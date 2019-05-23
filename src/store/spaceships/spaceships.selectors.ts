import { createSelector, Selector } from 'reselect';
import { AppState } from 'store';
import { ISpaceship } from 'models';
import { toArray } from 'utils/helpers';

const getSpaceshipsEnities = (state: AppState) => state.spaceships.entities;
const getSelected = (state: AppState) => state.spaceships.selected;

export const getAllSpaceships: Selector<
  AppState,
  ISpaceship[]
> = createSelector(
  getSpaceshipsEnities,
  entities => {
    return toArray(entities);
  }
);

export const getSelectedSpacecraft: Selector<
  AppState,
  ISpaceship
> = createSelector(
  [getSpaceshipsEnities, getSelected],
  (entities, spacecraft: ISpaceship) => {
    return entities[spacecraft.id];
  }
);
