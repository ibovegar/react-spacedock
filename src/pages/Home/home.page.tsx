import * as React from 'react';
import { connect } from 'react-redux';
import { ISpaceship } from 'models';
import { loadSpacecrafts, getAllSpaceships } from 'store/spaceships';
import { AppState } from 'store';
import { SpaceshipList } from 'components';

interface IStateProps {
  isLoading: boolean;
  spaceships: ISpaceship[];
}

interface IDispatchProps {
  loadSpacecrafts: () => void;
}

type Props = IStateProps & IDispatchProps;

class Home extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.loadSpacecrafts();
  }

  render() {
    const { spaceships } = this.props;

    return (
      <>
        <SpaceshipList spaceships={spaceships} />
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.spaceships.isLoading,
  spaceships: getAllSpaceships(state)
});

const mapDispatchToProps = {
  loadSpacecrafts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
