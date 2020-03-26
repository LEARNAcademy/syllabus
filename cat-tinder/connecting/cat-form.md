# Cat Tinder Creating Cats

## Overview
- We already have a `getCats()` fetch call, now we need to make a new method to create a new cat when a user submits the form.

## Learning Objectives
- Sending a new cat entry from the frontend React form to the database
- Redirecting to the Cat Index after the user submits a New Cat

## Vocabulary
- post
- HTTP request
- fetch

## POSTing Cats
The `createCat()` fetch call is going to be a little bit different than `getCats()`, because creating something in the Rails app requires a POST type HTTP request (think back to your rails routes).

A POST type request means that we are "posting" or sending information along with the request. Information that must be handled. In this case, by specifying the HTTP verb `POST`, attaching some information, and directing it to the rails "/cats" route will mean that the attached information is used to create a new cat instance in the database.

**src/App.js**
```javascript
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      // empty array to hold the cats coming from the backend
      cats: []
    }
    this.getCats()
  }
  componentDidMount(){
  	this.getCats()
  }
  //... The get cats method is here

  createCat = (newcat) => {
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
    .then((response) => {
      // if the response is good call the getCats method
      if(response.ok){
        return this.getCats()
      }
    })
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            // pass the createCat method as props to NewCat
            <Route exact path="/newcat" render={ (props) => <NewCat handleSubmit={ this.createCat } /> }
            />
            //
            <Route exact path="/catindex" render={ (props) => <CatIndex cats={ this.state.cats } /> }
            />
          </Switch>
        </Router>
      </>
}
```

## Call and Redirect
The last thing to do is call the `createCat()` method being passed as props to the *NewCat.js*, and add the redirect element.

**pages/NewCat.js**
```javascript
<Link to="/catindex">
  <Button
    name="submit"
    id="submit"
    onClick={ this.handleSubmit }
  >
    Create a New Profile
  </Button>
  { this.state.success && <Redirect to="./catindex"/> }
</Link>
```
Notice the `this.state.success` statement. This sets up conditional rendering. If `this.state.success` evaluates to "true" the redirect will run. As long as it evaluates to "false", the program will act as if the redirect doesn't even exist.

You will need to create a "success" value in state to finish this functionality.

**src/pages/NewCat.js**
```javascript
class NewCat extends Component{
  constructor(props){
    super(props)
    // small amount of state to manage the form
    this.state = {
      // success value defaulting to false to manage the redirect functionality
      success: false,
      form:{
        name: "",
        age: "",
        enjoys: ""
      }
    }
  }

  handleSubmit = (event) => {
    // keeps React from refreshing the page unnecessarily
    event.preventDefault()
    // a function call being passed from App.js
    this.props.handleSubmit(this.state.form)
    this.setState({
      success: true
    })
  }

  handleChange = (event) => {
    // destructuring form out of state
    let { form } = this.state
    form[event.target.name] = event.target.value
    // setting state to the updated form
    this.setState({ form: form })
  }
```

## Stretch Challenges
- As a user, when I am on the cat index page, I can click on a cat and see its profile page.
- As a user, when viewing a cat's profile page, I can edit the cat's info.
- As a user, I can delete a cat.

[Back to Cat Tinder Fetching Cats](./fetch.md)

[Back to Syllabus](../../README.md)
