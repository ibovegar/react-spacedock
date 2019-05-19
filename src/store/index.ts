import { combineReducers } from 'redux';
import * as spaceships from './spaceships';
import * as upgrades from './upgrades';

export const rootReducer = combineReducers({
  spaceships: spaceships.reducer,
  upgrades: upgrades.reducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
