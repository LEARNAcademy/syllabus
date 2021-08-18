# JavaScript Ternary Operator

## Overview
- Ternary operators are a shortcut for `if/else` statements.
- Ternary operators allow for code to be more concise.

## Learning Objectives
- Understanding the syntax of ternary operators
- Understanding the use case of a ternary operators

## Vocabulary
- Ternary operator

## Set Up
- Create a file in a text editor with the extension `.js`
- In terminal, cd into the appropriate folder
- $ node filename.js

## Ternary Operator

Ternary operators are handy shortcuts for creating `if/else` statements in JavaScript. Ternary operators allow JavaScript developers to make very clean and concise code.

Ternary operators work **only** for exactly two outcomes:
1. If the condition is met - an evaluation that is truthy
2. If the condition is not met - an evaluation that is falsey

Consider the following program:
```javascript
var age = 20

if(age >= 16){
  console.log("You are old enough to drive.")
} else {
  console.log("You are not old enough to drive.")
}
```

This code has exactly two possible outcomes which makes it a great candidate for refactoring using a ternary operator.

### Ternary Operator Anatomy
There are three parts of a ternary operator:
1. The condition that you are evaluating. The outcome of the evaluation should be a boolean value or coerce to a boolean value.
2. A question mark `?` that will separate the condition from the truthy outcome.
3. A `:` that will separate the truthy outcome from the falsey outcome.

Here is the refactor from the previous example:

```javascript
var age = 20

age >= 16 ? console.log("You are old enough to drive.") : console.log("You are not old enough to drive.")
```

In pseudocode, this would read:

```
condition ? output if true : output if false
```

### Additional Examples
In this case, we are creating a function that will greet a user. If the user offers us a name we will greet the user by name. If not, we will offer a generic greeting.

```javascript
const greeter = (myName) => {
  return myName ? `Hey there, ${myName}` : "Hey there, you!"
}
console.log(greeter(null))
console.log(greeter("LEARN Student"))
```

Here we are creating a function that will determine if a light switch is on or off and instruct our user to perform an appropriate action.
```javascript
const toggler = (onOff) => {
  return isToggled === "on" ?
  "Turn switch off." :
  "Turn switch on."
}
console.log(toggler("on"))
console.log(toggler("off"))
```

## Challenges
- Create a function that determines if a user is old enough to vote (age 18 or older).
- Create a function that takes in an array of numbers and determines if the number is odd or even.

---
[Back to Syllabus](../README.md#unit-one-javascript-foundations)
