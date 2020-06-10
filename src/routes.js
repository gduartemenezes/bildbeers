import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Beer from './pages/Beer';
import Register from './pages/Register';
import Popular from './pages/Popular';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/beer"  component={Beer} />
        <Route path="/register" component={Register} />
        <Route path="/popular"  component={Popular} />
      </Switch>
    </BrowserRouter>
  );
}
