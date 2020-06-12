# Cat Tinder Creating Cats

## Overview
- We already have a `getCats()` fetch call, now we need to make a new method to create a new cat when a user submits the form.

## Learning Objectives
- Sending a new cat entry from the frontend React form to the database
- Redirecting to the Cat Index after the user submits a New Cat

## Vocabulary
- post
- HTTP request
- fetch

## POSTing Cats
The `createCat()` fetch call is going to be a little bit different than `getCats()`, because creating something in the Rails app requires a POST type HTTP request (think back to your rails routes).

A POST type request means that we are "posting" or sending information along with the request. Information that must be handled. In this case, by specifying the HTTP verb `POST`, attaching some information, and directing it to the rails "/cats" route will mean that the attached information is used to create a new cat instance in the database.

**src/NewCat.js**
```javascript

import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {Link} from 'react-router-dom'

const NewCat = () => {
  //in the following Hooks:
    // `cats` is the equivalent of:
      // this.state.cats
    // `setCats` is the equivalent of:
      // setState({cats: whatever-data })
    // useState sets `cats` to be an empty array when the component loads
  const [cats, setCats] = useState([
    
  ])
  
  const [form, setState] = useState({
    name: '',
    age: '',
    enjoys: ''
  })
  
  const pushCats = (freshCat) => {
    // fetch URL to post new state of `cats` to database
    return fetch("http://localhost:3000/cats", {
      body: JSON.stringify(freshCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
  }
  return(
    <div>
      <h1 id="new-cat-header">Add Yo' Kitties, bro.</h1>
      <Form id="form">
        <FormGroup>
          <Label htmlFor="name" id="name">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={ handleChange }
            value={ form.name }
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age" id="age">Age</Label>
          <Input
            type="number"
            name="age"
            onChange={ handleChange }
            value={ form.age }
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="enjoys" id="enjoys">What it do?</Label>
          <Input
            type="text"
            name="enjoys"
            onChange={ handleChange }
            value={ form.enjoys }
          />
        </FormGroup>
        <Button
          name="submit"
          color="primary"
          id="submit"
          onClick={handleSubmit }
        >
          Add dat Profile
      
        </Button> <Link to="/cats" className="float-right btn btn-warning">View dem Kitties</Link>
      </Form>
    </div>
  )
}
export default NewCat
```

## Call and Redirect
The last thing to do is call the `pushCats()` method and add the redirect element.

**pages/NewCat.js**
```javascript
<Link to="/catindex">
  <Button
    name="submit"
    id="submit"
    onClick={ handleSubmit }
  >
    Create a New Profile
  </Button>
  { success && <Redirect to="./catindex"/> }
</Link>
```
Notice the `success` statement. This sets up conditional rendering. If `success` evaluates to "true" the redirect will run. As long as it evaluates to "false", the program will act as if the redirect doesn't even exist.

You will need to create a "success" value in state to finish this functionality.

**src/pages/NewCat.js**
```javascript
const [success, setSuccess] = useState({success: false})

  const handleChange = e => {
    setState({
      //take all the existing form data and,...
      ...form,
      //...add new data to the end as it is typed
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (event) => {
    // keeps react from refreshing the page unnessarily
    event.preventDefault()
    // show the current state in the console (should see all cats created)
    console.log(form)
    // set the `cats` state to include all cats
    // since the current state of `cats` is immutable, it cannot be changed, we need to create a copy of it and add the new cat to it
    setCats(cats => [...cats,form])
    // send all cats in the newly created state to the backend to post to the database
    pushCats(form)
  }
```

## Stretch Challenges
- As a user, when I am on the cat index page, I can click on a cat and see its profile page.
- As a user, when viewing a cat's profile page, I can edit the cat's info.
- As a user, I can delete a cat.

[Back to Cat Tinder Fetching Cats](./fetch.md)

[Back to Syllabus](../../README.md)
