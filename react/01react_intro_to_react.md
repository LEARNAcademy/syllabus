# ReactJS

# [React Video](https://player.vimeo.com/video/229416697)

<a href="https://player.vimeo.com/video/229416697" target="_blank"><img src="https://player.vimeo.com/video/229416697"
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>)

## What is Reactjs?

React is a Javascript library for building user interfaces.  We can use it to
build webpages, mobile web pages, and even native mobile applications.  It is
component based, which means that we use it to build many small parts, and then
join them together to form entire applications.  This turns out to be extremely
scalable.  It was created from Facebook as that application grew and
became more dynamic.

## Read the docs

React has great documentation for just starting with the framework, and as you grow into bigger and more complex applications.  You'll want to bookmark their documentation, and refer to it often.

[React Documentation](https://facebook.github.io/react/)

## What does a React Webpage look like?

We'll start with an app that is composed of just a single component, and from
there build out more useful and engaging features for our users.  Everything in React is a component, from the outer most       container of the whole page, to a single line of text or button, its all components, and every component that is visible on the page has a render function.

Here's a complete React application, containing just one component, with one line of text:

#### public/index.html
```HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

In the HTML file, the entire app renders into one element on the page.  In our example, we give the div an id of 'app' so we    can find it later.

#### src/App.js
```Javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <h1>Hello LEARN</h1>
    );
  }
}

export default App;
```

#### src/index.js
```Javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

# Start a new React App

https://player.vimeo.com/video/216348577

Up until late 2016, the hardest part about working with React was just getting a new app set up.  Facebook recognized this problem, and released some tools to help developers get started easily.  The following command is one of those tools, and we'll be looking at
some of the important things it does for us - but just to get started, lets try it out now.

## create-react-app
Use Yarn to install the create-react-app, so we can build our first React app.
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

Check your browser.  You've created your first ReactJS app!

There are some instructions there to help us get started.  Let's open 'src/App.js' and see what it contains.  Go ahead and      leave the server that we started with `npm start` running, and open a new terminal window.  Every time we save our work, the    server will notice the changes, and reload the page.  Pretty neat!

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

Save, and check the browser.  The app is now a lot more plain looking compared
to what create-react-app gave us, but this is a big step forward. We're now
building out our own component.  We'll be adding all kinds of interesing things
to our app soon enough.


## Review

* React is component-based. What does that mean?

* What are the advantages of using React?

## Exercise

1. Use `create-react-app` to create a project.

2. Find 'App.js' and change some content.
	* Change the h2 contents.
	* Change the div contents.

3. Find 'App.css' and change some styles.
	* Change the background color of the header.

4. Find 'index.html' and change the title of the page.

5. Check out the `create-react-app` [docs](https://github.com/facebookincubator/create-react-app) on github.
	* Find the 'Adding Bootstrap' section and add Bootstrap to your app
	* Use the given example to add a nav and jumbotron to your component
	* Customize nav and jumbotron
