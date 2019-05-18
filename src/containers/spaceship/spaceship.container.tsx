import React from 'react';
import { ISpaceship, IUpgrade } from 'models';
import * as API from 'api/spaceship.api';
import * as upgradesAPI from 'api/upgrades.api';
import { SpaceshipStats } from 'components';

export interface ISpaceshipState {
  spaceships: ISpaceship[];
}

export default class Spaceship extends React.Component<{}, ISpaceshipState> {
  state = {
    spaceships: [],
  };

  componentDidMount() {
    API.getAll().then((spaceships: ISpaceship[]) => {
      console.log(spaceships);
      this.setState({ spaceships });
    });

    upgradesAPI.get('drax22').then((upgrades: IUpgrade[]) => {
      console.log(upgrades);
    });
  }

  render() {
    const { spaceships } = this.state;

    return (
      <>
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
