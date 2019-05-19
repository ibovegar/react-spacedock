import * as React from 'react';
import { connect } from 'react-redux';
import { ISpaceship } from 'models';
import { loadAllSpaceships, getAllSpaceships } from 'store/spaceships';
import { AppState } from 'store';
import { Link } from 'react-router-dom';

interface IStateProps {
  isLoading: boolean;
  spaceships: ISpaceship[];
}

interface IDispatchProps {
  loadAllSpaceships: () => void;
}

type Props = IStateProps & IDispatchProps;

class Home extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.loadAllSpaceships();
  }

  render() {
    const { spaceships } = this.props;

    return (
      <>
        {spaceships.map((spaceship: ISpaceship) => (
          <div key={spaceship.id}>
            <br />
            <br />
            <Link to={`/engineering/${spaceship.id}`}>{spaceship.name}</Link>
            <div>{spaceship.manufacturer}</div>
            <div>{spaceship.type}</div>
            <div>{spaceship.price}</div>
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.spaceships.isLoading,
  spaceships: getAllSpaceships(state)
});

const mapDispatchToProps = {
  loadAllSpaceships
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
