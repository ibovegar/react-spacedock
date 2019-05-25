import * as React from 'react';
import { ISpaceship, IAvailableUpgrades, IUpgrade } from 'models';
import SpaceshipControl from './spaceship-control/spaceship-control.component';

interface IProps {
  spacecraft: ISpaceship;
  upgrades: IAvailableUpgrades;
  onSelectUpgrade: (upgrade: IUpgrade) => void;
}

const SpaceshipControls: React.FC<IProps> = props => {
  const { spacecraft, upgrades, onSelectUpgrade } = props;

  const {
    deflector,
    engine,
    plating,
    stabilizer,
    weapons
  } = spacecraft.attachedUpgrades;

  // TODO: figure out why I render twice
  // console.log('render controls', upgrades);

  return (
    <>
      <SpaceshipControl
        onSelectUpgrade={upgrade => onSelectUpgrade(upgrade)}
        type="Deflector"
        selectedUpgrade={deflector}
        selectableUpgrades={upgrades.deflector}
      />
      <SpaceshipControl
        onSelectUpgrade={upgrade => onSelectUpgrade(upgrade)}
        type="Engine"
        selectedUpgrade={engine}
        selectableUpgrades={upgrades.engine}
      />
      <SpaceshipControl
        onSelectUpgrade={upgrade => onSelectUpgrade(upgrade)}
        type="Plating"
        selectedUpgrade={plating}
        selectableUpgrades={upgrades.plating}
      />
      <SpaceshipControl
        onSelectUpgrade={upgrade => onSelectUpgrade(upgrade)}
        type="Stabilizer"
        selectedUpgrade={stabilizer}
        selectableUpgrades={upgrades.stabilizer}
      />
      <SpaceshipControl
        onSelectUpgrade={upgrade => onSelectUpgrade(upgrade)}
        type="Weapons"
        selectedUpgrade={weapons}
        selectableUpgrades={upgrades.weapons}
      />
    </>
  );
};

export default SpaceshipControls;
