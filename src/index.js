import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'

import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './reducers';
import appSagaWatcher from './sagas';
import { ThemeContextProvider } from '../src/styles/themeContext';

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
  /* eslint-disable no-underscore-dangle */
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

  // NOTE: Uncomment the code below to restore support for Redux Saga
  // Dev Tools once it supports redux-saga version 1.x.x
  // if (window.__SAGA_MONITOR_EXTENSION__)
  //   reduxSagaMonitorOptions = {
  //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
  //   };
  /* eslint-enable */
}

// Saga middleware
const sagaMiddleware = createSagaMiddleware();
// Create the store with two middlewares
// 1. sagaMiddleware: Makes redux-sagas work
const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];


const store = createStore(
  allReducers,
  composeEnhancers(...enhancers));

sagaMiddleware.run(appSagaWatcher);

ReactDOM.render(
  // <React.StrictMode>
    <ThemeContextProvider><App store={store} locale={{ locale: 'en' }} /></ThemeContextProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
