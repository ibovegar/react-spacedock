import * as React from 'react';
import { connect } from 'react-redux';
import { Spacecraft } from 'models';
import { loadSpacecrafts, getAllspacecrafts } from 'store/spacecrafts';
import { AppState } from 'store';
import { MissionTag } from 'components/ui';

interface StateProps {
  isLoading: boolean;
  spacecrafts: Spacecraft[];
}

interface DispatchProps {
  loadSpacecrafts: () => void;
}

type Props = StateProps & DispatchProps;

class Home extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.loadSpacecrafts();
  }

  render() {
    return (
      <>
        <MissionTag title="NCC-Triton [ RESCUE ]" posX={5} posY={20}>
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
  spacecrafts: getAllspacecrafts(state)
});

const mapDispatchToProps = {
  loadSpacecrafts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
