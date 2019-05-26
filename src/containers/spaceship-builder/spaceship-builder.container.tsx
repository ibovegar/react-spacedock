import React from 'react';
import { connect } from 'react-redux';
import { SpaceshipViewer, SpaceshipStats, SpaceshipControls } from 'components';
import { isEmpty } from 'utils/helpers';
import Box from '@material-ui/core/Box';
import * as interfaces from './spaceship-builder.interface';
import { Typography } from '@material-ui/core';
import { IUpgrade } from 'models';

class SpaceshipBuilder extends React.Component<interfaces.IProps, {}> {
  render() {
    const { spacecraft, upgrades, setActiveUpgrade } = this.props;

    if (isEmpty(spacecraft)) {
      return <div>Loading spacecraft</div>;
    }

    const handleSelectUpgrade = (upgrade: IUpgrade) => {
      setActiveUpgrade(spacecraft, upgrade);
    };

    return (
      <Box display="flex">
        <Box width={500} m={2}>
          <Typography variant="h4" gutterBottom>
            Spacedock
          </Typography>
          <SpaceshipViewer spacecraft={spacecraft} />
        </Box>
        <Box flex={1} m={2}>
          <Typography variant="h4" gutterBottom>
            Build Controls
          </Typography>
          <SpaceshipControls
            spacecraft={spacecraft}
            upgrades={upgrades}
            onSelectUpgrade={upgrade => handleSelectUpgrade(upgrade)}
          />
        </Box>
        <Box width={500} m={2}>
          <Typography variant="h4" gutterBottom>
            Statistics
          </Typography>
          <SpaceshipStats spacecraft={spacecraft} />
        </Box>
      </Box>
    );
  }
}

export default connect(
  interfaces.mapStateToProps,
  interfaces.mapDispatchToProps
)(SpaceshipBuilder);
