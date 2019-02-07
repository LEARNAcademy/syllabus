# JavaScript Decision Structures

## Javascript Decisions

Programming is the art of solving very complex problems or processes by breaking each problem into tiny, solvable pieces.

One of the tools that helps us break down problems is the `if/else` decision structure. Think of the logic behind a simple switch that is either on or off. In code we can create logic that says,
`if one thing is true, do this, Otherwise, do this other thing.`
In fact, the javascript code for creating these decision structures reads almost like our sentence did:
```
if(this = true) {
    console.log(do this thing)
} else {
    console.log(do this other thing)
}
```

## If/Else

All conditional must have an `if` statement. If the set condition is true the program will continue to run. If the condition is not true, nothing will happen.

```javascript
if(true) {
    console.log("I'm running!");
}
```
If we want our code to execute something if the `if` condition is not true we add an `else` to our program. `Else` is the catch all so we don't give it its own statement. It will automatically run if the `if` condition is not met.

```javascript
if(true) {
    console.log("I'm running");
} else {
    console.log("I'm not running");
}
```
If we want more options in our decision structure we can add an `else if` statement. This runs after the initial `if` and before the catch all `else`. The cool thing about `else if` statements is you can use as many as you want. Once a condition is met, the program has finished running so the most specific condition should be prioritized.

```javascript
if(true) {
  console.log("I'm running");
} else if(false) {
  console.log("I'm not running");
} else {
  console.log("There was an error");
}
```

Another example:

```javascript
var name = prompt("What is your name?")

if (name === "Socrates") {
    console.log("Hi Socrates!");
} else if(name === "Plato") {
    console.log("Hi Plato!");
} else if(name === "Aristotle") {
    console.log("Hi Aristotle!");
} else {
    console.log("Hey there!");
}
```

## Resources:

Some further reading and resources here: <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals">Conditionals from MDN</a>

## Challenges

Make sure you try different options and change the variables to ensure properly working code.

#### If/Else
<ol>
    <li>Write an `if/else` statement that takes a variable of item and logs "in budget" if a price is $100 or less.</li>

    <li>Write an `if/else` statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.</li>

    <li>Write an `if/else` statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.</li>

    <li>Write an `if/else` statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.</li>

    <li>Write an `if/else` statement that takes a variable of a number and logs whether the number is odd, even, or zero.</li>

</ol>

#### Stretch Challenges
<ol>
    <li>Write an `if/else` statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available"</li>
    <li>Write an `if/else` statement that takes a variable of any data type and logs the data type (**hint**: use the JS operator `typeof`)</li>
</ol>
