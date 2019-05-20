import * as React from 'react';
import { ISpaceship } from 'models';
import { Link } from 'react-router-dom';

interface IStateProps {
  spaceships: ISpaceship[];
}

const SpaceshipList: React.FC<IStateProps> = ({ spaceships }) => {
  return (
    <>
      {spaceships.map((spaceship: ISpaceship) => (
        <div key={spaceship.id}>
          <br />
          <br />
          <Link to={`/engineering/${spaceship.id}`}>{spaceship.name}</Link>
          <div>{spaceship.manufacturer}</div>
          <div>{spaceship.type}</div>
          <div>{spaceship.price}</div>
        </div>
      ))}
    </>
  );
};

export default SpaceshipList;
