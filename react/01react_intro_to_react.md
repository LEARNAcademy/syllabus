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
## NPM package manager and package.json

## [Video about NPM]( https://player.vimeo.com/video/229414747)

One of the powerful parts of Node.js is the robust ecosystem of libraries and modules available to build our applications with. We gain access to these modules through Node.js' built in package manager called NPM (Node Package Manager). NPM modules are common functionality wrapped up in a module, and able to be used in different applications.

Some examples of useful NPM Modules:
- Express - A web development framework
- Socket.io - Cutting edge websocket functionality for web apps
- Pug / Jade - Templating engines to make writing HTML easier
- Mongo / Mongoos - Database wrappers
- Date.js - Make working with Dates much easier

### Creating a Node.js application with package.json

Up to this point, all of our applications have been contained in a single file. As our apps grow, we're going to want to break parts of it out into their own files so things stay nice and organized. Also, as we start to use the functionality of 3rd party NPM modules, we're going to need a way to tell our application what modules we're using. All Node.js apps have a file located right in the root of the project to keep all of that information in one spot called package.json.

We're going to start building towards fully functional web server, but first let's create a new Node.js app with a package.json file, and see what we get. First make a directory called ```yarn-demo``` and ```cd``` into it.  Then run ```yarn init```. It should look like this.

```
$ yarn init
yarn init v0.24.4
question name (yarn-example):
question version (1.0.0):
question description:
question entry point (index.js):
question repository url:
question author:

question license (MIT):
success Saved package.json
✨  Done in 4.85s.
```

Looking at the package.json file it created for us

#### package.json
```javascript
{
  "name": "yarn-example",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```
We used Yarn to create a brand new app, and generate a simple package.json file. So far, our app has little more than a name. The other important line in package.json so far is "main": "index.js",. That line tells Node.js what file we want the entry point to our application to be. That file doesn't exist yet, so lets create it now.

```JavaScript
// ./index.js

console.log("I have the super powers of a Node.js developer!")
````


Now, if we go to the command line, and type:

```
$ node .
I have the super powers of a Node.js developer!
```

We see that we have started up Node.js, and it knew what file to look in to begin running the program. Pretty neat!

Now, lets do something a little more super with our superman app. We're going to create some ASCII art for this example. Make sure you are inside the super-man-server directory, then:

```
$ yarn add asciify
✗ yarn add asciify
yarn add v0.24.4
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
success Saved lockfile.
warning Your current version of Yarn is out of date. The latest version is "0.27.5" while you're on "0.24.4".
info To upgrade, run the following command:
$ npm upgrade --global yarn
success Saved 8 new dependencies.
├─ ansi-styles@0.2.0
├─ asciify@1.3.5
├─ chalk@0.3.0
├─ has-color@0.1.7
├─ minimist@0.0.10
├─ optimist@0.6.1
├─ pad@0.0.4
└─ wordwrap@0.0.3
✨  Done in 2.24s.
````

So what just happened? Yarn installed the module we asked for, asciify, and all of the modules that asciify depends on.  Here's a closer look at what Yarn did:

```
{
  "name": "yarn-example",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "asciify": "^1.3.5"
  }
}
```

See how it added 'asciify' as a dependency for our project?  That means that when we share this project, or go to deploy it,  yarn will forever know that it needs asciify to be installed in order to run.

When we run the command "ls", we can see that it also added a "node_modules" directory, and inside that, install asciify as well as all of the libraries that it depends on. Looks like we're all set to start creating some super ASCII art. Lets give it a whirl in our index.js file.

```Javascript
// ./index.js

let asciify = require('asciify')

const text = "Up Up And Away!"

// asciify is a function that accepts parameters, telling it what we want to do.
// The last parameter is a function, known as a 'callback'.  The callback is run
// once asciify has completed, or errored out.
asciify(text, {font: 'larry3d'}, function(err, result){
  if(err){
    console.log("Sorry, we couldn't generate that art")
  } else {
    console.log(result)
  }
})
```
And the result when we type ```$ node .``` on the command line again:

![Up, Up, And Away!](https://s3.amazonaws.com/learn-site/curriculum/up-up-and-away.png)

Now were cooking!  You can read more about asciify on its [Github page](https://github.com/olizilla/asciify)

# Yarn

https://player.vimeo.com/video/216413336

Yarn is a package manager, like NPM, released by Facebook.  It works very similarly to NPM, and is the package manager that create-react-app uses.  You use it in place of NPM completely.

## Commands

| NPM | Yarn |
|-----| -----|
| npm install | yarn |
| npm install --save <name> | yarn add <name> |

The two most important commands we'll need to use with yarn are to install packages.  Listed above are the NPM commands you are already familiar with, and the Yarn equivalents.  

![jsx transpiling](https://github.com/notch8/learn-javascript/blob/master/images/jsxtranspiling.png?raw=true)

## So What is JSX?

https://player.vimeo.com/video/216352777

As we've seen, in JSX we have been using HTML-like syntax along side our Javascript. That's because JSX is a language that extends Javascript so that it can work with HTML-like structures. That's great for us because that means that we can write this in JSX:

```
var nav = (
    <ul id="nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Clients</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
);
```

in place of this:

```
var nav = React.createElement(
   "ul",
   { id: "nav" },
   React.createElement(
      "li",
      null,
      React.createElement(
         "a",
         { href: "#" },
         "Home"
      )
   ),
   React.createElement(
      "li",
      null,
      React.createElement(
         "a",
         { href: "#" },
         "About"
      )
   ),
   React.createElement(
      "li",
      null,
      React.createElement(
         "a",
         { href: "#" },
         "Clients"
      )
   ),
   React.createElement(
      "li",
      null,
      React.createElement(
         "a",
         { href: "#" },
         "Contact Us"
      )
   )
);
```

## Review

* What is JSX?

* What does JSX allow us to do?

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
