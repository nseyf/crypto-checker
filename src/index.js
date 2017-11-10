import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { cryptoChecker } from './reducers/index';
import ReduxPromise from 'redux-promise';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  cryptoChecker,
  applyMiddleware(ReduxPromise)
)



render(
  <Provider store={store}>
    <App />
  </Provider>,

document.getElementById('root'));
registerServiceWorker();
