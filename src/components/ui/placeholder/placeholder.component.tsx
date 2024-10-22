import React from 'react';
import {
  WithStyles,
  withStyles,
  createStyles,
  Theme
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardActions, Typography } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    card: {
      padding: theme.spacing(4)
    },
    cardContent: {
      '&:last-child': {
        paddingBottom: theme.spacing(4)
      }
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'center'
    }
  });

interface Props extends WithStyles<typeof styles> {
  action?: JSX.Element;
  message: string;
}

const Placeholder: React.FC<Props> = (props) => {
  const { classes, action } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h6">{props.message}</Typography>
        </CardContent>
        {action && (
          <CardActions className={classes.cardActions}>
            {props.action}
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default withStyles(styles)(Placeholder);
