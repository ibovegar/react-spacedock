import * as React from 'react';
import { connect } from 'react-redux';
import { Spacecraft, Mission } from 'models';
import { loadSpacecrafts, getAllspacecrafts } from 'store/spacecrafts';
import { loadMissions, getAllMissions } from 'store/missions';
import { AppState } from 'store';
import { MissionTag } from 'components/ui';

interface Props {
  isLoading: boolean;
  spacecrafts: Spacecraft[];
  missions: Mission[];
  loadSpacecrafts: () => void;
  loadMissions: () => void;
}

class Home extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.loadSpacecrafts();
    this.props.loadMissions();
  }

  handleMissionSuccess = (event: React.MouseEvent) => {
    console.log('click', event);
  };

  render() {
    return (
      <>
        <MissionTag
          title="NCC-Triton [ RESCUE ]"
          posX={5}
          posY={20}
          // onClick={this.handleMissionSuccess}
        >
          Lorem ipsum dolor sit amet lorem ipsum.
        </MissionTag>
        <MissionTag title="Asteroid XBF-1342 [ MINING ]" posX={32} posY={35}>
          Lorem ipsum dolor sit amet lorem ipsum.
        </MissionTag>
        <MissionTag title="Daemolous [ SALVAGE ]" posX={25} posY={65} mirrored>
          Lorem ipsum dolor sit amet lorem ipsum.
        </MissionTag>
        <MissionTag
          title="Cygvin Harvest [ TACTICAL ]"
          posX={70}
          posY={30}
          mirrored
        >
          Lorem ipsum dolor sit amet lorem ipsum.
        </MissionTag>
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
)(Home);
