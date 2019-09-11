# Destructuring assignments in Javascript

The destructuring assignment is really just a special way of assigning variables in Javascript. What's great about the destructuring assignment is that it allows you to take something like an array or an object and unpack their values into individual variables.

## Object Destructuring

This is probably the most immediately useful type of destructuring. When destructuring an object you are essentially taking the properties of an object and breaking them out into individual, recallable variables.

Let's take the problem of printing the properties of an object.

Before ES6 it looked something like this:

```javascript
// A person object
var person = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

// Printing property values
console.log(person.firstName)
console.log(person.lastName)

// Printing a full name
console.log(`${person.firstName} ${person.lastName}`)
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
console.log(lastName)

// Printing a full name
console.log(`${firstName} ${lastName}`)
```

Notice that an object destructuring assignment:
- Starts with a variable keyword
- List the variable names with curly braces
  - Note: Variable names must correspond to property names of the object
- Uses the assignment operator to assign the object unpack

This may seem like a trivial feature, but object destructuring can save you loads of typing when it comes to objects with nested properties.

Here's another more complex example:

``` javascript
var myAgenda = {
  morning: "drink coffee",
  afternoon: "eat lunch",
  evening: {
    first: "go home",
    second: {
      gym: "lift weights",
      yoga: "stretch",
    },
    third: "eat dinner"
  },
  description(){
    return `In the morning, I ${this.morning}, then later I ${this.afternoon}.`
  },
}

// Pre ES6

console.log(myAgenda.evening.second.yoga) -->> "stretch"

// Same print using destructuring

var { second } = myAgenda.evening
console.log(second.yoga) -->> "stretch"
```

Being comfortable with object destructuring allows you to make quick work of extracting and manipulating object properties.

## Array Destructuring

Though array destructuring won't be immediately useful to us, it's good to know a little bit about what it affords us.

### Basic Array Destructuring

Array destructuring like object destructuring allows us to assign values from an array to variables.

```javascript
let [firstVal, secondVal] = [1, 2]

console.log(firstVal)   // => 1
console.log(secondVal)  // => 2
```

Notice that an array destructuring assigment:

- Starts with a variable keyword
- In square brackets lists some variable names
- Uses the assignment operator to assign the array to unpack

Also notice that the variables are assigned in order. As in, the first variable name is assigned the first value of the value array.

### Array destructuring from function return

What's really cool is that array destructuring is not restricted to array literals. We can also destructure an array returned from a function:

```javascript
function arrayFun(){
    return [0, 4]
}

var [x, y] = arrayFun()
console.log(x) //-->> 0
console.log(y) //-->> 4
```

There are tons that you can do with this concept of destructuring, and it can be used in all sorts of ways. For a fantastic list of all the things you can do with destructuring, go to the MDN page

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank">Destructuring Assignmment Operators</a>


## Challenges

#### Exercise 1

Consider this variable:

```javascript
let author = {
    name: "H. G. Wells",
    genre: "science fiction"
}
```

Write the code that destructures the author object and makes the following work:

```javascript
console.log(`${name} is a ${genre} author`) //-->> "H. G. Wells is a science fiction writer"
```

#### Exercise 2

Consider these variables:

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

Write a function called **describePokemon()** that take an object like the ones above and uses destructuring to return a description of the pokemon such that:

```javascript
console.log(describePokemon(pokeOne)) //-->> 'Charmandar is a Fire pokemon'
console.log(describePokemon(pokeTwo)) //-->> 'Magikarp is a Water pokemon'
```


