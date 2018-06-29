import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Layout from './layouts/Header';
import IndexPage from './pages/index';

function RouterConfig({ history }) {
  return (
    <Layout history={history}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default RouterConfig;
