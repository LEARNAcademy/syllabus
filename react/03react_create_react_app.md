# Start a new React App

https://player.vimeo.com/video/216348577

Up until late 2016, the hardest part about working with React was just getting a new app set up.  Facebook recognized this problem, and released some tools to help developers get started easily.  The following command is one of those tools, and we'll be looking at some of the important things it does for us - but just to get started, lets try it out now.

## create-react-app
Use Yarn to install the `create-react-app` followed by the name of your application, so we can build our first React app.
```
$ yarn global add create-react-app
$ create-react-app sample-app
```

This creates a directory called 'sample-app' in the current directory and
installs all the files we'll need to get started.  Change into the new
directory, and fire up your new app.

## Start the webserver
```
$ cd sample-app
$ yarn start
```

Check your browser.

There are some instructions there to help us get started.  Let's open 'src/App.js' and see what it contains.  Go ahead and leave the server that we started with `npm start` running, and open a new terminal window.  Every time we save our work, the server will notice the changes, and reload the page.  Pretty neat!

## Closing the React server
After you type `yarn start` you will notice your terminal is busy running React. If you want to interact with your terminal you can open a new tab. To stop the React app from running use the command `control c`

## Modifying The App component

#### src/App.js

```javascript
// We're using React and Component from the react library
import React, { Component } from 'react';

// We're using webpack to load assets in our project, so loading images
// works much like CSS. We can import them much like any other file.
import logo from './logo.svg';

// The main css file this app uses
import './App.css';

// We create a new component that extends the Component class, which React provides
class App extends Component {

  // When the component is first put on the page, and every time something changes in our component, the render function is     called.  This function builds the html markup that will be put on the page by React.
  render() {

    // Here we have HTML markup right in our .js file.  Most of the React
    // apps that you see, and all of the ones that we'll build in class
    // use something called JSX to preprocess HTML (XML actually) back
    // into plain old JavaScript before the file is sent to the browser.
    // Its not absolutly necessary to use JSX with React, but it makes it
    // so much easier to write React components.
    return (
      <div className="App">
        // Why 'className' instead of 'class'?  It was a design decision on the
        // part of the React development team.  There is lots of great
        // discussion about this on the web around this if you are interested.
        // The important thing to recognize here is that everything is
        // a component in React, so what is really happening here is the div
        // component recieves an attribute named 'className', and is able to
        // operate on it as it is being rendered to the screen.
        <div className="App-header">

          // Notice the '{logo}'.  Everything inside the '{}' when using
          // JSX is evaluated as plain JavaScript.  This line just access
          // the content of the variable 'logo' in our component which we
          // imported above.
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

Edit this file to make it our own, and save it.  The browser will reload
showing our changes. We'll remove all of the boilerplate that we got for
free when we ran 'create-react-app'

```javascript

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
```

Notice this works much the same as when we were creating components in plain html. An interesting difference is that we get to extend directly from the Component class because we are importing it from the React library.

Nesting components is also a similar process, but it takes some extra steps. Let's take a look at that.

## Nesting components in create-react-app

To demonstrate this, we'll set up a simple Recipes app that displays a list of recipes.

We'll start with a Header component.

First we will create a file inside the `src` folder called `Header.js`.

### src/Header.js

```javascript
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

Note that for each new component there 3 necessary steps in the component file. We must first import React and the component module. Next we code the component definition. Lastly, we must export the component. This allows us to import it whereever we want.

With the component defined, we can then use it in the App component:

### src/App.js

```javascript
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

Here we have updated the App component to render the Header component. First, we imported the Header component at the top. Then, using the same syntax as before, we called the Header component in the return of the App component.

Let's add a recipe component.

First, we create the Recipes component in the `src` folder.

### src/Recipes.js

```javascript
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

Next, we'll import it in App.js.

### src/App.js

```javascript
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

And that's nested components within create-react-app. The key here is to remember to export and import your components.

Here's a final example of nesting a footer component:

### src/Footer.js

```javascript
import React, { Component } from 'react'

class Footer extends Component{
  render() {
    return (
      <footer>
        LEARN Academy Inc.
        2018
      </footer>
    )
  }
}

export default Footer
```

### src/App.js

```javascript
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


## Review

* React is component-based. What does that mean?

* What are the advantages of using React?

## Challenge

### Challenge One: Getting your bearings

The goal of this challenge is to get you familiar with the boilerplate files in React application generated by create-react-app

1. Use `create-react-app` to create a project.

2. Find `App.js` and make some changes to the existing some content.

3. Find `App.css` and change some styles.

4. Find `index.html` and change the title of the page.

The next two challenges will get you familiar with nesting components in a React app generated by create-react-app.

### Challenge Two: About Us Webpage

Now that you are more familiar with the boilerplate React code, it is time to create your own content. You can delete the code in `App.js` within the outer most `<div>` of the return.

Here are your stories:

- As a user, I can see a Header component with text 'About Us'
- As a user, I can see a content component with information about you
- As a user, I can see another content component with information about your partner
- As a user, I can see a Footer component with your team name

### Challenge Three: Favorites List

Create a webpage with 3-5 favorites of whatever topic you like (movies, books, tv shows, video games, etc)

Use `create-react-app` to create a new React project.

- As a user, I can see a component with the title of your app (ie. Top 5 Favorite TV Shows)
- As a user, I can see a component with a list of your favorites
- As a user, I can see a component containing a little blurb about each item on the list

[Go to React State](./04react_state.md)


[Back to React Nested Components](./02react_nested_components.md)
