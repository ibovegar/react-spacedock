import React from 'react';
import { connect } from 'react-redux';
import { ISpaceship } from 'models';
import { SpaceshipStats } from 'components';
import { loadSpaceships } from 'store/spaceships';
import { loadUpgrades } from 'store/upgrades';
import { AppState } from 'store';

interface IStateProps {
  isLoading: boolean;
  spaceships: ISpaceship[];
}

interface IDispatchProps {
  loadSpaceships: any;
  loadUpgrades: any;
}

type Props = IStateProps & IDispatchProps;

class Spaceship extends React.Component<Props, {}> {
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

const mapStateToProps = (state: AppState) => ({
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
