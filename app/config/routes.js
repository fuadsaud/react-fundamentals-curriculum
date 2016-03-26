import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Main from 'containers/Main'
import Home from 'components/Home'
import Forecast from 'components/Forecast'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='forecast/:location' component={Forecast} />
    </Route>
  </Router>
)

export default routes
