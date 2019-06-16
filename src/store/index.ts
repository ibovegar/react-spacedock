import { combineReducers } from 'redux';
import * as spaceships from './spaceships';
import * as upgrades from './upgrades';
import * as marketplace from './marketplace';

export const rootReducer = combineReducers({
  spaceships: spaceships.reducer,
  upgrades: upgrades.reducer,
  marketplace: marketplace.reducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
