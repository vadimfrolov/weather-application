import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {store} from './store/store';
import {Provider} from 'react-redux';
import {ErrorBoundary} from '../src/components/ErrorBoundary/ErrorBoundary';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
