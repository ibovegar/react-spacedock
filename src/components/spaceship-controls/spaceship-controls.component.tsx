import * as React from 'react';
import { ISpaceship, IAvailableUpgrades } from 'models';
import { Typography } from '@material-ui/core';
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
      <Typography variant="h4" gutterBottom>
        Controls
      </Typography>
      <SpaceshipControl
        type="deflector"
        selectedUpgrade={deflector}
        selectableUpgrades={upgrades.deflector}
      />
      <SpaceshipControl
        type="engine"
        selectedUpgrade={engine}
        selectableUpgrades={upgrades.engine}
      />
      <SpaceshipControl
        type="plating"
        selectedUpgrade={plating}
        selectableUpgrades={upgrades.plating}
      />
      <SpaceshipControl
        type="stabilizer"
        selectedUpgrade={stabilizer}
        selectableUpgrades={upgrades.stabilizer}
      />
      <SpaceshipControl
        type="weapons"
        selectedUpgrade={weapons}
        selectableUpgrades={upgrades.weapons}
      />
    </>
  );
};

export default SpaceshipControls;
