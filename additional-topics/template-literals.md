# JavaScript Template Literals

## Video: Template Literals
[![YouTube](http://img.youtube.com/vi/72qhgQQNkOo/0.jpg)](https://www.youtube.com/watch?v=72qhgQQNkOo)

## Overview
- Template literals in Javascript allow us to embed expressions in our string literals

## Learning Objectives
- Understanding the syntax of template literals
- Understanding passing expressions into template literals

## Vocabulary
- Template literal
- String interpolation

## Additional Resources
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Nesting_templates" target="blank">Nesting Templates</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates" target="blank">Tagged Templates</a>

## Set Up
- Create a file in a text editor with the extension `.js`
- In terminal, cd into the appropriate folder
- $ node filename.js


## String Interpolation

One of the most useful and common implementations of template literals is string interpolation. String interpolation is essentially the embedding of expressions in a string.

Here's an example:

```javascript
var fruit = "apple"

console.log(`The fruit is a ${fruit}`)

fruit = "orange"

console.log(`Now the fruit is a ${fruit}`)
```

Let's look at the important pieces here:

- The back tick characters are used to signal the start and end of a template string
- A dollar sign ($) indicates the start of an embedded expression
- The curly braces ({}) indicate the beginning and end of the javascript expression. In this case, fruit is the expression we're asking javascript to evaluate.

As you may have noticed string interpolation makes our strings very dynamic and easy to read and write. It's worlds apart from what we had to work with pre ES6.

Here's an compare and contrast with a more complex example:

```javascript
var customer = {
  name: "Foo"
}
var card = {
  amount: 7,
  product: "Bar",
  unitPrice: 42
}

// Pre ES6

var message = "Hello " + customer.name +
" want to buy " + card.amount + " " + card.product + " for a total of " + (card.amount * card.unitPrice) + " bucks?"

// With ES6 string interpolation

var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for a total of ${card.amount * card.unitPrice} bucks?`
```

Here we can see just how many characters string interpolation saves  us when constructing string literals that require expressions. Notice we were also able to throw in a math expression in our string.

Again, our gains are:

- Easy to write expressions
- Very readable code

String interpolation is essentially at the core of the template literal feature of ES6 and many of its additional features build on this piece. That said, getting comfortable with just this piece will get you a long way in understanding the more complex template literal implementations.

## Multi-line Strings

Template literals also makes it super easy to make multi-line strings.

```javascript
// Pre ES6

let oldLongString = "This\nis\na\nlong\nstring"

console.log(oldLongString)

let longString = `
This
is
a
long
string
`

console.log(longString)
```

Note that the ES6 version again is very easy to read and write.

## Other Uses

Template literals have a few other uses that are a bit beyond the scope of what is useful at this point in the course. That's not to say that you won't ever utilize them.


## Challenges


#### Exercise 1

Consider this variable:

```javascript
var meaningOfLife = 42
```

Write the code that prints '**The answer to the meaning of life is 42**'.

#### Exercise 2

Consider this code:

```javascript
var zooAnimals = ['giraffe', 'fennec fox', 'elephant']

zooAnimals.forEach(animal =>  console.log('The zoo has a' + animal))
```

Refactor the .forEach method to use string interpolation.

#### Exercise 3

Consider this variable:

```javascript
var burger = {
    cheese: 'cheddar',
    patty: 'black bean',
    onions: false,
}
```

Write the code that prints '**black bean burger with cheddar**' to the screen.

**STRETCH**

Given these 2 burger objects:

```javascript
var beanBurger = {
    cheese: 'cheddar',
    patty: 'black bean',
    onions: false,
}

var turkeyBurger = {
    cheese: 'swiss',
    patty: 'turkey',
    onions: true,
}
```

Write a function takes a burger object and returns a descriptive string.

For example:

```javascript
describeBurger(beanBurger)
--> "black bean burger with cheddar and no onions"

describeBurger(turkeyBurger)
--> "turkey burger with swiss and onions"
```

---
[Back to Syllabus](../README.md#unit-one-javascript-foundations)
