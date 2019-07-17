import React from 'react';
import {
  WithStyles,
  withStyles,
  createStyles,
  Theme
} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Mission } from 'models';
import clsx from 'clsx';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
      width: 320,
      padding: theme.spacing(2),
      borderRadius: 5,
      cursor: 'pointer',
      '&$disabled': {
        filter: 'blur(10px)',
        pointerEvents: 'none'
      },
      '&:hover': {
        boxShadow: `inset 0 0 0 2px ${theme.palette.primary.main}`
      }
    },
    tag: {
      width: '100%',
      padding: `0 ${theme.spacing(6)}px`,
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(4),
      backgroundColor: theme.palette.background.paper,
      borderRadius: 10
    },
    spinner: {
      display: 'flex',
      justifyContent: 'center',
      width: '50%',
      height: 80,
      clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
      background: `radial-gradient(circle at center 35%, transparent 20%, ${theme.palette.background.paper} 21%)`,
      '&:after': {
        content: '" "',
        display: 'block',
        width: 54,
        height: 54,
        margin: 1,
        borderRadius: '50%',
        border: `4px solid ${theme.palette.primary.main}`,
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
    },
    disabled: {}
  });

interface Props extends WithStyles<typeof styles> {
  mission: Mission;
  position: any;
  disabled?: boolean;
  onSelect: () => void;
}

const MissionTag: React.FC<Props> = props => {
  const { classes, mission, position, onSelect, disabled } = props;

  const rootClasses = clsx(classes.root, {
    [classes.disabled]: disabled
  });

  return (
    <div
      className={rootClasses}
      style={{ left: position.x + '%', top: position.y + '%' }}
      onClick={() => onSelect()}
    >
      <div className={classes.tag}>
        <Typography variant="h6" gutterBottom>
          {mission.title}
        </Typography>
        <Typography
          className={classes.description}
          variant="overline"
          color="textSecondary"
        >
          {mission.shortDescription}
        </Typography>
      </div>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default withStyles(styles)(MissionTag);
