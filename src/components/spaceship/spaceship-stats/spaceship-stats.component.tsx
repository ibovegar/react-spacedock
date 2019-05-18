import * as React from 'react';
import { IBaseStats, IBuffs } from 'models';

interface ISpaceshipStatsProps {
  stats: IBaseStats;
  buffs: IBuffs;
}

const SpaceshipStats: React.FC<ISpaceshipStatsProps> = ({ stats, buffs }) => {
  // Only rerender if buffs changes

  return (
    <>
      <h1>Stats</h1>
      <ul>
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
      </ul>
    </>
  );
};

export default SpaceshipStats;
