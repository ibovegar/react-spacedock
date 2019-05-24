import * as React from 'react';
import { ISpaceship } from 'models';

interface IProps {
  spacecraft: ISpaceship;
}

const SpaceshipStats: React.FC<IProps> = ({ spacecraft }) => {
  // Only rerender if buffs changes
  const { baseStats } = spacecraft;

  return (
    <>
      <ul>
        <li>Speed: {baseStats.speed}</li>
        <li>Shield: {baseStats.shield}</li>
        <li>Damage: {baseStats.damage}</li>
        <li>Hull: {baseStats.hull}</li>
        <li>Manuvrability: {baseStats.manuvrability}</li>
      </ul>
      {/* <ul>
        <li>
          Speed: {stats.speed} {buffs.speed && ' + ' + buffs.speed.gain}
        </li>
        <li>
          Shield: {stats.shield} {buffs.shield && ' + ' + buffs.shield.gain}
        </li>
        <li>
          Damage: {stats.damage} {buffs.damage && ' + ' + buffs.damage.gain}
        </li>
        <li>
          Hull: {stats.hull} {buffs.hull && ' + ' + buffs.hull.gain}
        </li>
        <li>
          Manuvrability: {stats.manuvrability}
          {buffs.manuvrability && ' + ' + buffs.manuvrability.gain}
        </li>
      </ul> */}
    </>
  );
};

export default SpaceshipStats;
