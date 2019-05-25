import React from 'react';
import { NavLink } from 'react-router-dom';
import { ISpaceship } from 'models';
import SpaceshipCard from './spaceship-card/spaceship-card.component';
import classes from './spaceship-list.module.scss';

interface IStateProps {
  spaceships: ISpaceship[];
  onSpacecraftClick?: (event: React.MouseEvent) => void;
}

const SpaceshipList: React.FC<IStateProps> = props => {
  const { spaceships, onSpacecraftClick } = props;

  return (
    <>
      {spaceships.map((spaceship: ISpaceship) => (
        <NavLink
          key={spaceship.id}
          className={classes.NavigationItem}
          to={`/engineering/${spaceship.id}`}
          onClick={onSpacecraftClick}
          id={spaceship.id}
          activeClassName={classes.active}
        >
          <SpaceshipCard spaceship={spaceship} />
        </NavLink>
      ))}
    </>
  );
};

export default SpaceshipList;
