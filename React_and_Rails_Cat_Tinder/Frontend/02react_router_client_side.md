# Using React Router

## [React Routing Video](https://player.vimeo.com/video/216433577)

Watch the video above to see why we are setting up our app in this way to use the React Router.

## Installing React-Router

We'll use yarn to install the react router.  Our app is a HTML based web app, so we use react-router-dom

```
$ yarn add react-router-dom
```

## Architecture we're working towards
![Recipe Architecture](https://s3.amazonaws.com/learn-site/curriculum/React/recipes-architecture.png)

## Create a Recipe store

Before this refactor, our recipes were kept as state on the App component.  Now that we're moving to have multiple pages in the app, we want to move the recipes out to a data store so any page can access them that needs to.  For now, we'll create a directory called 'store', and a module there called 'Recipes'.  This will allow us to access the list of recipes from any route that needs them

#### src/store/Recipes.js
```Javascript
const recipes = [
  {
    id: 1,
    name: 'Mac & cheese'
  },
  {
    id: 2,
    name: 'Tofu Burger'
  }
]

export default recipes
```

## Rename Recipes to RecipeIndex

Now that we have a Recipe store, and we'll soon have a Recipe detail page, its somewhat confusing to have a 'Recipes' component.  Let's rename it to 'RecipesIndex'

#### src/RecipeIndex.js (was Recipes.js)
```Javascript
import React, { Component } from 'react'

class RecipeIndex extends Component {
  render() {
    return (
      <ul>
        <li>Recipe 1</li>
        <li>Recipe 2</li>
      </ul>
    );
  }
}

export default RecipeIndex;
````

Then in App.js, we need to use the renamed component

#### src/App.js
```Javascript
import React, { Component } from 'react'
import Header from './Header'
import RecipeIndex from './RecipeIndex'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header name='Bob' />
        <RecipeIndex />
        <Footer />
      </div>
    );
  }
}

export default App;
```

## React Router

First let's set up the router in `src/App.js`.

#### src/App.js

```Javascript

import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    	<div>
    		<Router>

    		</Router>
    	</div>
    )
  }
}

```

Then, in the main App component, we setup the Switch component to navigate be able to navigate to both pages:

#### src/App.js
```Javascript
import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'
import RecipeIndex from './RecipeIndex'
import RecipeDetail from './RecipeDetail'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <Router>
    	<Header name='Bob' />
        <Switch>
             <Route exact path="/" component={RecipeIndex} />
             <Route path='/recipes/:id' component={RecipeDetail} />
        </Switch>
    	<Footer />
      </Router>
    );
  }
}

export default App;
```

## Add Links in RecipeIndex
Link is a component provided by ReactRouter to create links between pages in our app.  Once we import it, we can use it like any other component.  We'll need to add links for each recipe in the RecipeIndex component, and then a link back to the home page from the detail pages.

#### src/RecipeIndex.js
```Javascript
import React, { Component } from 'react'
import Recipes from './store/Recipes'
import {Link} from 'react-router-dom'

class RecipeIndex extends Component {
  componentWillMount(){
    this.setState({recipes: Recipes})
  }
  render() {
    let list = this.state.recipes.map(function(recipe){
      return(
        <li key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`} >
            {recipe.name}
          </Link>
        </li>
      )
    })
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

export default RecipeIndex;
```



## Add a detail page

Our app has a home page, and a recipe detail page.  We create a new component to be the main component for the detail page called ```RecipeDetail```

#### src/RecipeDetail.js
```Javascript
import React, { Component } from 'react'
import Recipes from './store/Recipes'
import {Link} from 'react-router-dom'

class RecipeDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: Recipes
    }
  }

  componentWillMount(){
    const id = this.props.match.params.id
    let recipe = this.state.recipes.find(function(listing){
      return listing.id === parseInt(id)
    })
    if(recipe) {
      this.setState({recipeId: id, recipe: recipe})
    }
  }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h2>{this.state.recipe.name}</h2>
      </div>
    );
  }
}

export default RecipeDetail;
```

## But wait! There's more!

Turns out we are not using our Switch component to its full potential. Along with defining what component to show for specific urls, we can specify what to show when the url requested doesn't have content.

Try requesting `localhost:3000/1`.

You find that you get a blank page and that's the case for any url that doesn't have a component specified with that route. The Switch component can be used to fix this.

First, we can create a component to show when the user has requested a bad url:


### src/Oops.js
```Javascript
import React, { Component } from 'react';

export default class Oops extends Component {
  render(){
    return (
      <h2>Oops, this is not the page you are looking for.</h2>
    )
  }
}
```

Then, we can add a Route component that calls our new component.

src/App.js
```Javascript
import React, { Component } from 'react'
import {Router, Switch, Route} from 'react-router-dom'
import Header from './Header'
import RecipeIndex from './RecipeIndex'
import RecipeDetail from './RecipeDetail'
import Oops from './Oops'                       {/* Importing Oops component*/}
import Footer from './Footer'

class App extends Component {
  render() {
    return (
    	<Router>
    		<Header name='Bob' />
      		<Switch>
            	<Route exact path="/" component={RecipeIndex} />
            	<Route path='/recipes/:id' component={RecipeDetail} />
            	<Route component={Oops} />                      {/* A route that calls that component */}
          	</Switch>
    		<Footer />
      	</Router>
    );
  }
}

export default App;
```

Notice that we have not specified a path. Switch gives us the ability use the first matching path case. This includes paths that aren't specified. Hence, the last Route component will match any url we haven't specified in the previous Route components.

Now request an invalid url. Our Oops component shows up. We are now handling bad url requests!

## Review

* What does `react-router-dom` allow us to do?

* What three things did we have to import from `react-router-dom`?

# Challenge
# Recipes Website Challenge
## Create a Recipe store

Before this refactor, our recipes were kept as state on the App component.  Now that we're moving to have multiple pages in the app, we want to move the recipes out to a data store so any page can access them that needs to.  For now, we'll create a directory called 'store', and a module there called 'Recipes'.  This will allow us to access the list of recipes from any route that needs them

<!--- Tomorrow, we're going to talk about Flux, which is a pattern to make managing data stores easier.) --->

#### src/store/Recipes.js
```Javascript
const recipes = [
  {
    id: 1,
    name: 'Mac & cheese'
  },
  {
    id: 2,
    name: 'Tofu Burger'
  }
]

export default recipes
```

## Add Routes in App.js

Create a home page and recipes index page, have App render them both

#### src/App.js
```Javascript
import React, { Component } from 'react'
import Recipes from './store/Recipes'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class RecipeIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: Recipes
    }
  }

  render() {
 	return (
        <div>
    		<Router>
    			<Switch>
    				// your code here
				</Switch>
    		</Router>
    	</div>
    )
  }
}

export default App;
```
## Create the Recipe Index page.

The recipe index page should receive a list of recipes from App and display each

# Stretch goals

## Add a detail page

Our app has a home page, and a recipe index page so far. But we want to create a new page called ```RecipeDetail```

RecipeDetail should receive the information for one recipe from the index page, and display it.

## Page Not Found

What if someone requests a page that doesn't exist? Create a route to handle that. 
