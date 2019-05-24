import React from 'react';
import { Link } from 'react-router-dom';
import { ISpaceship } from 'models';
import SpaceshipCard from 'components/spaceship-card';

interface IStateProps {
  spaceships: ISpaceship[];
  onSpacecraftClick?: (event: React.MouseEvent) => void;
}

const SpaceshipList: React.FC<IStateProps> = props => {
  const { spaceships, onSpacecraftClick } = props;

  return (
    <>
      {spaceships.map((spaceship: ISpaceship) => (
        <Link
          key={spaceship.id}
          to={`/engineering/${spaceship.id}`}
          onClick={onSpacecraftClick}
          id={spaceship.id}
        >
          <SpaceshipCard spaceship={spaceship} />
        </Link>
      ))}
    </>
  );
};

export default SpaceshipList;
