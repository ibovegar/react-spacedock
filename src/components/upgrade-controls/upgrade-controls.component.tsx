import React from 'react';
import {
  Spaceship,
  AvailableUpgrades,
  Upgrade,
  AttachedUpgrades
} from 'models';
import UpgradeSelect from './upgrade-select';

interface Props {
  spacecraft: Spaceship;
  availableUpgrades: AvailableUpgrades;
  attachedUpgrades: AttachedUpgrades;
  onDeselectUpgrade: (upgradeType: Upgrade) => void;
  onSelectUpgrade: (oldUpgrade: Upgrade, newUpgrade: Upgrade) => void;
}

const UpgradeControls: React.FC<Props> = props => {
  const {
    availableUpgrades: available,
    attachedUpgrades: attached,
    onSelectUpgrade,
    onDeselectUpgrade
  } = props;

  // TODO: figure out why I render twice
  // console.log('render controls', upgrades);

  return (
    <>
      <UpgradeSelect
        type="Deflector "
        value={attached.deflector}
        options={available.deflector}
        onDeselect={() => onDeselectUpgrade(attached.deflector)}
        onSelect={(option: Upgrade) =>
          onSelectUpgrade(attached.deflector, option)
        }
      />
      <UpgradeSelect
        type="Engine"
        value={attached.engine}
        options={available.engine}
        onDeselect={() => onDeselectUpgrade(attached.engine)}
        onSelect={(option: Upgrade) => onSelectUpgrade(attached.engine, option)}
      />
      <UpgradeSelect
        type="Plating"
        value={attached.plating}
        options={available.plating}
        onDeselect={() => onDeselectUpgrade(attached.plating)}
        onSelect={(option: Upgrade) =>
          onSelectUpgrade(attached.plating, option)
        }
      />
      <UpgradeSelect
        type="Stabilizer"
        value={attached.stabilizer}
        options={available.stabilizer}
        onDeselect={() => onDeselectUpgrade(attached.stabilizer)}
        onSelect={(option: Upgrade) =>
          onSelectUpgrade(attached.stabilizer, option)
        }
      />
      <UpgradeSelect
        type="Weapons"
        value={attached.weapons}
        options={available.weapons}
        onDeselect={() => onDeselectUpgrade(attached.weapons)}
        onSelect={(option: Upgrade) =>
          onSelectUpgrade(attached.weapons, option)
        }
      />
    </>
  );
};

export default UpgradeControls;
