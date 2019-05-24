import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { SpaceshipBuilder } from 'containers';
import { SpaceshipList } from 'components';
import Box from '@material-ui/core/Box';
import * as interfaces from './engineering.interface';

class Engineering extends React.Component<interfaces.IProps, {}> {
  componentDidMount() {
    this.props.loadSpacecrafts();
    this.props.loadInventory();
  }

  handleSelectSpacecraft = (event: React.MouseEvent) => {
    this.props.setSelectedSpacecraft(event.currentTarget.id);
  };

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
          <SpaceshipList
            spaceships={spacecrafts}
            onSpacecraftClick={this.handleSelectSpacecraft}
          />
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
          <Route
            path={`${match.path}/`}
            render={() => <div>Select spaceship</div>}
          />
        </Box>
      </Box>
    );
  }
}

export default connect(
  interfaces.mapStateToProps,
  interfaces.mapDispatchToProps
)(Engineering);
