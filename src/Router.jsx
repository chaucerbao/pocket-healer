// Dependencies
import React from 'react'
import ReactRouter from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'
import browserHistory from 'react-router/lib/browserHistory'

// Layout
import Application from './Application'

// Pages
import Homepage from 'pages/Homepage'
import Prepare from 'pages/Prepare'
import Battle from 'pages/Battle'
import NotFound404 from 'pages/NotFound404'

// Router
const Router = (
  <ReactRouter history={browserHistory}>
    <Route path='/' component={Application}>
      <IndexRoute component={Homepage} />
      <Route path='prepare' component={Prepare} />
      <Route path='battle' component={Battle} />
      <Route path='*' component={NotFound404} />
    </Route>
  </ReactRouter>
)

export default Router
