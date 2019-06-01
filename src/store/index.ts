import { combineReducers } from 'redux';
import * as spaceships from './spaceships';
import * as upgrades from './upgrades';
import * as store from './store';

export const rootReducer = combineReducers({
  spaceships: spaceships.reducer,
  upgrades: upgrades.reducer,
  store: store.reducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
