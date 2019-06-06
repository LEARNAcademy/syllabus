import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Bikes from './pages/Bikes'
class AuthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/bikes" component={Bikes} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AuthenticatedApp
