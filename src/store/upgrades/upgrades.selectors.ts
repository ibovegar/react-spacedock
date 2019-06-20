import { createSelector, Selector } from 'reselect';
import { AppState } from 'store';
import {
  Spacecraft,
  Upgrade,
  AttachedUpgrades,
  AvailableUpgrades
} from 'models';
import { toArray } from 'utils/helpers';

const getUpgradeEnities = (state: AppState) => state.upgrades.entities;
const getSelectedSpacecraft = (state: AppState) => state.spacecrafts.selected;

export const getUpgradeList: Selector<AppState, Upgrade[]> = createSelector(
  getUpgradeEnities,
  entities => toArray(entities)
);

export const getAttachedUpgrades: Selector<
  AppState,
  AttachedUpgrades
> = createSelector(
  [getUpgradeList, getSelectedSpacecraft],
  (upgrades: Upgrade[], selectedSpacecraft?: Spacecraft) => {
    const attachedUpgrades = new AttachedUpgrades();

    if (!selectedSpacecraft || !upgrades.length) {
      return attachedUpgrades;
    }

    for (const upgrade of upgrades) {
      if (upgrade.spacecraftId === selectedSpacecraft.id) {
        attachedUpgrades[upgrade.storeType] = upgrade;
      }
    }
    return attachedUpgrades;
  }
);

export const getAvailableUpgrades: Selector<
  AppState,
  AvailableUpgrades
> = createSelector(
  [getUpgradeList, getSelectedSpacecraft],
  (upgrades: Upgrade[], selectedSpacecraft?: Spacecraft) => {
    const availableUpgrades = new AvailableUpgrades();

    if (!selectedSpacecraft) return availableUpgrades;

    for (const upgrade of upgrades) {
      if (
        !upgrade.isAttached &&
        upgrade.spacecraftRegistry === selectedSpacecraft.spacecraftRegistry
      ) {
        availableUpgrades[upgrade.storeType].push(upgrade);
      }
    }

    return availableUpgrades;
  }
);
