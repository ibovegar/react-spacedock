import React from 'react';
import { connect } from 'react-redux';
import { ISpaceship } from 'models';
import { SpaceshipStats } from 'components';
import { loadSpaceships } from 'store/spaceships';
import { loadUpgrades } from 'store/upgrades';

export interface ISpaceshipProps {
  isLoading: boolean;
  loadSpaceships: any;
  loadUpgrades: any;
  spaceships: ISpaceship[];
}

class Spaceship extends React.Component<ISpaceshipProps, {}> {
  componentDidMount() {
    this.props.loadSpaceships();
    this.props.loadUpgrades('drax22');
  }

  render() {
    const { spaceships, isLoading } = this.props;

    return (
      <>
        {isLoading}
        {spaceships.map((spaceship: ISpaceship) => (
          <SpaceshipStats
            key={spaceship.id}
            stats={spaceship.stats}
            buffs={spaceship.buffs}
          />
        ))}
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isLoading: state.spaceships.isLoading,
  spaceships: state.spaceships.entities
});

const mapDispatchToProps = {
  loadSpaceships,
  loadUpgrades
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spaceship);
