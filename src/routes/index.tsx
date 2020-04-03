//#region ---------------------- React Imports ----------------------------
import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
//#endregion

//#region --------------------- Type Imports -------------------------------
import * as PropTypes from './PropTypes';
//#endregion

//#region --------------------- Component Imports --------------------------
import {Login, Signup} from '../components/auth';
import {Main, Nav} from '../components/shell';
//#endregion

//#region --------------------- Misc Imports --------------------------------
import history from './history';
//#endregion

const Routes: React.FC<PropTypes.RoutesProps> = (props) => {
  const { isLoggedIn } = props;

  const preLoginRoutes = (
    <Switch>
      {/* Routes placed here are available to all visitors */}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      { /* Default route */}
      <Route component={Login} />
    </Switch>
  )

  const postLoginRoutes = (
    <Switch>
      {/* Routes placed here are available to logged in visitors */}
      {/* <Route component={Home} /> */}
      { /* Default route */}
    </Switch>
  );

  return (
    <Router history={history}>
        <Main>
          <Nav {...props} />
          {isLoggedIn ? postLoginRoutes: preLoginRoutes}
        </Main>
    </Router>
  );
}

export default Routes;
