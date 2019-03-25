# Getting Cats from the Database to the Frontend

Now, switching gears back over to our frontend, lets load our cats.

The frontend is going to ask the rails API for information, then rails will use ActiveRecord to get that information out of the database and hand it back to the frontend as json. We want to make that process as simple and re-useable as possible, because we can be pretty sure our cat tinder app will get bigger and more complex in the future (because we're going to be famous).

To do this, we are going to put all of our "calls" to the API in a new folder in our react app.

Add a new folder ``` src/api ```

Inside that folder, add a new file ``` index.js ```

Here is the code for index.js, read the code and comments.

```javascript
// the address of our rails backend, saved as a constant value, because we never want to accidently change it
const BASE = 'http://localhost:3000'

let getCats = function() {
  	// the function name getCats is intended to remind you of the restful rails route --> GET '/cats'.
	return fetch(BASE + '/cats') // this would be equivalent to going to localhost:3000/cats in your browser. Do that - - what do you see?
		.then((resp) => {
           	// resp will be whatever you saw on the page localhost:3000/cats, it is the result of our fetch call
			let json = resp.json() // we want to make sure what we have is just the json part of the response
			console.log(json);
			return json
		})
}

export  {
	getCats
}
```

We are using the javascript Fetch API as the intermediary who carries our request to the backend. Like a courier, we just have to supply fetch with an address (our BASE const).  

Notice that we have wrapped the fetch call in another function called getCats. This is to give us control over WHEN the call runs.

When we export something in React, we make it available for import (just like with all our components, the ```export default``` part)

So now, we can ```import``` our api call into any file we please. Lets do that:

First, add ``` import { getCats } from '../api' ``` to the imports in App.js

Then, add a new function to App.js:

#### in App.js
``` javascript
	constructor(props){
		super(props)
		this.state = {
			cats: []
		}
	}

	componentWillMount() {
		getCats()
		.then(APIcats => {
			this.setState({
				cats: APIcats
			})
		}
	}

```

What is this code doing? The big things to note are that we call getCats (which is a promise) and use the value returned from the promise (APIcats) to update state. ComponentWillMount is part of the React component lifecycle and always runs right before render. This means, that right before we
have to show information on a page, React is going to preemptively use the code in our api folder to ask for some information and use the result from the
database to set state.

Now we should be ready to get information from the backend. Start your Rails server and react server at the same time, make sure to put the rails server on port 3000

Fire up your React server if its not already, and let's see how we're doing.  Recall the wireframe we started out with?

![wireframe](https://s3.amazonaws.com/learn-site/curriculum/cat-tinder/cat-tinder-wireframe.png)

This is where we've ended up:

![cat tinder index](https://s3.amazonaws.com/learn-site/curriculum/cat-tinder/cat-tinder-index.png)

__Excellent__!
