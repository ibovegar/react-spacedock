import React from 'react';
import { ISpaceship } from 'models';
import { Box } from '@material-ui/core';

interface IProps {
  spacecraft: ISpaceship;
}

const SpaceshipViewer: React.FC<IProps> = props => {
  const { spacecraft } = props;

  return (
    <>
      <Box bgcolor="grey.100" p={2}>
        <img
          width="100%"
          alt="spaceship"
          src={`${process.env.PUBLIC_URL}/images/${spacecraft.registry}.jpg`}
        />
      </Box>
    </>
  );
};

export default SpaceshipViewer;
