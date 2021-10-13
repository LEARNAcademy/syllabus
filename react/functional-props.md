# React Functional Props

## Overview
- Managing the internal state of a component and communicating between components with props
- Exploring how to pass data and behavior between components with props and functions

## Learning Objectives
- Understanding how a component passes data and behavior to another component as props
- Understanding the relationship between components with respect to the flow of information

## Vocabulary
- state
- props
- dumb/display component
- smart/logic component

#### Process
- `cd` into the `react-challenges` repository
- Create a new branch: `func-props-initials1-initials2` (ex. func-props-aw-sp)
- Create a new React application with no spaces: `yarn create react-app func-props-student1-student2` (ex. yarn create react-app func-props-austin-sarah)
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

## Passing Information "Up the River"

In React, each component should only be responsible for its own data and behavior. But often the component's data and behaviors rely on information from other components.

We can pass information to another component as props. Props are great, but they are limited in their functionality. Props can only be passed in one direction. React has a one way flow of information through the component call.

Data and behavior can be passed using props from a parent component to a child component. The variable *name* is created to contain information from the state object. It is passed to the `GreetPerson` component inside of the component call. Then in the `GreetPerson` component the information is available by referencing the variable as props.

**src/App.js**
```javascript
<GreetPerson name={ this.state.name } />
```

**src/components/GreetPerson.js**
```javascript
<p>Hello, { this.props.name }!</p>
```

So what happens when the component receiving props needs to send information back to the component it received props from?

Since props only get passed in one direction, there is no direct way in React to send information back "up the river." But there is a programmatic solution!

As we know, functions are pretty handy. Functions can be created in one place and called in another place. Functions can also take in information in the form of an argument. Knowing this, we can utilize the power of functions to pass information from a one component to another.

## Colorbox Refactor
To explore functional props, we can take the concept of the Colorbox Challenge and refactor the functionality. The base construction of the app will include `App.js` as a stateful component and `ColorOptions.js` as a display component.

Here are the user stories for our application:
- As a user, I can see a box on the screen.
- As a user, I can see a series of buttons with color names.
- As a user, I can click a button and change the color of the box to the indicated color.

**src/App.js**
```javascript
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      // an array of all the color options
      colors: ["red", "green", "yellow", "blue", "purple"],
      // the current color of the square
      currentColor: ""
    }
  }

  render(){
    return(
      <>
        <h1>Color Picker</h1>
        {/* Adding some styling to a div to create a square with a background color */}
        <div style={{ height: "100px", width: "100px", border: "2px solid black", backgroundColor: this.state.currentColor  }}></div>
      </>
    )
  }
}
```

**src/components/ColorOptions.js**
```javascript
class ColorOptions extends Component{
  render(){
    return(
      <>
        // setting up the button that will eventually change the color of the box
        <button></button>
      </>
    )
  }
}
```

The goal of the `ColorOptions` component is to be called once for every item in the colors array. To make this both dynamic and DRY (Don't Repeat Yourself), we can map over the array and return the component call for every iteration.

**src/App.js**
```javascript
render(){
  let color = this.state.colors.map((value, index) => {
    {/* the map method must have a return */}
    return(
      {/* mapping over the component call and pass the value to the component */}
      <ColorOptions
        value={ value }
        key={ index }
      />
    )
  })
  return(
    <>
      <h1>Color Picker</h1>
      <div style={{ height: "100px", width: "100px", border: "2px solid black", backgroundColor: this.state.currentColor  }}></div>
      {/* rendering the variable that contains the mapped component calls */}
      { color }
    </>
  )
}
```

**src/components/ColorOptions.js**
```javascript
render(){
  return(
    <React.Fragment>
      <button>Change the box to { this.props.value }</button>
    </React.Fragment>
  )
}
```

Now there is one component for every color in the array. `this.props.value` is coming from the value of the map method in `App.js`. It is being passed to each component and can be called as props.

Now we can create a function in the `ColorOptions` component that will alert the name of the color when the button is clicked. By adding an `onClick` to the button, an alert will be called for every click.

**src/components/ColorOptions.js**
```javascript
assignColor = () => {
  alert(this.props.value)
}
```

This is great, but we need the box to change to the color that is associate with the button click. The logic for the color change is in `App.js` so, we need to tell `App.js` what button is being clicked.

So how does that happen?

## Functional Props
Following the idea of functional props, we can create a function inside of `App.js` that gets called inside of the `ColorOptions` component. Then, we can pass the information `this.props.value` to the function call as an argument.

**src/App.js**
```javascript
changeColor = (color) => {
  this.setState({ currentColor: color })
}
```

**src/components/ColorOptions.js**
```javascript
assignColor = () => {
  this.props.changeColor(this.props.value)
}
```

To connect these two functions, the last step is to make the function available to `ColorOptions` by passing `this.changeColor` through the component call.

**src/App.js**
```javascript
<ColorOptions
  value={ value }
  key={ index }
  changeColor={ this.changeColor }
/>
```


## Challenge
As a developer, I am tasked with creating a food ordering application in React. This is the first iteration of an application that is going to be much larger in the future, so I am tasked with creating a solid foundation from which the code base can grow.

- As a user, I can see an application that has a list of food items and the price of each item
- As a user, I can select an item I wish to order
- As a user, I can see the items I have selected displayed on the page

#### Stretch Challenges
- As a user, I can see the total cost of my current order
- As a user, I can see both the base total of my food selections and the total that includes sales tax
- As a user, I can see the total that includes sales tax rounded to two decimals
- As a user, I can see an image of my food selection on the menu

---
[Back to Syllabus](../README.md#unit-two-introduction-to-react)
