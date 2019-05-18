import { combineReducers } from 'redux';
import * as fromSpaceships from './spaceships';
import * as fromUpgrades from './upgrades';

export default combineReducers({
  spaceships: fromSpaceships.reducer,
  upgrades: fromUpgrades.reducer
});

export interface AppState {
  spaceships: fromSpaceships.State;
  upgrades: fromUpgrades.State;
}
