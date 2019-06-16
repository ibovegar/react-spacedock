import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { SpaceshipBuilder } from 'containers';
import { SpaceshipList } from 'components';
import Box from '@material-ui/core/Box';
import * as interfaces from './engineering.interface';
import { Typography } from '@material-ui/core';

class Engineering extends React.Component<interfaces.Props, {}> {
  componentDidMount() {
    this.props.loadSpacecrafts();
    this.props.loadAllUpgrades();
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
      <Box display="flex" height="100%">
        <Box width={340} height="100%" border={1} borderColor="grey.700">
          <SpaceshipList
            spaceships={spacecrafts}
            onSpacecraftClick={this.handleSelectSpacecraft}
          />
        </Box>
        <Box flex={1} height="100%">
          <Switch>
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
              render={() => (
                <Typography variant="h5">NO SPACECRAFT SELECTED</Typography>
              )}
            />
          </Switch>
        </Box>
      </Box>
    );
  }
}

export default connect(
  interfaces.mapStateToProps,
  interfaces.mapDispatchToProps
)(Engineering);
