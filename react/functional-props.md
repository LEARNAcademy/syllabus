# React Functional Props

#### Overview

React consists of collections of components. Props are used for the communication of data and behavior from a parent component down to a nested component via the component invocation. Props are limited to a unidirectional flow of information. In order to create a flow of information that goes from the nested component back up to its parent another workflow is needed. While props are unidirectional, functions have the fundamental ability to be defined in one place and invoked in another. Functions are great transporters of information and can be used communicate between React components.

#### Previous Lecture (58 min)

[![YouTube](http://img.youtube.com/vi/cYKXvyJq1zw/0.jpg)](https://youtu.be/cYKXvyJq1zw)

#### Learning Objectives

- can recognize the difference between a logic component and a display component
- can construct parent and nested components
- can pass data and behavior from a parent component to a nested component with props
- can demonstrate proper use of state values and state setter methods
- can execute a flow of information from a nested component back to parent component

#### Vocabulary

- functional props
- conditional rendering
- immediately invoked function
- stack overflow

#### Process

- `cd` into the `react-challenges` repository
- Create a new branch: `functional-props-initials1-initials2` (ex. functional-props-aw-sp)
- Create a new React application with no spaces: `yarn create react-app functional-props-student1-student2` (ex. yarn create react-app functional-props-austin-sarah)
- `cd` into the project
- Open the project in a text editor
- Create a directory in _src_ called _components_
- Code!

#### Useful Commands

- $ `yarn start`
- control + c (stops the server)
- command + t (opens a new terminal tab)

#### Troubleshooting Tips

- Is your server running?
- Are your components exported?
- Inspect the page and look for errors in the console tab.
- Always look at the first error message in the list.

---

### Passing Information "Up the River"

In React, each component should only be responsible for its own data and behavior. But often a component's data and behaviors rely on information from other components.

We can pass information in the form of data and behavior to another components which then get referenced as props. Props are great, but they are limited in their functionality. Props can only be passed in one direction. This is analogous to a river. Rivers only flow from higher elevation to lower elevation and props can only be passed "down river" to nested components.

React has a one way flow of information through the component invocation. So what happens when the component receiving props needs to send information back to the parent component? Since props only get passed in one direction there is no direct way in React to send information back "up the river." But there is a programmatic solution!

As we know, functions are pretty handy. Functions can be created in one place and called in another place. Functions can also take in information in the form of an argument. Knowing this, we can utilize the power of functions as **functional props** to pass information "up the river" from a nested component to a parent component.

### Movie Tracker Example

To explore functional props we are going to create an application that will show a list of movies. Each movie will have a corresponding button that the user can click once they watch the movie. Clicking the button will create a note indicating the movie was watched.

To get started, we need to create the movie data in `App.js` in state. To hold sets of data we can establish an array of objects. Then we need to create a nested component that can display each movie. By mapping over the array of objects we can pass each movie object to the nested `MovieDisplay` component. Anytime we are mapping UI content in React we will need to include a `key` with a unique identifier.

**src/App.js**

```javascript
import React, { useState } from "react"
import MovieDisplay from "./components/MovieDisplay"

const App = () => {
  const [movies, setMovies] = useState([
    { name: "Almost Famous", watched: false },
    { name: "Lord of the Rings", watched: false },
    { name: "Up", watched: false },
    { name: "Zoolander", watched: true }
  ])

  return (
    <>
      <h1>Movie Watching App</h1>
      {movies.map((movie, index) => {
        return <MovieDisplay movie={movie} key={index} />
      })}
    </>
  )
}

export default App
```

Each movie object can now be accessed as props. Parsing into the movie object we can display the name of the movie. Since we established `watched` as a Boolean value we can use conditional rendering to display a message only when the movie has been watched. **Conditional rendering** uses JavaScript's logical AND as a toggle between when a JSX element is shown and when it is ignored. Adding a button element will create a button that corresponds to each movie.

**src/components/MovieDisplay.js**

```javascript
import React from "react"

const MovieDisplay = (props) => {
  return (
    <>
      <p>Movie name: {props.movie.name}</p>
      {props.movie.watched && <p>Seen It!</p>}
      <button>Watch Movie</button>
    </>
  )
}

export default MovieDisplay
```

### Functional Props

Now we have the base structure of the application ready to go. The app is rendering the name of all the movies each with a corresponding button. If the movie `watched` value is true a message is displayed. If the value is false the message will not be displayed.

The next task is to add the functionality that will update the `watched` value. The challenge we are facing is the state data is managed by `App.js` but the button and click action by necessity are handled by the `MovieDisplay` component. This requires that we send the information of what movie is being watched "up the river" to `App.js` where the state data lives.

To get this information we will use functional props. This means creating a function with an argument in `App.js` that can be passed down to the `MovieDisplay` component to be called when the button is clicked. We will also need to be able to know which movie item in the array needs to be updated. So we will pass index to the `MovieDisplay` as well as the function.

**src/App.js**

```javascript
import React, { useState } from "react"
import MovieDisplay from "./components/MovieDisplay"

const App = () => {
  const [movies, setMovies] = useState([
    { name: "Almost Famous", watched: false },
    { name: "Lord of the Rings", watched: false },
    { name: "Up", watched: false },
    { name: "Zoolander", watched: true }
  ])

  const watchedMovie = (selectedMovie) => {
    // the logic for updating the state data will live here
  }

  return (
    <>
      <h1>Movie Watching App</h1>
      {movies.map((movie, index) => {
        return (
          <MovieDisplay
            movie={movie}
            key={index}
            watchedMovie={watchedMovie}
            index={index}
          />
        )
      })}
    </>
  )
}

export default App
```

There are now three pieces of data that are available to the `MovieDisplay` component. The first is the movie object that is creating the display for the name and whether the movie has been watched. The second is the `watchedMovie` method that can be called with an `onClick` in the button tag.

**src/components/MovieDisplay.js**

```javascript
import React from "react"

const MovieDisplay = (props) => {
  return (
    <>
      <p>Movie name: {props.movie.name}</p>
      {props.movie.watched && <p>Seen It!</p>}
      <button onClick={props.watchedMovie}>Watch Movie</button>
    </>
  )
}

export default MovieDisplay
```

When we defined `watchedMovie` we added a parameter called `selectedMovie`. This means we need to pass an argument. The data we need in the argument is which movie from the array we are intending to update. Luckily, this is where the third piece of information from `App.js` comes into play: the index. The index is available as `props.index` and can be passed to `props.watchedMovie`.

When a function is called `onClick` the button is in control of firing off the invocation. However, in order to add an argument we will need to add parentheses to the function call. Which would look like this:

```javascript
onClick={props.watchedMovie(props.index)}
```

This will create an immediately invoked function. An **immediately invoked function**, as the name suggests, is one that will run immediately and not wait for the button click event. This function will continue to invoke itself over and over eventually creating a **stack overflow** which occurs when a program tries to execute more actions than it has memory to perform. To prevent this we will create an anonymous function inside the `onClick`.

**src/components/MovieDisplay.js**

```javascript
import React from "react"

const MovieDisplay = (props) => {
  return (
    <>
      <p>Movie name: {props.movie.name}</p>
      {props.movie.watched && <p>Seen It!</p>}
      <button onClick={() => props.watchedMovie(props.index)}>
        Watch Movie
      </button>
    </>
  )
}

export default MovieDisplay
```

### Accessing Functional Props

Now that the `watchedMovie` method is being called in the nested `MovieDisplay` component, we can access the index "up the river" in `App.js`. Once we have the index we can use fundamental JavaScript logic to access the `watched` value of the selected movie object and reassign the value to `true`. Once the value is reassigned, `setMovies` will update the values in the state array.

**src/App.js**

```javascript
import React, { useState } from "react"
import MovieDisplay from "./components/MovieDisplay"

const App = () => {
  const [movies, setMovies] = useState([
    { name: "Almost Famous", watched: false },
    { name: "Lord of the Rings", watched: false },
    { name: "Up", watched: false },
    { name: "Zoolander", watched: true }
  ])

  const watchedMovie = (selectedMovie) => {
    console.log(selectedMovie) // --> logs the id of the movie clicked
    console.log(movie[selectedMovie]) // --> logs the clicked movie object
    console.log(movie[selectedMovie].watched) // --> logs the clicked movie watched value
    movies[selectedMovie].watched = true // updates the watched value to true
    setMovies([...movies]) // sets the state to reflect the new changes
  }

  return (
    <>
      <h1>Movie Watching App</h1>
      {movies.map((movie, index) => {
        return (
          <MovieDisplay
            movie={movie}
            key={index}
            watchedMovie={watchedMovie}
            index={index}
          />
        )
      })}
    </>
  )
}

export default App
```

Now we have a complete data flow using functional props to access information in a nested component and bring it back "up the river" to `App.js`. Functional props uses the JavaScript principle that functions can be defined in one place and invoked in another.

### 🌮 Challenge: Food Ordering App

As a developer, you are tasked with creating a food ordering application in React. This is the first iteration of an application that is going to be much larger in the future so it is important to create a solid foundation from which the code base can grow.

The menu UI will be in its own component as will the order UI. `App.js` controls of all the data in state, renders the other components, and passes data to the menu and the order component.

### 📚 User Stories

- As a user, I can see an application that has a list of food items and the price of each item.
  - Hint: Take some time to think about the data structure that will allow you to effectively store the required information.
- As a user, I can click a button to select an item I wish to order.
- As a user, I can see the items I have selected to order displayed on the page.

### 🏔 Stretch Goals

- As a user, I can see the total cost of my current order.
- As a user, I can see both the base total cost of my food selections and the total that includes sales tax.
- As a user, I can see the total that includes sales tax rounded to two decimals.
- As a user, I can see an image of my food selection on the menu.

---

[Back to Syllabus](../README.md#unit-three-react)
