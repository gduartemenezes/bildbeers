import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import Beer from '../pages/Beer';
import Register from '../pages/Register';
import Popular from '../pages/Popular';
import Login from '../pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/beer" component={Beer} isPrivate />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/popular" component={Popular} isPrivate />
    </Switch>
  );
}
