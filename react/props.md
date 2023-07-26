# React Props

#### Overview

Props (properties) are specialized React objects used to pass information from one component to another. Props create a unidirectional flow of data and behavior from a parent component down to a nested component via the component invocation. While state values are constantly updated through user interactions, props cannot be changed. They are a "read only" value.

#### Previous Lecture (1 hour 32 min)

[![YouTube](http://img.youtube.com/vi/UtMsjt2mSOA/0.jpg)](https://www.youtube.com/watch?v=UtMsjt2mSOA)

#### Learning Objectives

- can define props
- can recall the syntax for passing data and behavior to a nested component
- can demonstrate how to access data and behavior in the nested component
- can describe the flow of information from a component to a nested component

#### Vocabulary

- props (properties)
- key

#### Process

- `cd` into the `react-challenges` repository
- Create a new branch: `props-initials1-initials2` (ex. props-aw-sp)
- Create a new React application with no spaces: `yarn create react-app props-student1-student2` (ex. yarn create react-app props-austin-sarah)
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

### Communication Between Components

Since React is component based communication between components is very important. Components give us the ability to build modular interfaces and state values give us a means of tracking and updating data within components. **Props**, short for properties, give us the ability to communicate between components by passing data and behavior from one component down to a nested component.

Props can be either static data or methods. The data typically comes from a value in state. In a very practical sense, prop data is a snapshot of the state values that get passed down to components tasked with displaying and/or letting the user interact with that information. Props are passed from a component to a nested component through the component invocation. It is very similar to how a function get passed information through an argument.

### Greeter Example

Here is an example that creates a greeter application in React. We start with _App.js_ displaying a heading tag and a nested component with a smaller heading tag.

**src/App.js**

```javascript
import React from "react"
import Greeter from "./components/Greeter"

const App = () => {
  return (
    <>
      <h1>Greeter Application</h1>
      <Greeter />
    </>
  )
}

export default App
```

**src/components/Greeter.js**

```javascript
import React from "react"

const Greeter = () => {
  return (
    <>
      <h3>Hello World!</h3>
    </>
  )
}

export default Greeter
```

### Passing Data as Props

Now we will pass data from _App.js_ down to the _Greeter_ component. Within the _Greeter_ component call we will pass a variable `name` that contains the string "Hamilton". The variable is now available to the _Greeter_ component as props. To reference the variable `name` in the _Greeter_ component we need to do two things. First, we pass props as an argument to the _Greeter_ component call on _App.js_. Second, we reference the variable through props as `props.name` on the _Greeter_ component .

**src/App.js**

```javascript
import React from "react"
import Greeter from "./components/Greeter"

const App = () => {
  return (
    <>
      <h1>Greeter Application</h1>
      <Greeter name="Hamilton" />
    </>
  )
}

export default App
```

**src/components/Greeter.js**

```javascript
import React from "react"

const Greeter = (props) => {
  return (
    <>
      <h3>Hello {props.name}!</h3>
    </>
  )
}

export default Greeter
```

### Passing Values From State as Props

Rather than hard coding the string "Hamilton" directly in the component call we can use a state value to pass props to the nested component. This will make our application more dynamic as state values can be updated.

**src/App.js**

```javascript
import React, { useState } from "react"
import Greeter from "./components/Greeter"

const App = () => {
  const [people, setPeople] = useState("Hamilton")

  return (
    <>
      <h1>Greeter Application</h1>
      <Greeter name={people} />
    </>
  )
}

export default App
```

The variable `name` is assigned information from the value in state. This makes `name` available to the _Greeter_ component as props. Since the _Greeter_ component is a display component, no updates are needed for our refactor in _App.js_.

### Mapping a Component Call

Our greeter application is working just great. But what if we have multiple people to greet? To expand the functionality of the application we can set an array in state. Instead of a single _Greeter_ component invocation, we will have one component per person. To manage this dynamically, we will map over the array in state and return a component invocation. No matter how many people we need to greet now our code can manage the job effectively.

React is iterating over the array in state and producing a series of component calls as a result. Each component call acts independently from the others. To keep these similar code outputs organized, React likes to have a key for each iteration. A **key** is an unique identifier that gets passed to the JSX tag returned from an iteration. A key can be any unique identifier. Since we have access to the index as the second parameter in the map method, in this example we will use the index of the array to ensure each item in the array always has a unique identifier.

As long as the `name` variable stays the same, no changes need to be made to the _Greeter_ component.

**src/App.js**

```javascript
import React, { useState } from "react"
import Greeter from "./components/Greeter"

const App = () => {
  const [people, setPeople] = useState(["Hamilton", "Washington", "Jefferson"])

  return (
    <>
      <h1>Greeter Application</h1>
      {people.map((person, index) => {
        return <Greeter name={person} key={index} />
      })}
    </>
  )
}

export default App
```

### Passing Methods as Props

We have explored passing information as props. We can pass behavior as well. The process is very similar to passing props. In this example, we will create a button that will trigger a prompt which will add new people to our array. The button will be its own component named _AddPerson_. The logic will be held in _App.js_, and the appropriate behavior can be distributed as needed.

We will add a method in _App.js_ that will use the state setter method named `setPeople` to trigger a `prompt()` method. Saving the prompt to a variable captures the result of what our user types. Whatever the variable captures will be added to the array in state.

**src/App.js**

```javascript
import React, { useState } from "react"
import Greeter from "./components/Greeter"
import AddPerson from "./components/AddPerson"

const App = () => {
  const [people, setPeople] = useState(["Hamilton", "Washington", "Jefferson"])

  const addPerson = () => {
    const newPerson = prompt()
    setPeople([...people, newPerson])
  }

  return (
    <>
      <h1>Greeter Application</h1>
      {people.map((person, index) => {
        return <Greeter name={person} key={index} />
      })}
      <AddPerson addPerson={addPerson} />
    </>
  )
}

export default App
```

The method we wrote will update the array in state. There are no updates for the _Greeter_ component as the code we wrote is dynamic. However, the method is not yet being called. We need to create a button with an `onClick` event.

The button's `onClick` will call the method `addPerson` that is being passed as props down into the component.

**src/components/AddPerson.js**

```javascript
const AddPerson = (props) => {
  return <button onClick={props.addPerson}>Add Person</button>
}

export default AddPerson
```

Now we have created a beautifully dynamic application that has great organization and proper separation of concerns.

### 🎲 Challenge: Dice Roller

As a developer, you are tasked with creating a dice application. The application will allow the user to role a standard six-sided dice and see the result of each roll. As the user rolls the dice, each roll gets logged which creates a list of all the previous rolls.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The dice UI will be in its own component as will the roll log UI. _App.js_ controls of all the data in state, renders the other components, and passes data to the dice and roll component.

![dice game](./assets/dice-game.png)

### 📚 User Stories

- As a user, I can see a square box on the screen with a black border and a white background.
- As a user, I can click on the box to roll the dice and see the result of my roll in the box.
- As a user, I can see my roll logged and see the roll log continue to grow as I roll the dice.

### 🏔 Stretch Goals

- As a user, I can see the image of a dice face when I roll the dice.
- As a user, I can click a restart button that clears my roll log.

### 🗂 Assets

- [Dice One](./assets/1-dice.png)
- [Dice Two](./assets/2-dice.png)
- [Dice Three](./assets/3-dice.png)
- [Dice Four](./assets/4-dice.png)
- [Dice Five](./assets/5-dice.png)
- [Dice Six](./assets/6-dice.png)

---

[Back to Syllabus](../README.md#unit-three-react)
