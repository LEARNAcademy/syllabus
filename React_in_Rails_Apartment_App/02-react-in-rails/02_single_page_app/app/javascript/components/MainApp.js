import React from "react"
import PropTypes from "prop-types"
import { Nav, NavItem, NavLink} from 'reactstrap'
import { BrowserRouter as  Router, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import LearnMore from './pages/LearnMore'

class MainApp extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Nav>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/more">Learn More</NavLink>
            </NavItem>
          </Nav>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/more" component={LearnMore} />
        </div>
      </Router>
    );
  }
}

export default MainApp
