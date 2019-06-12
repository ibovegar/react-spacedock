import { createSelector, Selector } from 'reselect';
import { AppState } from 'store';
import {
  Spaceship,
  Upgrade,
  AttachedUpgrades,
  AvailableUpgrades
} from 'models';
import { toArray } from 'utils/helpers';

const getUpgradeEnities = (state: AppState) => state.upgrades.entities;
const getSelectedSpacecraft = (state: AppState) => state.spaceships.selected;

export const getUpgradeList: Selector<AppState, Upgrade[]> = createSelector(
  getUpgradeEnities,
  entities => toArray(entities)
);

export const getAttachedUpgrades: Selector<
  AppState,
  AttachedUpgrades
> = createSelector(
  [getUpgradeList, getSelectedSpacecraft],
  (upgrades: Upgrade[], selectedSpacecraft: Spaceship | any) => {
    const attachedUpgrades = new AttachedUpgrades();

    if (!selectedSpacecraft || !upgrades.length) {
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
  AvailableUpgrades
> = createSelector(
  [getUpgradeList, getSelectedSpacecraft],
  (upgrades: Upgrade[], selectedSpacecraft: Spaceship | any) => {
    const availableUpgrades = new AvailableUpgrades();

    if (!selectedSpacecraft) return availableUpgrades;

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
