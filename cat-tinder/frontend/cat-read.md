# Cat Tinder Read Functionality

## Overview
- Adding the CRUD "read" functionality of index and show to the frontend of Cat Tinder
- Creating the ability to navigate between the home page, index page, and show page
- Utilizing match params to access an object id

## Learning Objectives
- Applying the concept of RESTful routes to a React application
- Analyzing the difference between static routes and dynamic routes
- Following the thread of data flow through the index and show pages in a React application

## Additional Resources
- [ Reactstrap Docs ](https://reactstrap.github.io/)
- [ React-router Match Params ](https://scotch.io/courses/using-react-router-4/route-params)
- [ React-router NavLink Docs ](https://reactrouter.com/web/api/NavLink)
- [ JavaScript .find() ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

## Cat Index Component Routing
Now that we have the basic file structure of our Cat Tinder application, we need to start passing around data. In our application, `App.js` is in charge of all of the routes. With that, it makes sense to have `App.js` decide which data needs to be passed to the component associated with any given route.

Right now we have a JSON array of mockCats set to state in `App.js` and we need to pass that data to the index component as props so our users can see all the options for new cat friends.

Currently this is our index route:

**src/App.js**
```javascript
<Route path="/catindex" component={CatIndex} />
```

We know this route works since we can manually change the url in the browser and see our index page. But there are no cats. We need to pass our cat state object to the CatIndex component as props. But how?

We can refactor our static route into a dynamic route that will allow us to pass props to the CatIndex component while still allowing Router to determine when CatIndex should be visible to the user.

**src/App.js**
```javascript
<Route path="/catindex" render={(props) => <CatIndex cats={this.state.cats} />} />
```

## Cat Index Component
With the new dynamic route, we have all the cats available in CatIndex as `this.props.cats`. To display the cats to the user, we can map over the array and use dot notation to access the name of each cat.

Here is an opportunity to add [ Reactstrap ](https://reactstrap.github.io/) to our application to make our list of cat names look a little better.

After looking through the Reactstap documentation, we can add the necessary imports.

**src/pages/CatIndex.js**
```javascript
import { Card, CardTitle, Col } from 'reactstrap'
```

And now we can incorporate the Reactstrap components into our mapped array and see a list of all our cats.

**src/pages/CatIndex.js**
```javascript
<h3>Meet the Cats!</h3>
<br />
  <Col sm="6">
    {this.props.cats.map(cat => {
      return (
        <Card body key={cat.id}>
          <CardTitle>
            <h4>{cat.name}</h4>
          </CardTitle>
        </Card>
      )
    })}
  </Col>
```

## Cat Show Component Routing
The next step is being able to select one cat and see all the information associated with that particular cat. This will require refactoring our show route in `App.js` just like we did for the index route. But we have to go a step further since show routes require an id param. We need to target the id of the cat we want to view.

The [ React-router ](https://scotch.io/courses/using-react-router-4/route-params) library offers us a helpful set of methods that allows us to collect information from the param of a route and save that information as a variable.

```javascript
let id = props.match.params.id
```

Now that we have the id saved as a variable, we can use [ JavaScript's .find() ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method to return the cat object.
```javascript
let id = props.match.params.id
let cat = this.state.cats.find(cat => cat.id === +id)
```

Wrapping this functionality into the show route will let us have access to the cat object by id and pass only the one cat to the CatShow component.

```javascript
<Route path="/catshow/:id" render={(props) => {
  let id = props.match.params.id
  let cat = this.state.cats.find(cat => cat.id === +id)
  return <CatShow cat={cat} />
}} />
```

Now we can console.log the variable `cat` and see the single cat object.

**src/pages/CatShow.js**
```javascript
render(){
  console.log(this.props.cat)
  return(
    <>
      <h3>One Cat</h3>
    </>
  )
}
```

## Cat Show Component
Next we can add Reactstrap and the proper imports to create a nice page for each cat.

**src/pages/CatShow.js**
```javascript
<Col sm="6">
  <Card body>
    <CardTitle>Hi, my name is {this.props.cat.name}!</CardTitle>
    <CardText>I am {this.props.cat.age} years old. I enjoy  {this.props.cat.enjoys}.</CardText>
  </Card>
</Col>
```

## Connecting Cat Index and Show
Now that our pages are working we need to create the flow that will allow our users to navigate between pages. We can do this by making our cat name into links that will navigate to the show page.

We already have a route for the show page, we just need to add the appropriate link. We can use [ NavLink from React-router ](https://reactrouter.com/web/api/NavLink) to turn the cat names into links connected to that particular cat id.

```javascript
<NavLink to={`/catshow/${cat.id}`}>
  {cat.name}
</NavLink>
```

The last part is importing the NavLink to the CatIndex component.

```javascript
import { NavLink } from 'react-router-dom'
```

---
## Challenge: Cat Index and Show
As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.

- As a developer, I can pass the cat mock data in state to my index component
- As a user, I can see a page that lists of all the cat names
- As a developer, I can refactor the show route to pass the param of id for one cat
- As a user, I can see a page featuring all the information for one cat
- As a user, I can click on a cat name and be taken to a page that shows me all the information about that cat

---
[Back to Syllabus](../../README.md#cat-tinder-frontend)
