import React from 'react';
import { Spacecraft } from 'models';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

interface Props {
  spacecraft: Spacecraft;
}

const spacecraftCard: React.FC<Props> = ({ spacecraft }) => {
  return (
    <Box p={1}>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <img
            style={{ display: 'block' }}
            height="50"
            alt="spacecraft"
            src={`${process.env.PUBLIC_URL}/icons/spacecraft/${spacecraft.spacecraftRegistry}.png`}
          />
        </Grid>
        <Grid item style={{ paddingLeft: '20px' }}>
          <Typography variant="h6">{spacecraft.name}</Typography>
          <Typography variant="body2">{spacecraft.manufacturer}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default spacecraftCard;
