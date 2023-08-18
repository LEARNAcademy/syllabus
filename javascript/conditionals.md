# JavaScript Conditionals

#### Overview

Decision structures, also called decision trees, conditional statements, or if/else statements, are fundamental to computer programming. Conditional statements are a sequence of well-defined instructions that produce a unique output based on the value of the input. Conditionals follow a flowchart-like structure and allow for logic within the code.

#### Previous Lecture (41 min)

[![YouTube](http://img.youtube.com/vi/yHe4d6qQZC0/0.jpg)](https://www.youtube.com/watch?v=yHe4d6qQZC0)

#### Learning Objectives

- can recognize and distinguish equality, relational, logical operators
- can recall the syntax of an if/else block
- can create a tree of if/else decisions in order to produce a solution to a given problem
- can use `console.log` to see the appropriate output
- can successfully run a JavaScript file in the terminal

#### Vocabulary

- equality operator
- loose equality operator
- strict equality operator
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
- Did you log all possible outcomes?
- Check for correct indentation and any missing curly braces.

---

### JavaScript Operators

Boolean is a primitive data type in JavaScript that evaluates to either `true` or `false`. Boolean values are very useful when making evaluations about data.

The three categories of JavaScript evaluations are

1. equality,
2. relational,
3. and logical.

**Equality operators** compare two values and judge if the two values equate to the same thing. If they equate, a Boolean value of true is returned. If they do not equate to the same thing we get a Boolean value of false.

The two types of equality operators are

1. the loose equality operator which is denoted by two equal signs `==`, and
2. the strict equality operator which is denoted by three equal signs `===`.

The **loose equality operator** in JavaScript will do its best to convert the two values to the same data type before making an evaluation.

**Loose Equality Operator**

```javascript
true == false
// output: false

3 == "3"
// output: true

"3" == 1 + 2
// output: true
```

The **strict equality operator** evaluates the two values "as is" without converting data types to determine if the two values equate to the same thing. If the two values being compared are the same data type and equate to the same thing, we get a Boolean value of true. If they are different data types, the evaluation will return false.

It is best practice to ALWAYS use the strict equality operator when making evaluations in JavaScript.

**Strict Equality Operator**

```javascript
true === false
// output: false

3 === "3"
// output: false

"3" === 1 + 2
// output: false
```

**Relational operators** evaluate numeric values for their relative magnitude and return a Boolean value. Relational operators are commonly referred to as greater than, less than, greater than or equal to, and less than or equal to.

**Relational Operators**

```javascript
// greater than
2 > 0
// output: true

// less than
4 < 4 + 4
// output: true

// greater than or equal to
0 >= 2
// output: false

// less than or equal to
4 <= 0.8
// output: true
```

**Logical operators** take two complete statements and link them together to return a single evaluation of `true` or `false`.

The three types of logical operators are

1. `logical AND` which is denoted by two ampersands `&&`,
2. `logical OR` which is denoted by two pipes `||`,
3. `negation` which is denoted by the bang operator `!`.

The `logical AND` takes two or more complete evaluations and states that all statements must be true for the entire statement to be evaluated as true.

**Logical AND**

```javascript
true && false
// output: false

true && true
// output: true

6 > 5 && 7 > 4
// output: true

6 > 5 && 7 < 4
// output: false

"hi" === "HI".toLowerCase() && 4 > 3 && 8 >= 8
// output: true
```

The `logical OR` takes two or more complete evaluations and states that at least one statement must be true for the entire statement to be evaluated as true.

**Logical OR**

```javascript
true || false
// output: true

true || true
// output: true

false || false
// output: false

4 > 2 || 3 === "3"
// output: true

"hi" === "HI" || false || 8 >= 10
// output: false
```

Negation takes a statement and returns its logical opposite. Negation is performed by adding the bang operator to the beginning of the statement. A **bang operator** is denoted by an exclamation point that precedes the statement and will return the inverse Boolean value.

**Negation**

```javascript
!true
// output: false

!false
// output: true

!(true && false)
// output: true

!(true && true)
// output: false
```

Another way to use the bang operator is in conjunction with the equality operator. Replacing one of the equal signs in the equality operator with the bang operator is called the inequality operator. The inequality operator evaluates whether the two values do not NOT equate to the same thing.

```javascript
true !== false
// output: true

true !== true
// output: false

5 !== 5
// output: false
```

### Javascript Decisions

Programming is the art of solving very complex problems or processes by breaking each one into tiny, solvable pieces.

In development, conditional statements are commands for handling decisions. Specifically, **conditional statements** perform different actions depending on whether the outcome of a condition evaluates to true or false.

A conditional statement is defined by the JavaScript keyword **if**. The `if` statement is followed by parentheses `if()`. The parentheses contain an evaluation. The evaluation will have the outcome of either the Boolean value of true or false. If the statement evaluates to the Boolean value of true, the corresponding code inside the curly braces will be executed.

```javascript
if (this thing evaluates to true) {
  console.log(do this action)
}
```

All conditionals must have an `if` statement. If the evaluation inside the parentheses following the `if` statement is true, the program will execute the code inside the curly braces.

```javascript
const car = "on"

if (car === "on") {
  console.log("The engine is running.")
}
// output: "The engine is running."
```

If the evaluation is false, nothing will happen.

```javascript
const car = "off"

if (car === "on") {
  console.log("The engine is running.")
}
// no output
```

### Else Statements

The minimum requirement for a conditional statement is a single `if`. With a single `if` statement the possible outcomes are the code inside the curly braces of the `if` statement or no output at all. Sometimes this is all that is required.

However, there are often situations that are more complex than just one decision. If the `if` statement evaluates to false we may still want an output. This would modify the something-or-nothing structure to instead be `if this thing is true, do this, otherwise, do this other thing`.

To create an either-or statement we need to add an **else** statement that will act as a catch all. Since `else` is the catch all, it will not have an evaluation. It will automatically execute when no other conditions have evaluated to be true.

```javascript
if(this thing evaluates to true) {
  console.log(do this action)
} else {
  console.log(do this other action)
}
```

If the code in the parentheses of the `if` statement evaluates to true, the code in the corresponding curly braces will execute.

```javascript
const car = "on"

if (car === "on") {
  console.log("The engine is running.")
} else {
  console.log("The engine is off.")
}

// output: "The engine is running."
```

If the code in the parentheses of the `if` statement evaluates to false, the code in the `else` statement will execute.

```javascript
const car = "off"

if (car === "on") {
  console.log("The engine is running.")
} else {
  console.log("The engine is off.")
}

// output: "The engine is off."
```

### Else If Statements

If we want more options in our decision structure, we can add an `else if` statement. This runs after the initial `if` and before the catch all `else`.

```javascript
const car = "off"

if (car === "on") {
  console.log("The engine is running.")
} else if (car === "off") {
  console.log("The engine is off.")
} else {
  console.log("The car is broken.")
}
// output: "The engine is off."
```

The cool thing about `else if` statements is that you can use as many as you need. Once a condition is met, the program has finished running so the most specific condition should be prioritized.

```javascript
const number = 42

if (number === 42) {
  console.log("This is the answer to life, the universe, and everything")
} else if (number > 10) {
  console.log("The number is greater than 10")
} else if (number < 10) {
  console.log("The number is less than 10")
} else {
  console.log("Something went wrong")
}
// output: "This is the answer to life, the universe, and everything"
```

### String Interpolation

When executing code logic, it is often necessary to return a detailed statement that can involve variables as well as additional text characters. Template literals, also known as **string interpolation** allows variables to be embedded into strings. Prior to this neat syntax the only way to add variables to strings was to use concatenation.

**Concatenation**

```javascript
const number1 = 34
const number2 = 78
console.log(number1 + " is less than " + number2)
// output: "34 is less than 78"
```

String interpolation is much more readable. To create a statement using string interpolation we will wrap the entire string in backticks. The backtick character can be found on the same keyboard key as the tilda `~`. Once the string is in backticks we can embed JavaScript variables using the syntax `${}`.

**String Interpolation**

```javascript
const number1 = 34
const number2 = 78
console.log(`${number1} is less than ${number2}`)
// output: "34 is less than 78"
```

### Conditional Statement Examples

Here are some additional examples of conditional statements. Note the different types of evaluations combined to create a cohesive decision.

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
- Does `"LEARN"` contain the subset `"RN"`?
- Does `"LEARN"` contain the subset `"rn"`?
- Does `"LEARN"[0]` strictly equal `"l"`?
- Modify the code from the previous question to return `true`.

Write a conditional statement for the following prompts. Make sure you try different options and change the variables to ensure properly working code.

- Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
- Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
- Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
- Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
- Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

### 🏔 Stretch Goals

Write a conditional statement for the following prompts.

- Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
- Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. **HINT**: Check out the [JavaScript typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).
- Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes `!`, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes `!`, then log "That password is strong enough." Log "That is not a valid password." for every other input.

---

[Back to Syllabus](../README.md#unit-one-javascript-introduction)
