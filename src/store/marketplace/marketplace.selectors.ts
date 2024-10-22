import { createSelector, Selector } from 'reselect';
import { AppState } from 'store';
import { Spacecraft, Upgrade } from 'models';
import { toArray } from 'utils/helpers';

const getStoreEnities = (state: AppState) => state.marketplace.products;

export const getUpgradeList: Selector<AppState, (Upgrade | Spacecraft)[]> =
  createSelector(getStoreEnities, (entities) => toArray(entities));
