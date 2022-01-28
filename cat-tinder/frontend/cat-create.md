# Cat Tinder Create Functionality

#### Overview
There are four general actions a developer will consider when building an application. They are summed up in a delightful acronym: CRUD. This section will focus on the "create" functionality of Cat Tinder adding the ability to navigate to a page that holds a form for adding a new cat. Because we are still working with mock data the goal will be to put the cat information in the correct data structure and ensure it can be logged in the correct component.

#### Previous Lecture (1 hour 1 min)
[![YouTube](http://img.youtube.com/vi/1A4QBu636VA/0.jpg)](https://www.youtube.com/watch?v=1A4QBu636VA)

#### Learning Objectives
- can display a form with multiple inputs
- can package data into appropriate the format for a create action
- can use functional props to pass data to a React component higher in the state tree

#### Additional Resources
- [Reactstrap Form Components](https://reactstrap.github.io/components/form/)
- [React-router Redirect](https://reactrouter.com/web/api/Redirect)

---
### Cat Create Form
To create a new cat, the first step is creating a form. This will allow a place for our user to add to the list of cat friends in our app. We can utilize Reactstap to help with form styling.

Reactstrap has an element called `<FormGroup>`. Nested in each `<FormGroup>` tag there will be a label and an input. Each input tag will take two attributes. The first is `type` that describes what information can be entered into the field. The second is `name` that matches the appropriate cat attribute. In this example the name of the input is "name" in reference to our cat name attribute.

Each cat attribute will have its own `<FormGroup>` inside of a single `<Form>` tag.

**src/pages/CatNew.js**
```javascript
<Form>
  <FormGroup>
    <Label for="name">Name</Label>
    <Input
      type="text"
      name="name"
    />
  </FormGroup>
</Form>
```

Complete the process by importing the Reactstrap components.

**src/pages/CatNew.js**
```javascript
import {
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
```

### Cats in State
When we create new cats we want to collect the user input and transmit the data as a set. We can accomplish this by switching our inputs to be “controlled components,” meaning watched by state. Or, in other words, add a `value`, and an `onChange` attribute to the inputs. Then we can manage the value of the inputs in the components’ internal state until the form is submitted.

By adding a form object to state we can reference `this.state.form` and have a complete cat object that can be passed to `App.js` as a single unit rather than as individual values.

**src/pages/CatNew.js**
```javascript
constructor(props){
  super(props)
  this.state = {
    newCat: {
      name: "",
      age: "",
      enjoys: "",
      image: ""
    }
  }
}
```

To set the inputs to state we need a `handleChange` method to be called on every input.

**src/pages/CatNew.js**
```javascript
handleChange = (e) => {
  // destructuring form out of state
  let { newCat } = this.state
  newCat[e.target.name] = e.target.value
  // setting state to the updated form content
  this.setState({newCat: newCat})
}
```

Now we can update each input with an `onChange` attribute that calls the `handleChange` method and a `value` attribute that reflects the current status of state.

**src/pages/CatNew.js**
```javascript
<FormGroup>
  <Label>Name</Label>
  <Input
    type="text"
    name="name"
    onChange={this.handleChange}
    value={this.state.newCat.name}
  />
</FormGroup>
```

### Passing Cats to App.js
Now that we have all the content from the form updated into state, we need to get the information back to `App.js`. This means we need to pass information "up the river" from child component to parent. To accomplish this we need to create a method in `App.js` that gets called when we submit the form.

During our scaffolding phase, the goal here is to see the new cat logged in `App.js`. Eventually this method will be refactored to include an interaction with the database.

**src/App.js**
```javascript
createCat = (cat) => {
  console.log(cat)
}
```

This method needs to be passed to our CatNew component. This will require a refactor of the basic "/catnew" route into a dynamic route that accepts props.

**src/App.js**
```javascript
<Route
  path="/catnew"
  render={(props) => <CatNew createCat={this.createCat} />}
/>
```

Once the method is passed down to the CatNew component, we can wrap it in a method that will pass our form object.

**src/pages/CatNew.js**
```javascript
handleSubmit = () => {
  this.props.createCat(this.state.newCat)
}
```

We need to call the method `onSubmit`. To accomplish this, we can add a button from Reactstrap. (Don't forget to add the Reactstrap import!)

**src/pages/CatNew.js**
```javascript
<Button
  name="submit"
  onClick={this.handleSubmit}
>
  Create a New Profile
</Button>
```

Now when we add information to the form, we can see the object logged in console.

### Finishing Touches
Here is a good opportunity to start thinking a bit about user flow. Once a cat is entered, it would be nice to redirect to see the success of the form submission. We can use a few handy tricks along with React-router functionality to create a redirect.  

**src/pages/CatNew.js**
```javascript
constructor(props){
  super(props)
  this.state = {
    newCat: {
      name: "",
      age: "",
      enjoys: "",
      image: ""
    },
    submitted: false
  }
}

handleSubmit = () => {
  this.props.createCat(this.state.newCat)
  this.setState({submitted: true})
}
```

By adding a success attribute to state we can control when the redirect happens. When state is updated we can use conditional rendering to pass a [React-router redirect component](https://reactrouter.com/web/api/Redirect) that renders a new page.

**src/pages/CatNew.js**
```javascript
// react-router import
import { Redirect } from 'react-router-dom'

// JavaScript code at the bottom of the JSX that will redirect when success is true
{this.state.submitted && <Redirect to="/catindex" />}
```

---

## Challenge: Cat Create
As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.

- As a user, I can fill out a form to add a new cat.
- As a developer, I can store the cat object in state.
- As a developer, I can pass the cat object to App.js on submit and see the cat object logged in the console.
- As a user, I can be routed to the index page after I submit the new cat form.
- As a developer, I have test coverage on my new page.

**NOTE:** We are still only interacting with mock data so we will not see a new cat added to the collection of cats.

---
[Back to Syllabus](../../README.md#cat-tinder-frontend)
