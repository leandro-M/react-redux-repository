import React, { Fragment } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Footer from '../components/Footer';

function Routes() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>

        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default Routes;
