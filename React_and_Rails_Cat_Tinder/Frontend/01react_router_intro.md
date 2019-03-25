# Using React Router

## [React Router Video](https://player.vimeo.com/video/216433577)

Watch the video above to see why we are setting up our app in this way to use the React Router.

## Installing React-Router

We'll use yarn to install the react router.  Our app is a HTML based web app, so we use react-router-dom

```
$ yarn add react-router-dom
```

## React Router Setup

Here is an example of using React Router to create pages for an apartment listings site:

#### src/App.js
```Javascript
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import ApartmentCtr from './containers/ApartmentContainer'

import Login from './pages/Login';
import Header from './components/Header'


class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Router>
					<div>
						<Route path="/apartments" component={ApartmentCtr} />
						<Route path="/login" component={Login} />
						<Route exact path="/" component={Home} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
```
