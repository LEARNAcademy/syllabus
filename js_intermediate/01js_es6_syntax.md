# ES6 SYNTAX

ES6, JavaScript 6, or ECMAScript 2015
European Computer Manufacturers Association Script, the 6th version.

ECMA is an industry association founded in 1961, dedicated to the standardization of information and communication systems.

A massive update to a new standard of JavaScript that increased the functionality and flexibility of the language. Adding features such as:

* Arrow functions
* constant keyword (value cannot be changed)
* let keyword (scope level)
* Destructuring
* Classes
* Many Higher-order functions
* Template strings
* default value in function parameter
* rest parameter
* spread operator
* generators
* promises

## Arrow Functions

The official definition: An arrow function is a syntactically compact alternative to a regular function expression, although without its own bindings to the `this, arguments, super, or new.target` keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.

Arrow functions are useful in testing, higher order functions, creating methods in React, and much more.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" target="_blank">MDN Arrow Functions</a>

### Examples:

A named function is declared with the "function" key word and a name, like this:

```javascript
function makeSomthing(argument) {
     return something
 }
```

Arrow functions don't use the "function" key word and instead looks like this:

```JavaScript
makeSomething = (argument) => {
     return something
 }
```

Let's take an example from our functions lesson and refactor it into an arrow function.

```javascript
// Before ES6

function greeting(name) {
    return "Hello " + name
}

// With arrow functions

var greeting = (name) => {
    return "Hello " + name
}
```

## Template Literals - String Interpolation

ES6 Template Literals greatly reduces the amount of special characters needed to create embedded expressions. The syntax for interpolation is wrapping the string in back ticks passing the variable inside ${}.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" target="_blank">MDN Template Literals</a>

```javascript
// Before ES6

var customer = {
  name: "Foo"
}
var card = {
  amount: 7,
  product: "Bar",
  unitPrice: 42
}

var message = "Hello " + customer.name +
" want to buy " + card.amount + " " + card.product + " for a total of " + (card.amount * card.unitPrice) + " bucks?"

// With string interpolation

var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for a total of ${card.amount * card.unitPrice} bucks?`

```

## Object Destructuring

In Javascript, it is common to work with the data type object.

ES6 syntax provides us some handy shortcuts for getting information from objects.

The official definition: The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank">MDN Destructuring</a>

### Examples

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

console.log(myAgenda.evening.second.yoga) -->> "stretch"

// Object destructuring provides a shortcut to accessing nested values

var { second } = myAgenda.evening
console.log(second.yoga) -->> "stretch"
```


#### Assigning values out of arrays gets easier:

```javascript
// we declare two new variables without values
var a, b

// we can efficiently assign them each values in one line
[a, b] = [10, 20]

console.log(a) -->> 10

console.log(b) -->> 20
```

### More Practice:

There is tons that you can do with this concept of destructuring, and it can be used in all sorts of ways. For a fantastic list of all the things you can do with destructuring, go to the MDN page

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank">Destructuing Assignmment Operators</a>

## JS Spread Syntax

The official definition: Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more
arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded
in places where zero or more key-value pairs (for object literals) are expected.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" target="_blank">MDN Spread Syntax</a>

### Examples:

#### A better way to concatenate arrays

```javascript
// Append all items from arr2 onto arr1 before ES6

var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]

arr1 = arr1.concat(arr2) -->> [0, 1, 2, 3, 4, 5]


// With the spread operator

var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]

arr1 = [...arr1, ...arr2]
```

#### We can also duplicate arrays:
```javascript
var arr1 = [1, 2, 3]
var arr2 = [...arr1]
arr2.push(4)

console.log(arr2) -->> [1, 2, 3, 4]
console.log(arr1) -->> [1, 2, 3]
// arr1 remains unaffected
```

#### Passing a dynamic number of arguments

```javascript
// Before ES6

function createSentence(w1, w2, w3) {
  return w1 + w2 + w3
}

console.log(createSentence("hello", "there", "world"))
-->> "Hello there world"

// With spread operator

createSentence(...words){
    return words.join(" ")
}

console.log(createSentence("hello", "y'all", "what's", "up", "doc"))
-->> "hello y'all what's up doc"


```

For another example look at <a href="https://github.com/bravo-2018/daily_challenges/blob/master/March-28/dedupe/dedupe.js">this </a> deduping function challenge refactored to make use of spread syntax

### Challenges

1) Write an arrow function that takes in a number and returns whether or not the person is allowed to drink (over 21).

* oldEnough(21)
* expected output -->> "21 is old enough to drink"
* oldEnough(19)
* expected output -->> "19 is not old enough to drink"

2) Write an arrow function named greaterNum that takes two numbers as arguments, use string interpolation to return a sentence explaining which number is greater

* (4, -9)
* expected output -->> "4 is greater than -9"
* (0, 278)
* expected output -->> "278 is greater than 0"

3) Consider this object:

```javaScript
var person = {
  firstName: "Alex",
  lastName: "Keaton",
  phone: 123456789,
  getData() {
    return this.firstName+"-"+this.phone
  }
}
```
* Use object destructuring to create two variables: a name variable and a phone variable
* Refactor the getData() method to have a more descriptive sentence using string interpolation

4) Write an arrow function that uses the spread operator to take in a dynamic number of letters as arguments and returns those letters as one word.

5) Review the challenges from [Functions, Loops, Arrays](./06js_funcLoopsArrays.md) and refactor the code using ES6 syntax. Recreate your code rather than deleting existing code.

[Go to next lesson: Testing with Jest](./04js_testing_jest.md)

[Back to JavaScript Objects](../js_beginning/06js_objects.md)

[Back to Syllabus](../README.md)
