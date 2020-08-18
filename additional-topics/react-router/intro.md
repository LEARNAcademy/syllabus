# React Routing Introduction

## Video: React Router
[![YouTube](http://img.youtube.com/vi/GqNurNBKPAw/0.jpg)](https://www.youtube.com/watch?v=GqNurNBKPAw)

## Overview
- Up until this point, we've worked with React apps that only have one page (SPA - Single Page Apps).
- React Router gives us the ability to create navigation between pages.

## Learning Objectives
- Creating multiple pages in a React application
- Using `react-router-dom` to create links between pages in your application

## Vocabulary
- SPA
- React Router

## Useful Commands
- $ yarn add react-router-dom

## Additional Resources
- There are a lot more advanced features to the React Router than we will cover here. [Head over to their docs](https://reacttraining.com/react-router/web/guides/quick-start) to explore further.

## Set Up

#### Creating a new React app:
```
$ yarn create react-app tomato
$ cd tomato
$ yarn add react-router-dom
$ yarn start
```
- create a directory in *src* called *pages*

## React Project Structure
```
src
├── App.css
├── App.js
├── index.css
├── index.js
├── pages   <-- This is the directory we've added
│   ├── AboutUs.js
│   ├── Home.js
│   └── Tomato.js
└── serviceWorker.js
```

## Multi-Page Application
So far, we have created Single Page Applications in React. Now, we'd like to have an app that has a few different pages of content. For this example, we will create an application that has three pages: "AboutUs", "Home", and "Tomato".

Since we have three different pages, it is best practice to create a file for each page. Each file will be imported to *App.js*. A router will be used to load and unload them based on user actions.

Here's the code for the Home component:
```javascript
import React from "react"

const Home = () => {
   return(
     <>
       <h1>Home</h1>
     </>
   )
}
export default Home
```
Notice we are defining `Home` as an UI/Functional (dumb) component that simply affects the UI of the page. There is no logic happening, hence why it is in a `function` rather than a `class`.The other two components can look similar.

Remember, all of your code needs to be wrapped in one element. We have used `<div>` in the past, but we can also use `<React.Fragment>` as well. To simplify event more, we can use `<>` which is shorthand for `<React.Fragment>`.

## React Router

![react-router](https://raw.githubusercontent.com/LEARNAcademy/react-router/master/assets/react-router.png)

Now that we have three files in "pages" we need to create links to the pages and a router to handle that request.

#### Set Up
First we need to add the necessary packages to our application using a yarn command. This adds the react-router to the *package.json* file. We are specifying the react-router-dom version for web application development. React also offers a router for native development so it is important to specify.

```
$ yarn add react-router-dom
```

#### Imports
Next, we need to import the components used by React Router. App.js is a good place to house our router.

We import BrowserRouter because we are routing between web pages rendered in a browser. There's also NativeRouter for building IOS and Android React applications.

**src/App.js**

```javascript
import React from "react"
// 1. Import the components that are needed for React Router
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"
import "./App.css"

// 2. Import all the pages to App.js
import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"
import Tomato from "./pages/Tomato"
```

#### Router Components
In this example, we are using React Router to create an unordered list for navigation. Notice that we are just importing files at this point, and there is no logic that is being added. Therefore, this is a UI/Functional (dumb) component that we will be working with.

**src/App.js**

```javascript
const App = () => {
    return (
      {/* 3. The set of links and paths are all wrapped in the "BrowserRouter as Router" component */}
        <Router>
            <div>
                <h1>Here is App.js Handling Our Routing</h1>
                {/* 4. Using a semantic tag to denote the navigation links */}
                <nav>
                    <ul>
                    <li>
                        {/* 5. Creating the anchor tags using the Link component from React Router */}
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/tomato">Tomato</Link>
                    </li>
                    </ul>
                </nav>

                {/* 6. Calling the components we imported from "pages" to render in response to the Link */}
                <Route path="/" exact component={ Home } />
                <Route path="/about" component={ AboutUs } />
                <Route path="/tomato" component={ Tomato } />
            </div>
        </Router>
    )
}
export default App
```

#### What is a Route?
Here are the 3 routes in our sample project:

```html
<Route path="/" exact component={ Home } />
<Route path="/about" component={ AboutUs } />
<Route path="/tomato" component={ Tomato } />
```

At their most basic, routes have a path, and a component prop. The path specifies a matcher for the browser's URL, and the component prop specifies which component to render when there is a match.

#### Rendering the Router
You can think of the router as swapping between page components. Whatever route is active based on the browser URL is rendered while the rest are ignored.

#### Exact
Notice the **exact** prop passed in Home Route. In React Router, more than one route can match at any given time. For example, here's what our app looks like with the routes above when we go to the AboutUs page:

![routes 1](../assets/routes-1.png)

If we remove the **exact** from the Home Route we get some unintended consequences.

```html
<Route path="/" component={ Home } />
<Route path="/about" component={ AboutUs } />
<Route path="/tomato" component={ Tomato } />
```

Now, if our user navigates to the AboutUs page both the Home and the AboutUs components are rendering. This is because the Home path "/" is satisfied by the URL "localhost:3000/about" as well as the AboutUs path.

![routes 2](../assets/routes-2.png)

 We can prevent this by adding the `exact` prop.

#### Switch
To avoid having multiple routes satisfied by a URL at the same time, we can also use Switch. Switch is a component that can be imported from React Router. Switch will only allow one route to match at a time. Switch reads the routes top to bottom so the first route that matches will be displayed. We'll have to rearrange the routes to have the least specific ("/") after the more specific ones - much like `if/else` statements.

```html
<Switch>
  <Route path="/about" component={ AboutUs } />
  <Route path="/tomato" component={ Tomato } />
  <Route path="/" component={ Home } />
</Switch>
```

Make sure to add `Switch` to the react-router-dom import statement

```javascript
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"
```

#### No Match (404)
When creating applications, it is important to think about the "unhappy path." If something goes wrong with our application either from user error or from a code issue, we still want to ensure our user sees something. We can create an error page using Switch through a default route that always matches last. This can be like the `else` statement of our routes. By creating a Route that has no path the route will match when the user goes to an URL that is not found.

Here's the code for the NotFound component:
```javascript
import React from "react"

const NotFound = () => {
    return(
      <React.Fragment>
        <h3>Sorry, something went wrong.</h3>
      </React.Fragment>
    )
}
export default NotFound
```

After importing the component, we can add exact back in to the root Route and add a new Route for NotFound that does not have any path associated:

```html
<Switch>
  <Route path="/about" component={ AboutUs } />
  <Route path="/tomato" component={ Tomato } />
  <Route path="/" exact component={ Home } />
  <Route component={ NotFound } />
</Switch>
```

Now going to any URL except for the ones listed in our Routes will show the user our Not Found page.

## Challenge
Create a React application for your favorite movies or TV shows using React Router.

## User stories
- As a user, when I visit your site, I can see a header and a description of your site.
- As a user, when I visit your site, I can see a list of your five favorite movies or TV shows.
- As a user, I can click on any of the movies or TV shows names and see the movie or TV show details.
- As a user, I can see an error page if I enter an invalid URL.

[Back to Syllabus](../../README.md)
