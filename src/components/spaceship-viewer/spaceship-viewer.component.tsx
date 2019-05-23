import React from 'react';
import classes from './spaceship-viewer.module.scss';
import { ISpaceship } from 'models';

interface IProps {
  spacecraft: ISpaceship;
}

const SpaceshipViewer: React.FC<IProps> = props => {
  const { spacecraft } = props;

  return (
    <>
      <h2>Viewer</h2>
      <div className={classes.SpaceshipViewer}>{spacecraft.name}</div>
    </>
  );
};

export default SpaceshipViewer;
