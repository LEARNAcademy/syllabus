# React Inputs and Events

#### Overview

React applications are designed to handle user interactions quickly and efficiently. Button clicks are one example of user interactions. Buttons can trigger code logic that changes what the user sees in the application. Another common way users interact with an application is through text input fields. Inputs allow a user to add unique content to an application. Developers can track each keystroke made my the user and save the information for use in the code logic.

#### Previous Lecture (57 min)

[![YouTube](http://img.youtube.com/vi/3tegw9GTk5Y/0.jpg)](https://youtu.be/3tegw9GTk5Y)

#### Learning Objectives

- can define DOM events
- can define event listeners
- can distinguish between an event handler method and a state method
- can recall the JSX attributes needed to collect user inputs

#### Vocabulary

- DOM events
- event listeners
- onChange
- type attributes
- value attribute
- handler method

#### Additional Resources

- [JavaScript Events](https://www.geeksforgeeks.org/javascript-events/)
- [W3Schools HTML Input](https://www.w3schools.com/tags/tag_input.asp)

#### Process

- `cd` into the `react-challenges` repository
- Create a new branch: `inputs-initials1-initials2` (ex. inputs-aw-sp)
- Create a new React application with no spaces: `yarn create react-app inputs-student1-student2` (ex. yarn create react-app inputs-austin-sarah)
- `cd` into the project
- Open the project in a text editor
- Create a directory in `src` called `components`
- Code!

#### Useful Commands

- $ yarn start
- control + c (stops the server)
- command + t (opens a new terminal tab)

#### Troubleshooting Tips

- Is your server running?
- Are your components exported?
- Inspect the page and look for errors in the console tab.
- Always look at the first error message in the list.

---

### DOM Events and Listeners

Web applications like React are built to handle interaction with a user. These interactions can happen in a variety of ways. The user can click with their mouse, hover over elements, or use their keyboard to type. All of these interactions are considered **DOM events**. The DOM (Document Object Model) is always listening for changes. As a user moves their mouse across the screen, the DOM reacts by changing the view to represent the cursor's position. As developers, we want our web applications to recognize these interactions and respond accordingly.

We can add event listeners to HTML (and JSX) tags to recognize these various events . **Event listeners** are methods that will wait for specific DOM events to occur and trigger appropriate actions. One example is adding an `onClick` attribute to a button. The DOM is listening for a click event on that particular node and will execute the action described by the developer.

Another event listener is **onChange** which listens for any changes made to a particular node and executes a corresponding action. This type of listener is very handy when the user is typing in a text field. We can listen for the changes and capture the value of what the user is typing.

### Inputs and Input Attributes

Inputs are HTML (and JSX) tags. Inputs are self closing as they don't require inner HTML.

```javascript
<input />
```

Input tags provide lots of options for developers. Inputs can accept text, numbers, dates, passwords, and more. They can also look like text fields, radio buttons, or check boxes. The **type attribute** determines what kind of information the input tag will accept.

```javascript
<input type="text" />
<input type="password" />
```

The **value attribute** establishes a default value in a text input. In React, the value attribute can directly represent the state value. Value works in conjunction with `onChange` to update state and store the user's input.

```javascript
<input type="text" value={userInput} />
```

All inputs are automatically listening for events. In React, the `onChange` attribute can call a corresponding method that will update the state value and reflect back in the current value. It is customary to have an `onChange` listener associate with a handler method. **Handler methods** are a conventional naming technique that describes the method associated with the action of a particular event. By convention, a developer would know that a method called `handleChange` would be associated with an `onChange` event and a method called `handleClick` would be associated with an `onClick` event.

**src/App.js**

```javascript
import React, { useState } from "react"

const App = () => {
  const [userInput, setUserInput] = useState("")

  const handleChange = () => {
    // handle logic here
  }

  return (
    <>
      <input type="text" value={userInput} onChange={handleChange} />
    </>
  )
}
export default App
```

### Handle Change Methods

In JavaScript, event listeners create a new instance of the JavaScript class Event. The Event class is a blueprint for all instances of an event object. As many classes do, the Event class has both data (properties) and behavior (methods). The event object can be accessed in the `handleChange` method by passing the argument of `event` which is often shortened to `e` by convention. By logging `e` we can look at the many properties and methods that are available on this particular event object. 

**src/App.js**

```javascript
import React, { useState } from "react"

const App = () => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    console.log(e)
  }

  return (
    <>
      <input type="text" value={userInput} onChange={handleChange} />
    </>
  )
}
export default App
```

Once we access the event object, we can use dot notation to extract the user's input. To capture the characters that the user is typing, we can use the property `target` which, as the name suggests, targets the input field.

**src/App.js**

```javascript
import React, { useState } from "react"

const App = () => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    console.log(e.target)
  }

  return (
    <>
      <input type="text" value={userInput} onChange={handleChange} />
    </>
  )
}
export default App
```

Now that we have targeted the input we can extract the value from the input field and set it to state.

**src/App.js**

```javascript
import React, { useState } from "react"

const App = () => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    console.log(e.target.value)
    setUserInput(e.target.value)
  }

  return (
    <>
      <input type="text" value={userInput} onChange={handleChange} />
      <p>{userInput}</p>
    </>
  )
}
export default App
```

Once we have the data from the input stored into the state value, the world is our oyster. We can pass the data to wherever it is needed. It will be useful to pass the state data to one or more nested components.

### 🤖 Challenge: Listening Robot

As a developer, you are tasked with creating an application where three "robots" are listening to the text that a user types. As the user types, each robot responds in real time with a different modification to the input.

When creating a project, it is important to think about organizing your code so that you are not repeating yourself unnecessarily. It is a best practice to separate and compartmentalize all the actions in your code. In this application, `App.js` will handle the state values, inputs, and event listener method. Each robot will be in its own display component. The state value can be passed to the nested components where the individualized manipulation of words can be handled by each robot.

![Active Listening Robot Challenge](./assets/robot_active_listening.png)

### 📚 User Stories

- As a user, I can see a landing page with heading and a text input.
- As a user, I see titles of three robots waiting for my text.
- As a user, I see my "Good Robot" repeating exactly what I type in real time.
- As a user, I see my "Bad Robot" saying "BLABLA....." One character for every character I type in real time. For example, a user input of "robot" would be "BLABL".
- As a user, I see a third robot that modifies the input as per the developer's choice in real time.

### 🏔 Stretch Goals

- As a user, I see a fourth robot that modifies the input as per the developer's choice in real time.
- As a user, I can see pleasant stylings on the application.

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

---

[Back to Syllabus](../README.md#unit-three-react)
