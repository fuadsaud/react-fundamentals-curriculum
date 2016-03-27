import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Main from 'containers/Main'
import Home from 'components/Home'
import ForecastContainer from 'containers/ForecastContainer'
import DetailContainer from 'containers/DetailContainer'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='forecast/:location' component={ForecastContainer}/>
      <Route path='detail/:location' component={DetailContainer}/>
    </Route>
  </Router>
)

export default routes
