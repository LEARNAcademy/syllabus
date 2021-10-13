# React Component Lifecycle

When we started with React components, we spent a lot of time working with the `render()` method. Render is a React class component lifecycle method. It determines the markdown that is drawn or rendered in the browser. Because render is a React class component lifecycle method, it run automatically anytime the view updates.

How and when does React know it needs to to run the `render()` method?

What we haven't talked about yet - and what will help answer these types of questions - is how `render()` is one of several built-in methods called **lifecycle methods** and how these lifecycle methods organize React functionality so that, as dynamic as our components are, they still behave in a predictable manner.

So, the goal for this section then is to familiarize you with the **React Component Lifecycle** and get you thinking about how it shapes how we code React components.

## The Big Picture

First, let's look at the big picture. For that, we'll go straight to a great diagram on the official React docs: [React Component Lifecycle](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

The lifecycles break down into 3 main phases:

1. Mounting - When a component is put into the DOM
2. Updating - When something in the component is updated (i.e. the state object)
3. Unmounting - When a component is removed from the DOM

Notice that inside of each group are keywords. Some are familiar to you, some not so much. These, you might have guessed, refer to methods that are available to us in class components.

The placement of these keywords are important, they indicate at what phase(s) the corresponding method is run.

Additionally, each is subdivided into:

- Render phase
- Commit phase

Of the three main phases, you will spend most of your time working with the first two. Let's use some code to take a deeper look at these two phases.

## The phases in action

I have a very simple React application with one `Button` component that currently looks like this:

*src/Button.js*:

```javascript
import React, { Component } from 'react'

class Button extends Component {
  render(){
    return(
      <button>I am  a button</button>
    )
  }
}

export default Button
```

Right now only utilizing the render method. Let's add a `console.log` to the indicating when it runs:


```javascript
import React, { Component } from 'react'

class Button extends Component {
  render(){
    console.log('=========RENDERING==========')
    return(
      <button>I am  a button</button>
    )
  }
}

export default Button
```

If we inspect the browser now, we now see the `log` statement indicating that the `render()` ran. It doesn't tell us much so let's add to our application.

Another lifecycle method that we use quite a lot is the `constructor()`. If you recall from the lifecycle diagram, the `constructor()` runs before the `render()` method in the **mounting phase** of our React components.

So let's say we wanted to equip our button with some state. We'll initialize it with a `clicked` state and we'll also add some `log` statements to see when it runs.

Here's our constructor:

```javascript
  constructor(props){
    console.log("BEGIN MOUNT")
    console.log("=======CONSTRUCTING=======")
    super(props)
    this.state = {
      clicked: false
    }
    console.log("CONSTRUCTED WITH: ", this.state)
  }
```

When we check the browser we see that our, 'BEGIN MOUNT', 'CONSTRUCTING' and 'CONSTRUCTED WITH' logs ran before our 'RENDERING' log. We're starting to see now, the flow of the lifecycle methods. Let's go ahead and complete this phase. We'll add the `componentDidMount()` lifecycle method into our component.

Our componentDidMount:

```javascript
//...component code
  componentDidMount(){
    console.log("END MOUNT")
  }
```

Now we can see the beginning and the ending of the **mount phase**. Notice that it encapsulates a call to the `constructor`, the `render`, and the `componentDidUpdate`.

Let's take a look now at the **update phase**. You may recall from the diagram that a call to `setState()` is one of the ways that an update phase is triggered. Let's add an `onClick` that triggers a state change and see how that looks in the lifecycle.

Here's our final `Button` component code:

```javascript
import React, { Component } from 'react'

class Button extends Component {
  constructor(props){
    console.log("BEGIN MOUNT")
    console.log("=======CONSTRUCTING=======")
    super(props)
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this)
    console.log("CONSTRUCTED WITH: ", this.state)
  }

  handleClick(){
    console.log("++++++UPDATING++++++");
    console.log("State changing: ", this.state)
    let { clicked } = this.state

    clicked = clicked === false ? true : false
    this.setState({clicked: clicked})
  }


  render(){
    console.log('=========RENDERING==========')
    return(
      <button onClick={this.handleClick}>I am a button</button>
    )
  }

  componentDidMount(){
    console.log("END MOUNT")
  }
}

export default Button
```

Now as we click, we can observe something really interesting about what our `handleClick` is doing. First, we've superficially indicated that `handleClick()` is triggering the update phase and that it is attempting to change state. But the next thing we see, after every click and 'UPDATING' marker, we see the 'RENDERING' marker. As the diagram indicates, `setState()` triggers and retriggers the `render()` method.

Experiments like these reveal a great deal about what is happening in React under the hood. Taking time to understand the component lifecycle in React will help you better debug your applications and give you a few additional tools for creating functionality in your React components.


### Component Lifecycle
Before the app loads on a page, nothing exists of course, then something happens, and React starts up on the page.  At that point, some components are loaded onto the page but not all of them.  Afterwards, the user can begin to interact with the web page.  They may click a link for example, and our router springs into action. At that point, a new Component may be loaded onto the page, or if it already exists on the page, it may just be refreshed with new props.

These actions, initializing, receiving props, unloading, etc. are what we refer to as component lifecycle. [React's docs](https://reactjs.org/docs/react-component.html) are mandatory reading for understanding this stuff, so take a few minutes and head over there to read them.  Pay special attention to the lifecycle sections to better understand this topic.

---
[Back to Syllabus](../README.md#unit-two-introduction-to-react)
