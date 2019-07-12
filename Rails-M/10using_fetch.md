# Getting Data from Backend to the Frontend

Now, switching gears back over to our frontend, let's look at how we consume data from an API in a React application.

The frontend is going to ask the rails API for information, then rails will use ActiveRecord to get that information out of the database and hand it back to the frontend as json, just like we've been doing in Postman.

## First CORS
We need to handle one more piece of setup to allow a request from one application to fetch data from a server running on a URL.  Browsers implement a security protocol called CORS.  Cross Origin Resource Scripting.  This helps protect users from cross-site scripting.  All of the configuration is in the Rails application.

From the terminal we install the 'rails-cors' gem:
```
$ bundle add rack-cors
```

Then we add this file to allow API connections:

### /app/config/initializers/cors.rb
```ruby
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'  # <- change this to allow requests from any domain while in development.

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```


## Consuming an API from React

Next, we'll consume our API from React.  This example assumes a running dev environment on Cloud 9 with a '/spirit_animals' end point that returns a list of spirit animals.  Note that your IP address will be different.

First we can run ```create-react-app``` to setup a new app, and then we'll just work in App.js to demo how fetch works:

#### /src/App.js

```javascript
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      spiritAnimals: [],
      error: null,
    }
    this.getSpiritAnimals()
  }

  getSpiritAnimals = () => {
    fetch("http://<your cloud 9 IP address or localhost>:8080/spirit_animals")
    .then((resp)=>{
      return resp.json()
    })
    .then((animals)=>{
      this.setState({ spiritAnimals: animals })
    })
    .catch((error)=>{
      this.setState({ error: `Sorry, there was a problem.  ${error.message}`})
    })
  }

  render(){
    const { error, spiritAnimals } = this.state
    return (
      <div className="App">
        <h1>The Spirit Animals</h1>
        {error &&
          <div>
            <bold>{error}</bold>
          </div>
        }
        <ul>
        {spiritAnimals.map((animal, index)=>{
          return(<li key={index}>{animal.name}</li>)
        })}
        </ul>
      </div>
    );
  }
}

export default App;
```


## About fetch
Fetch is promised based, which makes sense when you think about what is actually happening with it.  It is fetching data from the server, and that takes some time to go round trip.  While that request is out, the user's browser is free to do whatever else it needs, and when the data is returned, the promise is resolved.

Let's look at each part of the fetch:

```javascript
  fetch("http://<your cloud 9 IP address or localhost>:8080/spirit_animals")
```
This is the part that sends out the actual request.  The response will be a promise that will eventually resolve with a response object, which we handle next:

```javascript
  .then((resp)=>{
    return resp.json()
  })
```

Here we handle the response object, which has several functions available on it that themselves return promises.  There are many great resources out there talking about promises, like [this one from Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).  You may want to read up on all of the other methods available on a promise.

With the json response from our request, we're ready to update state and rerender our component.  This is one way:

```javascript
    .then((animals)=>{
      this.setState({ spiritAnimals: animals })
    })
```

Finally, we want to make sure and handle any errors in the transport of our fetch request.  We can do that with a catch section.  This will be called when things go wrong:

```javascript
    .catch((error)=>{
      this.setState({ error: `Sorry, there was a problem.  ${error.message}`})
    })
```

With the fetch in place, our component is able to recall information from our webserver on page load, and display it to the user.

## About the other verbs
We just looked at a GET request.  You may be wondering about the other CRUD verbs like POST, PUT/PATCH, and DELETE.  Fetch can handle those too, and we'll be taking a closer look at them in upcomming projects.  If you are curios now, check the [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for all the details.
