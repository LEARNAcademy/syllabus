# Consuming External APIs Using Fetch

#### Overview

In modern web applications, communication between the frontend application and the backend server happens using JSON. APIs are packets full of raw data (JSON) meant to be consumed by other websites. To consume an external API, a developer creates a request to the API's url and parses through the data response (JSON) to return meaningful information to the user. Using external APIs in your applications will expand functionality and increase user enjoyment.

#### Previous Lecture (1 hour 35 min)

[![YouTube](http://img.youtube.com/vi/jAZio1Juxo0/0.jpg)](https://www.youtube.com/watch?v=jAZio1Juxo0)

#### Learning Objectives

- can define fetch
- can apply correct syntax to execute a fetch call to an external API
- can apply intermittent steps to scaffold an application
- can access appropriate values from a JSON data set
- can conditionally render markup to facilitate a response

#### Vocabulary

- API
- external API
- endpoint
- JSON
- single threaded
- asynchronous requests
- fetch
- Promise

#### Additional Resources

- [JavaScript Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Meowfacts API](https://github.com/wh-iterabb-it/meowfacts)
- [IP Address API](https://ipapi.co/api/?shell#location-of-clients-ip)

#### Troubleshooting Tips

- Is there an error on the request or on the response?

---

### APIs

In the simplest terms, content that is on the internet breaks down into two categories. The first category is websites that are designed to have interactions with users. This is what we typically think of when browsing websites or interacting with web applications. The second category is websites that provide data. Websites that provide data are not typically accessed directly by a user but rather the data is used to support a user-facing site.

Think about going to a website like Yelp and seeing restaurants near you plotted on a map inset. That functionality requires a lot of data. Yelp needs the appropriate locations on the map and a lot of restaurants listings in order to create their user experience. To access this data the Yelp user-facing website will make requests to other websites that contain raw data of restaurant listings and map coordinates. Yelp can then display the results to the user. A website that contains data that can be accessed by other websites is called an **API**.

From a full-stack developer's standpoint, APIs come in two flavors: APIs that store information specifically for a single user-facing application and APIs that have been made open for general use. An API that is designed for one specific application is often thought of as the "backend" of the application. In the Yelp example, the "backend" of the application might be a database full of restaurant listings. But Yelp is likely not creating their own map service when other companies like Google have already built that functionality. Yelp could use the data from their own backend application to get all the appropriate restaurants and then use Google's API to create the map and plot the restaurant locations. In this case Google's API is an external API. An **external API** is a website that exposes data to third-party users so that functionality can be more easily accessed. The user-facing Yelp website would make a request to their own internal API as well as to the external Google API.

### External APIs

Allowing data to be available for use by other developers creates integrated applications with quick access to complex functionality. For example, many apps need to integrate information like weather data, map services, public transportation information, and prices of various goods and services. It would be time consuming and repetitive to create those resources for each individual application. Luckily it is a common practice to make APIs available for others to use.

### Handling Data Requests

External APIs allow developers to quickly incorporate data into an application. In the following example we will use a free API with open access. [The API is called Meowfacts and returns cat facts](https://github.com/wh-iterabb-it/meowfacts).

First we have to read the documentation and be sure to understand what endpoints are available. In this particular API the base url is `https://meowfacts.herokuapp.com/` which will return one cat fact. By entering this url into the browser we can see the data that gets returned.

```javascript
{"data":["Jaguars are the only big cats that don't roar."]}
```

There is an option to add a param to the url that will determine how many cat facts will be returned. `https://meowfacts.herokuapp.com/?count=3`

```javascript
{"data":["Cats, especially older cats, do get cancer. Many times this disease can be treated successfully.","Adult cats only meow to communicate with humans.","Retractable claws are a physical phenomenon that sets cats apart from the rest of the animal kingdom. In the cat family, only cheetahs cannot retract their claws."]}
```

Now that we can see the outcome of our request we can build the user view.

### Cat Facts Application

First, we will build out the basic functionality of the application. At this stage, the app will include a couple of console logs. One to ensure we can allow the user to select the number of facts. The second to make sure the button is calling the function that will eventually hold a [fetch](cat-tinder/connecting/fetch-read.md) request.

```javascript
import React, { useState } from "react"

const App = () => {
  const [catFacts, setCatFacts] = useState(null)
  const [numberOfFacts, setNumberOfFacts] = useState(1)

  const requestCatFacts = () => {
    // fetch will go here
    console.log("the button is working")
  }

  console.log(numberOfFacts)
  return (
    <>
      <h1>Cat Facts</h1>
      <label>Enter a number:</label>
      <input
        type="number"
        min="1"
        max="50"
        onChange={(e) => setNumberOfFacts(e.target.value)}
      />
      <div>
        <button onClick={requestCatFacts}>Click here for cat facts</button>
      </div>
    </>
  )
}

export default App
```

After ensuring the application is operating correctly, we can add a fetch request to the API. Since we want the user to be able to determine the number of facts, the request url will be wrapped in string interpolation backticks to pass in a variable from state. The `console.log` will now show the result of the fetch request.

```javascript
import React, { useState } from "react"

const App = () => {
  const [catFacts, setCatFacts] = useState(null)
  const [numberOfFacts, setNumberOfFacts] = useState(1)

  const requestCatFacts = () => {
    fetch(`https://meowfacts.herokuapp.com/?count=${numberOfFacts}`)
      .then((response) => response.json())
      .then((payload) => setCatFacts(payload))
      .catch((error) => console.log(error))
  }

  console.log(catFacts)
  return (
    <>
      <h1>Cat Facts</h1>
      <label>Enter a number:</label>
      <input
        type="number"
        min="1"
        max="50"
        onChange={(e) => setNumberOfFacts(e.target.value)}
      />
      <div>
        <button onClick={requestCatFacts}>Click here for cat facts</button>
      </div>
    </>
  )
}

export default App
```

The last step is to display the data that is returned from the API. Since we are using an external API, we don't have control over the structure of the data that is returned. We have to parse into the data structure to get to the content we want.

We only want the tags used to display cat facts to be visible once there are cat facts to show. Since the default value of the state variable `catFacts` is null we can use conditional rendering in the tags. If the value is null all the code inside the curly braces will be ignored. When the fetch request returns data and updates the state variable the tags will render to the page.

```javascript
import React, { useState } from "react"

const App = () => {
  const [catFacts, setCatFacts] = useState(null)
  const [numberOfFacts, setNumberOfFacts] = useState(1)

  const requestCatFacts = () => {
    fetch(`https://meowfacts.herokuapp.com/?count=${numberOfFacts}`)
      .then((response) => response.json())
      .then((payload) => setCatFacts(payload))
      .catch((error) => console.log(error))
  }

  return (
    <>
      <h1>Cat Facts</h1>
      <label>Enter a number:</label>
      <input
        type="number"
        min="1"
        max="50"
        onChange={(e) => setNumberOfFacts(e.target.value)}
      />
      <div>
        <button onClick={requestCatFacts}>Click here for cat facts</button>
      </div>
      <ul>
        {catFacts?.data.map((fact, index) => {
          return <li key={index}>{fact}</li>
        })}
      </ul>
    </>
  )
}

export default App
```

Now we have a user-facing application that is making a request to an external API and displaying the resulting data.

---

### 💻 Challenge: IP Address

Create a React application that shows the user their current location and IP address using the IP API.

### 📚 User Stories

- As a user, I can see a landing page with a header.
- As a user, I can see a button to click to retrieve my IP address and location.
- As a user, when I click the button I can see my IP address and location render on the page.

---

[Back to Syllabus](../README.md#unit-ten-capstone-project-mvp)
