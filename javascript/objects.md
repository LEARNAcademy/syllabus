# JavaScript Objects

## Video: Objects
[![YouTube](http://img.youtube.com/vi/xDmsrXDweB8/0.jpg)](https://www.youtube.com/watch?v=xDmsrXDweB8)

## Overview
- Objects are a datatype that contain collections of key:value pairs
- Objects are the cross section of data (static information) and behavior (methods)

## Learning Objectives
- Understanding the anatomy of an object
- Accessing the values from objects using the keys
- Creating methods that return information from the object
- Exploring object destructuring

## Vocabulary
- JSON
- key: value pairs
- methods
- dot notation
- this
- destructuring

## Additional Resources
-  For a fantastic list of all the things you can do with destructuring, go to the MDN page: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="blank">Destructuring Assignmment Operators</a>

#### Process
- `cd` into the `javascript-foundations-challenges` repository
- Create a new branch: `objects-initials1-initials2` (ex. objects-aw-sp)
- `touch` a file with no spaces and `.js` extension: `objects-student1-student2.js` (ex. objects-austin-sarah.js)
- Open the folder in a text editor
- Code!

---

## Object with Data: JSON
- JSON stands for JavaScript Object Notation
- Objects are collections of `key:value` pairs

Creating an object in JSON:

```javascript
var person = {name: "Alex Keaton", phone: 123456789}

// OR written like:

var person = {
  name: "Alex Keaton",
  phone: 123456789
}
```

In this example the `keys` are name and phone and the `values` are "Alex Keaton" and 123456789.

Then we can access the `value` from the object with "dot" notation by calling the name of the variable and the `key`:

```javascript
console.log(person.name)
--> "Alex Keaton"

console.log(person.phone)
--> 123456789
```

## Object with Behavior: Method

- Objects can also contain functions. When a function belongs to an object it is called a method.
- **this** is a JavaScript keyword that references the object.
- **this** can be used to create a variable accessing the value within the object.


```javascript
var person = {
  name: "Alex Keaton",
  phone: 123456789,
  getData: function() {
    return `${this.name}'s phone number is ${this.phone}`
  }
}

console.log(person.getData())
--> "Alex Keaton's phone number is 123456789"
```

## Iterating Over Arrays With Objects

Objects can be single indexes of an array. You can use `.map()` or `.filter()` on arrays of objects.  

Example: Consider this toons variable. Use `.map()` or `.filter()` to return a new array with only the dogs.

```javascript
var toons = [
  {name: "Brian", animal: "dog"},
  {name: "Donald", animal: "duck"},
  {name: "Goofy", animal: "dog"},
  {name: "Daffy", animal: "duck"},
  {name: "Pluto", animal: "dog"},
  {name: "Tabby", animal: "cat"}
]
var animal = toons.filter(value => value.animal === "dog")
console.log(animal)
--> [ { name: 'Brian', animal: 'dog' }, { name: 'Goofy', animal: 'dog' }, { name: 'Pluto', animal: 'dog' } ]
```

## Object Destructuring

The destructuring assignment is really just a special way of assigning variables in Javascript. What's great about the destructuring assignment is that it allows you to take something like an array or an object and unpack their values into individual variables.

This is probably the most immediately useful type of destructuring. When destructuring an object you are essentially taking the properties of an object and breaking them out into individual, recallable variables.

```javascript
// A person object
var person = {
  firstName: "Bruce",
  lastName: "Wayne"
}

// Printing property values
console.log(person.firstName)
--> "Bruce"
console.log(person.lastName)
--> "Wayne"

// Printing a full name
console.log(`${person.firstName} ${person.lastName}`)
--> "Bruce Wayne"
```
Here's what that code could like with object destructuring:

```javascript
// A person object
var person = {
  firstName: 'Bruce',
  lastName: 'Wayne'
}

// Making variables for firstName and lastName using destructuring
var { firstName, lastName } = person

// Printing property values
console.log(firstName)
--> "Bruce"
console.log(lastName)
--> "Wayne"

// Printing a full name
console.log(`${firstName} ${lastName}`)
--> "Bruce Wayne"
```

Notice that an object destructuring assignment:
- Starts with a variable keyword
- List the variable names with curly braces
  - **Note:** Variable names must correspond to property names of the object
- Uses the assignment operator to assign the object unpack

This may seem like a trivial feature, but object destructuring can save you loads of typing when it comes to objects with nested properties.

Being comfortable with object destructuring allows you to make quick work of extracting and manipulating object properties.

---

### Challenges

1. **Consider this variable:**

```javascript
var person = {
  firstName: "Arthur",
  lastName: "Dent"
}
```
- Write the code that accesses the first name of the person object.
- Write the code that accesses the last name of the person object.
- Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
- Update the person object with a method that logs "Arthur Dent is from planet Earth".

2. **Consider this variable:**

```javascript
var product = {
  name: "chair", price: 14.99
}
```
- Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".

3. **Consider this variable:**

```javascript
var lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}
```
- Write the code that accesses the ingredients property.
- Write the code that access the 3rd ingredient of the lunch object.
- Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
- Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

4. **Consider this variable:**

```javascript
var animals = [
  { name: "Waffles", type: "dog", age: 12 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
]
```
- Create a function that takes in any array of objects and returns a new array with only those of type cat.
- Using the same array of objects above. Create a function that returns a new array with only the names of the animals.

5. **Consider this variable:**

```javascript
let author = {
    name: "H. G. Wells",
    genre: "science fiction"
}
```
- Write the code that destructures the author object and makes the following work:

```javascript
console.log(`${name} is a ${genre} author`)
--> "H. G. Wells is a science fiction author"
```
6. **Consider this variable:**

```javascript
let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
}

let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}
```

- Write a function called `describePokemon()` that take an object like the ones above and uses destructuring to return a description of the Pokemon such that:

```javascript
console.log(describePokemon(pokeOne))
--> "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
--> "Magikarp is a Water pokemon"
```

---
[Back to Syllabus](../README.md#unit-one-javascript-foundations)
