import * as React from 'react';
import { ISpaceship } from 'models';

interface IProps {
  spacecraft: ISpaceship;
  availableUpgrades: any;
}

const SpaceshipControls: React.FC<IProps> = ({
  spacecraft,
  availableUpgrades
}) => {
  const {
    deflector,
    engine,
    plating,
    stabilizer,
    weapons
  } = spacecraft.attachedUpgrades;

  const placeholder = 'None';

  return (
    <>
      <h2>Controls</h2>
      <div>{availableUpgrades.toString()}</div>
      <div>Deflector: {deflector ? deflector.name : placeholder}</div>
      <div>Engine: {engine ? engine.name : placeholder}</div>
      <div>Plating: {plating ? plating.name : placeholder}</div>
      <div>Stabilizer: {stabilizer ? stabilizer.name : placeholder}</div>
      <div>Weapons: {weapons ? weapons.name : placeholder}</div>
    </>
  );
};

export default SpaceshipControls;
