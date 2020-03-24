# Cat Tinder Introduction and Wireframes

## Overview
- Cat Tinder. It's like Tinder, but for cats.
- We are creating a full-stack, decoupled application. This means we are actually creating two separate applications. A React application for the frontend and a Rails API that handles our data.
- The goal of the application is to have full CRUD functionality.

## Learning Objectives
- Creating wireframes for Cat Tinder
- Utilizing Reactstrap

## Vocabulary
- Reactstrap
- react-router-dom
- UI

## Set Up

#### Creating a new React app:
```
$ yarn create react-app cat-tinder-frontend
$ cd cat-tinder-frontend
$ yarn add react-router-dom
$ npm install --save bootstrap
$ npm install --save reactstrap react react-dom
$ yarn start
```
- add `import 'bootstrap/dist/css/bootstrap.min.css'` to index.js
- create a directory in *src* called *pages*
- create a directory in *src* called *components*

#### Creating a new React app in Cloud9:
In the package.json file modify the scripts code to set the default to port 8081
```  
"scripts": {
    "start": "PORT=8081 react-scripts start", //Modified for Cloud 9 Users
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
**Remember**: Be sure to add :8081 to the end of your preview url: `<aws-preview-url>:8081`


## Wireframes
Before jumping into the code it helps to set up a wireframe that we can refer back to at any point during the development of our app.

Here's what our app is going to look like:

![wires](https://s3.amazonaws.com/learn-site/curriculum/cat-tinder/cat-tinder-wireframe.png)

## Getting Starting
The first goal of our app is to get our base file structure ready to go. *App.js* will be in charge of handling the routes and displaying the components.

We will start with the **read** part of CRUD. We need a page that will show all the cats (index) and a page that will show one cat (show). The index page will be our home page for the purposes of routing.

Create a CatIndex file and a CatShow file in the pages directory.  

**src/App.js**
```javascript
import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import Header from "./components/Header"
import CatIndex from "./pages/CatIndex"
import CatShow from "./pages/CatShow"

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/cat/:id" component={ CatShow } />
            <Route exact path="/" component={ CatIndex } />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
export default App
````

We don't have any links, but we can still navigate to each page in the browser. Our app will accept a param, but nothing will render as we have not built that functionality yet.

## Challenge: Cat Tinder Initial Set Up
- Create a new file *src/components/Header.js*
- Use Reactstrap to create the header UI
- Create CatIndex file
- Create CatShow file


[Go to next lesson: React Testing With Jest and Enzyme](./jest-enzyme.md)

[Back to React Dynamic Routes](../react-router/dynamic-routes.md)

[Back to Syllabus](../../README.md)
