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

  return (
    <Router history={history}>
        <Main>
            <Nav {...props} />
            <Switch>
                { /* Default route */}
                
                {/* Routes placed here are available to all visitors */}
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </Switch>
        </Main>
    </Router>
  );
}

export default Routes;
