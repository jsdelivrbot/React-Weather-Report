import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import ReduxPromise from 'redux-promise';

import css from './style.css'
import App from './components/app.js';
import reducers from './reducers';
import WeatherPromise from './middleware/weather_promise.js';

const createStoreWithMiddleware = applyMiddleware(WeatherPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('app')
);
