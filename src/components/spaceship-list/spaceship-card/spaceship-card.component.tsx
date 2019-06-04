import React from 'react';
import { ISpaceship } from 'models';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

interface IProps {
  spaceship: ISpaceship;
}

const SpaceshipCard: React.FC<IProps> = ({ spaceship }) => {
  return (
    <Box p={1}>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <img
            style={{ display: 'block' }}
            height="50"
            alt="spaceship"
            src={`${process.env.PUBLIC_URL}/images/${spaceship.registry}.png`}
          />
        </Grid>
        <Grid item style={{ paddingLeft: '20px' }}>
          <Typography variant="h6">{spaceship.name}</Typography>
          <Typography variant="body1" gutterBottom>
            {spaceship.manufacturer}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SpaceshipCard;
