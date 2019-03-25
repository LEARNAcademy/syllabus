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

## Redirecting after new cat success
Try that out, and you should see that you can now add new cats to the database, but there's one last thing we should do.  Users will expect to be redirected to the cat index page after they add a cat.  

To do this with the react-router, we need to add a ```<Redirect/>``` tag to the NewCat form component that will be triggered when we want to redirect.

But the big question is, how do we know when we want the redirect to happen?

We could trigger the redirect after they hit submit, but what if there was an error while saving the cat to the database? The user would be redirected anyway and then wouldn't even know their cat hadn't been saved.

Instead, we need to be sure that a user is only redirected after a successfull save. That requires waiting for the ```createCat.then()``` in App.js. What we can do is create a message to ourselves that the cat was saved successfully - we can call it a flag. We'll call our flag newCatSuccess and save it into state.

So, in App.js, update state to look like this:

```javascript
this.state = {
    cats: [],
    newCatSuccess: false
}
```
Now, we can update state to show that a cat was saved successfully. Add a new setState method in the .then of createCat()

#### src/App.js
```javascript
handleNewCat(newCatInfo) {
    console.log("New Cat TRY", newCatInfo)
    createCat(newCatInfo)
    .then(successCat => {
        console.log("CREATE SUCCESS!", successCat);
        this.setState({
            newCatSuccess: true
        })
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
