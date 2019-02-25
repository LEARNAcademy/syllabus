# React and State

By now we know that everything in react is a component and that **State** and **Props** are two key concepts of this front-end javascript library.


# State

React states are objects that are managed within a component.  We can use the state object to represent instances of our visual displays.

Here are a few more key points about state...

* A component *without* state is called a 'pure component' or a 'dumb component'
* A component with state is called an 'impure component' or a 'smart component'
* React maintains state as an object with key value pairs.
* The values of these keys can be strings, numbers, arrays, booleans, a component call, anything really
* You can change that object by calling **setState**
* React will re-render every time you call setState
* You should **NOT** change this.state directly, ever. Use this.setState.


Let's look at an example of a simple counter app that has state.

````javascript

import React, { Component } from 'react';
import './App.css'

class Box extends Component {
  constructor(props){
    super(props)
      this.state = {
        count: 0
    }
}

````

Notice that we created a constructor, passed in props and also called super and passed in props.  We will learn more about props soon, but for now let's focus on the state object which is called with 'this.state' and set equal to an oject with one key value pair (key = count, value = 0)

Now let's see what the rest of the component would look like if we just wanted to see the state displayed on our webpage.

```` javascript

import React, { Component } from 'react';
import './App.css'

class Box extends Component {
  constructor(props){
    super(props)
      this.state = {
        count: 0
    }
}



  render() {

    return (
        <div>
        <p>{this.state}</p>
        </div>

    );
  }
}

export default Box;
````
