# React State

#### Overview

React components often need to store data and perform logic to create interactive user experiences. Data needs to be stored in a way that it can be accessed throughout the component and updated when necessary. In a React component the data is managed by a special function called a React hook. The React hook allows developers to create a variable with an initial value and a method to update the value as needed.

#### Previous Lecture (1 hour, 3 min)

[![YouTube](http://img.youtube.com/vi/n1UHz9dD9Ds/0.jpg)](https://www.youtube.com/watch?v=n1UHz9dD9Ds)

#### Learning Objectives

- can define React state
- can demonstrate JavaScript syntax in the JSX return
- can demonstrate the useState syntax to update the state values
- can create a React component with a useState hook
- can identify a component as a logic component or a display component
- can parse out code to other components when necessary for streamlined logic

#### Vocabulary

- state
- logic component
- display component
- useState
- React hooks

#### Process

- `cd` into the `react-challenges` repository
- Create a new branch: `state-initials1-initials2` (ex. state-aw-sp)
- Create a new React application with no spaces: `yarn create react-app state-student1-student2` (ex. yarn create react-app state-austin-sarah)
- `cd` into the project
- Open the project in a text editor
- Create a directory in _src_ called _components_
- Code!

#### Useful Commands

- $ `yarn start`
- control + c (stops the server)
- control + t (opens a new terminal tab)

#### Troubleshooting Tips

- Is your server running?
- Are your components exported?
- Inspect the page and look for errors in the console tab.
- Always look at the first error message in the list.

---

### React State

Everything in React is a component. **State** is a special variable that stores data that determines how the component renders and behaves. Components can be broken down into two basic categories: components that hold state and components that do not hold state. If a component is holding data in a state variable it is referred to as a **logic component**. If a component does not hold state it is considered a **display component**. It is important to make the distinction as we want to streamline the data flow in our apps, ensure a clear separation of concerns, and be able to fix any issues quickly.

To make a component dynamic, the value of state must often change as the user interacts with the application. To change the value of a state variable we use a method called useState. **useState()** is special method that allows us to define state variables with initial values and provides a method to update that value. Special methods such as `useState` are called React hooks. **React hooks** are a set of built-in method for functional components allowing developers to "hook" into reusable features in React.

### Counter Example

Here is an example that creates a simple counter application in React. We start with `App.js` displaying a heading tag and a tag for our where the counter will live.

**src/App.js**

```javascript
import React from "react"

const App = () => {
  return (
    <>
      <h1>Counter Application</h1>
      <p>Counter: </p>
    </>
  )
}

export default App
```

### Adding State Values

Next we will add a state variable. The `useState` method is going to set an initial value and provide a method that can be used to update the value. To have access to the `useState` method we will need to import it to the component from the React dependencies. We can name the state variable whatever we want as long as it communicates intent. In this case it makes sense to name the variable `count`. Following the `count` variable is the name of the method that will be used to update `count`. It is convention to use the same name but add the prefix `set`. Inside the parentheses of the `useState` method we can set the initial value of `count`. Our counter will have an initial value of 0. Our component now has data that is available to be referenced and modified as needed.

**src/App.js**

```javascript
import React, { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter Application</h1>
      <p>Counter: </p>
    </>
  )
}

export default App
```

### Referencing Values in State

We can reference the `count` variable by dropping it into the JSX tags to see the value of `count` render in the browser.

**src/App.js**

```javascript
import React, { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter Application</h1>
      <p>Counter: {count}</p>
    </>
  )
}

export default App
```

### Updating State Values

Next we need a way to allow the user to increment the counter's value. So we will add a method to our component. The method will be called `handleClick` to reflect the user's interaction with our application. Inside `handleClick` the `setCount` method will be called and passed the current value of count plus one. The `handleClick` method is now ready to be called. We can add a button to the JSX with an `onClick` attribute that will trigger the `handleClick` method.

Now we have a working counter application!

**src/App.js**

```javascript
import React, { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Counter Application</h1>
      <p>Counter: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  )
}

export default App
```

### Refactor to Advance Functionality

Our counter application is working beautifully. But one of the great things about React is that components are designed to be reusable. Right now if we wanted more than one counter in our application we would be stuck duplicating code. And that is a red flag! A quick refactor will allow our counter functionality to be used as many times as needed.

`App.js` is the only component that is predefined when using the command `create react-app`. It is the boss component in a React application and typically is in charge of data flow, managing other component, and other tasks we will discover later in the syllabus. Often this means `App.js` will be a logic component. But that is only true as long as it makes sense in the structure of the application. In this case moving the state values and logic to another component will allow more functionality without code duplication.

### Counter Component

In this refactor we will add a directory inside the `src` directory named `components`. Inside `components` we will add a new file called `Counter.js` that will be a React component. We can move the logic from `App.js` over to the new `Counter.js` file by copying and pasting and updating the name and export of the component.

**src/components/Counter.js**

```javascript
import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Counter Application</h1>
      <p>Counter: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  )
}

export default Counter
```

### Multiple Counters

`App.js` no longer has counter logic. Instead it will be in charge of rendering the component that does have the counter logic. We will import the counter component and invoke the component inside the return. And this is where the power of React shines. We can invoke the counter component as many times as we please without duplicating any logic. And each counter component is a unique instance so will act independently of all other counters. Very cool!

**src/App.js**

```javascript
import React from "react"
import Counter from "./components/Counter"

const App = () => {
  return (
    <>
      <h1>Counter Application</h1>
      <Counter />
      <Counter />
      <Counter />
    </>
  )
}

export default App
```

---

### 🟧 Challenge: Color Box

As a developer, you are tasked with creating a color box application. The application will allow the user to click a box and see a different color with every click.

### 📚 User Stories

- As a user, I can see a square box on the screen with a black border and a white background
- As a user, I can see the default color name "white" inside the box
- As a user, every time I click on the box the name of a different color appears
  - Possible color names: red, orange, yellow, green, blue, purple, pink
- As a user, every time I click the box instead of the color name, I see the background color in the box change to represent the color.
- As a user, I can see many boxes on the page all acting independently of one another.

### 🏔 Stretch Goals

- As a user, I can start with no boxes on the screen
- As a user, I can see a button to add a box
- As a user, I can see a button to remove a box
- As a user, every time I click the add button, I can add an additional box that acts independently of the other boxes
- As a user, every time I click the remove button, I can remove the last box in the series

---

[Back to Syllabus](../README.md#unit-three-react)
