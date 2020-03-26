# Cat Tinder Fetching Cats

## Overview
- It is time to connect our applications!
- We will switch gears back to the frontend to load our cats.

## Learning Objectives
- Using fetch to request data from our Rails API
- Setting state with the JSON data that is returned from our fetch request

## Vocabulary
- fetch
- React lifecycle methods

## Set Up

#### Cloud 9 Users
Be sure and review the [instructions](../../Rails-M/additional-topics/07rails_cloud9_access.md) on exposing a Cloud9 app to the world like we did for Wildlife Tracker with Postman.

## Fetching Our Data
The frontend is going to ask the Rails API for information, then Rails will use Active Record to get that information out of the database and hand it back to the frontend as JSON. We want to make that process as simple and re-useable as possible, because we can be pretty sure our Cat Tinder app will get bigger and more complex in the future (because we're going to be famous).

**/src/App.js**
```javascript
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: [], // We start with an empty array, so the component can finish rendering before we make our fetch request
    }
    this.getCats() // Call our fetch method when the component loads for the first time
    }

    componentWillMount(){
    	this.getCats()
    }

    getCats = () => {
       // Making a fetch request to the url of our Rails app
       // fetch returns a promise
      fetch("http://localhost:3000/cats")
      .then((response)=>{
        //Make sure we get a successful response back
        if(response.status === 200){
          // We need to convert the response to JSON
          // This also returns a promise
          return(response.json())  
        }
      })
      .then((catsArray)=>{
         //Finally, we can assign the cats to state, and they will render
        this.setState({ cats: catsArray })
      })
    }
  }
```

## Breakdown

What is this code doing?

The big things to note are that we call fetch (which is a promise) and use the value returned from the promise to update state.

`ComponentWillMount()` is part of the React component lifecycle and always runs right before render. This means, that right before we have to show information on a page, React is going to preemptively use the code in our API folder to ask for some information and use the result from the database to set state.

## Starting Servers
We have two applications running separately from each other. They will run on two different ports.

Start your Rails server:
  - `localhost:3000` for local
  -  port `8080` for AWS

Start your React server:
- `localhost:3001` for local
- `$ rails s -b 0.0.0.0` for 8081 on AWS

Recall the wireframe we started out with?

![wireframe](https://s3.amazonaws.com/learn-site/curriculum/cat-tinder/cat-tinder-wireframe.png)

This is where we've ended up:

![cat tinder index](https://s3.amazonaws.com/learn-site/curriculum/cat-tinder/cat-tinder-index.png)

## Challenge
- Add fetch to your Cat Tinder frontend
- console.log() your state of cats

[Go to next lesson: Cat Tinder Creating Cats](./cat-form.md)

[Back to Cat Tinder API CORS](../backend/CORS.md)

[Back to Syllabus](../../README.md)
