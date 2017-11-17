import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

import App from './App';

import 'semantic-ui-css/semantic.min.css';

import registerServiceWorker from './registerServiceWorker';

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

render(router, document.getElementById('root'));
registerServiceWorker();
