# React IN Rails Introduction

#### Overview
There are many, may ways to create a full-stack application. In this section we will look at how to host React components inside of a Rails application. Rails has a very powerful asset packaging system called the Asset Pipeline that can be used to serve React components. Adding React components inside a Rails project simplifies the flow of information from the database to the view. With this particular configuration of technologies we have two routers in the same application. The Rails router will route to API endpoints and the React router will display different pages for the user.

#### Previous Lecture (59 min)
[![YouTube](http://img.youtube.com/vi/mKJXxwEIs7o/0.jpg)](https://www.youtube.com/watch?v=mKJXxwEIs7o)

#### Learning Objectives
- can create React views hosted in a Rails application
- can distinguish UI content from API content
- can create routing constraint to discern HTML from JSON

#### Vocabulary
- Asset Pipeline
- Webpacker
- sass

#### Additional Resources
- [ React-Rails project docs ](https://github.com/reactjs/react-rails)
- [ Reactstrap ](https://reactstrap.github.io)

#### Process
The setup includes adding React to the Rails application and adding Webpacker to compile JavaScript.
```
$ rails new hello_world -d postgresql -T
$ cd hello_world
$ rails db:create
$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ rails generate react:install
```

#### Troubleshooting Tips
Now that we are working in a new stack, the way we find error messages is going to look a little bit different. We are used to getting a browser display when something goes wrong. With this particular stack, we need to look for errors in the console and in the terminal. Any syntax errors or incorrect code anywhere in the React components will prevent `App.js` from compiling. So a mistake is likely to lead to a blank page.

- Stop the server and start it again.
- Did all the setup commands run properly? The commands can be rerun if something isn't working.
- Seeing a blank page? Look for errors in the terminal or inspect your page.
- Errors? Always look at the first error in the list.

<hr>

### React Components in a Rails Application
There are many ways to create a full-stack application.  Once we have a Rails application we can add a React component using a generate command.
- $ `rails generate react:component App`
- The install commands created a directory in `app` called `javascript`
- In `app/javascript` there will be another directory called `components` that will contain our `App.js` React component with some basic code
- Add an `h1` tag to the React component

**app/javascript/components/HelloWorld.js**
```javascript
import React from "react"
import PropTypes from "prop-types"
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Hello World!</h1>
      </React.Fragment>
    );
  }
}

export default App
```

### Rails Controller and View
Next, we need to generate a controller so that we can route the React component can be rendered in a Rails view. This is the only Rails view we will make. Everything else will come from the React components.
- $ `rails g controller Home`
- Add a file in *app/views/home* called *index.html.erb*
- By calling the React Component in `erb` tags the component will be rendered in the browser through the Rails view

**app/views/home/index.html.erb**
```javascript
 <%= react_component 'App' %>
```
Now we need to make sure we route to the appropriate file for our views.

### Rails Routes
Create a route so the React component will be rendered in a Rails view.

**config/routes.rb**
```ruby
Rails.application.routes.draw do
  root 'home#index'
end
```

### Reactstrap
Adding Reactstrap to the application allows for the use of a library of pre-built components. Reactstrap works in conjunction with Bootstap's core CSS. To add these libraries requires a little bit of setup to make the React styles compatible with Rails. There are many ways to add bootstrap to a Rails app, all of which will work equally well.

We are going to modify the Rails stylesheet to be a stylesheet with an `.scss` extension. This will allow us to write regular `css` code as well as import necessary dependencies. **scss** stands for Syntactially Awesome Styles Sheet and is a superset of css. It contains all of the functionality available in css with the addition of features such as imports and mixins.

```
$ bundle add bootstrap
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
$ yarn add reactstrap
```

Add an import to the `scss` file. Make sure to stop your server and restart after the performing these commands.

**app/assets/stylesheets/application.scss**
```css
@import 'bootstrap';
```

### Additional React Components
At this point, there is only one React component in the application. Just like in a regular React App, our project will have many, many components. To keep the files organized, it is a good practice to create three directories in your React application: assets, components, and pages.

**Assets**  
The assets directory is used to store image files used in your application.

**Components**  
The components directory is for helper components such as headers, footers, and buttons.

**Pages**  
The pages directory is for full views. The full view can consist of items from the assets and components directory as well a code unique to a page.

Due to Rails convention, the React file structure lives in the *app/javascript/components* directory. **Note:** While it may seem a bit confusing, the React components directory will be nested inside of the Rails components directory. The Rails component directory takes the place of the `src` directory in a typical React application.

### Add Pages
For this application, we are going to have three pages:
- `AboutUs.js`
- `LearnMore.js`
- `Home.js`

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

### React Router
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
} from "react-router-dom"

import AboutUs from "./pages/AboutUs"
import LearnMore from "./pages/LearnMore"
import Home from "./pages/Home"
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

### Routing Constraints
You'll recall that Rails has a router, and now that we've added React Router, so does React. You might imagine that these two routers could come into conflict, and that would be correct. We need to clearly separate the Rails routing responsibilities, and the React routing responsibilities. We're building a single page app. This, by definition, means that all HTML traffic goes to just one page. All other types of requests though, will need to be routed by the Rails app. Most important of these, is the JSON and JavaScript traffic that the Rails app must handle, we've been thinking of these requests as API requests from the frontend app to the backend one.

The Rails Router has a convenient feature that we can use to achieve this separation of traffic, all HTML requests go to our React app, and everything else be handled normally.

**config/routes.rb**
```ruby
Rails.application.routes.draw do
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
```
Notice the "constraints" section. This states that all HTML traffic goes to `home#index` our React app.

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
} from "react-router-dom"
import { Nav, NavItem } from "reactstrap"
import AboutUs from "./pages/AboutUs"
import LearnMore from "./pages/LearnMore"
import Home from "./pages/Home"

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

<hr>

### Challenge
Follow these instructions to create your own React in Rails application with Reactstrap and react-router.

---
[Back to Syllabus](../README.md#unit-nine-react-in-rails-and-authentication)
