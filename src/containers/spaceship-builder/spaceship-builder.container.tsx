import React from 'react';
import { connect } from 'react-redux';
import { ISpaceship, IAttachedUpgrades } from 'models';
import { SpaceshipStats, SpaceshipViewer, SpaceshipControls } from 'components';
import { getSelectedSpacecraft, setSelectedSpacecraft } from 'store/spaceships';
import { getSpaceraftUpgrades } from 'store/upgrades';
import { AppState } from 'store';
import { RouteComponentProps } from 'react-router-dom';
import Box from '@material-ui/core/Box';

interface IStateProps {
  spacecraft: ISpaceship;
  upgrades: IAttachedUpgrades;
}

interface IDispatchProps {
  setSelectedSpacecraft: (id: string) => void;
}

interface MatchParams {
  spaceshipId: string;
}

type IProps = IStateProps & IDispatchProps & RouteComponentProps<MatchParams>;

class SpaceshipBuilder extends React.Component<IProps, {}> {
  componentDidMount() {
    this.props.setSelectedSpacecraft(this.props.match.params.spaceshipId);
  }

  render() {
    const { spacecraft, upgrades } = this.props;

    if (!spacecraft) {
      return <div>Select a spacecraft</div>;
    }

    return (
      <>
        <Box display="flex">
          <Box width={600}>
            <SpaceshipViewer spacecraft={spacecraft} />
          </Box>
          <Box flex={1}>
            <SpaceshipControls
              spacecraft={spacecraft}
              availableUpgrades={upgrades}
            />
          </Box>
          <Box width={400}>
            <SpaceshipStats spacecraft={spacecraft} />
          </Box>
        </Box>
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  spacecraft: getSelectedSpacecraft(state),
  upgrades: getSpaceraftUpgrades(state)
});

const mapDispatchToProps = {
  setSelectedSpacecraft
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpaceshipBuilder);
