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
  onSelectUpgrade: (upgrade: IUpgrade) => void;
}

const SpaceshipControls: React.FC<IProps> = props => {
  const { availableUpgrades, onSelectUpgrade, attachedUpgrades } = props;

  // TODO: figure out why I render twice
  // console.log('render controls', upgrades);

  return (
    <>
      <SpaceshipControl
        onSelectUpgrade={upgrade => onSelectUpgrade(upgrade)}
        type="Deflector"
        selectedUpgrade={attachedUpgrades.deflector}
        selectableUpgrades={availableUpgrades.deflector}
      />
      <SpaceshipControl
        onSelectUpgrade={upgrade => onSelectUpgrade(upgrade)}
        type="Engine"
        selectedUpgrade={attachedUpgrades.engine}
        selectableUpgrades={availableUpgrades.engine}
      />
      <SpaceshipControl
        onSelectUpgrade={upgrade => onSelectUpgrade(upgrade)}
        type="Plating"
        selectedUpgrade={attachedUpgrades.plating}
        selectableUpgrades={availableUpgrades.plating}
      />
      <SpaceshipControl
        onSelectUpgrade={upgrade => onSelectUpgrade(upgrade)}
        type="Stabilizer"
        selectedUpgrade={attachedUpgrades.stabilizer}
        selectableUpgrades={availableUpgrades.stabilizer}
      />
      <SpaceshipControl
        onSelectUpgrade={upgrade => onSelectUpgrade(upgrade)}
        type="Weapons"
        selectedUpgrade={attachedUpgrades.weapons}
        selectableUpgrades={availableUpgrades.weapons}
      />
    </>
  );
};

export default SpaceshipControls;
