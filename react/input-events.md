# React Inputs and Events

## Overview
- Adding an input field to a React application
- Implementing listening events in React

## Learning Objectives
- Creating text input fields
- Exploring event listeners in JavaScript
- Creating a method to handle DOM event changes (what the user types)
- Creating a method to set state with the user input

## Vocabulary
- input
- onChange
- DOM event, often shortened to `e`

#### Creating a new React app:
```
$ yarn create react-app app-name
$ cd app-name
$ yarn start
```

## DOM Events
From [GeeksforGeeks](https://www.geeksforgeeks.org/javascript-events/): Javascript has events to provide a dynamic interface to a webpage. These events are hooked to elements in the Document Object Model(DOM).

JavaScript


**src/App.js**

```javascript
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: ""
    }
  }

  setName = (e) => {
    this.setState({ name: e.target.value })
  }

  render(){
    return(
      <React.Fragment>
      <h1>Hello World!</h1>
        <input
          type="text"
          onChange={ this.setName }
        />
        <Yelling name={ this.state.name }/>
      </React.Fragment>
    )
  }
}
export default App
```

## Challenge: Listening Robot

#### User Stories

- As a user, I see a page with a text input.
- As a user, I see titles of three robots waiting for my text.
- As a user, when I enter text I see the robots responses update in real time.
- As a user, I see my "Good Robot" repeating exactly what I type.
- As a user, I see my "Bad Robot" saying *BLABLA...*. One character for every character I type.
- As a user, I see a third robot that is the developer's choice.

### Developer Stories

- As a developer, I have one parent component that holds state (logic or smart component).
- As a developer, I have three child components that do not hold state (display or dumb component).
- As a developer, I have an input in my parent component.
- As a developer, I can call an onChange method in the input tag.
- As a developer, I can pass the updated state as props to the child components.
- As a developer, I can see the child components display the user input.
- As a developer, I can create modification to the user input text by creating a method in my child component.

![Active Listening Robot Challenge](./assets/robot_active_listening.png)


[ Back to Syllabus ](../README.md#unit-three-intermediate-react)
