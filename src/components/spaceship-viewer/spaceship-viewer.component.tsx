import React from 'react';
import classes from './spaceship-viewer.module.scss';
import { ISpaceship } from 'models';

interface IProps {
  spaceship: ISpaceship;
}

const SpaceshipViewer: React.FC<IProps> = props => {
  return (
    <>
      <h2>Viewer</h2>
      <div className={classes.SpaceshipViewer}>{props.spaceship.name}</div>
    </>
  );
};

export default SpaceshipViewer;
