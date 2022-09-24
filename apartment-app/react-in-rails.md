# React IN Rails Introduction

#### Overview

There are many, many ways to create a full-stack application. In this section we will look at how to host React components inside of a Rails application. Adding React components inside a Rails project simplifies the flow of information from the database to the view while still harnessing the power of JavaScript. With this particular configuration of technologies we have two routers in the same application. The Rails router will route to API endpoints and the React router will display different UI pages for the user.

#### Previous Lecture (59 min)

[![YouTube](http://img.youtube.com/vi/V83A4L2xhLo/0.jpg)](https://youtu.be/V83A4L2xhLo)

#### Learning Objectives

- can create React views hosted in a Rails application
- can distinguish UI content from API content
- can create routing constraint to discern HTML from JSON

#### Vocabulary

- decoupled application
- monolithic application
- esbuild
- scss
- asset pipeline

#### Additional Resources

- [React-Rails project docs](https://github.com/reactjs/react-rails)
- [Esbuild](https://esbuild.github.io/)
- [Sass Documentation](https://sass-lang.com/documentation/syntax)
- [Reactstrap](https://reactstrap.github.io)

#### Process

- $ `rails new hello-world -d postgresql -T -j esbuild`
- $ `cd hello-world`
- $ `rails db:create`
- $ `./bin/dev`

#### Troubleshooting Tips

Now that we are working in a new stack, the way we find error messages is going to look a little bit different. We are used to getting a browser display when something goes wrong. With this particular stack, we need to look for errors in the console and in the terminal. Any syntax errors or incorrect code anywhere in the React components will prevent `App.js` from compiling. So a mistake is likely to lead to a blank page.

- Stop the server and start it again.
- Did all the setup commands run properly? The commands can be rerun if something isn't working.
- Seeing a blank page? Look for errors in the terminal or inspect your page.
- Errors? Always look at the first error in the list.

---

### React Components in a Rails Application

There are many ways to create a full-stack application. One option is creating two separate applications to handle the frontend and backend like we did in Cat Tinder. Creating one app that handles the views and another app that handles the data is called a **decoupled application**. Another option is configuring a Rails app to serve React components. We'll need a couple commands to add the appropriate gems, directories, and JavaScript bundlers. This approach of having a single application handle both the views and the data in the same structure is called a **monolithic application**.

Out of the box, Rails is a monolithic application that can handle data as well as views through the `html.erb` files. This is often all a developer needs. However, the popularity, versatility, and power of JavaScript leads developers to often prefer a mix-and-match approach. The decision making body that maintains the Rails code base recognize this desire and have created a couple of options for developers to add JavaScript, TypeScript, and React among others technologies to a Rails application.

**Esbuild** is a node package that bundles JavaScript. By adding esbuild we can add additional Rails and JavaScript helpers that will allow us to generate a React component that will be served up JavaScript and JSX in a Rails application.

The following commands will enable our Rails app to support React.

- $ `bundle add react-rails`
- $ `bundle add jsbundling-rails`
- $ `rails javascript:install:esbuild`
- $ `yarn add react react-dom`
- $ `yarn add esbuild esbuild-loader --dev`

To add JSX compiling to the esbuild bundling we need to modify the `package.json` file.

Find this code and add the following flag:

**package.json**

```javascript
// find this:
  "scripts": {
    "build": "esbuild app/javascript/*.* --bundle --sourcemap --outdir=app/assets/builds --public-path=assets"
  },
// and add this flag: --loader:.js=jsx

// so it looks like this:
  "scripts": {
    "build": "esbuild app/javascript/*.* --bundle --sourcemap --outdir=app/assets/builds --public-path=assets --loader:.js=jsx"
  },
```

Inside of the Rails `app` directory there is another directory called `javascript`. This is where the React code will live. To support React we need to add some code to the file `application.js`.

**app/javascript/application.js**

```javascript
import React from "react"
import { createRoot } from "react-dom/client"
import App from "./components/App"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
```

The next step is to create the appropriate files and folders for our React components.

- $ `mkdir app/javascript/components`
- $ `touch app/javascript/components/App.js`

These commands create a directory in `app/javascript` called `components` that will contain our `App.js` component. Now we can add some basic React code into `App.js`.

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

### Rails Controller and View

Next, we need to generate a controller so that we can route the React component to be rendered in a Rails view. This is the only Rails view we will make. Everything else will come from the React components.

This command will generate the home controller and an index view file.

- $ `rails g controller Home index`

Inside the `app/views/home/index.html.erb` file we will replace the existing code with a single `div` tag with an id. An interesting thing about `div` tags is that they can be self closing if there is no need for inner HTML.

**app/views/home/index.html.erb**

```html
<div id="root" />
```

### Rails Routes

Now we need to make sure we route to the appropriate file for our views. We can direct the Rails app to serve the React `App.js` component as the landing page.

**config/routes.rb**

```ruby
Rails.application.routes.draw do
  root 'home#index'
end
```

### Reactstrap

Adding Reactstrap to the application allows for the use of a library of pre-built components. Reactstrap works in conjunction with bootstrap's core CSS. To add these libraries requires a little bit of setup to make the React styles compatible with Rails. There are many ways to add bootstrap to a Rails app all of which will work equally well.

We are going to modify the Rails stylesheet to be a stylesheet with an `.scss` extension. This will allow us to write regular CSS code as well as import necessary dependencies. **scss** stands for Sassy CSS which comes from the mashup of CSS and Sass (Syntactically Awesome Styles Sheet). Sassy CSS is a superset of CSS. It contains all of the functionality available in CSS with the addition of features such as imports and mixins.

- $ `bundle add bootstrap`
- $ `mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss`
- $ `yarn add reactstrap`

The `application.scss` file lives in the Rails app's asset pipeline. The **asset pipeline** is where all stylesheets and dependencies get packaged up and served to the user. The `application.scss` file is the global stylesheet for the application. The great thing about Rails is that we don't need to import this file anywhere, we can just start adding styles. To use Reactstrap, add an import to the `application.scss` file. Make sure to stop your server and restart after the performing these commands.

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
      <h3>This is the home page</h3>
    </>
  )
}

export default Home
```

The other two are mostly the same.

### React Router

In order to have multiple pages we need to add the React router and import the appropriate components.

- $ `yarn add react-router-dom`

The convention of React router is to wrap the `BrowserRouter` around the `App.js` component invocation. We will need to import the component into the `application.js` file.

**app/javascript/application.js**

```javascript
import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./components/App"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

Now we can import `AboutUs`, `Home` , and `Navigation` as well as the React router components into `App.js`.

**app/javascript/components/App.js**

```javascript
import React from "react"
import { Routes, Route } from "react-router-dom"
import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"
import Navigation from "./components/Navigation"
```

Next we need to add the routes that will allow the url to determine which component will be visible to the user. The navigation component will be on every page so it will not have a route.

**app/javascript/components/App.js**

```javascript
const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App
```

### Routing Constraints

You'll recall that Rails has a router, and now that we've added React router, so does React. You might imagine that these two routers could come into conflict, and that would be correct. We need to clearly separate the Rails routing responsibilities, and the React routing responsibilities. We're building a single page app. This, by definition, means that all HTML traffic needs to go to the one place. Specifically, the `app/views/home/index.html.erb` file and on to the React side of the app. The other type of traffic we expect is JSON which should be handled by the Rails API.

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
    <>
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
    </>
  )
}

export default Navigation
```

---

### Challenge

Follow these instructions to create your own React in Rails application with Reactstrap and React router.

---

[Back to Syllabus](../README.md#unit-nine-react-in-rails-and-authentication)
