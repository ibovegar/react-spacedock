import * as React from 'react';
import { IBuffs } from 'models';

interface ISpaceshipBuilderProps {
  buffs: IBuffs;
}

const SpaceshipBuilder: React.FC<ISpaceshipBuilderProps> = props => {
  const buffKeys = Object.keys(props.buffs);

  return (
    <ul>
      {buffKeys.map(key => (
        <li key={props.buffs[key].id}>{props.buffs[key].name}</li>
      ))}
    </ul>
  );
};

export default SpaceshipBuilder;
