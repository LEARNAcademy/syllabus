# React and State
[![YouTube](http://img.youtube.com/vi/5xFUQd3wuT4/0.jpg)](https://www.youtube.com/watch?v=GOZsrmfAbfI)



By now we know that everything in react is a component and that **State** and **Props** are two key concepts of this front-end javascript library.

# State

React states are objects that are managed within a component.  We can use the state object to represent instances of our visual displays.

Here are a few more key points about state...

* A component *without* state is called a 'pure component' or a 'dumb component'
* A component with state is called an 'impure component' or a 'smart component'
* React maintains state as an object with key value pairs.
* The values of these keys can be strings, numbers, arrays, booleans, a component call, anything really
* You can change that object by calling **setState()**
* React will re-render every time you call setState
* You should **NOT** change this.state directly, ever. Use this.setState.


Let's look at an example of a simple counter app that has state.  First, here's our app component that is calling the counter component.

````javascript
import React, { Component } from 'react';
import Counter from './counter'

class App extends Component {
  render() {
    return (
     <Counter />
    );
  }
}

export default App;


````

Notice how we have imported counter at the top and called Counter in the return section.





```` javascript

import React, { Component } from 'react';


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
        <h1>counter: {this.state.count}</h1>
        </div>

    );
  }
}

export default Counter;
````

Notice that we created a constructor, passed in props and also called super and passed in props.  We will learn more about props soon, but for now let's focus on the state object which is called with 'this.state' and set equal to an oject with one key value pair (key = count, value = 0)

We then see a render and a return.  In the return section we are simply calling this.state.count in order to get our current state to display.  We can simplify this slightly with object destructuring.

````javascript
import React, { Component } from 'react';

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
        <h1>Counter: {count}</h1>
        </div>

    );
  }
}

export default Counter;

````

In the render section we set count equal to this.state and then used our new variable count in the return.  

Now let's build a way for us to update the count with a button.  First, let's put a button in the return section and add an onclick equal to a handle change function.

````javascript
import React, { Component } from 'react';

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
        <h1>count: {count}</h1>
        <button onClick = {this.handleChange}>Press Me!</button>
        </div>

    );
  }
}

export default Counter;


````

Now let's create our handleChange function so our application knows what to do when the button is pressed.

````javascript


import React, { Component } from 'react';

class Counter extends Component {
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



  render() {
      let { count } = this.state

    return (
        <div>
        <h1>count: {count}</h1>
        <button onClick = {this.handleChange}>Press Me!</button>
        </div>

    );
  }
}

export default Counter;

````
As you can see above, the handleChange function makes a copy of of this.state.count and adds one to it. We then save that into the variable called newCount.  Finally, we update our state by calling this.setState() and setting our count that is in state to our newCount that we just created.  Now we have a fully functioning button that increments by 1 every time the button is pressed and displays the current count.

Now the power of React begins to emerge because back on our App component, we can add multiple Counter component calls and see all of them on the page operating independently of one another!!

````javascript

import React, { Component } from 'react';
import Counter from './counter'

class App extends Component {
  render() {
    return (
    <div>
         <Counter />
         <Counter />
         <Counter />
         <Counter />
    </div>
    );
  }
}

export default App;




````

# Challenges

### Challenge 1 - Light Bulb Challenge

In the terminal,
* make sure you're on the desktop and use create-react-app plus your project name
* cd into your project
* type atom .
* take out any starter code you want to remove

As a user I can see a square on the screen with the word 'off' in the middle.

As a user I can click anywhere on the square. When I click the square the words change from 'off' to 'on' and then back 'off' again.

#### Stretch

As a user, when I click the box the color goes from white to yellow. (still with the words on or off in the middle)

#### Super Stretch

As a user, instead of seeing a box, I see a picture of a light switch in the off position and a white light bulb.

As a user, when I click on the light switch it turns on and the light bulb changes from white to yellow.  

#### Epic Stretch

As a user I see multiple different lightbulbs and switches that act independently of each other.

As a user I can add or remove a light switch/bulb from the webpage.


### Challenge 2 - Color Box Challenges

As a user, I can see a white square on the screen.

As a user, when I click on the square a word shows up (a color). Each time I click it cycles through a list of these colors (one per click) -  white, green, blue, yellow, red, purple, orange.

#### Stretch

As a user, when the box is cycling through the words, the background is the same as the color word.

As a user, I can see many color boxes on the page all acting independently of one another.

#### Super Stretch

As a user, I can add or delete as many color boxes as I want.  All of them act independently of one another.

[Go to React State](./05react_props.md)


[Back to React Nested Components](./03react_create_react_app.md)
