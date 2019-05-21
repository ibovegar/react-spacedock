import * as React from 'react';
import { ISpaceship } from 'models';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import image from 'assets/images/space1.jpg';

interface IProps {
  spaceship: ISpaceship;
}

const SpaceshipCard: React.FC<IProps> = ({ spaceship }) => {
  return (
    <>
      <Paper>
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
                  <Link to={`/engineering/${spaceship.id}`}>
                    {spaceship.name}
                  </Link>
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
      </Paper>
    </>
  );
};

export default SpaceshipCard;
