import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Beer from './pages/Beer';
import Register from './pages/Register';
import Popular from './pages/Popular';
import Login from './pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/beer" component={Beer} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/popular" component={Popular} />
    </Switch>
  );
}
