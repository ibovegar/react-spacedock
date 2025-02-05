import React, { Component } from 'react';
import { Spacecraft, AttachedUpgrades } from 'models';
import Stats from './stats/stats.component';
import Canvas from './canvas/canvas.component';
import { Widget } from 'components';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Plus from 'assets/images/plus.svg';

const styles = () =>
  createStyles({
    crosses: {
      height: '100%',
      backgroundImage: `url(${Plus})`,
      backgroundRepeat: 'repeat'
    }
  });

interface Props extends WithStyles<typeof styles> {
  spacecraft: Spacecraft;
  attachedUpgrades: AttachedUpgrades;
}

class SpacecraftViewer extends Component<Props, any> {
  state = {
    isLoading: true
  };

  handleLoaded = () => {
    this.setState({ isLoading: false });
  };

  render() {
    const { classes, spacecraft, attachedUpgrades } = this.props;

    return (
      <Widget>
        <div className={classes.crosses}>
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

export default withStyles(styles)(SpacecraftViewer);
