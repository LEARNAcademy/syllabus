# Apartment Introduction

#### Overview

Apartment App is a full-stack application that allows users to see a list of available apartments. The app also allows users to create an account and log in. A logged in user can add new apartments to the list.

#### Previous Lecture (1 hour 8 min)

[![YouTube](http://img.youtube.com/vi/xJ5dWEza20s/0.jpg)](https://youtu.be/xJ5dWEza20s)

#### Learning Objectives

- can create React views hosted in a Rails application
- can distinguish UI content from API content
- can create routing constraint to discern HTML from JSON

#### Vocabulary

- decoupled application
- monolithic application
- webpacker
- scss
- asset pipeline

#### Additional Resources

- [Reactstrap](https://reactstrap.github.io)

#### Process

- $ `rails new apartment-app -d postgresql -T`
- $ `cd apartment-app`
- $ `rails db:create`
- $ `bundle add rspec-rails`
- $ `rails generate rspec:install`
- Add the GitHub remote
- Create the main branch
- Make an initial commit to the main branch
- Ask the instruction team for branch protection

#### Troubleshooting Tips

- Stop the server and start it again.
- Seeing a blank page? Look for errors in the terminal or inspect your page.
- Errors? Always look at the first error in the list.

---

### App Structure Setup

The `index.html.erb` file will render `App.js` through the Rails view.

**app/views/home/index.html.erb**

```html
<%= react_component 'App' %>
```

We need to direct our Rails app to let webpacker handle the compiling of JavaScript. This is done with a `javascript_pack_tag` in the base Rails view. Add the line of code below to the head tag.

**app/views/layouts/application.html.erb**

```javascript
// Find this line:
<%= javascript_importmap_tags %>

// And replace it with this:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```

Direct the Rails app to serve the React `App.js` component as the landing page.

**config/routes.rb**

```ruby
Rails.application.routes.draw do
  root 'home#index'
end
```

**app/javascript/components/App.js**

```javascript
import React from "react"

const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App
```

### Reactstrap

We are going to modify the Rails stylesheet to be a stylesheet with an `.scss` extension. This will allow us to write regular CSS code as well as import necessary dependencies. **scss** stands for Sassy CSS which comes from the mashup of CSS and Sass (Syntactically Awesome Styles Sheet). Sassy CSS is a superset of CSS. It contains all of the functionality available in CSS with the addition of features such as imports and mixins.

- $ `bundle add bootstrap`
- $ `mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss`
- $ `yarn add reactstrap`

The `application.scss` file lives in the Rails app's asset pipeline. The **asset pipeline** is where all styles get packaged up and served to the user. This will is the global stylesheet for the application.

**app/assets/stylesheets/application.scss**

```css
@import "bootstrap";
```

### Additional React Components

At this point, there is only one React component in the application. Just like in a regular React App, our project will have many, many components. To keep the files organized, it is a good practice to create three directories in your React application: assets, components, and pages.

**Assets**  
The assets directory is used to store image files used in your React application.

**Components**  
The components directory is for helper components such as headers, footers, and buttons.

**Pages**  
The pages directory is for full views. The full view can consist of items from the assets and components directory as well a code unique to a page.

Due to Rails convention, the React file structure lives in the `app/javascript/components` directory. **Note:** While it may seem a bit confusing, the React components directory will be nested inside of the Rails components directory. The Rails component directory takes the place of the `src` directory in a typical React application.

### Add Pages

For this application, we are going to have two pages and one navigation component:

- `pages/AboutUs.js`
- `pages/Home.js`
- `components/Navigation.js`

Add an `<h3>` to each describing their intent

**app/javascript/components/pages/Home.js**

```javascript
import React from "react"

const Home = () => {
  return (
    <>
      <h3>This is the Home Page</h3>
    </>
  )
}

export default Home
```

The other two are mostly the same.

### React Router

In order to have multiple pages we need to add the React router and import the appropriate components.

- $ `yarn add react-router-dom`

**app/javascript/components/App.js**

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navigation from "./components/Navigation"
import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"
```

Add the routes to allow the url to determine which component will be visible to the user. The navigation component will be on every page so it will not have a route.

**app/javascript/components/App.js**

```javascript
return (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
)
```

### Routing Constraints

You'll recall that Rails has a router, and now that we've added React router, so does React. You might imagine that these two routers could come into conflict, and that would be correct. We need to clearly separate the Rails routing responsibilities, and the React routing responsibilities. We're building a single page app. This, by definition, means that all HTML traffic needs to go to the one place. Specifically, the _app/views/home/index.html.erb_ file and on to the React side of the app. The other type of traffic we expect is JSON which should be handled by the Rails API.

The Rails Router has a convenient feature that we can use to achieve this separation of traffic, all HTML requests go to our React app, and everything else be handled normally. Notice the "constraints" section. This states that all HTML traffic goes to `home#index` which is our React app.

**config/routes.rb**

```ruby
Rails.application.routes.draw do
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
```

### Add Navigation Components

We can use Reactstrap and React router to create navigation in our app. There is a curious problem that we face when using these two libraries in combination. Both libraries have a `NavLink` component. The NavLink from Reactstrap will provide a nicely styled link. The NavLink from React router will create the behavior of swapping out components in the view. And while both are useful, our React app will not understand two different imports named the same thing. We have to use some creative problem solving to gain access to both things.

The functionality takes precedence so we will import NavLink from React router. Under the hood of Reactstrap is a set of classes with styling attached. So we can manually add the class to the NavLink component and hijack the styles from Reactstrap.

**app/javascript/components/components/Navigation.js**

```javascript
import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/about" className="nav-link">
          About Us
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Navigation
```

---

### Challenge

Follow these instructions to create your own React in Rails application with Reactstrap and React router.

---

[Back to Syllabus](../README.md#unit-nine-react-in-rails-and-authentication)
