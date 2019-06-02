import React from 'react';
import { NavLink } from 'react-router-dom';
import { ISpaceship } from 'models';
import SpaceshipCard from './spaceship-card/spaceship-card.component';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  navigationItem: {
    border: '1px dashed' + theme.palette.grey[700],
    margin: 10,
    display: 'flex',
    textDecoration: 'none',
    color: theme.palette.text.primary,
    outline: 'none',
    '&:hover': {
      backgroundColor: theme.palette.grey[50]
    }
  },
  active: {
    backgroundColor: theme.palette.grey[300] + '!important',
    borderStyle: 'solid',
    borderColor: theme.palette.grey[800]
  }
}));

interface IStateProps {
  spaceships: ISpaceship[];
  onSpacecraftClick?: (event: React.MouseEvent) => void;
}

const SpaceshipList: React.FC<IStateProps> = props => {
  const { spaceships, onSpacecraftClick } = props;
  const classes = useStyles();

  return (
    <>
      {spaceships.map((spaceship: ISpaceship) => (
        <NavLink
          key={spaceship.id}
          className={classes.navigationItem}
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
