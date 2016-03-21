import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Main from 'containers/Main'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
    </Route>
  </Router>
)

export default routes
