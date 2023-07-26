# JavaScript Conditionals

#### Overview

Decision structures, also called decision trees, conditional statements, or if/else statements, are fundamental to computer programming. Conditional statements are a sequence of well-defined instructions that produce a unique output based on the value of the input. Conditionals follow a flowchart-like structure and allow you create logic in your code.

#### Previous Lecture (41 min)

[![YouTube](http://img.youtube.com/vi/yHe4d6qQZC0/0.jpg)](https://www.youtube.com/watch?v=yHe4d6qQZC0)

#### Learning Objectives

- can recognize and distinguish equality, relational, logical operators
- can recall the syntax of an if/else block
- can create a tree of if/else decisions in order to produce a solution to a given problem
- can use console.log to see the appropriate output
- can successfully run a JavaScript file in the terminal

#### Vocabulary

- equality operator
- relational operator
- logical operator
- bang operator
- conditional statement
- if
- else
- string interpolation

#### Additional Resources

- [Conditionals from MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

#### Process

- `cd` into the `javascript-intro-challenges` repository
- Create a new branch: `conditionals-initials1-initials2` (ex. conditionals-aw-sp)
- `touch` a file with no spaces and `.js` extension: `conditionals-student1-student2.js` (ex. conditionals-austin-sarah.js)
- Open the folder in a text editor
- Code!

#### Troubleshooting Tips

- Is the file path correct?

---

### JavaScript Operators

Boolean is a primitive data type in JavaScript that evaluates to either `true` or `false`. Boolean values are very useful when making evaluations about data. **Equality operators** compare one value to the other and judge if the values equate to the same thing. If they do equate to the same, a Boolean value of true is returned. If it does not we get a Boolean value of false. There are two types of equality operators, the loose equality operator and the strict equality operator. The loose equality operator converts the two items to the same data type before making a comparison and the strict equality operator requires the two items being compared must be the same data type to return true.

```javascript
// loose equality operator
true == false
// output: false
3 == "3"
// output: true

// strict equality operator
true === false
// output: false
3 === "3"
// output: false
```

**Relational operators** look for a relationship between two values and Boolean value is returned.

```javascript
// greater than
2 > 0
// output: true

// less than
4 < 8
// output: true

// greater than or equal to
0 >= 2
// output: false

// less than or equal to
4 <= 0.8
// output: true
```

**Logical operators** are `and`, `or`, and `not`. The `and` and `or` operators take two complete statements and chain them together. The `logical and` is denoted by `&&` and states that both sides of the equation must be true. The `logical or` is denoted by `||` and states that at least one side of the equation must be true. The `logical not` is denoted by a **bang operator** that sets the logical opposite.

```javascript
// logical and
true && false
// output: false
true && true
// output: true
6 > 5 && 7 > 4
// output: true

// logical or
true || false
// output: true
true || true
// output: true
4 > 2 || 3 === "3"
// output: true

// negation
!true
// output: false
!false
// output: true
true !== false
// output: true
true !== true
// output: false
5 !== 5
// output: false
!(true && false)
// output: true
!(true && true)
// output: false
```

### Javascript Decisions

Programming is the art of solving very complex problems or processes by breaking each one into tiny, solvable pieces.

In development, **conditional statements** are commands for handling decisions. Specifically, conditionals perform different actions depending on whether the outcome of a Boolean condition evaluates to true or false.

A conditional statement is defined by the JavaScript keyword **if**. The `if` function takes a statement to be evaluated. If the statement evaluates to the Boolean value of true, the corresponding code statement will be executed.

```javascript
if(this thing is true) {
  console.log(do this)
}
```

The minimum requirement for a conditional statement is a single `if` function. However, there is often more decisions that need to be made. Think of the logic behind a simple switch that is either on or off. In code we can create logic that says, `if this thing is true, do this, otherwise, do this other thing`. To create an either-or statement we need to add an **else** statement will act as a catch all.

```javascript
if(this thing is true) {
  console.log(do this)
} else {
  console.log(do this other thing)
}
```

### If/Else Statements

All conditionals must have an `if` statement. If the set condition is true, the program will continue to run. If the condition is not true, nothing will happen.

```javascript
const carOn = true

if (carOn === true) {
  console.log("The engine is running.")
}
// output: "The engine is running."
```

If we want our code to execute something different when the `if` condition is not true, we will add an `else` to our program. `Else` is the catch all so we don't give it its own statement. It will automatically run when the `if` condition is not met.

```javascript
const carOn = false

if (carOn === true) {
  console.log("The engine is running.")
} else {
  console.log("The engine is off.")
}

// output: "The engine is off."
```

If we want more options in our decision structure, we can add an `else if` statement. This runs after the initial `if` and before the catch all `else`. The cool thing about `else if` statements is that you can use as many as you want. Once a condition is met, the program has finished running so the most specific condition should be prioritized.

```javascript
const carOn = true

if (carOn === true) {
  console.log("The engine is running.")
} else if (carOn === false) {
  console.log("The engine is off.")
} else {
  console.log("The car is broken.")
}
// output: "The engine is running."
```

### String Interpolation

When executing code logic, it is often necessary to return a detailed statement that can involve variables and additional text. Template literals, also known as **string interpolation** allows variables to be embedded into strings. Prior to this neat syntax the only way to use variables inside of strings was to use concatenation.

```javascript
const number1 = 34
const number2 = 78
console.log(number1 + " is less than " + number2)
// output: "34 is less than 78"
```

This expression can be modified using string interpolation.

```javascript
const number1 = 34
const number2 = 78
console.log(`${number1} is less than ${number2}`)
// output: "34 is less than 78"
```

### Conditional Statement Examples

**Example**: Write a statement that takes two variables and logs the one that has more letters.

```javascript
const fruit1 = "orange"
const fruit2 = "apple"

if (fruit1.length > fruit2.length) {
  console.log(`${fruit1} has more letters`)
} else if (fruit1.length < fruit2.length) {
  console.log(`${fruit2} has more letters`)
} else {
  console.log("They have the same letters")
}
// output: "orange has more letters"
```

**Example**: Write a statement that takes a number from 0 to 100 and logs the number of digits.

```javascript
const number = 9

if (number === 100) {
  console.log(`${number} is a triple digit number`)
} else if (number > 9 && number < 100) {
  console.log(`${number} is a double digit number`)
} else if (number >= 0 && number <= 9) {
  console.log(`${number} is a single digit number`)
} else {
  console.log("please enter a number from 0 to 100")
}
// output: "9 is a single digit number"
```

---

### 💻 Challenges

Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

Write the code that will log true or false for the following:

- Is 34 divided by 3 greater than 67 divided by 2?
- Does 5 evaluate to the same as "5"?
- Does 5 strictly equal "5"?
- Does !3 strictly equal 3?
- Does `"LEARN".length` strictly equal 5 AND `"Student".length` strictly equal 7?
- Does `"LEARN".length` strictly equal 5 OR `"Student".length` strictly equal 10?
- Does "LEARN" contain the subset `"RN"`?
- Does "LEARN" contain the subset `"rn"`?
- Does "LEARN"[0] strictly equal `"l"`?
- Modify the code from the previous question to return `true`.

Make sure you try different options and change the variables to ensure properly working code.

- Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

- Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

- Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

- Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

- Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

### 🏔 Stretch Goals

- Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

- Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. **HINT**: Check out the [JavaScript typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).

- Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes `!`, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes `!`, then log "That password is strong enough." Log "That is not a valid password." for every other input.

---

[Back to Syllabus](../README.md#unit-one-javascript-introduction)
