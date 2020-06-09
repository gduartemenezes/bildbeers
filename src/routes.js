import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Beer from './pages/Beer';
import Register from './pages/Register';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/beer" exact component={Beer} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
