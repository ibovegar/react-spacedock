import React from 'react';
import { connect } from 'react-redux';
import { SpaceshipControls } from 'components';
import { SpaceshipViewer } from 'containers';
import Box from '@material-ui/core/Box';
import * as interfaces from './spaceship-builder.interface';
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

  handleDeselectUpgrade = (upgrade: IUpgrade) => {
    this.props.detachUpgrade(upgrade);
  };

  render() {
    const { spacecraft, attachedUpgrades, availableUpgrades } = this.props;

    if (isEmpty(spacecraft)) {
      return <div>Loading...</div>;
    }

    return (
      <Box display="flex" height="100%">
        <Box flex={1} width={900} ml={6}>
          <SpaceshipViewer
            spacecraft={spacecraft}
            attachedUpgrades={attachedUpgrades}
          />
        </Box>
        <Box width={300} ml={6}>
          <SpaceshipControls
            spacecraft={spacecraft}
            attachedUpgrades={attachedUpgrades}
            availableUpgrades={availableUpgrades}
            onDeselectUpgrade={upgrade => this.handleDeselectUpgrade(upgrade)}
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
