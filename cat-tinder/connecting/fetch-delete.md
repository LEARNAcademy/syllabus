# Cat Tinder Fetch for Delete Functionality

#### Overview

It is time to remove a cat in our database. We will have two applications running on our machine at the same time. The Rails app will run on `localhost:3000` and the React app will run on `localhost:3001`.

#### Learning Objectives

- can make cross-origin requests from the UI to an API
- can set state with the JSON data that is returned from our fetch request

#### Process

- The Rails app will run on `localhost:3000`
- The React app will run on `localhost:3001`

---

### Deleting Cats

Deleting cats from the database looks a little bit different than the other CRUD actions. This is because delete doesn't need have its own page. Since it doesn't have its own page it also doesn't have it's own route. So we need to connect the `deleteCat` function to an `onClick` event somewhere else in the application.

Just like update, delete requires the id of the cat that will be deleted. Since we are using the cat show page to host the update functionality we can use the same approach to handle the delete functionality.

The button to delete a cat can look a lot like the button that will navigate to the edit form. It will have a `NavLink` that will take the user back to the index page so we can see that the cat has been removed from the database. The Reactstrap `Button` has a color attribute for styling and will eventually execute the delete functionality.

**src/pages/CatShow.js**

```javascript
<NavLink to="/catindex">
  <Button>Delete Cat Profile</Button>
</NavLink>
```

The next step is to create a function in `App.js` that will send a request to the database that will route to the destroy method in Rails. We know from our RESTful routes that removing an item from the database requires a param. So our function will take the param of id.

**/src/App.js**

```javascript
const deleteCat = (id) => {
  fetch(`http://localhost:3000/cats/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
    .then((response) => response.json())
    .then(() => readCat())
    .catch((errors) => console.log("delete errors:", errors))
}
```

Now we need to pass the `deleteCat` function through the show route.

**src/App.js**

```javascript
<Route
  path="/catshow/:id"
  element={<CatShow cat={cat} deleteCat={deleteCat} />}
/>
```

Now that the CatShow component has access to the `deleteCat` function, we can call the function when the button runs and pass in the id of the cat to be deleted.

---

[Back to Syllabus](../../README.md#bringing-it-together)
