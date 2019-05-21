import * as React from 'react';
import { ISpaceship } from 'models';
// import { Link } from 'react-router-dom';
import SpaceshipCard from 'components/spaceship-card';

interface IStateProps {
  spaceships: ISpaceship[];
}

const SpaceshipList: React.FC<IStateProps> = ({ spaceships }) => {
  return (
    <>
      {spaceships.map((spaceship: ISpaceship) => (
        <SpaceshipCard key={spaceship.id} spaceship={spaceship} />
      ))}
    </>
  );
};

export default SpaceshipList;
