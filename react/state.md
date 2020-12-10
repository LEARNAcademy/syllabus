# React State

## Video: Using State in React
[![YouTube](http://img.youtube.com/vi/5xFUQd3wuT4/0.jpg)](https://www.youtube.com/watch?v=GOZsrmfAbfI)

## Overview
- React state is an object managed within a component
- Methods in the program can update the value of the state object and therefore change what appears in the browser

## Learning Objectives
- Creating a "smart" component in React within the constructor method
- Understanding how to update the state object

## Vocabulary
- constructor
- dumb/pure/display component
- smart/impure/logic component
- setState()

## Set Up
- $ yarn create react-app app-name
- $ cd app-name
- Open the application in a text editor
- Delete the unnecessary boilerplate code
- $ yarn start

## State
Everything in React is a component. Components can be broken down into two basic categories: components that hold state and components that do not hold state.

But what is state?

**State is an object that stores a component's dynamic data and determines how the component renders and behaves.**

To make a component dynamic, the value of state must often be changed by the application. To change the value of state we use a JavaScript method called `setState()`. You should never manipulate this.state directly. The React DOM will re-render every time you call setState and update the component.


## Counter Example

Here is an example that creates a simple counter in React.

**src/App.js**

```javascript
import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
     <Counter />
    )
  }
}

export default App
```

We imported counter and called a Counter component in the return section. Now we will create the Counter component. Our Counter component will hold state.

**src/Counter.js**

```javascript
import React, { Component } from 'react'

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h2>Counter: { this.state.count }</h2>
      </div>
    )
  }
}

export default Counter
```

Notice that we created a constructor, passed in props and also called super and passed in props.  We will learn more about props soon, but for now let's focus on the state object which is called with `this.state` and set equal to an object with one key:value pair (key = count, value = 0).

We then see a render method and a return. In the return section we are displaying the value of our state object by calling `this.state.count`.

We can simplify this slightly with object destructuring.

````javascript
import React, { Component } from 'react'

class Counter extends Component {
  constructor(props){
    super(props)
      this.state = {
        count: 0
      }
  }

  render() {
    let { count } = this.state

    return (
      <div>
        <h2>Counter: { count }</h2>
      </div>
    )
  }
}

export default Counter
````

In the render section we destructure the count out of the state object by setting the count equal to `this.state` and then use the new variable count in the return.  

Next, we will create a button to increase the value of the counter by one per click. The button will have an onClick that calls a method named handleChange.

````javascript
import React, { Component } from 'react'

class Counter extends Component {
  constructor(props){
    super(props)
      this.state = {
        count: 0
    }
}

  render() {
    let { count } = this.state

    return (
      <div>
        <h2>Counter: { count }</h2>
        <button onClick = { this.handleChange }>
          Press Me!
        </button>
      </div>
    )
  }
}

export default Counter
````

Now let's create our handleChange function so our application knows what to do when the button is pressed.

````javascript
import React, { Component } from 'react'

class Counter extends Component {
  constructor(props){
    super(props)
      this.state = {
        count: 0
    }
  }

  handleChange = () => {
    let newCount = this.state.count + 1
    this.setState({ count: newCount })
  }

  render() {
    let { count } = this.state

    return (
      <div>
        <h2>Counter: { count }</h2>
        <button onClick = { this.handleChange }>
          Press Me!
        </button>
      </div>
    )
  }
}

export default Counter
````

The handleChange function takes `this.state.count` and adds one to the value then saves the new value in a variable called newCount. By calling `this.setState()` and setting the state object key `count` to our newCount variable.

Now we have a fully functioning button that increments by one every time the button is pressed and displays the current count.

Now the power of React begins to emerge because back on our App component, we can add multiple Counter component calls and see all of them on the page operating independently of one another!

````javascript
import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    )
  }
}

export default App
````

## Challenge: Color Box

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

[ Go to next lesson: React State with Images ](./state-with-images.md)

[ Back to Creating a New React Application ](./create-react-app.md)

[ Back to Syllabus ](../README.md#unit-two-introduction-to-react)
