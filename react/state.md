# React State

#### Overview
JavaScript classes manage both data and behavior. In a React class component, the data is managed in a special object called state. State can be updated via class methods and therefore change what appears in the browser.

#### Previous Lecture (1 hour, 3 min)
[![YouTube](http://img.youtube.com/vi/n1UHz9dD9Ds/0.jpg)](https://www.youtube.com/watch?v=n1UHz9dD9Ds)

#### Learning Objectives
- can define React state
- can demonstrate JavaScript syntax in the JSX return
- can demonstrate the setState syntax to update the state object
- can create a React component with a constructor method and state object
- can make decisions on the flow of information in a component by identifying the points in which stateful components re-render

#### Vocabulary
- state
- setState()
- constructor method
- dumb/pure/display component
- smart/impure/logic component

#### Process
- `cd` into the `react-challenges` repository
- Create a new branch: `state-initials1-initials2` (ex. state-aw-sp)
- Create a new React application with no spaces: `yarn create react-app state-student1-student2` (ex. yarn create react-app state-austin-sarah)
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

### React State
Everything in React is a component. Components can be broken down into two basic categories: components that hold state and components that do not hold state.

But what is state?

**State** is an object that stores a component's data that determines how the component renders and behaves.

To make a component dynamic, the value of state must often be changed by the application. To change the value of state we use a JavaScript method called **setState()**. You should never manipulate state directly. The React DOM will re-render every time you call `this.setState` and update the component.

The state object lives inside the **constructor method**. Just like in regular JavaScript classes, the constructor method runs automatically when we instantiate a class. Because this class is a React component, this makes the constructor a React lifecycle method used for creating data that belongs to the class.

If a component is holding data in a state object it is referred to as a **logic component**. Other, interchangeable names for a logic component are a smart component or an impure component. If a component does not hold state it is considered a **display component**. Other terms for display components are dumb components or pure components. It is important to make the distinction as we want to streamline the data flow in our apps and be able to fix any issues quickly.

### Counter Example

Here is an example that creates a simple counter in React.

**src/App.js**

```javascript
import React, { Component } from 'react'
import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
     <Counter />
    )
  }
}

export default App
```

We imported counter and called a Counter component in the return section. Now we will create the Counter component. Our Counter component will hold state, making it a logic component.

**src/components/Counter.js**

```javascript
import React, { Component } from 'react'

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  render(){
    return(
      <div>
        <h2>Counter: {this.state.count}</h2>
      </div>
    )
  }
}

export default Counter
```

Notice that we created a constructor, passed in props and also called super and passed in props. We will learn more about props soon, but for now let's focus on the state object which is called with `this.state` and set equal to an object with one key:value pair. The key in the object is a symbol called `count` and the value is initially set as 0.

We then see a render method and a return. In the return section we are displaying the value of our state object by calling `this.state.count` which references the value of the `count` key in the state object.

We can simplify this slightly with object destructuring.

**src/components/Counter.js**

````javascript
import React, { Component } from 'react'

class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  render(){
    let {count} = this.state

    return(
      <>
        <h2>Counter: {count}</h2>
      </>
    )
  }
}

export default Counter
````

In the render section we destructure the count out of the state object by setting the count equal to `this.state` and then use the new variable count in the return.  

Next, we will create a button to increase the value of the counter by one per click. The button will have an `onClick` attribute that calls a method named `handleChange`.

**src/components/Counter.js**

````javascript
import React, { Component } from 'react'

class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  render(){
    let {count} = this.state

    return(
      <>
        <h2>Counter: {count}</h2>
        <button onClick={this.handleChange}>
          Press Me!
        </button>
      </>
    )
  }
}

export default Counter
````

Now let's create our `handleChange` function so our application knows what to do when the button is pressed.

**src/components/Counter.js**

````javascript
import React, { Component } from 'react'

class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  handleChange = () => {
    let newCount = this.state.count + 1
    this.setState({count: newCount})
  }

  render(){
    let {count} = this.state

    return(
      <>
        <h2>Counter: {count}</h2>
        <button onClick = {this.handleChange}>
          Press Me!
        </button>
      </>
    )
  }
}

export default Counter
````

The handleChange function takes `this.state.count` and adds one to the value then saves the new value in a variable called `newCount`. By calling `this.setState()` and setting the state object key `count` to our `newCount` variable.

Now we have a fully functioning button that increments by one every time the button is pressed and displays the current count.

Now the power of React begins to emerge because back on our App component, we can add multiple Counter component calls and see all of them on the page operating independently of one another! App is a display component, as its only job is to render information in the browser.

**src/App.js**

````javascript
import React, { Component } from 'react'
import Counter from './components/Counter'

class App extends Component{
  render(){
    return(
      <>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </>
    )
  }
}

export default App
````

---
### Challenge: Color Box

#### User Stories
- As a user, I can see a white square on the screen
- As a user, when I click on the square the name of a color appears in the box
- As a user, each time I click the box I see a new color name
- As a user, I can cycle through a list of color names, one per click - green, blue, yellow, red, purple, orange
- As a user, when I click the box, the background changes to match the name of the color name displayed in the box
- As a user, I can see many color boxes on the page all acting independently of one another

#### Stretch

- As a user, I can see a button to add or remove color boxes
- As a user, when I click the add button, I can add one colorbox that acts independently of the other colorboxes
- As a user, when I click the remove button, I can remove one colorbox

---
[Back to Syllabus](../README.md#unit-two-introduction-to-react)
