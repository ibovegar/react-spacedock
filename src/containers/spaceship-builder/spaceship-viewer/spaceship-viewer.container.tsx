import React, { Component } from 'react';
import { Spaceship, AttachedUpgrades } from 'models';
import { Stats, Canvas, Widget } from 'components';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import Plus from 'assets/images/plus.svg';

const styles = () =>
  createStyles({
    dots: {
      height: '100%',
      backgroundImage: `url(${Plus})`,
      backgroundRepeat: 'repeat'
    }
  });

interface Props extends WithStyles<typeof styles> {
  spacecraft: Spaceship;
  attachedUpgrades: AttachedUpgrades;
}

class SpaceshipViewer extends Component<Props, {}> {
  state = {
    isLoading: true
  };

  handleLoaded = () => {
    this.setState({ isLoading: false });
  };

  render() {
    const { classes, spacecraft, attachedUpgrades } = this.props;

    return (
      <Widget title="SPACECRAFT VIEWER">
        <div className={classes.dots}>
          {this.state.isLoading ? (
            <div>LOADING ASSETS. PLEASE WAIT... </div>
          ) : (
            <Stats
              spacecraft={spacecraft}
              attachedUpgrades={attachedUpgrades}
            />
          )}
          <Canvas
            spacecraft={spacecraft}
            attachedUpgrades={attachedUpgrades}
            onLoaded={this.handleLoaded}
          />
        </div>
      </Widget>
    );
  }
}

export default withStyles(styles)(SpaceshipViewer);
