import * as React from 'react';
import { ISpaceship, IAvailableUpgrades } from 'models';
import SpaceshipControl from './spaceship-control/spaceship-control.component';

interface IProps {
  spacecraft: ISpaceship;
  upgrades: IAvailableUpgrades;
}

const SpaceshipControls: React.FC<IProps> = ({ spacecraft, upgrades }) => {
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
        type="Deflector"
        selectedUpgrade={deflector}
        selectableUpgrades={upgrades.deflector}
      />
      <SpaceshipControl
        type="Engine"
        selectedUpgrade={engine}
        selectableUpgrades={upgrades.engine}
      />
      <SpaceshipControl
        type="Plating"
        selectedUpgrade={plating}
        selectableUpgrades={upgrades.plating}
      />
      <SpaceshipControl
        type="Stabilizer"
        selectedUpgrade={stabilizer}
        selectableUpgrades={upgrades.stabilizer}
      />
      <SpaceshipControl
        type="Weapons"
        selectedUpgrade={weapons}
        selectableUpgrades={upgrades.weapons}
      />
    </>
  );
};

export default SpaceshipControls;
