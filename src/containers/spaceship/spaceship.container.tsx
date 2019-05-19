import React from 'react';
import { connect } from 'react-redux';
// import { ISpaceship } from 'models';
// import { SpaceshipStats } from 'components';
import { loadSpaceship } from 'store/spaceships';
import { loadUpgrades } from 'store/upgrades';
import { AppState } from 'store';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<MatchParams> {
  isLoading: boolean;
  // spaceship: ISpaceship;
  loadSpaceship: any;
  loadUpgrades: any;
}

interface MatchParams {
  spaceshipId: string;
}

class Spaceship extends React.Component<Props, {}> {
  componentDidMount() {
    console.log(this.props.match.params.spaceshipId);
    this.props.loadSpaceship(this.props.match.params.spaceshipId);
    // this.props.loadUpgrades('drax22');
  }

  render() {
    // const { spaceship, isLoading } = this.props;
    const { isLoading } = this.props;

    return (
      <>
        {isLoading}
        {/* <SpaceshipStats
          key={spaceship.id}
          stats={spaceship.stats}
          buffs={spaceship.buffs}
        /> */}
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.spaceships.isLoading
  // getSpacesipById selector
});

const mapDispatchToProps = {
  loadSpaceship,
  loadUpgrades
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spaceship);
