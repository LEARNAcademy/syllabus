# Creating a New React Application

## Video: React
[![YouTube](http://img.youtube.com/vi/bZejAT1hZuY/0.jpg)](https://www.youtube.com/watch?v=bZejAT1hZuY)

## Overview
- Until late 2016, the hardest part about working with React was just getting a new app set up with the appropriate dependencies. Facebook recognized this problem, and released some tools to help developers get started more easily.

## Learning Objectives
- Successfully create a new React application
- Removing unnecessary React boilerplate code
- Understanding the anatomy of a class component
- Understanding how to import, export, and display nested components
- Following naming conventions for creating new files for nested components

## Vocabulary
- import
- export

## Useful Commands
- $ yarn create react-app app-name
- $ yarn start
- control-c

## Creating a New React Application
Use the command `yarn create-react app` followed by the name of your application to create a new React application. This command will only accept application names that are lower case. If a multiple word application name is desired, separate the words with a dash. This-is-called-kabob-case.
```
$ yarn create react-app sample-app
```

This creates a directory called 'sample-app' and
installs all the files and dependencies needed to get started. Navigate into the new
directory, and fire up your new app.

```
$ cd sample-app
$ yarn start
```
The command `yarn start` will automatically open a browser to the address `localhost:3000` and render the starter React application.

After you type `yarn start` you will notice your terminal is busy running React. If you want to interact with your terminal you can open a new tab (command-t). To stop the React app from running use the command `control c`

## Modifying The App Component

Navigate to `App.js` within the `src` directory. We're going to use a class based component instead of the functional one that comes pre-built for us by React.

A very basic functional component looks something like this:

```javascript
import React from 'react'

function App() {
  return (
    <h1>A Basic Functional Component</h1>
  )
}

export default App
```

The equivalent basic class component looks like this:
```javascript
import React, { Component } from 'react'

class App extends Component{
  render(){
    return (
      <h1>A Basic Class Component</h1>
    )
  }
}

export default App
```

#### So What Is Going On In App.js?

Here is the basic class component with comments describing what each line is doing:

```javascript
// We're using React and Component from the react library
import React, { Component } from 'react'

// The main css file is called App.css, it is imported to App.js here
import './App.css'

// We create a new component that extends the Component class, which React provides
class App extends Component {

  // When the component is first put on the page, and every time something changes in our component, the render function is called
  // This function builds the JSX that will be put on the page by React
  render() {

    // Most of the React apps use something called JSX to preprocess HTML (XML actually) back into plain old JavaScript before the file is sent to the browser
    return (
      <div className="App">
        // Why 'className' instead of 'class'?  It was a design decision on the part of the React development team
          <h2>Welcome to React</h2>
      </div>
    )
  }
}

// Every component must be exported
export default App
```

## Nesting Components

For this example, we will create an application that has a Header component, a Recipes component, and a Footer component.

We will create a new file inside the `src` folder called `Header.js`. It is convention to name the file the same name as the class component in that file.

**src/Header.js**

```javascript
import React, { Component } from 'react'

class Header extends Component{
  render(){
    return(
      <div>
        <h1>This is a Header</h1>
      </div>
    )
  }
}

export default Header
```

For each new component there are three necessary steps:
1. Import React and the component module
2. Create the component definition
3. Export the component

With the component defined, we can then call it in the App component. This requires two steps:
1. Importing the component
2. Calling the component in the return

**src/App.js**

```javascript
import React, { Component } from 'react'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App
```


Next we will add a recipe component.

We create the Recipes component in the `src` folder.

**src/Recipes.js**

```javascript
import React, { Component } from 'react'

class Recipes extends Component{
  render(){
    return(
      <ul>
        <li>Recipe 1</li>
        <li>Recipe 2</li>
      </ul>
    )
  }
}

export default Recipes
```

Now we will import Recipes in App.js.

**src/App.js**

```javascript
import React, { Component } from 'react'
import Header from './Header'
import Recipes from './Recipes'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Recipes />
      </div>
    )
  }
}

export default App
```

Next we will add a footer component.

We create the Footer component in the `src` folder.

**src/Footer.js**

```javascript
import React, { Component } from 'react'

class Footer extends Component{
  render() {
    return (
      <footer>
        LEARN Academy
        <br />
        Alpha 2020
      </footer>
    )
  }
}

export default Footer
```
Import Footer in App.js.

**src/App.js**

```javascript
import React, { Component } from 'react'
import Header from './Header'
import Recipes from './Recipes'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Recipes />
        <Footer />
      </div>
    )
  }
}

export default App
```


## Challenge 1: About Us
- Create a new React application
- Delete the unnecessary boilerplate code
- Create a class in App.js

#### User Stories
- As a user, I can see a Header component with the text 'About Us'
- As a user, I can see a Content component with information about you and your partner
- As a user, I can see a Footer component with your team name
- As a user, I can see a customized browser tab

## Challenge 2: Our Top 5
- Create a new React application
- Delete the unnecessary boilerplate code
- Create a class in App.js

#### User Stories
- As a user, I can see a Header component with the title of your application (ie. Top 5 Favorite TV Shows, Top 5 Favorite Songs, Top 5 Favorite Taco Shops)
- As a user, I can see a customized browser tab
- As a user, I can see a component with a list of your favorites
- As a user, I can see a component containing a little blurb about the items on the list (one descriptive component per item)

---
[Back to Syllabus](../README.md#unit-two-introduction-to-react)
