import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'store';
import thunk from 'redux-thunk';

import { ThemeProvider } from '@material-ui/styles';
import Theme from './ui/theme/index';

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'normalize.css';
import './assets/css/styles.scss';

const middleware = [thunk];
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
