import { createSelector, Selector } from 'reselect';
import { AppState } from 'store';
import { ISpaceship, IUpgrade, IAvailableUpgrades } from 'models';

const getUpgradeEnities = (state: AppState) => state.upgrades.entities;
const getSelected = (state: AppState) => state.spaceships.selected;

export const getSpaceraftUpgrades: Selector<
  AppState,
  IUpgrade[]
> = createSelector(
  [getUpgradeEnities, getSelected],
  (entities, selected: ISpaceship) => {
    if (!selected) {
      return [];
    }

    const upgrades: IUpgrade[] = Object.values(entities);

    return upgrades.filter(
      (upgrade: IUpgrade) => upgrade.spacecraftRegistry !== selected.registry
    );
  }
);

export const getAvailableUpgrades: Selector<AppState, any> = createSelector(
  getSpaceraftUpgrades,
  (upgrades: IUpgrade[]) => {
    const availableUpgrades = {} as IAvailableUpgrades;

    availableUpgrades.deflector = [];
    availableUpgrades.engine = [];
    availableUpgrades.plating = [];
    availableUpgrades.stabilizer = [];
    availableUpgrades.weapons = [];

    for (const upgrade of upgrades) {
      availableUpgrades[upgrade.type].push(upgrade);
    }

    return availableUpgrades;
  }
);
