# Recipe App

We’re going to create a Recipe site that has a homepage, and multiple recipe detail pages. For this first pass, the challenge is to manually create a React Component and Route for each recipe. Then, on each detail page, we’ll look details for the recipe from a JSON hash that we store in a separate file.

**Note that this challenge uses a few concepts that we’ll need for some advanced routing that we’ll look at next. This structure is going to lead to a lot of duplicated code. For today, that’s ok. Go ahead and duplicate code in your components as you need to. We’ll fix that soon!**

## Create a Mock Recipe Store

In this app, we’re going to have a homepage and multiple recipe detail pages. Each Detail page is going to lookup details for the recipe from a JSON data store. This pattern is very common in real world applications. Most pages need to make a request to the backend server, process the data recieved back, and then display it to the user. By fetching our data from a JSON store, we’ll have seen just about all the tools required to do that.

What is a **‘Mock’**? A mock is a useful concept when working on front-end applications. Very often, the front-end will be under active development at the same time as the back-end is worked on by a different team. When this situation happens, it is common for both teams to get together beforehand, and have a meeting where they specify exactly what the JSON will look like that gets passed between the front end and backend. Some questions asked in a meeting like this would sound like:

- What does a request for a resource look like?
-  What is included in a response to a resource request?

- What is included in a response of a list of resources?

So, for our exercise we’re going to imagine that we’ve just come from such a meeting and agreed on what the response for a list of recipes will look like. This is enough information for us to get most of our app built while the backend team finishes their work.

Here is the JSON payload when we request the route `/recipes`: `bash cat src/store/recipes.js ` 

```javascript
const recipes = [
  {
    id: 1,
    name: 'Mac & cheese',
    instructions: 'Cook the noodles, then add the cheese.'
  },
  {
    id: 2,
    name: 'Tofu Burger',
    instructions: 'Thaw the frozen Tofu Burger,  and grill for 10 minutes.'
  }
]
:

export default recipes
```

We can then import our mock and use it in any component we like. Don’t forget though that this is just sample data. Eventually, we’ll want to hook this up to a real, working backend server.

Here’s an example of how to add the entire mock recipes array to an attribute on state in a component:

```javascript
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//Import of our Mock Data
import recipes from './store/recipes'

class Recipe extends Component {
  constructor(props){
    super(props)
    this.state = {
      allRecipes: recipes
    }
  }
```

 Now we can use `this.state.allRecipes` in our code just like we fetched it from the server.

## The Code Challenge

- As a user I want to see a list of links to recipes when I go to the home page
  - Create a new route for each recipe in your data store for now
- As a user, I want to be able to click on a link, and be taken to a page that shows me details about a recipe.
  - Lookup the recipe details from the data store and display them to the user
- As a user, if I navigate to a Recipe page that doesn’t exist, I should see a message indicating so, and a link to go back to the homepage.