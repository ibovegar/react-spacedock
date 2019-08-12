import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'store';
import thunk from 'redux-thunk';

import { ThemeProvider } from '@material-ui/styles';
import ThemeDark from './ui/theme/dark.theme';
// import ThemeLight from './ui/theme/light.theme';

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'normalize.css';
import './assets/css/styles.css';
import { CssBaseline } from '@material-ui/core';

const middleware = [thunk];
const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(rootReducer, enhancer);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={ThemeDark}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
