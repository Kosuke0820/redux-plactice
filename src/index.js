import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './containers/App';
import rootReducer from './reducers';

const middleWare = [thunk]

const store = createStore(rootReducer, applyMiddleware(...middleWare));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);