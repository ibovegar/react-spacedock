import { createSelector, Selector } from 'reselect';
import { AppState } from 'store';
import {
  ISpaceship,
  IUpgrade,
  IAttachedUpgrades,
  IAvailableUpgrades
} from 'models';
import { toArray, isEmpty } from 'utils/helpers';

const getUpgradeEnities = (state: AppState) => state.upgrades.entities;
const getSelectedSpacecraft = (state: AppState) => state.spaceships.selected;

export const getUpgradeList: Selector<AppState, IUpgrade[]> = createSelector(
  getUpgradeEnities,
  entities => toArray(entities)
);

export const getAttachedUpgrades: Selector<
  AppState,
  IAttachedUpgrades
> = createSelector(
  [getUpgradeEnities, getSelectedSpacecraft],
  (upgrades: any, selectedSpacecraft: ISpaceship) => {
    const attachedUpgrades = {} as IAttachedUpgrades;
    if (isEmpty(selectedSpacecraft)) return attachedUpgrades;

    for (const upgradeId of selectedSpacecraft.attachedUpgrades) {
      const upgrade: IUpgrade = upgrades[upgradeId];
      if (!upgrade) continue;
      attachedUpgrades[upgrade.type] = upgrade;
    }

    return attachedUpgrades;
  }
);

export const getAvailableUpgrades: Selector<
  AppState,
  IAvailableUpgrades
> = createSelector(
  [getUpgradeList, getSelectedSpacecraft],
  (upgrades: IUpgrade[], selectedSpacecraft: ISpaceship) => {
    const availableUpgrades = {} as IAvailableUpgrades;

    availableUpgrades.deflector = [];
    availableUpgrades.engine = [];
    availableUpgrades.plating = [];
    availableUpgrades.stabilizer = [];
    availableUpgrades.weapons = [];

    for (const upgrade of upgrades) {
      console.log(
        upgrade,
        upgrade.spacecraftRegistry === selectedSpacecraft.registry,
        !upgrade.isAttached
      );
      if (
        !upgrade.isAttached &&
        upgrade.spacecraftRegistry === selectedSpacecraft.registry
      ) {
        availableUpgrades[upgrade.type].push(upgrade);
      }
    }

    // console.log(availableUpgrades);

    return availableUpgrades;
  }
);
