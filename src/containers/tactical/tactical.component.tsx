import * as React from 'react';
import { connect } from 'react-redux';
import { Spacecraft, Mission } from 'models';
import { AppState } from 'store';
import { MissionTag } from 'components/ui';
import { Route, RouteComponentProps } from 'react-router';
import { loadSpacecrafts, getAllspacecrafts } from 'store/spacecrafts';
import { loadMissions, getAllMissions } from 'store/missions';
import MissionViewer from './mission-viewer/mission-viewer.component';

const tagPositions: any = [
  {
    x: 5,
    y: 20
  },
  {
    x: 32,
    y: 35
  },
  {
    x: 26,
    y: 65
  },
  {
    x: 70,
    y: 30
  },
  {
    x: 100,
    y: 100
  }
];

interface Props extends RouteComponentProps {
  isLoading: boolean;
  spacecrafts: Spacecraft[];
  missions: Mission[];
  loadSpacecrafts: () => void;
  loadMissions: () => void;
}

class Tactical extends React.Component<Props> {
  componentDidMount() {
    this.props.loadSpacecrafts();
    this.props.loadMissions();
  }

  handleSelectMission = (missionId: string) => {
    this.props.history.push(`${this.props.match.path}/${missionId}`);
  };

  render() {
    const isWatchingMission =
      this.props.history.location.pathname !== '/tactical';

    return (
      <>
        {this.props.missions.map((mission: Mission, index: number) => (
          <MissionTag
            key={mission.id}
            mission={mission}
            position={tagPositions[index]}
            disabled={isWatchingMission || mission.completed}
            onSelect={() => this.handleSelectMission(mission.id)}
          />
        ))}
        <Route
          path={`${this.props.match.path}/:missionId`}
          component={MissionViewer}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.spacecrafts.isLoading,
  spacecrafts: getAllspacecrafts(state),
  missions: getAllMissions(state)
});

const mapDispatchToProps = {
  loadSpacecrafts,
  loadMissions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tactical);
