# Getting Cats from the Database to the Frontend

Now, switching gears back over to our frontend, let's load our cats.

The frontend is going to ask the rails API for information, then rails will use ActiveRecord to get that information out of the database and hand it back to the frontend as json. We want to make that process as simple and re-useable as possible, because we can be pretty sure our cat tinder app will get bigger and more complex in the future (because we're going to be famous).


#### Cloud 9 users
Be sure and review the [instructions](../../Rails-M/additional-topics/07rails_cloud9_access.md) on exposing a Cloud9 app to the world like we did for Wildlife Tracker and Postman.

## Using Fetch to get our data

```/src/App.js```

```javascript
class App extends Component {
    constructor(props){
        super(props)
            this.state = {
                cats: [], //We start with an empty array, so the component can finish rendering
            }
      this.getCats() // Call our fetch method when the component loads for the first time
    }
    
    componentnWillMount(){
    	this.getCats();
    }

    getCats = ()=>{
      fetch("http://localhost:3000/cats") //Fetch returns a promise
      .then((response)=>{
        if(response.status === 200){ //Make sure we get a successfull response back
          return(response.json()) //We need to convert the response to json.  This also returns a promise
        }
      })
      .then((catsArray)=>{
        this.setState({cats: catsArray}) //Finally, we can assign the cats to state, and they will render.
      })
    }
    
    ...
  }
```


What is this code doing? The big things to note are that we call fetch (which is a promise) and use the value returned from the promise to update state. ComponentWillMount() is part of the React component lifecycle and always runs right before render. This means, that right before we
have to show information on a page, React is going to preemptively use the code in our API folder to ask for some information and use the result from the
database to set state.

Now we should be ready to get information from the backend. Start your Rails server and react server at the same time, make sure to put the rails server on port 3000, or if you are using Cloud9 on port 8080, to start your rails app run  `rails s -b 0.0.0.0`

Fire up your React server if its not already, and let's see how we're doing.  Recall the wireframe we started out with?

![wireframe](https://s3.amazonaws.com/learn-site/curriculum/cat-tinder/cat-tinder-wireframe.png)

This is where we've ended up:

![cat tinder index](https://s3.amazonaws.com/learn-site/curriculum/cat-tinder/cat-tinder-index.png)

__Excellent__!

#### Where to go from here

[Go to Cat Tinder: New Cat API Call](./09cat_tinder_new_cat_form.md)

[Back to Cat Tinder: CORS](../Backend/05cat_tinder_CORS.md)

[Back to Syllabus](../../README.md)
