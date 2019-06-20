import React from 'react';
import { connect } from 'react-redux';
import { UpgradeControls } from 'components';
import { Viewer } from 'components';
import Box from '@material-ui/core/Box';
import * as interfaces from './spacecraft-builder.interface';
import { Upgrade } from 'models';

class SpacecraftBuilder extends React.Component<interfaces.Props, {}> {
  componentDidMount() {
    this.props.setSelectedSpacecraft(this.props.match.params.spacecraftId);
  }

  handleSelectUpgrade = (oldUpgrade: Upgrade, newUpgrade: Upgrade) => {
    const { spacecraft } = this.props;
    if (!spacecraft) return;
    if (oldUpgrade) this.props.detachUpgrade(oldUpgrade);
    this.props.attachUpgrade(spacecraft, newUpgrade);
  };

  handleDeselectUpgrade = (upgrade: Upgrade) => {
    this.props.detachUpgrade(upgrade);
  };

  render() {
    const { spacecraft, attachedUpgrades, availableUpgrades } = this.props;

    if (!spacecraft) {
      return <div>Loading...</div>;
    }

    return (
      <Box display="flex" height="100%">
        <Box flex={1} width={900} ml={6}>
          <Viewer spacecraft={spacecraft} attachedUpgrades={attachedUpgrades} />
        </Box>
        <Box width={300} ml={6}>
          <UpgradeControls
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
)(SpacecraftBuilder);
