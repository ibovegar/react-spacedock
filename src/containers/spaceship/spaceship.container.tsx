import React from 'react';
import { connect } from 'react-redux';
import { ISpaceship, IUpgrade } from 'models';
import * as upgradesAPI from 'api/upgrades.api';
import { SpaceshipStats } from 'components';
import { loadSpaceships } from 'store/actions';

export interface ISpaceshipProps {
  isLoading: boolean;
  loadSpaceships: any;
  spaceships: ISpaceship[];
}

class Spaceship extends React.Component<ISpaceshipProps, {}> {
  componentDidMount() {
    this.props.loadSpaceships();

    upgradesAPI.get('drax22').then((upgrades: IUpgrade[]) => {
      console.log(upgrades);
    });
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
  spaceships: state.spaceships.spaceships
});

const mapDispatchToProps = { loadSpaceships };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spaceship);
