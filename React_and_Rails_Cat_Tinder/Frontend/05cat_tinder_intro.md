# Introduction

Before jumping into the code it helps to set up a wireframe that we can refer back to at any point during the development of our app.

Here's what our app is going to look like:

![wires](https://s3.amazonaws.com/learn-site/curriculum/cat-tinder/cat-tinder-wireframe.png)

## App setup
Using create-react-app and react-bootstrap, we can setup a new application:

```
$ create-react-app cat-tinder-frontend
$ cd cat-tinder-frontend
$ yarn add react-bootstrap react-router-dom
$ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
```
## Cloud9 users: In the package.json file modify the scripts code to set the default to port 8081
`  
"scripts": {
    "start": "PORT=8081 react-scripts start", //Modified for Cloud 9 Users
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
`
## Add a theme

I'm going to use the "United" theme from bootswatch.com, so I'll add the stylesheet to 'pubic/index.html'  You can download a theme from here: [Bootswatch](https://bootswatch.com/) and put it in the ```public/``` directory.

### public/index.html
```
<link rel="stylesheet" href="%PUBLIC_URL%/bootstrap.min.css">
```

## A good starting point

Create React App gives us a file called App.js that ties in to the Index.js file, it will be the entry point of our app.

### src/App.js
```javascript
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Cats from ‘./pages/Cats’
import NewCat from ‘./pages/NewCat’

class App extends Component {
  render() {
    return (
		<div>
			<Header />
			<Router>
				<Switch>
					<Route exact path="/cats" component={Cats} />
					<Route exact patch="/" component={NewCat} />
				</Switch>
			</Router>
		</div>
    );
  }
}

export default App;

````

We haven’t really built any components yet, so this code will throw an error, but we have set up our basis for handling requests.



## Challenge

Did you see that we are using a Header component that hasn't been created anywhere?

<b>Make a header component with bootstrap and add it to the project as src/components/Header.js.</b>

Remember that running ``` yarn start ``` will error out until we create the Cats and NewCat components. Feel free to put placeholders there while you create your header.

#### Where to go from here

[Go to Cat Tinder: Cats component](./06cat_tinder_cats.md)

[Back to React Interaction Testing](./03react_testing_interactions.md)

[Back to Syllabus](../../README.md)
