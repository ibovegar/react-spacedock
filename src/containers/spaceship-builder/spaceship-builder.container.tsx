import React from 'react';
import { connect } from 'react-redux';
import { SpaceshipViewer, SpaceshipStats, SpaceshipControls } from 'components';
import { isEmpty } from 'utils/helpers';
import Box from '@material-ui/core/Box';
import * as interfaces from './spaceship-builder.interface';

class SpaceshipBuilder extends React.Component<interfaces.IProps, {}> {
  componentDidMount() {
    this.props.setSelectedSpacecraft(this.props.match.params.spaceshipId);
  }

  render() {
    const { spacecraft, upgrades } = this.props;

    if (isEmpty(spacecraft)) {
      return <div>Loading spacecraft</div>;
    }

    return (
      <Box display="flex">
        <Box width={600}>
          <SpaceshipViewer spacecraft={spacecraft} />
        </Box>
        <Box flex={1}>
          <SpaceshipControls spacecraft={spacecraft} upgrades={upgrades} />
        </Box>
        <Box width={400}>
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
