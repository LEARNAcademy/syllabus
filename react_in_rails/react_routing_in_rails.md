# React Routing in Rails

## Overview
- Creating a single page application (SPA) where `react-router-dom` is used to create links between React components

## Learning Objectives
- Routing React components inside a Rails application
- Understanding the difference between the router in Rails and React's `react-router-dom`
- Understanding the process of adding a CSS template to a React in Rails application

## Vocabulary
- reactstrap
- sass

## Useful Commands
- mv

## Additional Resources
- <a href="https://getbootstrap.com/" target="blank">Bootstrap</a>
- <a href="https://reactstrap.github.io" target="blank">Reactstrap</a>


### Set Up
A database is not needed for this project so the typical `rails new` command with the Postgresql flags can be shortened. The setup includes adding React to the Rails application and adding Webpacker to compile the JavaScript.
- $ rails new my_single_page_app
- $ cd my_single_page_app
- $ bundle add react-rails
- $ bundle install
- $ rails webpacker:install
- $ rails webpacker:install:react
- $ rails generate react:install
- $ yarn install

### Step 1: React Component
Create a React component in the Rails application using a rails generate command.
- $ rails generate react:component App
- Add an `h1` tag to the React component *app/javascript/components/App.js* to see content rendered

### Step 2: Rails Routes
- add `root to: 'home#index'` to *config/routes.rb*

### Step 3: Rails Controller and View
Generate a Rails controller and create the view.
- $ rails g controller Home
- Add a file in *app/views/home* called *index.html.erb*
- call the React component wrapped in erb tags
- `<%= react_component "App" %>`

### Step 4: Start the Rails Server
Start up the Rails server and check the content in the React component renders in the browser.
- $ rails s

### Step 5: Adding Bootstrap and Reactstrap
Adding Reactstrap to the application allows for the use of a library of pre-built components. Reactstrap works in conjunction with Bootstap's core CSS. To add these libraries requires a little bit of setup to make the React styles compatible with Rails. **Note:** There are many ways to add bootstrap to a Rails app, all of which will work equally well.
- $ bundle add bootstrap
- Restart the rails server if running!!
- Modify the *application.css* to be a "sass" file:
- $ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
- Add an import to the "sass" file  `@import 'bootstrap'`
- $ yarn add reactstrap

### Troubleshooting
- Stop the server and start it again.
- Did all the setup commands run properly? The commands can be rerun if something isn't working.
- Seeing a blank page? Look at the terminal for errors.
- Did you follow all the Rails naming conventions?
- Did something unexpected happen? Don't be afraid to start over. If you are going to start over make sure to delete the current project completely.

### Step 6: Add Reactstrap Navigation Components
Using code directly from the Reactstrap docs, add the navigation code to *App.js*

**app/javascript/components/App.js**

```javascript
import React from "react"
import PropTypes from "prop-types"
// add imports for Reactstrap components
import { Nav, NavItem, NavLink } from 'reactstrap'

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <h1>This is a React Component</h1>
        <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
      </React.Fragment>
    )
  }
}

export default App
```

### Step 7: Additional React Components
At this point, there is only one React component in the application. Just like in a regular React App, our project will have many, many components. To keep the components organized we will add two directories: pages and components.

- *App.js* will contain all of our routes
- *pages* directory will contain the main pages of the app
- *components* directory will contain all the helper components needed to create beautiful, engaging, user friendly interactions

Due to Rails convention, the React file structure lives in the *app/javascript/components* directory. **Note:** While it may seem a bit confusing, the React components directory will be nested inside of the Rails components directory.


### Step 8: Add pages

Now that we have a React file structure and code for navigation we need pages.
- Add three files in the pages directory: "About Us", "Learn More", and "Home"
- Add an `<h1>` describing their intent

**app/javascript/components/pages/Home.js**

```javascript
import React from "react"

class Home extends React.Component {
  render() {
    return(
      <h1>This is the Home Page</h1>
    )
  }
}

export default Home
```

The other two are mostly the same.


### Step 9: React Router
In order to have multiple pages in a single page app, we need to add the React Router.
- $ yarn add react-router-dom
- Import the router to *App.js* `import { BrowserRouter as  Router, Route, Link } from 'react-router-dom'`
- Import the pages to *App.js* `import Home from './pages/Home'`, etc.
- Wrap all the code in the return of *App.js* in `<Router></Router>` tags
- Add/update the reactstrap boilerplate `<NavLink></NavLink>` tags for all the components in the pages directory

### Step 10: Routing Constraints

You'll recall that Rails has a router, and now that we've added React Router, so does React.  You might imagine that these two routers could come into conflict, and that would be correct.  We need to clearly separate the Rails routing responsibilities, and the React routing responsibilities. We're building a single page app. This, by definition, means that all HTML traffic goes to just one page. All other types of requests though, will need to be routed by the Rails app. Most important of these, is the JSON and JavaScript traffic that the Rails app must handle, we've been thinking of these requests as API requests from the frontend app to the backend one.

The Rails Router has a convenient feature that we can use to achieve this separation of traffic, all HTML requests go to our React app, and everything else be handled normally.

**config/routes.rb**
```ruby
Rails.application.routes.draw do
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root to: 'home#index'
end
```
Notice the "constraints" section. This states that all HTML traffic goes to "home#index" our React app.

### Step 11: Update the React router

**app/javascript/components/App.js**
```javascript
import React from "react"
import { Nav, NavItem, NavLink } from 'reactstrap'
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom'

// import the pages
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import LearnMore from './pages/LearnMore'

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <h1>This is a React Component</h1>
          <Nav className="nav-bar">
            <NavItem>
              <NavLink to="/home" tag={ Link }>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" tag={ Link }>About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/more" tag={ Link }>Learn More</NavLink>
            </NavItem>
          </Nav>
          <Route path="/home" exact component={ Home } />
          <Route path="/about" exact component={ AboutMe } />
          <Route path="/more" exact component={ LearnMore } />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
```

### Step 12: Re-Load the page.

## Challenge: Single Page Application
- Follow these instructions to create your own "Single Page Application" React in Rails application with reactstrap


[ Go to next lesson: Devise Introduction ](./devise.md)

[ Back to React IN Rails Introduction ](./intro.md)

[ Back to Syllabus ](../README.md#unit-nine-react-in-rails-and-authentication)
