import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import BasePage from './pages/BasePage/BasePage';
import ConsentsPage from './pages/ConsentsPage/ConsentsPage';
import GiveConsentPage from './pages/GiveConsentPage/GiveConsentPage';
import HomePage from './pages/HomePage/HomePage';

import store from './store/store';



ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store()}>
      <Router>
        <BasePage>
          <Switch>
            <Route path="/consents">
              <ConsentsPage />
            </Route>
            <Route path="/give-consent">
              <GiveConsentPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </BasePage>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
