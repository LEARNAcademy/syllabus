import React from 'react';
import {
  Alert,
  Card,
  Form,
  Jumbotron,
  Button,
} from 'react-bootstrap'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: [], // Keeps track of our list of recipes
      searchValue: '', // Its a controlled form input
      error: null // If we get an error from the API request, it gets put here
    }
  }

  componentDidMount = () =>{
    this.getRecipes() //Kicks off initial list of recipes
  }

  search = ()=>{
    this.getRecipes(this.state.searchValue) // When a user clicks 'search', re-send the request to the api, with search values
  }

  getRecipes = (q)=>{ //Method to query the API
    this.setState({ recipes: [] }) //Clears the recipe list
    const apiKey='a6894f29755de2438c2b9fb553b2931d'
    var searchUrl = `https://www.food2fork.com/api/search?key=${apiKey}`
    if(q){ //if user has entered a search value, we add it to the request URL
      searchUrl = `${searchUrl}&q=${q}`
    }
    fetch(searchUrl)  //Fetch returns a promise
    .then((resp)=> {
      if(resp.status !== 200){ throw({message: "Could not perform search. Please try again."}) }
      return resp.json() //We need to grab the JSON from the response
    })
    .then( (payload) => {
      const{ recipes } = payload
      this.setState({recipes}) //Finally, we can add the found recipes to our list, triggering a re-render
    })
    .catch((error) => this.setState({error}))
  }
  render(){
    return (
      <div className="App">
        <Jumbotron>
          <div className="d-flex justify-content-center">
            <div className='col-sm-5'>
              <h1>What's for Dinner?</h1>
              <p>
                Use the search below to help you with dinner ideas based on what you already have in the kitchen.  Just enter a few ingredients, and get inspired!
              </p>
              <hr/>
              <h5>Ingredients</h5>
              <div className='form-inline'>
                <Form.Control
                  type="text"
                  placeholder="comman, separated, list"
                  onChange={(e)=> this.setState({searchValue: e.target.value})}
                  value={this.state.searchValue}
                />
                <Button onClick={this.search} variant="outline-primary">Search</Button>
              </div>
            </div>
          </div>

        </Jumbotron>
        <div className="d-flex justify-content-center">
          <div className='col-sm-5'>
            {this.state.error &&
              <Alert variant="danger">{this.state.error.message}</Alert>
            }
            {this.state.recipes.map((recipe, index)=>{
              return(
                <Card key={index}>
                  <Card.Img variant="top" src={recipe.image_url} />
                  <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <a
                      href={recipe.source_url}
                      className='btn btn-outline-primary'
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {recipe.publisher}
                    </a>
                  </Card.Body>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
