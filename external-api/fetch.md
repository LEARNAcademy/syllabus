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
- Understanding the process of making a fetch request to an API

## Vocabulary
- API
- JSON
- endpoint
- fetch
- Promise

## Set Up

#### Creating a new React app:
```
$ yarn create react-app my-app
$ cd my-app
$ yarn start
```

## Access a Free API
- Google!
- Look for good documentation



## Fetch and Promises
Fetch is a JavaScript function that allows developers to make asynchronous network requests.

The `fetch()` function takes one mandatory argument: the path to the resource you want to fetch.

Fetch returns a Promise. A Promise is a JavaScript object. Promises represent the eventual completion or failure of an asynchronous operation and either the payload or the error.

When the response from the network request comes back, the promise is fulfilled.

If the response is successful, a JSON payload is delivered to the application.

```javascript
fetch("https://api-url-here.com")
.then(response => response.json())
.then(payload => this.setState(payload))
.catch(error => console.log(error))
```


## Challenge
- Create a React application that shows the user their current location and IP address
- Use [ this ](https://ipapi.co/api/?shell#location-of-clients-ip) API and documentation

## Stretch Challenge
- Use an external API and docs to create an application of your choice
- Here is the [ Nasa API ](https://api.nasa.gov/)

---
[Back to Syllabus](../README.md#unit-six-ruby-on-rails)
