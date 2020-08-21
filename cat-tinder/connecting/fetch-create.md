# Cat Tinder Fetch for Create Functionality

## Overview
- It is time to create new cats in our database!
- We will have two applications running on our machine at the same time. The Rails app will run on `localhost:3000` and the React app will run on `localhost:3001`.

## Learning Objectives
- Implementing fetch to post new items to our Rails database

## Set Up
- The Rails app will run on `localhost:3000`
- The React app will run on `localhost:3001`

#### Cloud 9 Users
Be sure and review the [instructions](../../Rails-C&V/postman.md) on exposing a Cloud 9 app to the world like we did for Wildlife Tracker with Postman.  
Start your Rails server: port `8080` for AWS  
Start your React server: `$ rails s -b 0.0.0.0` for 8081 on AWS

## Posting Cats
The frontend is going to send the Rails API information, then Rails will use Active Record to post that information to the database.

We already have a method that logs the form data for our new cat, so we can convert that method into a post request.

The fetch request will be made to the URL that is running the Rails API. In this case, our Rails app is running on `localhost:3000`. We are making a request to the post route of our Rails app. Remembering our RESTful routes, we know that we need to make a **POST** request to a route called "/cats" to create a new cat.

Since our fetch needs to send data from the frontend to the backend we need to format our request. We need to send the information in the body of the request, and specify the header to accept JSON, and specify our HTTP method.

Our fetch call will return a Promise. If the Promise is resolved successfully we can call the `componentDidMount()` method to reload the cats array that will include the new cat.

**/src/App.js**
```javascript
createNewCat = (newcat) => {
  return fetch("http://localhost:3000/cats", {
    // converting an object to a string
    body: JSON.stringify(newcat),
    // specify the info being sent in JSON and the info returning should be JSON
    headers: {
      "Content-Type": "application/json"
    },
    // HTTP verb so the correct endpoint is invoked on the server
    method: "POST"
  })
  .then(response => {
    // if the response is good  - reload the cats
    if(response.status === 200){
      this.componentDidMount()
    }
    return response
  })
  .catch(errors => {
    console.log("create errors:", errors)
  })
}
```

As long as we have set up the frontend scaffolding correctly, the cat create method should be working. But now we will see the a new cat from our user listed in the cat index.


## Challenge: Cat Tinder Fetch Create Functionality
As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.

- As a developer, I can update the `createNewCat` method to post information to the database
- As a user, I can create a new cat
- As a user, I can see my new cat in the cat list

[ Go to next lesson: Cat Tinder Fetch for Edit Functionality ](./fetch-edit.md)

[ Back to Cat Tinder Fetch for Read Functionality ](./fetch.md)

[ Back to Syllabus ](../../README.md#bringing-it-together!)
