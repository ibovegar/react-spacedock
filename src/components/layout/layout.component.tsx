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

interface IProps extends RouteComponentProps {
  authenticated: boolean;
  children: ReactNode;
}

const Layout: React.FC<IProps> = props => {
  const classes = useStyles();
  const { children } = props; // history

  return (
    <Box display="flex" height="100vh" flexDirection="column" p={6}>
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
