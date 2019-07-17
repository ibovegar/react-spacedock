import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { Mission } from 'models';
import clsx from 'clsx';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core';
import CreditsIcon from '@material-ui/icons/AttachMoney';
import DifficultyIcon from '@material-ui/icons/SignalCellular2Bar';
import TypeIcon from '@material-ui/icons/Layers';
import LocationIcon from '@material-ui/icons/LocationOn';
import ConstellationIcon from '@material-ui/icons/BubbleChart';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  avatar: {
    backgroundColor: theme.palette.background.default,
    color: '#fff',
    marginRight: theme.spacing(5)
  }
}));

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  mission: Mission;
}

const MissionTag: React.FC<Props> = props => {
  const { mission, className } = props;
  const classes = useStyles();
  const rootClasses = clsx(classes.root, className);

  return (
    <List className={rootClasses}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <CreditsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Credits" secondary={mission.credits} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <DifficultyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Difficulty" secondary={mission.difficulty} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <TypeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Type" secondary={mission.type} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <LocationIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Location"
          secondary={`${mission.ascention} / ${mission.declination}`}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <ConstellationIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Constellation"
          secondary={mission.constellation}
        />
      </ListItem>
    </List>
  );
};

export default MissionTag;
