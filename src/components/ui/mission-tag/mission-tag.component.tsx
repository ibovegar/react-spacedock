import React, { ReactNode } from 'react';
import {
  WithStyles,
  withStyles,
  createStyles,
  Theme
} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      display: 'inline-flex',
      alignItems: 'center',
      maxWidth: 500
    },
    tag: {
      backgroundColor: theme.palette.background.paper,
      padding: `${theme.spacing(4)}px ${theme.spacing(6)}px`,
      cursor: 'pointer',
      transition: `all 0.4s ${theme.transitions.easing.easeInOut}`,
      borderColor: theme.palette.background.paper,
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: theme.shape.borderRadius,
      '&:hover': {
        borderColor: theme.palette.primary.main,
        transform: 'scale(1.1)'
      }
    },
    spinner: {
      paddingRight: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      '&:after': {
        content: '" "',
        display: 'block',
        width: 40,
        height: 40,
        margin: 1,
        borderRadius: '50%',
        border: `8px solid ${theme.palette.primary.main}`,
        borderColor: `${theme.palette.primary.main} transparent ${theme.palette.primary.main} transparent`,
        animation: '$rotate 0.7s linear infinite'
      }
    },
    description: {
      lineHeight: 1
    },
    '@keyframes rotate': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  title: string;
  posX: number;
  posY: number;
  mirrored?: boolean;
  children: ReactNode;
}

const MissionTag: React.FC<Props> = props => {
  const { classes, title, posX, posY, children, mirrored } = props;

  return (
    <div className={classes.root} style={{ left: posX + '%', top: posY + '%' }}>
      {!mirrored && <div className={classes.spinner}></div>}
      <div className={classes.tag}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography
          className={classes.description}
          variant="overline"
          color="textSecondary"
        >
          {children}
        </Typography>
      </div>
      {mirrored && <div className={classes.spinner}></div>}
    </div>
  );
};

export default withStyles(styles)(MissionTag);
