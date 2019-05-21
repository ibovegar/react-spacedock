import { createSelector, Selector } from 'reselect';
import { AppState } from 'store';
import { ISpaceship, IUpgrade } from 'models';

const getUpgradeEnities = (state: AppState) => state.upgrades.entities;
const getSelectedSPaceshipId = (state: AppState) => state.spaceships.selectedId;
const getSpaceshipsEnitites = (state: AppState) => state.spaceships.entities;

export const getSpaceraftUpgrades: Selector<AppState, any> = createSelector(
  [getUpgradeEnities, getSelectedSPaceshipId, getSpaceshipsEnitites],
  (entities, selectedId: string, spaceships: any) => {
    const spacecraft: ISpaceship = spaceships[selectedId];

    if (!spacecraft) {
      return [];
    }

    const arr: IUpgrade[] = Object.values(entities);

    return arr.filter(
      (upgrade: IUpgrade) => upgrade.spacecraftRegistry !== spacecraft.registry
    );
  }
);
