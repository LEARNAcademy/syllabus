# Arrow Functions

With some differences that we will talk more about later, Arrow Functions are a shorthand way to define a function in javascript.

The official definition:

```
An arrow function expression has a shorter syntax than a function expression and does not have its own this,
arguments, super, or new.target. These function expressions are best suited for non-method functions, and they
cannot be used as constructors.
```
-- MDN <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"> Arrow Functions</a>

## Examples:

A named function is declared with the "function" key word and a name, like this:

```javascript
function makeSomthing(arguments) {
     return something
 }
```

An anonymous function is mostly the same, but instead of using a name with the "function" key word, it is run "anonymously" and the value that is returned is saved into a variable. Like this:

```javascript
var someResult = function(arguments){
     return something
    }
```

Arrow functions get rid of the "function" key word and instead looks like this:
```JavaScript
var someResult = (arguments) => {
     return something
 }

```

Let's take an example from our functions lesson and refactor it into an arrow function.

```javascript
//before ES6 Arrow Functions
function greeting(name) {
    return "Hello " + name
}

//after ES6 Arrow functions
var greeting = (name) => {
    return "Hello " + name
}
```

As we will see later, arrow functions are very useful with .map() and .filter() as well as with React.

# Template Literals - String Interpolation

```javascript
//Before ES6
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };

var message = "Hello " + customer.name + ",\n" +
"want to buy " + card.amount + " " + card.product + " for\n" +
"a total of " + (card.amount * card.unitprice) + " bucks?";

//After ES6
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }

var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

```
Notice in the above example that ES6 Template Literals greatly reduces the amount of special characters needed for interpolation. We start and end the string with back ticks and we use the $ and {} to wrap our inserted values.



# Object Destructuring

In Javascript, we use a lot of the data type Object. Remember that both objects and arrays are of data type Object in JS.

Because we pass so much information around using objects, new ES syntax gives us some handy shortcuts for getting at information.

For the official definition:
```
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from
arrays, or properties from objects, into distinct variables.
```
-- MDN, JS Object Destructuring

## Some Examples

To see what this actually means, lets look at some examples.

#### Using information from objects gets easier:

```
var user = {first_name: 42, last_name: "Doe"}


var {first_name, last_name} = user

console.log(first_name); // 42
console.log(last_name); // "Doe"
```

Here, notice that this trick only works if the variable names exactly match the object attribute keys

#### Assigning values out of arrays gets easier:

```
// we declare two new variables without values
var a, b

// we can efficiently assign them each values in one line
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20
```

### More Practice:

There is tons that you can do with this concept of destructuring, and it can be used in all sorts of ways. For a fantastic list of all the things you can do with destructuring, go to the MDN page <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">Destructuing Assignmment Operators</a>

# JS Spread Syntax

Like Object Destructuring, spread syntax is fairly new to javascript. It is a quick way to write really convenient code.

The official definition:

```
Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more
arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded
in places where zero or more key-value pairs (for object literals) are expected.
```
-- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">MDN, Spread Syntax</a>

### Some Examples:

#### A better way to concatenate arrays

Sometimes it is easier to see what is going on with new syntax by looking at code that does the same thing in a syntax you already understand. Here is an example with Array.concat, which is used to concatenate a new array to the end of an existing array. Without spread syntax this is done as:

```
var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]

// Append all items from arr2 onto arr1

arr1 = arr1.concat(arr2)
```

But with spread syntax this looks like:
```
var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]

// spread all the values in both arrays into arr1
arr1 = [...arr1, ...arr2]
```

#### We can also copy arrays:
```
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

#### Super Helpful -- We can spread a changing number of items into a function as arguments

Take a look at this function. It takes in individual strings as arguments, and returns those words combined them into a sentence
```
//
function create_a_sentence(w1, w2, w3) {
  return w1 + w2 + w3
}

create_a_sentence("hello", "to", "world")
// ==> "Hello to world"
```

But, this is very fragile code. Our function breaks if passed more than 3 words. We can fix this problem and make a much better function using the spread operator.


```JavaScript

create_a_sentence(...words){
    return words.join(" ")
}

console.log(create_a_sentence("hello", "yall", "what's", "up", "doc"))







```

If you want to see a function with the spread operator working - look here <a href="https://github.com/bravo-2018/daily_challenges/blob/master/March-28/dedupe/dedupe.js">at this dedupe function challenge</a> - a challenge from last week, re-written to make use of spread syntax

# Challenges

Redo these challenges from last week using ES6 Syntax.  See how many you can incorporate into each challenge.  

#### Exercises:
Write an arrow function called old_enough that takes in 1 number as an argument and tells whether or not the person is allowed to drink (over 21).  (use ES6 string interpolation).



Write an arrow function named greaterNum that:
* takes 2 arguments, both numbers.
* uses ES6 string interpolation that returns whichever number is the greater (higher) number.
* Test the function 2 times with different number pairs
