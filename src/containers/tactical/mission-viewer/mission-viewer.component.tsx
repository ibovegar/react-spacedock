import React, { useState } from 'react';
// import { formatCurrency } from 'utils/helpers';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { Mission } from 'models';
import { AppState } from 'store';
import { connect } from 'react-redux';
import { getMissionById } from 'store/missions';
import CloseIcon from '@material-ui/icons/Close';
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  Theme,
  IconButton
} from '@material-ui/core';

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
    zIndex: 1000
  },
  content: {
    padding: theme.spacing(8)
  },
  media: {
    height: 0,
    paddingTop: '50%' // 16:9
  },
  avatar: {
    backgroundColor: theme.palette.primary.main
  },
  actions: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

interface StateProps {
  mission?: Mission;
}

interface MatchParams {
  missionId: string;
}

type Props = StateProps & RouteComponentProps<MatchParams>;

const MissionViewer: React.FC<Props> = props => {
  const [redirect, setRedirect] = useState(false);
  const classes = useStyles();
  const { mission } = props;

  if (redirect) return <Redirect to="/tactical" />;
  if (!mission) return <div>loading mission...</div>;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
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
        <CardMedia
          className={classes.media}
          image={`${process.env.PUBLIC_URL}/images/art/${mission.id}.jpg`}
          title="Paella dish"
        />
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            {mission.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button variant="contained" color="primary">
            LAUNCH MISSION
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

const mapState = (state: AppState, ownProps: Props) => ({
  mission: getMissionById(state, ownProps.match.params.missionId)
});

export default connect(mapState)(MissionViewer);