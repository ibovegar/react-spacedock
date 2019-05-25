import React from 'react';
import { Link } from 'react-router-dom';
import { ISpaceship } from 'models';
import SpaceshipCard from './spaceship-card/spaceship-card.component';
import { Box } from '@material-ui/core';

interface IStateProps {
  spaceships: ISpaceship[];
  onSpacecraftClick?: (event: React.MouseEvent) => void;
}

const SpaceshipList: React.FC<IStateProps> = props => {
  const { spaceships, onSpacecraftClick } = props;

  return (
    <>
      {spaceships.map((spaceship: ISpaceship) => (
        <Box key={spaceship.id} bgcolor="grey.100">
          <Link
            to={`/engineering/${spaceship.id}`}
            onClick={onSpacecraftClick}
            id={spaceship.id}
          >
            <SpaceshipCard spaceship={spaceship} />
          </Link>
        </Box>
      ))}
    </>
  );
};

export default SpaceshipList;
