import React, { Component } from 'react';
import classes from './App.module.scss';
import * as API from 'api/spaceship.api';
import { ISpaceship } from 'models';

// import { SpaceshipStats } from 'components/spaceship';
import SpaceshipStats from 'components/spaceship/spaceship-stats/spaceship-stats.component';

class App extends Component {
  state = {
    spaceships: [],
  };

  componentDidMount() {
    API.getAll().then((spaceships: ISpaceship[]) => {
      this.setState({ spaceships });
    });
  }

  render() {
    const { spaceships } = this.state;

    return (
      <div className={classes.App}>
        {spaceships.map((spaceship: ISpaceship) => (
          <SpaceshipStats
            key={spaceship.id}
            baseStats={spaceship.baseStats}
            upgrades={spaceship.upgrades}
          />
        ))}
      </div>
    );
  }
}

export default App;
