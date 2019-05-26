import * as React from 'react';
import {
  ISpaceship,
  IAvailableUpgrades,
  IUpgrade,
  IAttachedUpgrades
} from 'models';
import SpaceshipControl from './spaceship-control/spaceship-control.component';

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
      <SpaceshipControl
        onSelect={(option: IUpgrade) =>
          onSelectUpgrade(attachedUpgrades.deflector, option)
        }
        type="Deflector"
        value={attachedUpgrades.deflector}
        options={availableUpgrades.deflector}
      />
      <SpaceshipControl
        onSelect={(option: IUpgrade) =>
          onSelectUpgrade(attachedUpgrades.engine, option)
        }
        type="Engine"
        value={attachedUpgrades.engine}
        options={availableUpgrades.engine}
      />
      <SpaceshipControl
        onSelect={(option: IUpgrade) =>
          onSelectUpgrade(attachedUpgrades.plating, option)
        }
        type="Plating"
        value={attachedUpgrades.plating}
        options={availableUpgrades.plating}
      />
      <SpaceshipControl
        onSelect={(option: IUpgrade) =>
          onSelectUpgrade(attachedUpgrades.stabilizer, option)
        }
        type="Stabilizer"
        value={attachedUpgrades.stabilizer}
        options={availableUpgrades.stabilizer}
      />
      <SpaceshipControl
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
