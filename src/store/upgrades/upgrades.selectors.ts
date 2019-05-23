import { createSelector, Selector } from 'reselect';
import { AppState } from 'store';
import { ISpaceship, IUpgrade } from 'models';

const getUpgradeEnities = (state: AppState) => state.upgrades.entities;
const getSelected = (state: AppState) => state.spaceships.selected;
// const getSelectedSPaceshipId = (state: AppState) => state.spaceships.selectedId;
// const getSpaceshipsEnitites = (state: AppState) => state.spaceships.entities;

export const getSpaceraftUpgrades: Selector<AppState, any> = createSelector(
  [getUpgradeEnities, getSelected],
  (entities, selected: ISpaceship) => {
    if (!selected) {
      return [];
    }

    const arr: IUpgrade[] = Object.values(entities);

    return arr.filter(
      (upgrade: IUpgrade) => upgrade.spacecraftRegistry !== selected.registry
    );
  }
);
