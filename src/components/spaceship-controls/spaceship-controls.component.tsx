import * as React from 'react';
import {
  ISpaceship,
  IAvailableUpgrades,
  IUpgrade,
  IAttachedUpgrades
} from 'models';
import UpgradeSelect from './upgrade-select';

interface IProps {
  spacecraft: ISpaceship;
  availableUpgrades: IAvailableUpgrades;
  attachedUpgrades: IAttachedUpgrades;
  onDeselectUpgrade: (upgradeType: IUpgrade) => void;
  onSelectUpgrade: (oldUpgrade: IUpgrade, newUpgrade: IUpgrade) => void;
}

const SpaceshipControls: React.FC<IProps> = props => {
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
        type="Deflector"
        value={attached.deflector}
        options={available.deflector}
        onDeselect={() => onDeselectUpgrade(attached.deflector)}
        onSelect={(option: IUpgrade) =>
          onSelectUpgrade(attached.deflector, option)
        }
      />
      <UpgradeSelect
        type="Engine"
        value={attached.engine}
        options={available.engine}
        onDeselect={() => onDeselectUpgrade(attached.engine)}
        onSelect={(option: IUpgrade) =>
          onSelectUpgrade(attached.engine, option)
        }
      />
      <UpgradeSelect
        type="Plating"
        value={attached.plating}
        options={available.plating}
        onDeselect={() => onDeselectUpgrade(attached.plating)}
        onSelect={(option: IUpgrade) =>
          onSelectUpgrade(attached.plating, option)
        }
      />
      <UpgradeSelect
        type="Stabilizer"
        value={attached.stabilizer}
        options={available.stabilizer}
        onDeselect={() => onDeselectUpgrade(attached.stabilizer)}
        onSelect={(option: IUpgrade) =>
          onSelectUpgrade(attached.stabilizer, option)
        }
      />
      <UpgradeSelect
        type="Weapons"
        value={attached.weapons}
        options={available.weapons}
        onDeselect={() => onDeselectUpgrade(attached.weapons)}
        onSelect={(option: IUpgrade) =>
          onSelectUpgrade(attached.weapons, option)
        }
      />
    </>
  );
};

export default SpaceshipControls;
