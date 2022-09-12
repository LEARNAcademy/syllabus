# JavaScript Objects

#### Overview

Objects are a JavaScript data type that has collections of `key:value` pairs. Objects can contain static information as well as actions in the form of methods. This makes objects the intersection of data and behavior.

#### Previous Lecture (1 hour, 6 min)

[![YouTube](http://img.youtube.com/vi/aornqjP1Jo0/0.jpg)](https://www.youtube.com/watch?v=aornqjP1Jo0)

#### Learning Objectives

- can create an object
- can distinguish between the key and value of an object
- can access object properties with dot notation
- can create an object with a method
- can demonstrate how to destructure an object
- can access an object's value by its destructured key
- can iterate through an array of objects using a higher-order function

#### Vocabulary

- key:value pairs
- methods
- dot notation
- this
- destructuring

#### Additional Resources

- [Objects Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [Destructuring Assignment Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

#### Process

- `cd` into the `javascript-foundations-challenges` repository
- Create a new branch: `objects-initials1-initials2` (ex. objects-aw-sp)
- `touch` a file with no spaces and `.js` extension: `objects-student1-student2.js` (ex. objects-austin-sarah.js)
- Open the folder in a text editor
- Code!

---

### Object with Data

Objects consist of collections of **key:value pairs** stored in curly braces. The key is a data type of symbol and the value is any valid data type in JavaScript.

Creating an object in JSON:

```javascript
const person = { name: "Alex Keaton", phone: 123456789 }

// OR written like:

const person = {
  name: "Alex Keaton",
  phone: "(123)456-7890"
}
```

In this example the keys are name and phone and the values are "Alex Keaton" and "(123)456-7890".

Then we can access the value from the object with **dot notation** by calling the name of the object variable and referencing the key.

```javascript
console.log(person.name)
// output: "Alex Keaton"

console.log(person.phone)
// output: "(123)456-7890"
```

### Object with Behavior: Method

Objects can also contain functions. When a function belongs to an object it is called a method. **this** is a JavaScript keyword that references the object. **this** can be used to create a variable accessing the value within the object.

```javascript
const person = {
  name: "Alex Keaton",
  phone: "(123)456-7890",
  getData: function () {
    return `${this.name}'s phone number is ${this.phone}`
  }
}

console.log(person.getData())
// output: "Alex Keaton's phone number is (123)456-7890"
```

### Iterating Over Arrays With Objects

Objects can be single indexes of an array. You can use `.map()` or `.filter()` on arrays of objects.

Example: Consider this toons variable. Use `.map()` or `.filter()` to return a new array with only the dogs.

```javascript
const toons = [
  { name: "Brian", animal: "dog" },
  { name: "Donald", animal: "duck" },
  { name: "Goofy", animal: "dog" },
  { name: "Daffy", animal: "duck" },
  { name: "Pluto", animal: "dog" },
  { name: "Tabby", animal: "cat" }
]
const animal = toons.filter((value) => value.animal === "dog")
console.log(animal)
// output: [ { name: "Brian", animal: "dog" }, { name: "Goofy", animal: "dog" }, { name: "Pluto", animal: "dog" } ]
```

### Object Destructuring

The **destructuring** assignment is really just a special way of assigning variables in Javascript. What's great about the destructuring assignment is that it allows you to take something like an array or an object and unpack their values into individual variables.

This is probably the most immediately useful type of destructuring. When destructuring an object you are essentially taking the properties of an object and breaking them out into individual, recallable variables.

```javascript
// a person object
const person = {
  firstName: "Bruce",
  lastName: "Wayne"
}

// printing property values
console.log(person.firstName)
// output: "Bruce"
console.log(person.lastName)
// output: "Wayne"

// printing a full name
console.log(`${person.firstName} ${person.lastName}`)
// output: "Bruce Wayne"
```

Here's what that code could like with object destructuring:

```javascript
// a person object
const person = {
  firstName: "Bruce",
  lastName: "Wayne"
}

// making variables for firstName and lastName using destructuring
const { firstName, lastName } = person

// printing property values
console.log(firstName)
// output: "Bruce"
console.log(lastName)
// output: "Wayne"

// printing a full name
console.log(`${firstName} ${lastName}`)
// output: "Bruce Wayne"
```

Notice that an object destructuring assignment:

- Starts with a variable keyword
- List the variable names with curly braces
  - **Note:** Variable names must correspond to property names of the object
- Uses the assignment operator to assign the object unpack

This may seem like a trivial feature, but object destructuring can save you loads of typing when it comes to objects with nested properties.

Being comfortable with object destructuring allows you to make quick work of extracting and manipulating object properties.

---

### 💻 Challenges

**Consider this variable:**

```javascript
const person = {
  firstName: "Arthur",
  lastName: "Dent"
}
```

- Write the code that accesses the first name of the person object.
- Write the code that accesses the last name of the person object.
- Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
- Update the person object with a method that logs "Arthur Dent is from planet Earth".

**Consider this variable:**

```javascript
const product = {
  name: "chair",
  price: 24.99
}
```

- Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
- Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

**Consider this variable:**

```javascript
const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}
```

- Write the code that accesses the ingredients property.
- Write the code that access the third ingredient of the lunch object.
- Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
- Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

**Consider this variable:**

```javascript
const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
```

- Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
- Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
- Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
- Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.

**Consider this variable:**

```javascript
const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}
```

- Write the code that destructures the author object so that the following code snippet will run successfully:

```javascript
console.log(`${name} is a ${genre} author`)
// output: "H. G. Wells is a science fiction author"
```

**Consider this variable:**

```javascript
const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire"
}

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water"
}
```

- Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

```javascript
console.log(describePokemon(pokeOne))
// output: "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
// output: "Magikarp is a Water pokemon"
```

**Consider this variable:**

```javascript
const triangleDimensions = {
  base: 2,
  height: 5
}
```

- Modify the triangleDimensions object to have a method that returns the area of the triangle.
- Write the code that will update the base to be the value of 6.

### 🏔 Stretch Goals

**Consider this variable:**

```javascript
const learn = {
  cohorts: {
    2021: ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
    2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf"]
  }
}
```

- Write the code that logs the name of your cohort.
- Write the code that uses destructuring to log the name of your cohort.
- Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.

```javascript
// output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf"]
```

---

[Back to Syllabus](../README.md#unit-two-javascript-foundations)
