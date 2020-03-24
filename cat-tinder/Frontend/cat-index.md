# Cats Tinder Index Component

## Overview
- Start with the CatIndex page and create some fake data so that we can get the correct look of the page.

## Learning Objectives
- Creating mock JSON data for our cats
- Practicing TDD

## Additional Resources
- [Reactstrap](https://reactstrap.github.io/)

## CatIndex Tests

**src/pages/__tests__/CatIndex.js**

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from '../CatIndex'

Enzyme.configure({ adapter: new Adapter() })

it('CatIndex renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CatIndex />, div)
})
```

**src/pages/CatIndex.js**

```javascript
render(){
  return(
    <React.Fragment>
      <ListGroup>
        <ListGroupItemHeading>Cat One</ListGroupItemHeading>
        <ListGroupItemText>Cat Age - Cat Enjoys</ListGroupItemText>
       </ListGroup>
    </React.Fragment>
  )
}
```

Test should pass because we have a component that can be rendered. It imports React and has a render function, it does not yet show real content.

## Fake Cats
Let's add some fake (placeholder) cat data to play with. Later this information will come from the rails backend as a JSON payload, but for now let's just get something up that we can see and work with.

We want the fake data to be easy to remove when we are ready to connect the cat API. To keep the fake cats contained, create a new file called *cats.js*. Note the lowercase 'c' as this file is not a class Component.

**src/cats.js**
```javascript
const cats = [
  {
    id: 1,
    name: 'Morris',
    age: 2,
    enjoys: "Long walks on the beach."
  },
  {
    id: 2,
    name: 'Paws',
    age: 4,
    enjoys: "Snuggling by the fire."
  },
  {
    id: 3,
    name: 'Mr. Meowsalot',
    age: 12,
    enjoys: "Being in charge."
  }
]

export default cats
```

The fake cats variable can be passed into the state object in App.js.

```
import cats from './cats'

class App extends Component{
  constructor(){
    super()
    this.state = {
      allCats: cats
    }
  }
```

## Passing Props in the Router
We need to send this cats JSON array from state to the CatIndex component as props. To do this we need to update the router to allow us to pass props in the component.

```javascript
<Route exact path="/" render={ (props) => <CatIndex cats={ this.state.allCats } /> } />
```

This will pass the array of cat objects to the *CatIndex.js* component. Let's add some Reactstrap code and map over the array of objects.

**src/pages/CatIndex.js**

```javascript
{ this.props.cats.map((cat, index) => {
  return(
    <ListGroup key={ index }>
      <ListGroupItemHeading>{ cat.name }</ListGroupItemHeading>
      <ListGroupItemText>{ cat.age } - { cat.enjoys }</ListGroupItemText>
    </ListGroup>
  )
})}
```

## Finishing the Test
Now we get to test the information in our *CatIndex.js* component. This is a problem now that the *CatIndex.js* takes in props from *App.js* — how can we test that? Our *CatIndex.js* component requires that information in order to render.

We need our test to send some JSON data to *pages/CatIndex.js* the same way *App.js* is currently sending the cats JSON as props to *pages/CatIndex.js*. It is really convenient if our test uses the same fake data as we have in *App.js* state.

Below, you’ll notice that we’re using an import statement for a thing called mount from Enzyme. It will allow us to pass information to a component we are testing.

**src/pages/__tests__/CatIndex.js**

```javascript
import cats from '../../cats'

Enzyme.configure({ adapter: new Adapter() })

it('CatIndex renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CatIndex cats={ cats }/>, div)
})

it('Renders the cats', ()=>{
  const component = mount(<Cats cats={cats} />)
  const headings = component.find('h4 > .cat-name')
  expect(headings.length).toBe(3)
})
```

The tests should now pass.

## Challenge
- Add CatIndex functionality
- Add tests for CatIndex
- Add CatShow functionality
- Add tests for CatShow


[Go to next lesson: Cat Tinder Create New Cat Component](./cat-create.md)

[Back to Cat Tinder Testing With Jest and Enzyme](./jest-enzyme.md)

[Back to Syllabus](../../README.md)
