import { createSelector, Selector } from 'reselect';
import { AppState } from 'store';
import { ISpaceship, IUpgrade } from 'models';
import { toArray } from 'utils/helpers';

const getStoreEnities = (state: AppState) => state.store.store;

export const getUpgradeList: Selector<
  AppState,
  Array<IUpgrade | ISpaceship>
> = createSelector(
  getStoreEnities,
  entities => toArray(entities)
);
