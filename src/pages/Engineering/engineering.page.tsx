import { Route, RouteComponentProps } from 'react-router-dom';
import * as React from 'react';
import { Spaceship } from 'containers';

// interface IEngineeringProps {
//   math: boolean;
//   children: ReactNode;
// }

const Engineering = ({ match }: RouteComponentProps<any>) => {
  console.log(match);

  // Display list of ships. Select a ship to show engineering section (below ship list). Ship list is animated as slide to height 100px. Easily accesible if you eant to change ship

  return (
    <>
      <Route path={`${match.path}/:spaceshipId`} component={Spaceship} />
    </>
  );
};

export default Engineering;
