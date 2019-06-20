import { combineReducers } from 'redux';
import * as spacecrafts from './spacecrafts';
import * as upgrades from './upgrades';
import * as marketplace from './marketplace';

export const rootReducer = combineReducers({
  spacecrafts: spacecrafts.reducer,
  upgrades: upgrades.reducer,
  marketplace: marketplace.reducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
