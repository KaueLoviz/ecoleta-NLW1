import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoints';

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={CreatePoint} path='/create-point'/>
    </Switch>
    </BrowserRouter>
  );
}

export default Routes;