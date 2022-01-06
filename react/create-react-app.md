# Creating a New React Application

#### Overview
Until late 2016, the hardest part about working with React was just getting a new app set up with the appropriate dependencies. Facebook, the creators of React, recognized this problem and released some tools to help developers get started more easily. Yarn is a JavaScript package manager that creates the file structure of a React app and manages the dependencies.

#### Previous Lecture (57 min)
[![YouTube](http://img.youtube.com/vi/YThNhP4i5NE/0.jpg)](https://www.youtube.com/watch?v=YThNhP4i5NE)

#### Learning Objectives
- can demonstrate the process of setting up a basic class-based React component
- can demonstrate the creation of multiple components
- can display multiple components inside a container component

#### Vocabulary
- kebob-case
- localhost:3000
- import
- export

#### Process
- `cd` into the `react-challenges` repository
- Create a new branch: `intro-initials1-initials2` (ex. intro-aw-sp)
- Create a new React application with no spaces: `yarn create react-app intro-student1-student2` (ex. yarn create react-app intro-austin-sarah)
- `cd` into the project
- Open the project in a text editor
- Create a directory in *src* called *components*
- Code!

#### Useful Commands
- $ yarn create react-app app-name
- $ yarn start
- control + c (stops the server)
- control + t (opens a new terminal tab)

#### Troubleshooting Tips
- Is your server running?
- Are your components imported and exported?
- What is your error message telling you?

---
### Creating a New React Application
Use the command `yarn create-react app` followed by the name of your application to create a new React application. This command will only accept application names that are lower case. If a multiple word application name is desired, separate the words with a dash. This is called **kebob-case**.
```
$ yarn create react-app sample-app
```

This creates a directory called 'sample-app' and
installs all the files and dependencies needed to get started. Navigate into the new directory, and fire up the server for your new app.

```
$ cd sample-app
$ yarn start
```
The command `yarn start` will automatically open a browser to the address **localhost:3000** which is the url address of your home server. The command `yarn start` will render the starter React application.

After you type `yarn start` you will notice your terminal is busy running React. If you want to interact with your terminal you can open a new tab (command-t). To stop the React app from running use the command `control c`

### Modifying The App Component

Navigate to `App.js` within the `src` directory. We're going to use a class based component instead of the functional one that comes pre-built for us by React.

A very basic functional component looks something like this:

```javascript
import React from 'react'

function App(){
  return(
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
    return(
      <>
        <h1>A Basic Class Component</h1>
      </>
    )
  }
}

export default App
```

### App.js

Here is the basic class component with comments describing what each line is doing:

```javascript
// We're using React and destructuring Component from the React library
import React, { Component } from 'react'

// We create a new component that extends the Component class, which React provides
class App extends Component{

  // Render is a React lifecycle method
  // When the component is first put on the page, and every time something changes in our component, the render function runs automatically
  render(){

    // The render method returns JSX
    // React apps use a hybrid markup language called JSX to preprocess HTML (XML actually) back into plain old JavaScript before the file is sent to the browser
    return(
      // React fragments are used to wrap all the markup tags
      <>
        <h2>Welcome to React</h2>
      </>
    )
  }
}

// Every component must be exported
export default App
```

### Nesting Components

For this example, we will create an application that has a Header component, a Recipes component, and a Footer component.

We will create a new folder inside the `src` folder called `components`. React apps will have many components and keeping our components organized is important.

Inside the components folder, create a new file called `Header.js`. It is convention to name the file the same name as the class component in that file.

**src/components/Header.js**

```javascript
import React, { Component } from 'react'

class Header extends Component{
  render(){
    return(
      <>
        <h1>This is the header</h1>
      </>
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
import Header from './component/Header'

class App extends Component {
  render(){
    return(
      <>
        <Header />
      </>
    )
  }
}

export default App
```


Next we will add a recipe component.

We create the Recipes component in the `components` folder.

**src/components/Recipes.js**

```javascript
import React, { Component } from 'react'

class Recipes extends Component{
  render(){
    return(
      <>
        <ul>
          <li>Recipe 1</li>
          <li>Recipe 2</li>
          <li>Recipe 3</li>
        </ul>
      </>
    )
  }
}

export default Recipes
```

Now we will import Recipes in App.js.

**src/App.js**

```javascript
import React, { Component } from 'react'
import Header from './components/Header'
import Recipes from './components/Recipes'

class App extends Component {
  render(){
    return(
      <>
        <Header />
        <Recipes />
      </>
    )
  }
}

export default App
```

Next we will add a footer component.

We create the Footer component in the `components` folder.

**src/components/Footer.js**

```javascript
import React, { Component } from 'react'

class Footer extends Component{
  render(){
    return(
      <>
        LEARN Academy
        <br />
        Echo 2021
      </>
    )
  }
}

export default Footer
```
Import Footer in App.js.

**src/App.js**

```javascript
import React, { Component } from 'react'
import Header from './components/Header'
import Recipes from './components/Recipes'
import Footer from './components/Footer'

class App extends Component{
  render(){
    return(
      <>
        <Header />
        <Recipes />
        <Footer />
      </>
    )
  }
}

export default App
```

---

### Challenges
- As a user, I can see a Header component with the title of your app
- As a user, I can see a Profile component with information about you and your partner
- As a user, I can see a Footer component with your cohort name
- As a user, I can see a Favorites component with a list of top five favorites (ie. Top 5 Favorite TV Shows, Top 5 Favorite Songs, Top 5 Favorite Taco Shops)
- As a user, I can see a customized browser tab

---
[Back to Syllabus](../README.md#unit-two-introduction-to-react)
