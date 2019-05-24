import * as React from 'react';
import { ISpaceship, IAvailableUpgrades, IUpgrade } from 'models';

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

  const placeholder = 'None';
  // TODO: figure out why I render twice
  console.log('render controls', upgrades);

  return (
    <>
      <h2>Controls</h2>
      <div>{upgrades.toString()}</div>
      <div>
        Deflector: {deflector ? deflector.name : placeholder}
        Available upgrades:{' '}
        {upgrades.deflector.map((upgrade: IUpgrade) => upgrade.name)}
      </div>
      <div>Engine: {engine ? engine.name : placeholder}</div>
      <div>Plating: {plating ? plating.name : placeholder}</div>
      <div>Stabilizer: {stabilizer ? stabilizer.name : placeholder}</div>
      <div>Weapons: {weapons ? weapons.name : placeholder}</div>
    </>
  );
};

export default SpaceshipControls;
