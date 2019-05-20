import React from 'react';
import { connect } from 'react-redux';
import { ISpaceship } from 'models';
import { SpaceshipStats } from 'components';
import { loadSpaceship, getSelectedSpaceship } from 'store/spaceships';
import { loadUpgrades } from 'store/upgrades';
import { AppState } from 'store';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<MatchParams> {
  isLoading: boolean;
  spaceship: ISpaceship;
  loadSpaceship: any;
  loadUpgrades: any;
}

interface MatchParams {
  spaceshipId: string;
}

class Spaceship extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.loadSpaceship(this.props.match.params.spaceshipId);
  }

  render() {
    const { isLoading, spaceship } = this.props;

    return (
      <>
        <div>Is loading: {isLoading.toString()}</div>

        {spaceship && (
          <SpaceshipStats
            key={spaceship.id}
            stats={spaceship.stats}
            buffs={spaceship.buffs}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.spaceships.isLoading,
  spaceship: getSelectedSpaceship(state)
});

const mapDispatchToProps = {
  loadSpaceship,
  loadUpgrades
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spaceship);
