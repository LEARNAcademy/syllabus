# JavaScript Conditionals

#### Overview
Decision structures, also called decision trees, conditional statements, or if/else statements, are fundamental to computer programming
- Conditional statements are a sequence of well-defined instructions that produce a unique output based on the value of the input
- Conditionals follow a flowchart-like structure

## Video: If / Else Statements
[![YouTube](http://img.youtube.com/vi/Ee_Phg9Ip-k/0.jpg)](https://www.youtube.com/watch?v=Ee_Phg9Ip-k)

## Learning Objectives
- Understanding the syntax of `if/else` statements
- Using variables in a conditional statement
- Using string interpolation to log a descriptive output to the conditional statement
- Effectively using `else` statements as a catchall when needed  

## Vocabulary
- if, else if, else
- string interpolation

## Useful Commands
- console.log()

## Additional Resources
- <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals" target="blank">Conditionals from MDN</a>

#### Process
- `cd` into the `javascript-challenges` repository
- Create a new branch: `conditionals-initials1-initials2` (ex. conditionals-aw-sp)
- `touch` a file with no spaces and `.js` extension: `conditionals-student1-student2.js` (ex. conditionals-austin-sarah.js)
- Open the folder in a text editor
- Code!

#### Troubleshooting Tips
- Is the file path is correct?

---

## Javascript Decisions

Programming is the art of solving very complex problems or processes by breaking each problem into tiny, solvable pieces.

One of the tools that helps us break down problems is the `if/else` decision structure. Think of the logic behind a simple switch that is either on or off. In code we can create logic that says, `if this thing is true, do this, otherwise, do this other thing.` In fact, the JavaScript code for creating these decision structures reads almost like our sentence did:

```
if(this thing is true) {
  console.log(do this)
} else {
  console.log(do this other thing)
}
```
Note: Console.log() will print things to your console(terminal/developer tools) so you can see your code working.

## If/Else

All conditionals must have an `if` statement. If the set condition is true, the program will continue to run. If the condition is not true, nothing will happen.

```javascript
var carOn = true

if(carOn === true) {
  console.log("The engine is running.")
}
```
If we want our code to execute something if the `if` condition is not true, we add an `else` to our program. `Else` is the catch all so we don't give it its own statement. It will automatically run if the `if` condition is not met.

```javascript
var carOn = false

if(carOn === true) {
  console.log("The engine is running.")
} else {
  console.log("The engine is off.")
}
```

If we want more options in our decision structure, we can add an `else if` statement. This runs after the initial `if` and before the catch all `else`. The cool thing about `else if` statements is that you can use as many as you want. Once a condition is met, the program has finished running so the most specific condition should be prioritized.

```javascript
var carOn = true

if(carOn === true) {
  console.log("The engine is running.")
} else if(carOn === false) {
  console.log("The engine is off.")
} else {
  console.log("The car is broken.")
}
```

## Template Literals and String Interpolation
Template literals in Javascript allows variables to be embedded into strings. Prior to this neat syntax the only way to use variables inside of strings was to use concatenation:
```javascript
var number1 = 34
var number2 = 78
console.log(number1 + " is less than " + number2)
```
This expression can be modified using string interpolation:
```javascript
var number1 = 34
var number2 = 78
console.log(`${number1} is less than ${number2}`)
```
Read more about Template Literals and String Interpolation [here](./template-literals.md).

## If/Else If/Else

Example: Write an `if/else` statement that takes two variables of fruit and logs the one that is more letters

```javascript
var fruit1 = "orange"
var fruit2 = "apple"

if(fruit1.length > fruit2.length) {
  console.log(`${fruit1} has more letters`)
} else if(fruit1.length < fruit2.length) {
  console.log(`${fruit2} has more letters`)
} else {
  console.log("They have the same letters")
}
```
Example: Write an `if/else` statement that takes a variable of a number from 0 to 100 and logs the number of digits
```javascript
var number = 9

if(number === 100) {
  console.log(`${number} is a triple digit number`)
} else if(number > 9 && number < 100) {
  console.log(`${number} is a double digit number`)
} else if(number >= 0 && number <= 9){
  console.log(`${number} is a single digit number`)
} else {
  console.log("please enter a number from 0 to 100")
}
```

## Challenges

Make sure you try different options and change the variables to ensure properly working code.

- Write an `if/else` statement that takes a variable of item and logs "in budget" if a price is $100 or less.

- Write an `if/else` statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

- Write an `if/else` statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

- Write an `if/else` statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.

- Write an `if/else` statement that takes a variable of a number and logs whether the number is odd, even, or zero.

**STRETCH Challenges**

- Write an `if/else` statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

- Write an `if/else` statement that takes a variable of a boolean, number, or string  datatype and logs the data type of the variable **HINT**: use the JS operator `typeof`.

- Create a password checker using a single `if/else` statement. If a user inputs a password with 12 or more characters AND the password includes `!`, then log "That is a mighty strong password!" If the user’s password is  8 or more characters OR includes `!`, then log "That password is strong enough." Log "That  is not a valid password." for every other input.

---
[Back to Syllabus](../README.md#unit-one-javascript-foundations)
