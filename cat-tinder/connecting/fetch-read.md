# Cat Tinder Fetch for Read Functionality

## Overview
- It is time to connect our applications!
- We will switch gears back to the frontend to load our cats.
- We will have two applications running on our machine at the same time. The Rails app will run on `localhost:3000` and the React app will run on `localhost:3001`.

## Learning Objectives
- Implementing fetch to request data from our Rails API
- Setting state with the JSON data that is returned from our fetch request

## Vocabulary
- fetch
- React lifecycle methods

## Set Up
- The Rails app will run on `localhost:3000`
- The React app will run on `localhost:3001`

---

## Fetching Our Data
The frontend is going to ask the Rails API for information, then Rails will use Active Record to get that information out of the database and hand it back to the frontend as JSON.

We want to make that process as simple and re-useable as possible, because we can be pretty sure our Cat Tinder app will get bigger and more complex in the future (because everyone will be using this app!).

There will be a series of fetch requests to match the functionality required in our application. To start, we are going to load up all the cats from the database and save them into state. This will take the place of our mockCats. Since we want make this fetch call right away, we can create a method that will handle fetching all the cats. This method will be called in the React lifecycle method `componentDidMount()` which will run as soon as the app loads.

The fetch request will be made to the URL that is running the Rails API. In this case, our Rails app is running on `localhost:3000`. We are making a request to the index route of our Rails app. Remembering our RESTful routes, we know that we need to make a request to a route called "/cats" to get all the cats.

Our fetch call will return a Promise. If the Promise is resolved successfully we will get back an array of cat objects. We can set this array in state and replace the mock cats with real cats from the database.

**/src/App.js**
```javascript
constructor(props){
  super(props)
  this.state = {
    // remove the mock cats and start with an empty array
    cats: []
  }
}

componentDidMount(){
  this.catRead()
}

catRead = () => {
  fetch("http://localhost:3000/cats")
  .then(response => response.json())
  // set the state with the data from the backend into the empty array
  .then(catsArray => this.setState({cats: catsArray}))
  .catch(errors => console.log("Cat read errors:", errors))
}
```

As long as we have set up the frontend scaffolding correctly, the cat index and the cat show page should be working. But now we are pulling information from the database rather than mock data.


## Challenge: Cat Tinder Fetch Read Functionality
As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.

- As a developer, I can get the cats from the database and set the array in state
- As a user, I can see all the cats
- As a user, I can see the information for just one cat

---
[Back to Syllabus] (../../README.md#bringing-it-together)
