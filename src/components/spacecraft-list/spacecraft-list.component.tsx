import React from 'react';
import { NavLink } from 'react-router-dom';
import { Spacecraft } from 'models';
import SpacecraftCard from './spacecraft-card/spacecraft-card.component';
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
    backgroundColor: theme.palette.grey[50],
    '&:hover': {
      backgroundColor: theme.palette.grey[400]
    }
  },
  active: {
    backgroundColor: theme.palette.primary.main + '!important',
    border: 'none',
    borderRadius: 2,
    clipPath: `polygon(
      0 0, 0 0, /* top-left */
      calc(100% - 10px) 0%, 100% 10px, /* top-right */
      100% 100%, 100% 100%, /* bottom-right */
      10px 100%, 0% calc(100% - 10px)) /* bottom-left */`

    // borderRadius: theme.shape.borderRadius
  }
}));

interface StateProps {
  spacecrafts: Spacecraft[];
  onSpacecraftClick?: (event: React.MouseEvent) => void;
}

const SpacecraftList: React.FC<StateProps> = (props) => {
  const { spacecrafts, onSpacecraftClick } = props;
  const classes = useStyles();

  return (
    <>
      {spacecrafts.map((spacecraft: Spacecraft) => (
        <NavLink
          key={spacecraft.id}
          className={classes.navigationItem}
          to={`/engineering/${spacecraft.id}`}
          onClick={onSpacecraftClick}
          id={spacecraft.id}
          activeClassName={classes.active}
        >
          <SpacecraftCard spacecraft={spacecraft} />
        </NavLink>
      ))}
    </>
  );
};

export default SpacecraftList;
