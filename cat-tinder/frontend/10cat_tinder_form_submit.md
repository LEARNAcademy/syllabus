# NewCat Functionality Overview

Now that the NewCat form is rendering correctly, we can wire the form up to pass submitted data to *App.js*, and handle errors correctly.

What happens when a user clicks "Create Cat Profile" ?

When a user clicks the “Create a Cat” button to submit the form, we want that to trigger a series of actions that lead to adding a new cat to the rails database. Let's chart where the information submitted by the user has to travel in order to get to the db.

## Flow of information from form to DB
#### 1. Preparation

A function is created to handle information for a new cat. That function is preemptively sent to the dumb component (in our case *pages/NewCat.js*) as props. This function is saying to the dumb component: “Here is a function that takes in new cat JSON as an argument. Only run it when you have all the information for a new cat”.

#### 2. Data Entry
We've added a bit of state into NewCat.js.  At first glance, this makes NewCat.js a smart component, although it really isn't doing much more than handling the form state as the user is entering information.  Once they press "Submit", NewCat.js passes all that form data up to App.js (our real smart component) for sending along to the server.

One could make a case for having 100% of state be managed by App.js, and that wouldn't be wrong.  By having a small amount of form specific state in NewCat.js we trade off a bit of blurriness of smart vs. dumb components for nice behavior encapsulation  and separation of concerns.  Only NewCat.js worries about the inner workings of the form.

**pages/NewCat.js**
User inputs data into the form. The form is controlled, and saves all data directly into state

#### 3. Form Submit

**pages/NewCat.js**
When the user hits submit it is our signal that they are finished filling in their information. The form runs an onClick function, which calls the function held in props from *App.js*. That function runs and sends the form data (currently in state) to the logic component (in our case *App.js*)

#### 4. Pass Data to the API

#### In Cats.js
We now would trigger a POST type request to the backend, and rails would handle the rest — but more on that tomorrow.

## Challenge
We're setting ourselves up to submit new cat data to the server.  For now, we'll just console log out the data submitted on the form.  Next, we're going to build a Rails app to drive this frontend.

* Create a `handleNewCat` function in `App.js` that only does one thing: `console.log()` the information from the NewCat form.

* Pass the handleNewCat function to the NewCat component as props.

* Then run the handleNewCat function in NewCat.js when a user clicks the form submit button.

* You'll also want to clear the form data in NewCat.js


[Go to Cat Tinder: Rails API Setup](../Backend/01cat_tinder_setup.md)

[Back to Cat Tinder: NewCat Component](./cat-create.md)

[Back to Syllabus](../../README.md)
