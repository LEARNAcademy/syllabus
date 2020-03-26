# Cat Tinder Creating Cats

We already have a getCats call, now we need to make a new method to create a new cat when a user submits the form.

The createCat fetch call is going to be a little bit different than getCats, because creating something in the rails requires a POST type HTTP request (think back to your rails routes).

A POST type request means that we are "posting" or sending information along with the request. Information that must be handled. In this case, by specifying the HTTP verb `POST`, attaching some information, and directing it to the rails "/cats" route will mean that the attached information is used to create a new cat instance in the database.

Here is the code:

#### src/App.js
```javascript
class App extends Component {
    constructor(props){
        super(props)
            this.state = {
                dogs: [],
            }
      this.getDogs()
    }

    //... The get cats method is also here

    createCat = (cat)=>{
      return fetch('http://localhost:3000/cats', {
      	body: JSON.stringify(cat),  // <- we need to stringify the json for fetch
      	headers: {  // <- We specify that we're sending JSON, and expect JSON back
      		'Content-Type': 'application/json'
      	},
      	method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
      })
      .then((response) => {
        if(response.ok){
          return this.getCats()
        }
      })
    }

    render() {
      return (
        <Router>
            <Header />
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/cats/" render={(props) => <Cats cats={this.state.cats}/> } />

			<!-- Notice that we pass the onSubmit method down to the NewCat component -->
                        <Route exact path="/newcat" render={(props) => < NewCat onSubmit={this.createCat} />} />
                    </Switch>
                </div>
        </Router>
      );
    }
}
```
Read that through a few times to see if you can get the gist of what's going on.

## Passing the New Cat information


Last thing to do is call the createCat() method when from the NewCat component, and add the redirect element in NewCat.js. You can do this a variety of ways, but here is one example:

#### pages/NewCat.js
```
// ... the NewCat form ...
		</form>
	{this.state.success &&
		<Redirect to="/cats" />
	}
</div>
```
Notice the ```this.props.success``` statement. If this evaluates to "true" the redirect will run. As long as it evaluates to "false", the program will act as if the redirect doesn't even exist. You will need to pass a "success" value in props to finish this functionality.

Here is an almost complete NewCat.js as an example:

```javascript
class NewCat extends Component {
  constructor(props){
    super(props)
    this.state = {
      success: false,
      form: {
          name: '',
          age: '',
          enjoys: ''
      },
    }
  }

  handleChange = (e) => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.form)
    .then(()=>{
      this.setState({success: true}) //This triggers the redirect
    })
  }

  render() {
      return (
        <div>

	    {*/ FORM INPUTS ARE HERE /*}

            <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>

            { this.state.success && <Redirect to="/cats/" /> }
        </div>

      )
    }
}
```

## Stretch Challenges
- As a user, when I am on the cat index page, I can click on a cat and see its profile page.
- As a user, when viewing a cat's profile page, I can edit the cat's info.
- As a user, I can delete a cat.

[Back to Cat Tinder Fetching Cats](./fetch.md)

[Back to Syllabus](../../README.md)
