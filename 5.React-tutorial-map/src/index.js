
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory();
import App from './components/App';

const Application = (
  <App history={history}>
    { App }
  </App>
);

const app = document.getElementById('app');
render(Application, app);
