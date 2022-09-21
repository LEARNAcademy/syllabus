# Cat Tinder Update Functionality

#### Overview

There are four general actions a developer will consider when building an application. They are summed up in a delightful acronym: CRUD. This section will focus on the "update" functionality of Cat Tinder adding the ability to navigate to a page that holds a form for updating an existing cat. Because we are still working with mock data the goal will be to put the cat information in the correct data structure and ensure it can be logged in the correct component.

#### Learning Objectives

- can display a form with multiple inputs with pre-populated data
- can package data into appropriate the appropriate format for an update action

#### Additional Resources

- [Reactstrap Form Components](https://reactstrap.github.io/components/form/)

---

### Cat Edit Form

The initial setup for the CatEdit component will look a lot like the form we created in the [CatNew](./cat-create.md) component. **Remember**, we are just using mock data so we won't actually see an update taking place.

**src/pages/CatEdit.js**

```javascript
<Form>
  <FormGroup>
    <Label for="name">Name</Label>
    <Input type="text" name="name" />
  </FormGroup>
  <FormGroup>
    <Label for="age">Age</Label>
    <Input type="number" name="age" />
  </FormGroup>
  <FormGroup>
    <Label for="enjoys">Enjoys</Label>
    <Input type="text" name="enjoys" />
  </FormGroup>
  <FormGroup>
    <Label for="image">Image URL</Label>
    <Input type="text" name="image" />
  </FormGroup>
</Form>
```

### Cats in State

The edit form component will hold a small amount of state to collect the user input and store it in a single object before passing the object to `App.js`. This will allow an `onChange` method to be passed to each input and a `value` attribute to reflect the current status in state.

**src/pages/CatEdit.js**

```javascript
const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams()
  let currentCat = cats?.find((cat) => cat.id === +id)

  const [editCat, setEditCat] = useState({
    name: currentCat.name,
    age: currentCat.age,
    enjoys: currentCat.enjoys,
    image: currentCat.image
  })
  const handleChange = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value })
  }
```

### Passing Cats to App.js

Now that we have all the content from the edit form updated into state, we need to get the information back to `App.js`. This means we need to pass information "up the river" from child component to parent. To accomplish this we need to create a method in `App.js` that gets called when we submit the edit form.

During our scaffolding phase, the goal here is to see the updated cat logged in `App.js`. Eventually this method will be refactored to include an interaction with the database.

Here is where we see the first big difference between the action that creates a new cat and the action that updates a cat. The update route requires a params of an id. To ensure we are updating the correct cat, we need to pass the id of the current cat to the method in `App.js`.

**src/App.js**

```javascript
const updateCat = (cat, id) => {
  console.log("cat:", cat)
  console.log("id:", id)
}
```

This method needs to be passed to our `CatEdit` component. This will require a refactor of the static `"/catedit/:id"` route into a dynamic route that accepts props.

The route for `CatEdit` will look a little bit like `CatShow` and `CatNew` all mixed into one. We have to determine which cat is going to get updated as well as passing the `updateCat` method.

**src/App.js**

```javascript
<Route
  path="/catedit/:id"
  element={<CatEdit cats={cats} updateCat={updateCat} />}
/>
```

Once the `updateCat` method is passed down to the CatEdit component, we can wrap it in a method that will pass our form object and the cat id.

**src/pages/CatEdit.js**

```javascript
const handleSubmit = () => {
  updateCat(editCat, currentCat.id)
}
```

We need to call the method `onSubmit`. To accomplish this, we can add a button from Reactstrap. (Don't forget to add the Reactstrap import!)

**src/pages/CatEdit.js**

```javascript
<Button onClick={handleSubmit} name="submit">
  Submit Updated Cat
</Button>
```

Now, if we navigate to `localhost:3000/catedit/1` we should see a form. When the form is submitted we should see the logs for our cat object and id in the console.

### Navigating to Cat Edit

How we arrive at the edit page is important, since we need to have the id of our cat as a param. A logical approach is to allow our user to move from the show page (where we already have an id param) to the edit page. We can use the [React Router NavLink](https://reactrouter.com/web/api/NavLink) to call our `"/catedit/:id"` route and pass the param of the cat we are currently viewing.

**src/pages/CatShow.js**

```javascript
<NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
  Edit Cat Profile
</NavLink>
```

### Finishing Touches

Here is a good opportunity to think about user flow. Once a cat is updated, it would be nice to be redirect to see the updated information. We can use the same approach we used when submitting the new cat form.

**src/pages/CatEdit.js**

```javascript
import { useNavigate, useParams } from "react-router-dom"

const navigate = useNavigate()
const handleSubmit = () => {
  updateCat(editCat, currentCat.id)
  navigate("/catindex")
}
```

**Remember**, we won't see updates made to the cat just yet. But we can see the form and routing functionality working and see our cat object logged by `App.js` which puts us in a great place for now.

---

## Challenge: Cat Update

As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.

- As a user, I can fill out a form to edit an existing cat.
- As a developer, I can add onChange and value attributes to each input.
- As a developer, I can pass the updated cat object to App.js on submit and see the cat object logged in the console.
  As a user, I can see a button on my show page that will take me to the edit page for that particular cat.
- As a user, I can be routed to the show page after I submit the edited cat form.
- As a developer, I have test coverage on my edit page.

**NOTE:** We are still only interacting with mock data so we will not see updated cat information in the collection of cats.

---

[Back to Syllabus](../../README.md#cat-tinder-frontend)
