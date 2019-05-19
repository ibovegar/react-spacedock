import { createSelector, Selector } from 'reselect';
import { AppState } from 'store';
import { ISpaceship } from 'models';
// import ISpaceshipState from './spaceships.interfaces';

const spaceshipsEnities = (state: AppState) => state.spaceships.entities;
// const spaceshipsEnities = (state: AppState): ISpaceshipState => state.spaceships;

export const getAllSpaceships: Selector<
  AppState,
  ISpaceship[]
> = createSelector(
  spaceshipsEnities,
  entities => Object.values(entities)
);
