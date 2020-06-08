# React Consuming External APIs Using Fetch

## Video: Fetch
[![YouTube](http://img.youtube.com/vi/Law40pSLeHM/0.jpg)](https://www.youtube.com/watch?v=Law40pSLeHM)

## Overview
- In modern web applications, communication between the frontend application and the backend server happens using JSON.
- APIs are packets full of raw data (JSON) meant to be consumed by other websites.
- To consume an API, a developer codes a fetch request to the API's url and parses through the data response (JSON) to return meaningful information to the user.
- Many companies make their APIs available to the public for free so that other developers can make use of the data a company has acquired.
- Using external APIs in your applications will expand functionality and increase user enjoyment.

## Learning Objectives
- Explore the variety of public APIs
- Understanding the function of an API key
- Understanding the process of making a fetch request to an API
- Exploring Reactstrap components

## Vocabulary
- API
- JSON
- endpoint
- API key
- fetch
- promise

## Additional Resources
- <a href="https://reactstrap.github.io/components/listgroup/" target="blank">Reactstrap</a>

## Set Up

#### Creating a new React app:
```
$ yarn create react-app news-articles
$ cd news-articles
$ yarn start
```

#### Adding Reactstrap
```
$ npm install --save bootstrap
$ npm install --save reactstrap react react-dom
```
- Import Bootstrap CSS in the src/index.js file `import 'bootstrap/dist/css/bootstrap.min.css'`
- Import needed components

## Access a Free API
- Google!
- Look for good documentation


## API Key
- Many APIs will use a special key to grant authorization
- This key should not be shared! It should not be pushed to GitHub
- Create a file called *.env* in the outermost level of the react app
- Save the API key using the format `REACT_APP_MY_KEY_NAME_HERE = "my-api-key"`
- `REACT_APP_` is the key phrase needed for React
- Add the *.env* file to the *.gitignore* file
```
# api keys
.env
```
- Call the api key in the appropriate component
```
let apiKey = process.env.REACT_APP_MY_KEY_NAME_HERE
```

## Fetch
Fetch is a JavaScript function that allows developers to make network requests.

The `fetch()` function takes one mandatory argument: the path to the resource you want to fetch.

Fetch returns a Promise. When the response from the network request comes back, the promise id fulfilled.

The response delivers the JSON payload to the application.


## Challenge
- Create a React application that shows the user their current location and IP address.
- Use the API and documentation [here:](https://ipapi.co/api/?shell#complete-location)

## Stretch Challenge
- Use the [NYTimes Developer](https://developer.nytimes.com/) API and docs to create a more complex application
- Safely save the API key
