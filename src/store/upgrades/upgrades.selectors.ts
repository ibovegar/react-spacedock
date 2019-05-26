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
  [getUpgradeList, getSelectedSpacecraft],
  (upgrades: IUpgrade[], selectedSpacecraft: ISpaceship) => {
    const attachedUpgrades = {} as IAttachedUpgrades;
    if (isEmpty(selectedSpacecraft) || !upgrades.length) {
      return attachedUpgrades;
    }

    for (const upgrade of upgrades) {
      if (upgrade.spaceshipId === selectedSpacecraft.id) {
        attachedUpgrades[upgrade.type] = upgrade;
      }
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
      if (
        !upgrade.isAttached &&
        upgrade.spacecraftRegistry === selectedSpacecraft.registry
      ) {
        availableUpgrades[upgrade.type].push(upgrade);
      }
    }

    return availableUpgrades;
  }
);
