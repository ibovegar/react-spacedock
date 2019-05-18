import React, { Component } from 'react';
import classes from './App.module.scss';
import * as API from 'api/spaceship.api';
import * as upgradesAPI from 'api/upgrades.api';
import { ISpaceship, IUpgrade } from 'models';

// import { SpaceshipStats } from 'components/spaceship';
import SpaceshipStats from 'components/spaceship/spaceship-stats/spaceship-stats.component';

class App extends Component {
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
      <div className={classes.App}>
        {spaceships.map((spaceship: ISpaceship) => (
          <SpaceshipStats
            key={spaceship.id}
            stats={spaceship.stats}
            buffs={spaceship.buffs}
          />
        ))}
      </div>
    );
  }
}

export default App;
