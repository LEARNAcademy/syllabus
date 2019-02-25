# Everything is a Component

https://player.vimeo.com/video/216351821

## Nesting Components
<iframe src="https://player.vimeo.com/video/216356133" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen                  allowfullscreen></iframe>

Components are composed of other components nested inside of them.  To nest a component, we first import it, and then we can use it in our render         function.  In this example, we're building an 'App' Component that has three nested components inside of it.

![Nested Components](https://s3.amazonaws.com/learn-site/curriculum/React/nested-components.png)

## Add the Header to App

#### src/App.js
```
import React, { Component } from 'react';
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div>
          <Header />
      </div>
    );
  }
}

export default App;
```

#### src/Header.js
```
import React, { Component } from 'react'

class Header extends Component{
  render(){
    return(
      <header>
        <h1>This is a Header</h1>
      </header>
    )
  }
}

export default Header;
```

## Add Recipes

Adding the Recipes component is a repeat of the same steps, create the component, import it into App, and use in the JSX.


#### src/App.js
```
import React, { Component } from 'react';
import Header from './Header'
import Recipes from './Recipes'

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Recipes />
      </div>
    );
  }
}

export default App;
```

#### src/Recipes.js
```Javascript
import React, { Component } from 'react'

class Recipes extends Component{
  render(){
    return(
      <ul>
        <li>Recipe 1</li>
        <li>Recipe 2</li>
      </ul>
    )
  }
}

export default Recipes
```

## Add Footer
Repeat the process for the Footer

#### src/App.js
```
import React, { Component } from 'react';
import Header from './Header'
import Recipes from './Recipes'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Recipes />
          <Footer />
      </div>
    );
  }
}

export default App;
```

#### src/Footer.js
```Javascript
import React, { Component } from 'react'

class Footer extends Component{
  render() {
    return (
      <footer>
        LEARN Academy Inc.
        2017
      </footer>
    )
  }
}

export default Footer
```

## Review

* What are the steps for nesting a component?

* What do all React components have to return?

## Exercise

Pick a category (i.e. beverages, food, movies, beverages, superheroes, etc.) and create a React app listing the very best from your chosen category.

1. Create a Header component containing the name of your app.

2. Create a Content component that lists the best in the category.

3. Create a Footer component.

## Props
Props are how we communicate between components in a React app.  We use props to pass data down to a nested component.  Take, for example, passing a 'name' into the Header of our application.

#### src/App.js
```Javascript
import React, { Component } from 'react'
import Header from './Header'
import Recipes from './Recipes'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header name="Matt" />
        <Recipes />
        <Footer />
      </div>
    );
  }
}

export default App;
```

We can then use the prop in Header

#### src/Header.js
```Javascript
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Hello {this.props.name}</h1>
      </header>
    );
  }
}

export default Header;
```

## State
State is a related concept, but it internal to a component, and not shared.  We can define state on each component, but in order to do so, we need to get comfortable with the ```constructor()``` method first.

## Constructors
Constructors for a class are called each time a new instance of a class is created.  By definition, constructors of a React component are passed the props.  When using a constructor, we need to remember that the parent class from React ```Component``` also has setup work to do, so we need to call ```super(props)``` when overridding the constructor.  

Let's setup our recipes in the Recipes component using state.

#### src/Recipes.js
```Javascript
import React, { Component } from 'react';

class Recipes extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: [
        {name: 'Meatballs'},
        {name: 'Mac & Cheese'}
      ]
    }
  }

  render() {
    let recipes = this.state.recipes.map(function(recipe){
      return(
        <li key={recipe.name}>{recipe.name}</li>
      )
    })
    return (
      <ul>
        {recipes}
      </ul>
    );
  }
}

export default Recipes;
```

## Looping in ```render()```
In a render function of a component, we are returning a string of HTML markup created for us using JSX.  Because of this, we can't loop over an array of values directly, but because ```render()``` is a regular old javascript function, we can assign the result of a loop to a variable, and use that in the return from ```render()```.  Here's how this works:

```Javascript
  render() {
    let recipes = this.state.recipes.map(function(recipe){
      return(
        <li key={recipe.name}>{recipe.name}</li>
      )
    })
    return (
      <ul>
        {recipes}
      </ul>
    );
  }
```
Notice how we use ```.map(function)``` to build up the values from our array, and then use that in the return from ```render()```

## Passing recipes down
Components in a React app generally come in two flavors, they can be pure, or impure (sometimes called 'dumb' and 'smart' components).  Pure components recieve data via props, and use that data without making any additions or modifications to that data.  The Header component is a great example of a 'pure' component.  We pass in a name, and the Header just displays it.  The App component, conversly is an 'impure' component.  It is where the logic for deciding on what name to display is kept.  Impure components manipulate the state of the application by fetching data from the server, or maniuplating data in some other way.

Its best to create impure components very purpousfully, and have as few of them as possible in an application.  When we keep data manipulation limited to just a few components, all of the complex logic of the application is kept in one spot.  The pure components can then go about their work, knowing that they will have no impact on other components.  A good analogy is a bee hive.  There is only one queen in charge, and the worker bees are out in the flower fields doing their own thing.

Both Pure and Impure components are necessisary and good to use in an application, as long as we keep their roles distinct.

![Queen Bee](https://s3.amazonaws.com/learn-site/curriculum/React/queen.nurse.gif)

So, we'll keep all data operations in the App component, and pass it down into our Pure components, Header, Recipes, and Footer.  In order to do that, we need to move the recipes list out of the state of Recipes, and up into App.

#### src/app.js
```Javascript
import React, { Component } from 'react'
import Header from './Header'
import Recipes from './Recipes'
import Footer from './Footer'

class App extends Component {
  constructor(props){                // <-- Move the recipes setup to state of App
    super(props)
    this.state = {
      recipes: [
        {name: 'Meatballs'},
        {name: 'Mac & Cheese'}
      ]
    }
  }

  render() {
    return (
      <div>
        <Header name="Matt" />
        <div>
          <Recipes recipes={this.state.recipes} /> // <-- Pass recipes list to Recipes in the props
        </div>
        <div>
          <Footer />
        </div>
      </div>

    );
  }
}

export default App;
```

#### src/Recipes.js
```Javascript
import React, { Component } from 'react';

class Recipes extends Component {
  // Recipes is 'pure' again because it just responds to the data it was passed in props
  render() {
    let recipes = this.props.recipes.map(function(recipe){  
      return(
        <li key={recipe.name}>{recipe.name}</li>
      )
    })
    return (
      <ul>
        {recipes}
      </ul>
    );
  }
}

export default Recipes;
```

## Review

* What are props for?

* What is the difference between 'pure' and 'impure' components?

## Exercise

Refactor your React app from the previous exercise.

1. Pass your Header component a prop and call it within 'Header.js'.

2. Move your list items into the component's state.

3. 'Purify' your Content component.

# Component Logic

https://player.vimeo.com/video/216510990

Today we're going to take a closer look at managing state in Components, and handling state changes among components as they work together on the page.  We've been working with both state and props to manage state in components.  Recall that state is for managing internal state of a component, and props are used to communicate state between components.  As you work more with react you'll begin to use component state less and less, keeping state contained in a few top level, 'smart', components and relying on props to pass state to other components.  

Let's take a closer look at the difference between component state and props by adding an input element to the page.  We'll start by creating a Header component that takes a greeting, and displays it

#### src/Header.js
```Javascript
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <h1>Hello {this.props.greeting} </h1>
    );
  }
}

export default Header;
```
This component is 'Pure', or 'dumb'.  It just accepts a greeting in props, and displays it.

In App.js, we add a greeting to the components state, and then can user the Header component to display a greeting.

#### src/App.js
```Javascript
import React, { Component } from 'react';
import Header from './Header'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: 'Bob'
    }
  }

  render() {
    return (
      <div>
        <div>
          <Header greeting={this.state.greeting} />
        </div>
      </div>
    );
  }
}

export default App;
```

Next, lets add an input element to the App component so we can update the greeting.  

#### src/App.js
```Javascript
import React, { Component } from 'react';
import Header from './Header'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: 'Bob'
    }
  }

  updateGreeting(e){
    this.setState({greeting: e.target.value})
  }

  render() {
    return (
      <div>
        <div>
          <Header greeting={this.state.greeting} />
        </div>
        <div>
          <input value={this.state.greeting} onChange={this.updateGreeting.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
```
**Notice** that for the input, we need both a `value` and `onChange`.  You may have thought at first that because we set the value of the input to the value of greeting in our component state that the input would be bound correctly to component state, but it doesn't work.  ```<input>``` has its own internal state, so we need to use the props 'value' and 'onChange' to pass the proper context into it.  The input is re-rendered every time the state of the component changes, resetting the value of the input to whatever the component state is at that moment.  By using ```onChange``` that action is passed back up the the App component and handled correctly.

Also notice that we call ```.bind(this)``` on our ```onChange()``` handler.  This binds the context of the function to the App component where we are managing state for the app.  ```<input>``` in React is just another component, and we are passing the ```onChange``` handler in as a prop.  ```<input>``` doesn't have 'greeting' set in its state, so the state change would be silently ignored.  By calling ```.bind(this)```, we make sure that state on that App component is updated, and everything works as we expect.

## Moving the input to a component

As our app grows, we'll likely want to move the ```<input>``` into its own component.  When doing this, we still want to manage state for the application in App, so we pass a handler function down into the new component for it to call when the input value is changed.  We're just passing the functionality of ```updateGreeting``` along here, first App passes it to GreetingInput.  GreetingInput is the middleman, translating the value from the input, and communicating that back up to App.

#### src/GreetingInput.js
```Javascript
import React, { Component } from 'react';

class GreetingInput extends Component {
  handleChange(e){
    this.props.updateGreeting(e.target.value)
  }

  render() {
    return (
      <input value={this.props.greeting} onChange={this.handleChange.bind(this)} />
    );
  }
}

export default GreetingInput;
```

Then up in App.js, we import GreetingInput, and pass our handler in

#### src/App.js
```Javascript
import React, { Component } from 'react';
import Header from './Header'
import GreetingInput from './GreetingInput'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: 'Bob'
    }
  }

  updateGreeting(greeting){
    this.setState({greeting: greeting})
  }
  render() {
    return (
      <div>
        <div>
          <Header greeting={this.state.greeting} />
        </div>
        <div>
          <GreetingInput greeting={this.state.greeting} updateGreeting={this.updateGreeting.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
```

## Review

- What are the two properties that we need to connect with an input field?
- In your own words, what does "bind(this)" do?
- What does pure vs impure mean?
- In our implementation is GreetingInput a pure or impure component?

## Exercise

- Create the following page as a set of React components. When you type in the text box, it should update all 3 result labels

![exercise robo active listener](https://docs.google.com/drawings/d/14UHjxEcMEWFN4tCLm_9R_UC9A0YNmcUjw_r3nLdr3V8/pub?w=960&h=720)
