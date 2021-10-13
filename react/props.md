# React Props

## Video: React Props
[![YouTube](http://img.youtube.com/vi/-5dtIo_oib0/0.jpg)](https://www.youtube.com/watch?v=-5dtIo_oib0)

## Overview
- Props (properties) is a keyword in React for passing information from one component to another
- Props are only passed in one direction, from parent to child
- Props cannot be updated, they are "read only"

## Learning Objectives
- Understanding how to pass data and methods to a child component through the component call
- Understanding how to access the data and methods within the child component
- Understanding the unidirectional flow of information in React

## Vocabulary
- props
- component call

#### Process
- `cd` into the `react-challenges` repository
- Create a new branch: `props-initials1-initials2` (ex. props-aw-sp)
- Create a new React application with no spaces: `yarn create react-app props-student1-student2` (ex. yarn create react-app props-austin-sarah)
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

## Communication Between Components

Since React is component based, communication between the components is very important. Where nested components gave us the ability to build modular interfaces and state gave us a means of tracking and updating data within components, props give us the ability to communicate by passing data and methods between components. Specifically, it gives us the ability to pass data down to nested components.

In a React application, props (for the most part) come from state. In a very practical sense, props are a snapshot of state that are passed on to components tasked with displaying and/or letting a user interact with that information.

Information gets passed from the parent component to the child component through the component call. It is very similar to how a function get passed information through an argument.

**src/App.js**

```javascript
import React, { Component } from 'react'
import GreetPerson from './components/GreetPerson'

class App extends Component{
  render(){
    return(
      <div>
        <GreetPerson name="Bob" />
      </div>
    )
  }
}
export default App
```
Within the `<GreetPerson />` component call we are passing a variable `name` that contains the string "Bob".

The variable is now available to the `GreetPerson` component as props.

To call `name` as props in the child component we use `this.props.name`

**src/components/GreetPerson.js**
```javascript
import React, { Component } from 'react'

class GreetPerson extends Component{
  render(){
    return(
      <h1>Hi, { this.props.name }!</h1>
    )
  }
}
export default GreetPerson
```

## Passing a Value From State as Props

Rather than hardcoding "Bob" directly in the component call, we can use the state object to pass props to the child component.

**src/App.js**
```javascript
import React, { Component } from 'react'
import GreetPerson from './components/GreetPerson'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      personOne: "Bob",
      personTwo: "Teddy"
    }
  }
  render(){
    return(
      <div>
        <GreetPerson name={ this.state.personOne } />
        <GreetPerson name={ this.state.personTwo } />
      </div>
    )
  }
}

export default App
```

The variable `name` is assigned information from state. `name` is available to `GreetPerson` as props. The component `GreetPerson` is being called twice, each with different information from the state object.

Here we start to see the power of these mechanisms working together. We are reusing a component to display different sets of information. Using props and components can make for an extremely dynamic application.

**src/components/GreetPerson.js**
```javascript
import React, { Component } from 'react'

class GreetPerson extends Component{
  render(){
    return(
      <h1>Hi, { this.props.name }!</h1>
    )
  }
}
export default GreetPerson
```

Notice very little has changed but the potential of our application shifts dramatically. First, we added state to the App component by setting up a constructor with two values in state. Then, in the return we changed the hardcoded names to reference the items in state. In moving the values into state, we've centralized our data and made them available to any other components in the App component.

## Refactor: Mapping a Component Call

With a little refactoring and DRYing up our code using a programmatic approach, this can become even more dynamic.

**src/App.js**
```javascript
import React, { Component } from 'react'
import GreetPerson from './components/GreetPerson'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      people: [
        "Bob",
        "Teddy"
      ]
    }
  }
  render(){
    return(
      <div>
        { this.state.people.map(person => <GreetPerson name={ person } /> )}
      </div>
    )
  }
}
export default GreetPerson
```
The refactor includes creating an array of names in the state object. Then, to render the components we can use map() to iterate over the names of the `people` array and return a `GreetPerson` component for each name.

Now, as we add things to state, the component updates without any more code!

## Passing a Method as Props

We have explored passing information as props, but we can pass behavior as well. The process is very similar. In this example, we can create a button that when clicked will greet different people from our array. To accomplish this, we can pass both the state object and a method to our child component.

**src/App.js**
```javascript
import React, { Component } from 'react'
import GreetPerson from './GreetPerson'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      people: [
        "Bob",
        "Teddy",
        "Joe"
      ],
      currentPerson: 0
    }
  }
  handleGreeting = () => {
    let nextPerson = Math.floor(Math.random() * this.state.people.length)
    this.setState({ currentPerson: nextPerson })
  }

  render(){
    return(
      <GreetPerson
        person={ this.state.people[this.state.currentPerson] }
        greeting={ this.handleGreeting }
      />
    )
  }
}
export default App
```

Now we are passing both data and behavior to our child component `GreetPerson`:
1. Data: the component has access to `this.state.people` as `this.props.person` through the variable `person`
2. Behavior: the component has access to `handleGreeting` as `this.props.greeting` through the variable `greeting`


**src/components/GreetPerson.js**
```javascript
import React, { Component } from 'react'

class GreetPerson extends Component{
  render(){
    return(
      <div>
        <h1>Hello, { this.props.person }!</h1>
        <button onClick={ this.props.greeting }>Greet Next Person</button>
      </div>
    )
  }
}

export default GreetPerson
```

The button in `GreetPerson` is responsible for calling the method in our parent component. If we wanted to add more names in our application, the only thing we would have to modify is the number of items in our array. The rest of our application is dynamic!

## Challenge: Dice Roller

Using a well thought out state tree and nested component structure, construct an application that rolls a die and keeps track of the numbers rolled.  Here is a wireframe to help you start planning your application:

![dice game](./assets/dice-game.png)

- As a user, I can see an application called Dice Roller
  - As a developer, I can create a React application with `App.js` as my stateful component
  - As a developer, I can create two child components that will accept props from `App.js`
- As a user, I can click a box and see the outcome of my current "roll"
  - As a developer, I can pass a method from `App.js` to my dice component to display a number between 1 and 6
- As a user, I can see my roll logged
  - As a developer, I can pass the value of the roll to a log component
- As a user, I can see the roll log continue to grow as I roll the dice

### Stretch Goals
- As a user, I can see the image of a dice face when I "roll" the dice
- As a user, I can click a restart button that clears my roll log

---
[Back to Syllabus](../README.md#unit-two-introduction-to-react)
