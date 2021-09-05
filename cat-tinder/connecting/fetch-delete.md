# Cat Tinder Fetch for Delete Functionality

## Overview
- It is time to delete a cat from our database!
- We will have two applications running on our machine at the same time. The Rails app will run on `localhost:3000` and the React app will run on `localhost:3001`.

## Learning Objectives
- Implementing fetch to delete an existing item from our Rails database

## Set Up
- The Rails app will run on `localhost:3000`
- The React app will run on `localhost:3001`

## Deleting Cats
Deleting cats from the database looks a little bit different than the other CRUD actions. This is because delete doesn't need have its own page. Since it doesn't have its own page it also doesn't have it's own route. So we need to connect the `deleteCat` method to an onClick event somewhere else in the application.

Just like update, delete requires the id of the cat that will be deleted. Since we are using the cat show page to host the update functionality we can use the same approach to handle the delete functionality.

The button to delete a cat can look a lot like the button that will navigate to the edit form. It will have a `NavLink` that will take the user back to the index page so we can see that the cat has been removed from the database. The Reactstrap `Button` has a color attribute for styling and will eventually execute the delete functionality.

**src/pages/CatShow.js**
```javascript
<NavLink to="/catindex">
  <Button>
    Delete Cat Profile
  </Button>
</NavLink>
```

The next step is to create a method in `App.js` that will send a request to the database that will route to the destroy method in Rails. We know from our RESTful routes that removing an item from the database requires a param. So our method will take the param of id.

**/src/App.js**
```javascript
deleteCat = (id) => {
  fetch(`http://localhost:3000/cats/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
  .then(response => response.json())
  .then(payload => this.catRead())
  .catch(errors => console.log("delete errors:", errors))
}
```

Now we need to pass the `deleteCat` method through the show route.

<!-- shouldnt this be the path to App.js file and not the CatShow.js? -->
**src/pages/CatShow.js**
**src/App.js**
```javascript
<Route path="/catshow/:id" render={(props) => {
  let id = props.match.params.id
  let cat = this.state.cats.find(cat => cat.id === +id)
  return <CatShow cat={cat} deleteCat={this.deleteCat} />
}} />
```

Now that the CatShow component has access to the `deleteCat` method, we can call the method when the button runs and pass in the id of the cat to be deleted.


## Challenge: Cat Tinder Fetch Delete Functionality
As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.

- As a developer, I can create a `deleteCat` method that will remove a cat from the database
- As a developer, I can pass the method to the CatShow component
- As a user, I can navigate to the page of one specific cat and see a delete button
- As a user, I can click the button see all the cats with the specific cat removed

---
[Back to Syllabus] (../../README.md#bringing-it-together)
