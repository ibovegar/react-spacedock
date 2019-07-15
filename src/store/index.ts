import { combineReducers } from 'redux';
import * as spacecrafts from './spacecrafts';
import * as upgrades from './upgrades';
import * as marketplace from './marketplace';
import * as user from './user';
import * as missions from './missions';

export const rootReducer = combineReducers({
  spacecrafts: spacecrafts.reducer,
  upgrades: upgrades.reducer,
  marketplace: marketplace.reducer,
  user: user.reducer,
  missions: missions.reducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
