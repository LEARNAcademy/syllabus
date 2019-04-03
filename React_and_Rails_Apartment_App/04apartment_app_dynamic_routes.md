 Dynamic Routes
Imagine that we have a list of recipes in a chunk of JSON, and we want to create a page to show the details of each of them.

** Note, this is very much like a previous challenge, only this time, we're going to use dynamic routes and a single 'Recipe' component so that our app can support an infinite amount of recipes without us having to update the code for each one.;j

## Architecture we're working towards
![Recipe Architecture](https://s3.amazonaws.com/learn-site/curriculum/React/recipes-architecture.png)

## Mock Recipe store
We're going to use a mock again to store our Recipe data.  Eventually we'd want to hook this up to the backend, but for now we're happy with mock data as long as we know that the real data will have the same shape.

```bash
cat ./src/store/recipes.js
```
```javascript
: const recipes = [
:   {
:     id: 1,
:     name: 'Mac & cheese',
:     instructions: 'Cook the noodles, then add the cheese.'
:   },
:   {
:     id: 2,
:     name: 'Tofu Burger',
:     instructions: 'Thaw the frozen Tofu Burger,  and grill for 10 minutes.'
:   }
: ]
:
: export default recipes
```

## Dynamic Routes Defined
We've created a few apps that use static routing.  Consider, for example, the following routes which should be familiar:

```html
<Route path="/" exact component={Home} />
<Route path="/about" component={AboutUs} />
```

In both cases, if the user points his or her browser at the specified url, then the proper component will be rendered.

We can use the ```<Link>``` comnpoent to access the like co:

```html
<Link to="/">Home</Link>
<Link to "/about">About Us</Link>
```

Consider now these routes, and try to predict what will how they are used:

```html
<Route path="/recipes/:id" component={Recipe} />
<Route path="/users/:id/phones" component={UserPhones} />
```

The new idea here is the ":id" part of the paths in those Route compnonents.  You may have surmised that we're now dealing with dynamic routes, and you'd be correct if you did.  You can think of parts of a path that begin with a colon (:) as variable declarations in a route.  We can pass anything we like in on that section of the URL, and it will be passed to the component as a prop.  Let's take a look at how this works first by looking at how Link components are built:

```html
<Link to="/recipes/23445">Gravy</Link>
<Link to="/recipes/5">Fried Mushrooms</Link>

<!-- Ids can be anything you like too -->
<Link to="/recipes/chicken-bake">Chicken Bake</Link>

<!-- dynamic sections fall anywhere in a URL -->
<Link to="/users/334/phones">Bob's Phones</Link>
<Link to="/users/228/phones">Mary's Phones</Link>
```

So now that we've seen what a Dynamic Route is, let's setup some actual working routes in our Recipe application.  First we'll look at the Router in App.js, and then we'll dive into how to use dynamic data in the page comonent.


## Dynamic Routes in the Router
Here's App.js, with some dynamic Links added to the nav, and their corresponding Routes:

```bash
cat -n src/App.js
```
```javascript
:      1	import React, { Component } from 'react';
:      2	import {
:      3	  BrowserRouter as Router,
:      4	  Link,
:      5	  Route,
:      6	  Switch
:      7	} from "react-router-dom";
:      8
:      9	import recipes from './store/recipes'
:     10	import Recipe from './pages/Recipe'
:     11
:     12	class App extends Component {
:     13	  constructor(props){
:     14	    super(props)
:     15	    this.state = {
:     16	      recipes: recipes
:     17	    }
:     18	  }
:     19	  render() {
:     20	    const{ recipes } = this.state
:     21
:     22	    return (
:     23	      <Router>
:     24	        <div>
:     25	          <nav>
:     26	            <h2>Recipes</h2>
:     27	            <ul>
:     28	              {recipes.map((recipe)=>
:     29	                <li>
:     30	                  <Link to={`/recipe/${recipe.id}`}>
:     31	                    {recipe.name}
:     32	                  </Link>
:     33	                </li>
:     34	              )}
:     35	            </ul>
:     36	          </nav>
:     37	          <Switch>
:     38	            <Route
:     39	              path="/recipe/:id"
:     40	              component={Recipe}
:     41	            />
:     42	          </Switch>
:     43	        </div>
:     44	      </Router>
:     45	    );
:     46	  }
:     47	}
:     48
:     49	export default App;
```

The first thing to notice here is that we're down to exactly one route to handle all of our Recipes.  There could be 1, there could be 1 million, all we need is a single route.  Pretty cool!  Let's take a closer look at that code:

```bash
cat -n src/App.js |sed '37,42!d'
```
```html
:     37	          <Switch>
:     38	            <Route
:     39	              path="/recipe/:id"
:     40	              component={Recipe}
:     41	            />
:     42	          </Switch>
```
If we were to translate line 39 into plain english, it would read something like, "For any URL that begins with '/recipe/' and ends with a value, this Route matches, additionally, pass the ending value to the page component."

Finishing up App.js, we notice that the links in the nav loop over all the recipes from our mock data (and eventually real data) and construct the proper link.  Our UI is now completly flexible and able to accomodate whatever data we recieve from the backend api.
```bash
cat -n src/App.js | sed '26,35!d'
```
```html
:     26	            <h2>Recipes</h2>
:     27	            <ul>
:     28	              {recipes.map((recipe)=>
:     29	                <li>
:     30	                  <Link to={`/recipe/${recipe.id}`}>
:     31	                    {recipe.name}
:     32	                  </Link>
:     33	                </li>
:     34	              )}
:     35	            </ul>
```

## Recipe Detail Page
Let's shift our attention to the page component.  In our sample app, its called 'Recipe'. We're now using a single route, and a single component to display every recipe in our application.  This means that we're going to have to write our new component to be a template for any recipe data it recieves.  We're also going to have to go and fetch the data we need when we are passed a new recipe id through the router.  Let's start there and see how this works.

### Component Lifecycle
First though, we need to take a step back and explore the lifecycle of a Component in React.  Before the app loads on a page, nothing exists of course, then something happens, and React starts up on the page.  At that point, some components are loaded onto the page but not all of them.  Afterwards, the user can begin to interact with the web page.  They may click a link for example, and our router springs into action. At that point, a new Component may be loaded onto the page, or if it already exists on the page, it may just be refreshed with new props.

These actions, initilizing, recieving props, unloading, etc. are what we refer to as component lifecycle.  [React's docs](https://reactjs.org/docs/react-component.html) are mandatory reading for understanding this stuff, so take a few minutes and head over there to read them.  Pay special attention to the lifecycle sections to better understand this topic.

## Passing in a param to a page component
After a careful read of the [React docs on components](https://reactjs.org/docs/react-component.html) we'll notice that we can recieve data from the props at two points in a component's lifecycle, when it mounts, and when React passes in new prop data.  We as developers, need to handle both situations.  Our example component needs to watch for an ID to be passed in on props, specifically the "match" prop that the router passes automatically.  Here's how we do that in the Recipe component:

```bash
cat -n src/pages/Recipe.js |sed '7,23!d'
```
```javascript
:      7	class Recipe extends Component {
:      8	  constructor(props){
:      9	    super(props)
:     10	    const{ match } = props
:     11
:     12	    this.state={
:     13	      recipeId: match.params.id
:     14	    }
:     15	  }
:     16
:     17	  componentDidUpdate(prevProps){
:     18	    const prevMatch = prevProps.match
:     19	    const{ match } = this.props
:     20	    if(match.params.id != prevMatch.params.id){
:     21	      this.setState({recipeId: match.params.id})
:     22	    }
:     23	  }
...
```
The constructor hooks into the components lifecycle before the component is placed on the page the first time.

```componentDidUpdate()``` is called every time props or state changes on a component.  We *must* check to make sure that there is an actual change to handle here (line 20), otherwise we'll find ourselves in an endless loop.

We've now assigned the ID of our object to state, and we're ready to lookup the recipe data from our mock data, and display it.  Here's the complete Recipe component that show's how to do this:

```bash
cat -n src/pages/Recipe.js
```
```javascript
:      1	import React, { Component } from 'react'
:      2	import ReactDOM from 'react-dom'
:      3
:      4	//Our Mock Datastore
:      5	import recipes from '../store/recipes'
:      6
:      7	class Recipe extends Component {
:      8	  constructor(props){
:      9	    super(props)
:     10	    const{ match } = props
:     11
:     12	    this.state={
:     13	      recipeId: match.params.id
:     14	    }
:     15	  }
:     16
:     17	  componentDidUpdate(prevProps){
:     18	    const prevMatch = prevProps.match
:     19	    const{ match } = this.props
:     20	    if(match.params.id != prevMatch.params.id){
:     21	      this.setState({recipeId: match.params.id})
:     22	    }
:     23	  }
:     24
:     25	  render() {
:     26	    const{ recipeId } = this.state
:     27	    const recipe = recipes.find((r)=> r.id == recipeId)
:     28
:     29	    return(
:     30	      <div>
:     31	        {recipe &&
:     32	          <div>
:     33	            <h1>{recipe.name}</h1>
:     34	            <p>{recipe.instructions}</p>
:     35	          </div>
:     36	        }
:     37	      </div>
:     38	    )
:     39	  }
:     40	}
:     41
:     42	export default Recipe
```


## Review
* What is a Static Route?
* What is a Dynamic Route?
* What is meant by "Mock Data"