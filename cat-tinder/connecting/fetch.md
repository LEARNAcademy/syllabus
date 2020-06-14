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
Be sure and review the [instructions](../../Rails-C&V/postman.md) on exposing a Cloud9 app to the world like we did for Wildlife Tracker with Postman.

## Fetching Our Data
The frontend is going to ask the Rails API for information, then Rails will use Active Record to get that information out of the database and hand it back to the frontend as JSON. We want to make that process as simple and re-useable as possible, because we can be pretty sure our Cat Tinder app will get bigger and more complex in the future (because we're going to be famous).

**/src/App.js**
```javascript
import React, {useState, useEffect} from 'react'
// import necessary components from reactstrap
import { Container, Row, Col, ListGroup, ListGroupItem, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
const CatList = () => {
  //Create an empty array to hold all the cats
  const [newCats, setNewCats] = useState([])
  //useEffect hook lets us GET all cats from the database when the component loads
  //the empty array after the comma means that it will get triggered automatically only once
  useEffect(() =>{
    grabCats()},[])

  async function grabCats () {
    try {
      //GET data from the backend
      let response = await fetch("http://localhost:3000/cats")
      let data = await response.json();
      //all good?
      if(response.status === 200) {
        //check the console to make sure we have all the cats
        console.log("data", data)
        //populate the newCats state array with data
        setNewCats(data)
      }
    } catch (err) {
        console.log(err)
    }
  }
```

## Breakdown

What is this code doing?

The big things to note are that we call fetch (which is a promise) and use the value returned from the promise to update state.

`useEffect()` is part of React Hooks land always runs right before render. This means, that right before we have to show information on a page, React is going to preemptively use the code in our API folder to ask for some information and use the result from the database to set state.

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
