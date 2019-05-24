import React from 'react';
import { ISpaceship } from 'models';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import image from 'assets/images/space1.jpg';

interface IProps {
  spaceship: ISpaceship;
}

const SpaceshipCard: React.FC<IProps> = ({ spaceship }) => {
  return (
    <Grid container>
      <Grid item>
        <img
          width="140"
          alt="spaceship"
          src={`${process.env.PUBLIC_URL}/images/${spaceship.registry}.jpg`}
        />
      </Grid>
      <Grid item sm container>
        <Grid item xs container direction="column">
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1">
              {spaceship.name}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {spaceship.manufacturer}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {spaceship.type}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{spaceship.price}</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">$19.00</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SpaceshipCard;
