import * as React from 'react';
import { IBaseStats } from 'models';

interface IProps {
  stats: IBaseStats;
}

const SpaceshipStats: React.FC<IProps> = ({ stats }) => {
  // Only rerender if buffs changes

  return (
    <>
      <h2>Stats</h2>
      <ul>
        <li>Speed: {stats.speed}</li>
        <li>Shield: {stats.shield}</li>
        <li>Damage: {stats.damage}</li>
        <li>Hull: {stats.hull}</li>
        <li>Manuvrability: {stats.manuvrability}</li>
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
