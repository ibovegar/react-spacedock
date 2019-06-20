import * as React from 'react';
import { connect } from 'react-redux';
import { Spacecraft } from 'models';
import { loadSpacecrafts, getAllspacecrafts } from 'store/spacecrafts';
import { AppState } from 'store';
import { SpacecraftList } from 'components';

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
    const { spacecrafts } = this.props;

    return (
      <>
        <SpacecraftList spacecrafts={spacecrafts} />
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
