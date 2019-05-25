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
    <Grid container>
      <Grid item>
        <Box p={2}>
          <img
            width="80"
            alt="spaceship"
            src={`${process.env.PUBLIC_URL}/images/${spaceship.registry}.jpg`}
          />
        </Box>
      </Grid>
      <Grid item sm container>
        <Grid item xs container direction="column">
          <Grid item xs>
            <Typography gutterBottom variant="h6">
              {spaceship.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {spaceship.manufacturer}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">{spaceship.type}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SpaceshipCard;
