import React, { ReactNode } from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import {
  Box,
  Button,
  makeStyles,
  Theme,
  Typography,
  Grid
} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import backgroundImage from 'assets/images/15.jpg';

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    filter: 'grayscale(20%) brightness(12%)' // 15
  },
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

interface Props extends RouteComponentProps {
  authenticated: boolean;
  children: ReactNode;
}

const Layout: React.FC<Props> = props => {
  const classes = useStyles();
  const { children } = props; // history

  return (
    <Box display="flex" height="100vh" flexDirection="column" p={6}>
      <img className={classes.background} alt=" " />
      <Box p={2}>
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
      </Box>
      {/* <aside>Sidenav</aside> */}
      <Box flex={1} mt={6} style={{ minHeight: 0 }}>
        {children}
      </Box>
    </Box>
  );
};

export default withRouter(Layout);
