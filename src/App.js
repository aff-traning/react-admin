import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import MasterLayout from './containers/layouts/MasterLayout';
import PrivateRoute from './containers/layouts/PrivateRoute';
import Dashboard from './containers/pages/Dashboard';
import ProductPage from './containers/pages/ProductPage';
import LoginPage from './containers/pages/LoginPage';
import UserPage from './containers/pages/UserPage';
import RolePage from './containers/pages/RolePage';

function App({ store, routes }) {
  // const Context = createContext();
  // const { Provider, Consumer } = Context;

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute authPathRedirect="/login" >
            <MasterLayout>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/products' component={ProductPage} />
              <Route exact path='/users' component={UserPage} />
              <Route exact path='/roles' component={RolePage} />
            </MasterLayout>
          </PrivateRoute>
        </Switch>
      </Router>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App;
