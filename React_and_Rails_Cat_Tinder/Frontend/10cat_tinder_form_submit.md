# NewCat Functionality Overview

Now that the NewCat form is rendering correctly, we can wire the form up to pass submitted data to ```App.js```, and handle errors correctly.

What happens when a user clicks "Create Cat Profile" ?

When a user clicks the “Create a Cat” button to submit the form, we want that to trigger a series of actions that lead to adding a new cat to the rails database. Let's chart where the information submitted by the user has to travel in order to get to the db.

## Flow of information from form to DB
#### 1. Preparation

##### In App.js
A function is created to handle information for a new cat. That function is preemptively sent to the dumb component (in our case ```pages/NewCat.js```) as props. This function is saying to the dumb component: “Here is a function that takes in new cat json as an argument. Only run it when you have all the information for a new cat”.

#### 2. Data Entry

##### In pages/NewCat.js
User inputs data into the form. The form is controlled, and saves all data directly into state

#### 3. Form Submit

##### in pages/NewCat.js
User hits submit - this is our signal that they are finished filling in their information. The form runs an onClick function, which calls the function held in props from App.js. That function runs and sends the form data (currently in state) to the logic component (in our case App.js)

#### 4. Pass Data to the API

#### In App.js
We now would trigger a POST type request to the backend, and rails would handle the rest — but more on that tomorrow.

## Challenge

Create a ```handleNewCat``` function in ```App.js``` that only does one thing: ```console.log()``` the information from the NewCat form. Pass the handleNewCat function to the NewCat component as props, and then run the handleNewCat function when a user clicks the form submit button.


#### Where to go from here

[Go to Cat Tinder: Rails API Setup](../Backend/01cat_tinder_setup.md)

[Back to Cat Tinder: NewCat Component](./07cat_tinder_new_cats.md)

[Back to Syllabus](../../README.md)