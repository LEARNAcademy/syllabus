# Creating a new cat

We already have a getCats API call, so we need to make a new one called createCat to make our NewCat form work.

The createCat fetch call is going to be a little bit different than getCats, because creating something in the rails requires a POST type HTTP request (think back to your rails routes).

A POST type request means that we are "posting" or sending information along with the request. Information that must be handled. In this case, by specifying the HTTP verb `POST`, attaching some information, and directing it to the rails "/cats" route will mean that the attached information is used to create a new cat instance in the database.

Here is the code:

#### src/api/index.js
```javascript
let createCat = function(cat) {
	return fetch(BASE + '/cats', {
		body: JSON.stringify(cat),  // <- we need to stringify the json for fetch
		headers: {  // <- We specify that we're sending JSON, and expect JSON back
			'Content-Type': 'application/json'
		},
		method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
	})
		.then((resp) => {
			let json = resp.json()

			return json
		})
}
```
Read that through a few times to see if you can get the gist of what's going on. Remember you will also need to export createCat to use this function elsewhere.

## Passing the New Cat information

Last bit to do is to connect the new cat form to the database, so that the information for a new cat submitted in a form is saved.  Recall that we're already passing the form data from NewCat to App.js on submit, so all that's left is to make App.js pass that information to the API.

#### src/App.js
```javascript
handleNewCat(newCatInfo) {
	createCat(newCatInfo)
    .then(successCat => {
        console.log("SUCCESS! New cat: ", successCat);
    })
}
```

Last thing to do is add the redirect element in NewCat.js. You can do this a variety of ways, but here is one example:

#### pages/NewCat.js
```
// ... the NewCat form ...
		</form>
	{this.props.success &&
		<Redirect to="/cats" />
	}
</div>
```
Notice the ```this.props.success``` statement. If this evaluates to "true" the redirect will run. As long as it evaluates to "false", the program will act as if the redirect doesn't even exist. You will need to pass a "success" value in props to finish this functionality.

#### Stretch Challenges

- As a user, when I am on the cat index page, I can click on a cat and see it's profile page.
- As a user, when viewing a cat's profile page, I can edit the cat's info.
- As a user, I can delete a cat.

[Back to Cat Tinder: Cats Index API Call](./08cat_tinder_api_index.md)

[Back to Syllabus](../../README.md)