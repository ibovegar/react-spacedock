import React from 'react';
// import { Grid } from '@material-ui/core';
import {
  createStyles,
  WithStyles,
  withStyles,
  Theme
} from '@material-ui/core/styles';
import Nav from '../nav/nav.component';
// import CreditsIcon from '@material-ui/icons/AttachMoney';
import { Typography } from '@material-ui/core';
import { formatCurrency } from 'utils/helpers';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      borderStyle: 'solid',
      borderWidth: '1px 0 1px 0',
      borderColor: theme.palette.grey[800],
      display: 'flex',
      alignItems: 'center',
      height: 60
    },
    left: { flex: '1' },
    right: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      backgroundColor: theme.palette.background.paper
    }
  });

interface Props extends WithStyles<typeof styles> {
  credits: number;
}

const Toolbar: React.FC<Props> = ({ classes, credits }) => {
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <Nav />
      </div>
      <div className={classes.right}>
        {/* <CreditsIcon /> */}
        <Typography variant="h6">{formatCurrency(credits)}</Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(Toolbar);
