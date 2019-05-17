import * as React from 'react';
import { IBaseStats, IUpgrade } from 'models';

interface ISpaceshipStatsProps {
  baseStats: IBaseStats;
  upgrades: IUpgrade[];
}

const SpaceshipStats: React.FunctionComponent<ISpaceshipStatsProps> = props => {
  const { baseStats } = props;

  return (
    <ul>
      <li>Damage: {baseStats.damage}</li>
      <li>Hull: {baseStats.hull}</li>
      <li>Manuvrability: {baseStats.manuvrability}</li>
      <li>Displacement: {baseStats.mass}</li>
      <li>Range: {baseStats.range}</li>
      <li>Shield: {baseStats.shield}</li>
      <li>Speed: {baseStats.speed}</li>
    </ul>
  );
};

export default SpaceshipStats;
