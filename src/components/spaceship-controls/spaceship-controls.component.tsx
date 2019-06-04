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
  onSelectUpgrade: (oldUpgrade: IUpgrade, newUpgrade: IUpgrade) => void;
}

const SpaceshipControls: React.FC<IProps> = props => {
  const { availableUpgrades, onSelectUpgrade, attachedUpgrades } = props;

  // TODO: figure out why I render twice
  // console.log('render controls', upgrades);

  return (
    <>
      <UpgradeSelect
        onSelect={(option: IUpgrade) =>
          onSelectUpgrade(attachedUpgrades.deflector, option)
        }
        type="Deflector"
        value={attachedUpgrades.deflector}
        options={availableUpgrades.deflector}
      />
      <UpgradeSelect
        onSelect={(option: IUpgrade) =>
          onSelectUpgrade(attachedUpgrades.engine, option)
        }
        type="Engine"
        value={attachedUpgrades.engine}
        options={availableUpgrades.engine}
      />
      <UpgradeSelect
        onSelect={(option: IUpgrade) =>
          onSelectUpgrade(attachedUpgrades.plating, option)
        }
        type="Plating"
        value={attachedUpgrades.plating}
        options={availableUpgrades.plating}
      />
      <UpgradeSelect
        onSelect={(option: IUpgrade) =>
          onSelectUpgrade(attachedUpgrades.stabilizer, option)
        }
        type="Stabilizer"
        value={attachedUpgrades.stabilizer}
        options={availableUpgrades.stabilizer}
      />
      <UpgradeSelect
        onSelect={(option: IUpgrade) =>
          onSelectUpgrade(attachedUpgrades.weapons, option)
        }
        type="Weapons"
        value={attachedUpgrades.weapons}
        options={availableUpgrades.weapons}
      />
    </>
  );
};

export default SpaceshipControls;
