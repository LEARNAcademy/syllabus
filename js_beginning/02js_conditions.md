# JavaScript Decision Structures

## Resources:

<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals">Conditionals from MDN </a>

## Javascript Decisions:

Programming is the art of solving very complex problems or processes by breaking each problem into tiny, solvable pieces.

One of the tools that helps us break down problems is the if/else decision structure. Think of the logic behind a simple switch, like a light switch or turning something on or off. In code we can create logic that says,
``` if one thing happens, do this. Otherwise, do this other thing```
In fact, the javascript code for creating these decision structures reads almost like our sentence did:
```
if(one thing is true) {
  	do this
} else {
	do this other thing
}

```
Don't mind all those curly brackets and parentheses so much right now, they will become second nature in no time.

## Some Examples

Consider what is going on in the following example. The first if statement will create a popup box with the message "I'm running", but the second if statement won't do anything, because the if condition in parentheses must be true in order to run the logic inside.

```javascript
if(true) {
  alert("I'm running!");
}

if(false) {
  alert("I'm running");
}

```

If statements might seem too simple to use in real applications. But take a look at the code below, can you follow what it is doing?

```javascript
if(credentialsValidator(userId, password) === true) {
  alert("Credentials accepted");
}
if(credentialsValidator(userId, password) === false) {
  alert("Credentials are not valid");
}
```
The code above runs a function that takes in a userId and password, and returns whether or not the credentials are valid. It just goes to show how if statements will show up in even very complex programs.


#### If and Else

If statements allow us to perform an action only when a certain condition is true. But what if we want to handle more possibilities than that?

If we want to trigger one action when a condition is true, and another when the condition is false, we can use the "else" block:

```javascript
var a = true;
if(a) {
  alert("a is true");
} else {
  alert("a is false");
}
```

Notice that the else block doesn't specify a condition in parentheses like if does. This is because the else is simply what happens if the condition specified in the "if" part is false. You can have an "if" statement by itself, but not an else.


#### If, else, and else-if

With "if" and "else", we can specify two actions - the first is what should happen if something is true, the second is what should happen if the condition is false. But what if we need a third option?

Here is an example:
```javascript
var number = 40

if(number > 50) {
  console.log("The number is greater than 50")
} else if(number < 50) {
  console.log("The number is less than 50")
} else {
  console.log("The number is 50")
}

```



## Challenges

#### If/Else

Write an if / else statement that logs "eat food" if you are hungry and "keep working" if you are not hungry.

Write an if / else statement that logs "drink coffee" if you are tired and "keep going" if you are not tired.   

Write an if / else statement that logs "in budget" if a price is lower than $250.  

Write an if / else statement that considers two variables (numbers) and outputs the larger number.

Write an if / else statement that considers a variable (number) and logs whether the number is odd or even.

Write an if / else statement that considers a variable (fruit) and logs the color of that fruit.
