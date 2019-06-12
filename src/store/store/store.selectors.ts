import { createSelector, Selector } from 'reselect';
import { AppState } from 'store';
import { Spaceship, Upgrade } from 'models';
import { toArray } from 'utils/helpers';

const getStoreEnities = (state: AppState) => state.store.store;

export const getUpgradeList: Selector<
  AppState,
  (Upgrade | Spaceship)[]
> = createSelector(
  getStoreEnities,
  entities => toArray(entities)
);
