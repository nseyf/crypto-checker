import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { cryptoChecker } from './reducers/index';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(cryptoChecker)



render(
  <Provider store={store}>
    <App />
  </Provider>, 

document.getElementById('root'));
registerServiceWorker();
