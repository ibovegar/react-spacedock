import React, { useState } from 'react';
// import { formatCurrency } from 'utils/helpers';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { Mission } from 'models';
import { AppState } from 'store';
import { connect } from 'react-redux';
import { getMissionById, completeMission } from 'store/missions';
import CloseIcon from '@material-ui/icons/Close';
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  Theme,
  IconButton
} from '@material-ui/core';
import { MissionStats, MissionProgress } from 'components/ui';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: '50%',
    position: 'relative'
  },
  stats: {
    position: 'absolute',
    top: 100,
    left: 10
  },
  content: {
    padding: theme.spacing(8)
  },
  media: {
    height: '440px',
    width: '100%',
    objectFit: 'cover',
    display: 'block'
  },
  avatar: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  actions: {
    display: 'flex',
    justifyContent: 'center'
  },
  inProgress: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1000,
    backgroundColor: theme.palette.background.paper
  }
}));

interface StateProps {
  mission?: Mission;
  completeMission: (mission) => void;
}

interface MatchParams {
  missionId: string;
}

type Props = StateProps & RouteComponentProps<MatchParams>;

const MissionViewer: React.FC<Props> = props => {
  const [redirect, setRedirect] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const classes = useStyles();
  const { mission, completeMission } = props;

  const handleOnCompleted = () => {
    completeMission(mission);
    setRedirect(true);
  };

  if (redirect) return <Redirect to="/tactical" />;
  if (!mission) return <div>loading mission...</div>;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        {inProgress && (
          <MissionProgress
            className={classes.inProgress}
            onCompleted={handleOnCompleted}
          />
        )}
        <CardHeader
          avatar={<Avatar className={classes.avatar}>R</Avatar>}
          action={
            <IconButton aria-label="Settings" onClick={() => setRedirect(true)}>
              <CloseIcon />
            </IconButton>
          }
          title={mission.title}
          subheader={mission.shortDescription}
        />
        <img
          className={classes.media}
          src={`${process.env.PUBLIC_URL}/images/art/${mission.id}.jpg`}
          alt=""
        />
        <MissionStats className={classes.stats} mission={mission} />
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            {mission.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setInProgress(true)}
          >
            LAUNCH MISSION
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export const mapDispatch = {
  completeMission
};

const mapState = (state: AppState, ownProps: Props) => ({
  mission: getMissionById(state, ownProps.match.params.missionId)
});

export default connect(
  mapState,
  mapDispatch
)(MissionViewer);
