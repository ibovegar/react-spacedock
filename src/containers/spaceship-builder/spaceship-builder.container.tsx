import React from 'react';
import { connect } from 'react-redux';
import { ISpaceship, IAttachedUpgrades } from 'models';
import { SpaceshipStats, SpaceshipViewer, SpaceshipControls } from 'components';
import {
  getSelectedSpacecraftEntity,
  setSelectedSpacecraft
} from 'store/spaceships';
import { loadInventory, getSpaceraftUpgrades } from 'store/upgrades';
import { AppState } from 'store';
import { RouteComponentProps } from 'react-router-dom';
import Box from '@material-ui/core/Box';

interface IProps extends RouteComponentProps<MatchParams> {
  isLoading: boolean;
  spacecraft: ISpaceship;
  upgrades: IAttachedUpgrades;
  setSelectedSpacecraft: (id: string) => void;
  loadInventory: () => void;
}

// Todo slit into dispatch, selector and state props

interface MatchParams {
  spaceshipId: string;
}

class SpaceshipBuilder extends React.Component<IProps, {}> {
  componentDidMount() {
    this.props.setSelectedSpacecraft(this.props.match.params.spaceshipId);
    this.props.loadInventory();
  }

  render() {
    const { spacecraft, upgrades } = this.props;
    console.log(upgrades);

    return (
      <>
        {spacecraft && upgrades && (
          <Box display="flex" bgcolor="grey.100">
            <Box width={600}>
              <SpaceshipViewer spaceship={spacecraft} />
            </Box>
            <Box flex={1} bgcolor="grey.200">
              <SpaceshipControls
                attachedUpgrades={spacecraft.attachedUpgrades}
                availableUpgrades={upgrades}
              />
            </Box>
            <Box width={400} bgcolor="grey.300">
              <SpaceshipStats stats={spacecraft.baseStats} />
            </Box>
          </Box>
        )}
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.spaceships.isLoading,
  spacecraft: getSelectedSpacecraftEntity(state),
  upgrades: getSpaceraftUpgrades(state)
});

const mapDispatchToProps = {
  setSelectedSpacecraft,
  loadInventory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpaceshipBuilder);
