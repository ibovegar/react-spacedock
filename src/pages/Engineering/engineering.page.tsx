import React from 'react';
import { RouteComponentProps, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { SpaceshipBuilder } from 'containers';
import { SpaceshipList } from 'components';
import { loadSpacecrafts, getAllSpaceships } from 'store/spaceships';
import { loadInventory } from 'store/upgrades';
import { AppState } from 'store';
import { ISpaceship } from 'models';
import Box from '@material-ui/core/Box';

interface IStateProps extends RouteComponentProps {
  isLoadingSpaceships: boolean;
  isLoadingUpgrades: boolean;
  spacecrafts: ISpaceship[];
}

interface IDispatchProps {
  loadSpacecrafts: () => void;
  loadInventory: () => void;
}

type IProps = IStateProps & IDispatchProps;

class Engineering extends React.Component<IProps, {}> {
  componentDidMount() {
    this.props.loadSpacecrafts();
    this.props.loadInventory();
  }

  render() {
    const {
      match,
      spacecrafts,
      isLoadingSpaceships,
      isLoadingUpgrades
    } = this.props;

    if (isLoadingSpaceships || isLoadingUpgrades) {
      return <div>Loading...</div>;
    }

    return (
      <Box display="flex">
        <Box width={400}>
          <SpaceshipList spaceships={spacecrafts} />
        </Box>
        <Box flex={1}>
          <Route
            path={`${match.path}/:spaceshipId`}
            render={props => (
              <SpaceshipBuilder
                key={props.match.params.spaceshipId}
                {...props}
              />
            )}
          />
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isLoadingSpacerafts: state.spaceships.isLoading,
  isLoadingUpgrades: state.upgrades.isLoading,
  spacecrafts: getAllSpaceships(state)
});

const mapDispatchToProps = {
  loadInventory,
  loadSpacecrafts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Engineering);
