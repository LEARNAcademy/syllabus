# React Dynamic Routes

## Overview
- React Router gives us the ability to create navigation between pages.
- Dynamic routes allow developers to scale up applications without updating the code to handle additional routes.

## Learning Objectives
- Creating mock data in a React application to mimic a JSON payload
- Understanding the difference between a dynamic and a static React route
- Understanding how to pass information as props to a component within a dynamic route

## Vocabulary
- Dynamic routes
- Static routes
- Mock data

## Useful Commands
- $ yarn add react-router-dom

## Additional Resources
- <a href="https://reactjs.org/docs/react-component.html" target="blank">React docs on components</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" target="blank">.find()</a>

## Set Up

#### Creating a new React app:
```
$ yarn create react-app recipe-app
$ cd recipe-app
$ yarn add react-router-dom
$ yarn start
```
- create a directory in *src* called *pages*
- create a directory in *src* called *store*

## Mock Data
Ultimately, the goal of our React app is to serve as the frontend to a full stack web application. The backend of our app will serve up information from the database in the form of a JSON payload for the frontend to display to the user. During development, the backend and frontend of an application is typically created at different times and often by entirely different teams of developers. Creating mock data in our React app allows us to code up the frontend and mimic the payload that will eventually come from the backend.

The mock data should represent the expected JSON payload as much as possible to avoid major overhauls to the code down the road. It is also helpful to store the code in a separate directory that can be easily deleted.

#### Set Up
Create a new directory within *src* called *store* with a file called *recipes.js*. Note the lowercase "r" in recipes. This file will not hold a component. The *recipes* file will store a variable containing our mock JSON payload.

This variable can be set as state in *App.js*.

**src/store/recipes.js**

```javascript
const recipes = [
  {
    id: 1,
    name: "Mac & cheese",
    ingredients: "Fusilli pasta, Cheddar cheese, Jack cheese, butter"
  },
  {
    id: 2,
    name: "PB&J",
    ingredients: "Bread, peanut butter, grape jelly"
  },
  {
    id: 3,
    name: "Grilled cheese",
    ingredients: "Bread, Cheddar cheese, Pepper Jack cheese, butter"
  }
]

export default recipes
```

## Dynamic vs Static Routes
Static routes have hardcoded URL paths that direct the application to render a particular component. Dynamic routes can be passed information through URL params to determine which component renders for the user. This process makes the application more scalable and the code much more DRY.

![Recipe Architecture](https://s3.amazonaws.com/learn-site/curriculum/React/recipes-architecture.png)

#### Static Route Example
Static routes are hardcoded URLs that render a single component:
```html
<Link to="/mac">Mac & Cheese</Link>
<Link to="/pbj">PB & J</Link>

<Route path="/mac/" component={ MacCheese } />
<Route path="/pbj/" component={ PBJ } />
```

#### Dynamic Route Example
Dynamic routes are configured as the app is rendered:

```html
<Link to={ `/recipes/${recipe.id}` }>
  { recipe.name }
</Link>

<Route
  path="/recipes/:id"
  component={ Recipe }
/>
```

## Route Params
The new idea here is the `:id` part of the Route path. We can pass anything we like in on that section of the URL and it will be passed to the component as a prop.

In this example, for any URL that begins with "/recipes/" and ends with a value, the ending value gets passed to the page component as props.

## Passing Props in Router
When using React Router, the component being rendered in the browser is passed as props to the Route component along with the URL param. So what if we want to pass our JSON payload from state as props to the Recipe component? This requires the use of an anonymous function.

```html
<Route
  path="/recipes/:id"
  render={ (props) => <Recipe {...props} recipes={ this.state.allRecipes } /> }
/>
```

## Recipe App

**src/App.js**

```javascript
import React, { Component } from "react"
// Import the components that are needed for React Router
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom"

// Import the mock data and Recipe component
import recipes from "./store/recipes"
import Recipe from "./pages/Recipe"

class App extends Component{
  constructor(){
    super()
    // Setting the mock data in state
    this.state = {
      allRecipes: recipes
    }
  }
  render(){
    return(
      <React.Fragment>
        <Router>
          <div>
            <h2>Recipes</h2>
              // The links map over all the recipes from our mock data and construct the proper link
              <ul>
                { this.state.allRecipes.map((recipe, index) =>
                <li key={ index }>
                  <Link to={ `/recipes/${recipe.id}` }>
                    { recipe.name }
                  </Link>
                </li>
                )}
              </ul>
              <Switch>
                <Route
                  path="/recipes/:id"
                  render={ (props) => <Recipe {...props} recipes={ this.state.allRecipes } /> }
                />
              </Switch>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}
export default App
```

Using dynamic routing we are down to exactly one route to handle all of our recipes. Regardless of the number of recipes in the mock data, all we need is a single route. Our UI is now completely flexible and able to accommodate whatever data we receive from the backend API.


## Recipe Details
Rather than having a component for each recipe, we can create a single class component called `Recipe.js`. This means that we're going to have to write our new component to be a template for any recipe data it receives.  We're also going to have to go and fetch the data we need when we are passed a new recipe id through the router.


#### Match Params
The react-router-dom library passes in a prop called match into every route that is rendered. Inside this match object is another object called params. This holds all matching params where the key is the name we specified when creating the route and the value is the actual value in the URL. This allows us to get the id from the URL and display the appropriate information for the Recipe.

**src/pages/Recipe.js**

```javascript
import React, { Component } from "react"

class Recipe extends Component{
  render(){
    // Accessing the id from the URL
    const { id } = this.props.match.params
    // Using .find() to return the correct object from the data set
    const recipe = this.props.recipes.find((recipe) => recipe.id === parseInt(id))
    return(
      <React.Fragment>
        <div>
          <h3>{ recipe.name }</h3>
          <p>{ recipe.ingredients }</p>
        </div>
      </React.Fragment>
    )
  }
}
export default Recipe
```

## Challenge
Refactor your favorite movie or TV show application using React Router dynamic routes and a mock data store.

## User stories
- As a user, when I visit your site, I can see a header and a description of your site.
- As a user, when I visit your site, I can see a list of your five favorite movies or TV shows.
- As a user, I can click on any of the movies or TV shows names and see the movie or TV show details.

[Go to next lesson: Cat Tinder Introduction and Wireframes](../frontend/intro.md)

[Back to React Routing Introduction](./intro.md)

[Back to Syllabus](../../README.md)
