# Cat Tinder Fetch for Read Functionality

#### Overview

It is time to connect our applications! We will switch gears back to the frontend to load our cats. We will have two applications running on our machine at the same time. The Rails app will run on `localhost:3000` and the React app will run on `localhost:3001`.

#### Previous Lecture (1 hour 13 min)

[![YouTube](http://img.youtube.com/vi/b4XhdUReNJ4/0.jpg)](https://www.youtube.com/watch?v=b4XhdUReNJ4)

#### Learning Objectives

- can make cross-origin requests from the UI to an API
- can replace mock JSON with database payload
- can set state with the JSON data that is returned from our fetch request

#### Vocabulary

- fetch

#### Process

- The Rails app will run on `localhost:3000`
- The React app will run on `localhost:3001`

---

### API Request-Response

APIs are websites that provide data to other websites. Just like user-facing websites, APIs are accessed via the request-response cycle. The request requires an action and a location. The action is one of the HTTP verbs: get, post, put, patch, delete. The location is the url. The url specifies the request and sets in motion the routing of the website. When this is done on a user-facing website typically the url is specifying a particular view. In APIs the url is specifying an endpoint. An **endpoint** is the touch point of the particular set of data being requested. Just like websites can have many different pages to view, APIs can have many endpoints that provide data sets.

After a request has hit the appropriate API endpoint, we get a corresponding response. The response consists of a status code and the payload. In a user-facing website the payload is HTML that creates a view. The payload of an API is JSON. **JSON** (JavaScript Object Notation) is a widely accepted data format used to send information across the internet. The JSON structure was adopted from the JavaScript programming language in the late 1990s. The JavaScript language has made changes to its object structure over the years while JSON's ubiquitousness and popularity has kept the structure unchanged.

### Asynchronous Requests

While request-response cycles happen very quickly they are not instantaneous. When calling on an API from our React application, it is important to consider that the speed in which the data is accessed can take an unknown amount of time.

JavaScript is **single threaded** which means the programs run top to bottom and executes one thing at a time. If a given action takes an unexpectedly long time to execute the next thing in the queue is delayed until the previous action finishes. This can cause an application to appear to be broken.

While JavaScript is single threaded, there are tools that can manage actions with unknown timelines without disrupting the user experience on the rest of the application. These tools allow JavaScript developers to make **asynchronous requests** which is an action that steps outside the queue of JavaScript executions allowing the program to continue while waiting for the action to complete.

Asynchronous actions allow developers to use images or animations to communicate to the user that more content is coming. As users we recognize these spinning circles or progress bars as indications that the page is loading and we should be patient. This communication would not be possible in a single threaded environment since these actions require code executions.

### This Is So Fetch

The tool that allows JavaScript developers to make asynchronous requests to an API is called **fetch**. Fetch is a method that takes an argument of the request url wrapped in a string.

```javascript
fetch("rails-api-endpoint")
```

The power of fetch is the asynchronicity. When the JavaScript program hits the fetch action it will run in the background allowing the program to continue running. What fetch provides as a placeholder is called a Promise. A **Promise** is a JavaScript class that is a proxy value for the eventual completion of an asynchronous action. A promise says, "Eventually this request will return a response. I promise."

Every request will receive a response. The response could be a success in which we would get back the expected JSON payload, or it could be a failure in which we would get an error code. Since a promise is a proxy value it can be in one of three states:

1. Pending - the action is currently happening
2. Fulfilled - the action was a success and we received the expected payload
3. Rejected - the action was a failure and we received an error

The fetch method is followed by additional methods that handle the various states of a promise. The method `.then()` is a higher-order function that is chained to the end of a fetch action. A series of `.then()` methods will handle the response then the payload. If the promise returns an error the method `.catch()` will invoke error handling functionality.

The most basic fetch request will follow this format:

```javascript
fetch("rails-api-endpoint")
  .then((response) => response.json())
  .then((payload) => console.log(payload))
  .catch((error) => console.log(error))
```

### Fetching Cat Data

The frontend is going to ask the Rails API for information, then Rails will use Active Record to get that information out of the database and hand it back to the frontend as JSON.

We want to make that process as simple and re-useable as possible, because we can be pretty sure our Cat Tinder app will get bigger and more complex in the future (because everyone will be using this app!).

There will be a series of fetch requests to match the functionality required in our application. To start, we are going to load up all the cats from the database and save them into state. This will take the place of our mockCats. Since we want to make this fetch call right away, we can use a React hook called `useEffect()` that will handle fetching all the cats. The hook will run automatically when the component loads to the browser.

There are two parts to the `useEffect()` hook method:

1. the action to be executed and
2. the dependency value.

In our case the action is a fetch to the endpoint that hold all the cats and the dependency value is an empty array.

The fetch request will be made to the URL that is running the Rails API. In this case, our Rails app is running on `localhost:3000`. We are making a request to the index route of our Rails app. Remembering our RESTful routes, we know that we need to make a request to a route called `'/cats'` to get all the cats.

Our fetch call will return a Promise. If the Promise is resolved successfully we will get back an array of cat objects. We can set this array in state and replace the mock cats with real cats from the database.

**/src/App.js**

```javascript
const App = () => {
  // remove the mock cats and start with an empty array
  const [cats, setCats] = useState([])

  useEffect(() => {
    readCat()
  }, [])

  const readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      .then((payload) => setCats(payload))
      .catch((error) => console.log(error))
  }
```

As long as we have set up the frontend scaffolding correctly, the cat index and the cat show page should be working. But now we are pulling information from the database rather than mock data.

---

[Back to Syllabus](../../README.md#bringing-it-together)
