# Getting Data from Backend to the Frontend

Now, switching gears back over to our frontend, let's look at how we consume data from an API in a React application.

The frontend is going to ask the rails API for information, then rails will use ActiveRecord to get that information out of the database and hand it back to the frontend as json, just like we've been doing in Postman.

## First CORS
We need to handle one more piece of setup to allow a request from one application to fetch data from a server running on a URL.  Browsers implement a security protocol called CORS.  Cross Origin Resource Scripting.  This helps protect users from cross-site scripting.  All of the configuration is in the Rails application.

From the terminal we install the 'rails-cors' gem:
```
$ bundle add rails-cors
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
