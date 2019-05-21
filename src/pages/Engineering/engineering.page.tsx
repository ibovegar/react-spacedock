import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { SpaceshipBuilder } from 'containers';
import { SpaceshipList } from 'components';
import { loadAllSpaceships, getAllSpaceships } from 'store/spaceships';
import { AppState } from 'store';
import { ISpaceship } from 'models';

interface IProps extends RouteComponentProps {
  isLoading: boolean;
  spaceships: ISpaceship[];
  loadAllSpaceships: () => void;
}

class Engineering extends React.Component<IProps, {}> {
  componentDidMount() {
    this.props.loadAllSpaceships();
  }

  render() {
    const { match, spaceships } = this.props;

    return (
      <>
        <SpaceshipList spaceships={spaceships} />
        <Route
          path={`${match.path}/:spaceshipId`}
          render={props => (
            <SpaceshipBuilder key={props.match.params.spaceshipId} {...props} />
          )}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.spaceships.isLoading,
  spaceships: getAllSpaceships(state)
});

export default connect(
  mapStateToProps,
  { loadAllSpaceships }
)(Engineering);
