import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Button, makeStyles, Theme, Typography, Grid } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles((theme: Theme) => ({
  nav: {
    borderStyle: 'solid',
    borderWidth: '1px 0 1px 0',
    borderColor: theme.palette.grey[800]
  },
  button: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(5)
  },
  icon: {
    marginRight: theme.spacing(4)
  }
}));

const Nav: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" spacing={4} className={classes.nav}>
      <Grid item>
        <Typography variant="overline">MENU</Typography>
      </Grid>
      <Grid item>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          size="small"
          component={Link}
          to="/"
        >
          <AddBoxIcon fontSize="small" className={classes.icon} />
          TACTICAL
        </Button>
      </Grid>
      <Grid item>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          size="small"
          component={Link}
          to="/engineering"
        >
          <AddBoxIcon fontSize="small" className={classes.icon} />
          ENGINEERING
        </Button>
      </Grid>
      <Grid item>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          size="small"
          component={Link}
          to="/marketplace"
        >
          <AddBoxIcon fontSize="small" className={classes.icon} />
          STORE
        </Button>
      </Grid>
      <Grid item>
        <Button
          className={classes.button}
          variant="contained"
          size="small"
          disabled
        >
          <AddBoxIcon fontSize="small" className={classes.icon} />
          SOMETHING
        </Button>
      </Grid>
      <Grid item>
        <Button
          className={classes.button}
          variant="contained"
          size="small"
          disabled
        >
          <AddBoxIcon fontSize="small" className={classes.icon} />
          INVENTORY
        </Button>
      </Grid>
    </Grid>
  );
};

export default withRouter(Nav);
