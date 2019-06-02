import React, { Component } from 'react';
import { ISpaceship, IAttachedUpgrades } from 'models';
import { Stats, Canvas, Widget } from 'components';

interface IProps {
  spacecraft: ISpaceship;
  attachedUpgrades: IAttachedUpgrades;
}

export default class SpaceshipViewer extends Component<IProps, {}> {
  state = {
    isLoading: true
  };

  handleLoaded = () => {
    this.setState({ isLoading: false });
  };

  render() {
    return (
      <Widget title="SPACECRAFT VIEWER">
        {this.state.isLoading ? (
          <div>LOADING ASSETS. PLEASE WAIT... </div>
        ) : (
          <Stats
            spacecraft={this.props.spacecraft}
            attachedUpgrades={this.props.attachedUpgrades}
          />
        )}
        <Canvas
          spacecraft={this.props.spacecraft}
          attachedUpgrades={this.props.attachedUpgrades}
          onLoaded={this.handleLoaded}
        />
      </Widget>
    );
  }
}
