import * as React from 'react';
import { IBuffs } from 'models';

interface ISpaceshipBuilderProps {
  buffs: IBuffs;
}

const SpaceshipBuilder: React.FC<ISpaceshipBuilderProps> = ({ buffs }) => {
  const buffKeys = Object.keys(buffs);

  return (
    <ul>
      {buffKeys.map(key => (
        <li key={buffs[key].id}>{buffs[key].name}</li>
      ))}
    </ul>
  );
};

export default SpaceshipBuilder;
