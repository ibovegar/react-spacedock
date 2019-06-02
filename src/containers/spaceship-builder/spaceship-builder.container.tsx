import React from 'react';
import { connect } from 'react-redux';
import { SpaceshipControls } from 'components';
import { SpaceshipViewer } from 'containers';
import Box from '@material-ui/core/Box';
import * as interfaces from './spaceship-builder.interface';
import { Typography } from '@material-ui/core';
import { IUpgrade } from 'models';
import { isEmpty } from 'utils/helpers';

class SpaceshipBuilder extends React.Component<interfaces.IProps, {}> {
  componentDidMount() {
    this.props.setSelectedSpacecraft(this.props.match.params.spaceshipId);
  }

  handleSelectUpgrade = (oldUpgrade: IUpgrade, newUpgrade: IUpgrade) => {
    this.props.setAttachedUpgrade(
      this.props.spacecraft,
      oldUpgrade,
      newUpgrade
    );
  };

  render() {
    const { spacecraft, attachedUpgrades, availableUpgrades } = this.props;

    if (isEmpty(spacecraft)) {
      return <div>Loading...</div>;
    }

    return (
      <Box display="flex">
        <Box width={900} m={8}>
          <SpaceshipViewer
            spacecraft={spacecraft}
            attachedUpgrades={attachedUpgrades}
          />
        </Box>
        <Box flex={1} m={2}>
          <Typography variant="h4" gutterBottom>
            Build Controls
          </Typography>
          <SpaceshipControls
            spacecraft={spacecraft}
            attachedUpgrades={attachedUpgrades}
            availableUpgrades={availableUpgrades}
            onSelectUpgrade={(oldUpgrade, newUpgrade) =>
              this.handleSelectUpgrade(oldUpgrade, newUpgrade)
            }
          />
        </Box>
      </Box>
    );
  }
}

export default connect(
  interfaces.mapStateToProps,
  interfaces.mapDispatchToProps
)(SpaceshipBuilder);
