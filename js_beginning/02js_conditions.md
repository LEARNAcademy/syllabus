# JavaScript Decision Structures

[![YouTube](http://img.youtube.com/vi/Ee_Phg9Ip-k/0.jpg)](https://www.youtube.com/watch?v=Ee_Phg9Ip-k)


## Javascript Decisions

Programming is the art of solving very complex problems or processes by breaking each problem into tiny, solvable pieces.

One of the tools that helps us break down problems is the `if/else` decision structure. Think of the logic behind a simple switch that is either on or off. In code we can create logic that says,
`if one thing is true, do this, otherwise, do this other thing.`
In fact, the javascript code for creating these decision structures reads almost like our sentence did:
```
if(this thing evaluates to true) {
    console.log(do this thing)
} else {
    console.log(do this other thing)
}
```

## If/Else

All conditionals must have an `if` statement. If the set condition is true, the program will continue to run. If the condition is not true, nothing will happen.

```javascript
var carOn = true

if(carOn === true) {
    console.log("The engine is running.");
}
```
If we want our code to execute something if the `if` condition is not true, we add an `else` to our program. `Else` is the catch all so we don't give it its own statement. It will automatically run if the `if` condition is not met.

```javascript
var carOn = false

if(carOn === true) {
    console.log("The engine is running.");
} else {
    console.log("The engine is off.");
}
```
If we want more options in our decision structure, we can add an `else if` statement. This runs after the initial `if` and before the catch all `else`. The cool thing about `else if` statements is that you can use as many as you want. Once a condition is met, the program has finished running so the most specific condition should be prioritized.

```javascript
var carOn = true

if(carOn === true) {
  console.log("The engine is running.");
} else if(carOn === false) {
  console.log("The engine is off.");
} else {
  console.log("The car is broken.");
}
```

Example: Write an `if/else` statement that takes two variables of fruit and logs the one that is more letters

```javascript
var fruit1 = "orange"
var fruit2 = "apple"

if (fruit1.length > fruit2.length) {
    console.log(fruit1 + " has more letters");
} else if(fruit1.length < fruit2.length) {
    console.log(fruit2 + " has more letters");
} else {
    console.log("They have the same letters");
}
```
Example: Write an `if/else` statement that takes a variable of a number from 0 to 100 and logs the number of digits
```javascript
var number = 9

if(number === 100) {
    console.log(number + " is a triple digit number")
} else if(number > 9 && number < 100) {
    console.log(number + " is a double digit number")
} else if(number >= 0 && number <= 9){
    console.log(number + " is a single digit number")
} else {
    console.log("please enter a number from 0 to 100")
}
```

## Resources:

Some further reading and resources here: <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals" target="blank">Conditionals from MDN</a>

## Challenges

Make sure you try different options and change the variables to ensure properly working code.

1. Write an `if/else` statement that takes a variable of item and logs "in budget" if a price is $100 or less.

1. Write an `if/else` statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

1. Write an `if/else` statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

1. Write an `if/else` statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.

1. Write an `if/else` statement that takes a variable of a number and logs whether the number is odd, even, or zero.

### STRETCH Challenges

1. Write an `if/else` statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available.

1. Write an `if/else` statement that takes a variable of a boolean, number, or string  datatype and logs the data type of the variable **HINT**: use the JS operator `typeof`.

### EPIC Challenge: Password Checker

1. Create a password checker using a single `if/else` statement. If a user inputs a password with 12 or more characters AND the password includes `!`, then log "That is a mighty strong password". If the user’s password is equal to 8 or more characters OR includes `!`, then log "that password is strong enough!". Log "password is not strong enough" for every other input.


[Go to next lesson: Javascript Arrays](./04js_arrays.md)

[Back to Javascript Intro](./01js_intro.md)

[Back to Syllabus](../README.md)
