# Cat Tinder Fetch for Create Functionality

#### Overview

It is time to create new cats in our database! We will have two applications running on our machine at the same time. The Rails app will run on `localhost:3000` and the React app will run on `localhost:3001`.

#### Learning Objectives

- can make cross-origin requests from the UI to an API
- can set state with the JSON data that is returned from our fetch request

#### Previous Lecture (1 hour 13 min)

[![YouTube](http://img.youtube.com/vi/b4XhdUReNJ4/0.jpg)](https://www.youtube.com/watch?v=b4XhdUReNJ4)

#### Process

- The Rails app will run on `localhost:3000`
- The React app will run on `localhost:3001`

---

### Posting Cats

The frontend is going to send the Rails API information, then Rails will use Active Record to post that information to the database.

We already have a function that logs the form data for our new cat, so we can convert that function into a post request.

The fetch request will be made to the URL that is running the Rails API. In this case, our Rails app is running on `localhost:3000`. We are making a request to the post route of our Rails app. Remembering our RESTful routes, we know that we need to make a **POST** request to a route called `"/cats" `to create a new cat.

Since our fetch needs to send data from the frontend to the backend we need to format our request. We need to send the information in the body of the request, and specify the header to accept JSON, and specify our HTTP method.

Our fetch call will return a Promise. If the Promise is resolved successfully we can call the `readCat` function to reload the cats array that will include the new cat.

**/src/App.js**

```javascript
const createCat = (cat) => {
  fetch("http://localhost:3000/cats", {
    // converts the object to a string that can be passed in the request
    body: JSON.stringify(cat),
    // specify the info being sent in JSON and the info returning should be JSON
    headers: {
      "Content-Type": "application/json"
    },
    // HTTP verb so the correct endpoint is invoked on the server
    method: "POST"
  })
    .then((response) => response.json())
    .then(() => readCat())
    .catch((errors) => console.log("Cat create errors:", errors))
}
```

As long as we have set up the frontend scaffolding correctly, the cat create method should be working. But now we will see the a new cat from our user listed in the cat index.

---

[Back to Syllabus](../../README.md#bringing-it-together)
