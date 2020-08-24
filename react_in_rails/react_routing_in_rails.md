# React Routing in Rails

## Overview
- When creating full-stack applications, we have to account for two different routers. The Rails router will route to API endpoints and the React router will route to different pages for our user.

## Learning Objectives
- Routing React components inside a Rails application
- Identifying the difference between the routes in Rails and React's `react-router-dom`
- Understanding the process of adding a CSS template to a React in Rails application

## Vocabulary
- reactstrap
- sass

## Additional Resources
- [ Reactstrap ](https://reactstrap.github.io)

## Set Up
The setup includes adding React to the Rails application and adding Webpacker to compile the JavaScript.
- $ rails new my_single_page_app -d postgresql -T
- $ cd my_single_page_app
- $ rails db:create
- $ bundle add react-rails
- $ rails webpacker:install
- $ rails webpacker:install:react
- $ rails generate react:install

## Troubleshooting
Now that we are working in a new stack, the way we find error messages is going to look a little bit different. We are used to getting a browser display when something goes wrong. With this particular stack, we need to look for errors in the console and in the terminal. Any syntax errors or incorrect code anywhere in the React components will prevent `App.js` from compiling. So a mistake is likely to lead to a blank page. If this happens, try one of the following options:

- Stop the server and start it again.
- Did all the setup commands run properly? The commands can be rerun if something isn't working.
- Seeing a blank page? Look at the terminal for errors.
- Did you follow all the Rails naming conventions?
- Did something unexpected happen? Don't be afraid to start over. If you are going to start over make sure to delete the current project completely including **dropping your database** ($ rails db:drop).

## React Component
We are going to create React components inside of a Rails application. This gives us the convenience of JavaScript in our Rails app, but the setup will look a little different that a plain React application. We are going to run Rails commands to set up the React components.
```
$ rails generate react:component App
```
This generate commands created a directory in *app* called *javascript* with some boilerplate React code. Add an `h1` tag to the React component so we can see content rendered.

**app/javascript/components/App.js**
```javascript
import React from "react"
import PropTypes from "prop-types"
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
      </React.Fragment>
    );
  }
}

export default App
```

## Rails Controller and View
Next, we need to generate a controller so that we can route the React component can be rendered in a Rails view. This is the only Rails view we will make. Everything else will come from the React components.
```
$ rails g controller Home
```
Add a file in *app/views/home* called *index.html.erb* to render the React component. Call the React component wrapped in `erb` tags.

**app/views/home/index.html.erb**
```javascript
<%= react_component "App" %>
```

Now we need to make sure we route to the appropriate file for our views.

**config/routes.rb**
```ruby
Rails.application.routes.draw do
  root to: 'home#index'
end
```

Start up the Rails server and check the content in the React component renders in the browser.

## Add Reactstrap
Adding Reactstrap to the application allows for the use of a library of pre-built components. Reactstrap works in conjunction with Bootstap's core CSS. To add these libraries requires a little bit of setup to make the React styles compatible with Rails. There are many ways to add bootstrap to a Rails app, all of which will work equally well.

We are going to modify the Rails stylesheet to be a "scss" file. This will allow us to write regular "css" code as well as import necessary dependencies.

```
$ bundle add bootstrap
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
$ yarn add reactstrap
```

Add an import to the "scss" file. Make sure to stop your server and restart after the performing these commands.

**app/assets/stylesheets/application.scss**
```
@import 'bootstrap'
```

## Additional React Components
At this point, there is only one React component in the application. Just like in a regular React App, our project will have many, many components. To keep the files organized, it is a good practice to create three directories in your React application: assets, components, and pages.

**Assets**  
The assets directory is used to store image files used in your application.

**Components**  
The components directory is for helper components such as headers, footers, and buttons.

**Pages**  
The pages directory is for full views. The full view can consist of items from the assets and components directory as well a code unique to a page.

Due to Rails convention, the React file structure lives in the *app/javascript/components* directory. **Note:** While it may seem a bit confusing, the React components directory will be nested inside of the Rails components directory. The Rails component directory takes the place of the `src` directory in a typical React application.

## Add pages
For this application, we are going to have three pages:
- "About Us"
- "Learn More"
- "Home"

Add an `<h3>` to each describing their intent

**app/javascript/components/pages/Home.js**
```javascript
import React from "react"

class Home extends React.Component {
  render() {
    return(
      <h3>This is the Home Page</h3>
    )
  }
}

export default Home
```

The other two are mostly the same.


## React Router
In order to have multiple pages we need to add the React Router.
```
$ yarn add react-router-dom
```

Import the React-router and appropriate pages.

**app/javascript/components/App.js**
```javascript
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

import AboutUs from './pages/AboutUs'
import LearnMore from './pages/LearnMore'
import Home from './pages/Home'
```

Add the basic routes to allow for navigation.

**app/javascript/components/App.js**
```javascript
<Router>
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/about" component={ AboutUs } />
    <Route path="/learn" component={ LearnMore } />
  </Switch>
</Router>
```

## Routing Constraints
You'll recall that Rails has a router, and now that we've added React Router, so does React. You might imagine that these two routers could come into conflict, and that would be correct. We need to clearly separate the Rails routing responsibilities, and the React routing responsibilities. We're building a single page app. This, by definition, means that all HTML traffic goes to just one page. All other types of requests though, will need to be routed by the Rails app. Most important of these, is the JSON and JavaScript traffic that the Rails app must handle, we've been thinking of these requests as API requests from the frontend app to the backend one.

The Rails Router has a convenient feature that we can use to achieve this separation of traffic, all HTML requests go to our React app, and everything else be handled normally.

**config/routes.rb**
```ruby
Rails.application.routes.draw do
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root to: 'home#index'
end
```
Notice the "constraints" section. This states that all HTML traffic goes to "home#index" our React app.

### Add Navigation Components
Using Reactstrap to add the navigation code.

**app/javascript/components/App.js**
```javascript
import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as  Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import AboutUs from './pages/AboutUs'
import LearnMore from './pages/LearnMore'
import Home from './pages/Home'

class App extends React.Component{
  render(){
    return(
      <Router>
        <h1>This is a React Component</h1>
        <Nav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/learn">Learn More</NavLink>
          </NavItem>
        </Nav>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ AboutUs } />
          <Route path="/learn" component={ LearnMore } />
        </Switch>
      </Router>
    )
  }
}

export default App
```

## Challenge: Single Page Application
Follow these instructions to create your own React in Rails application with Reactstrap and React-router.

[ Go to next lesson: Apartment App Devise Introduction ](./devise.md)

[ Back to React IN Rails Introduction ](./intro.md)

[ Back to Syllabus ](../README.md#unit-nine-react-in-rails-and-authentication)
