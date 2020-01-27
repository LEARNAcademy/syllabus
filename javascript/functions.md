# JavaScript Functions

[![YouTube](http://img.youtube.com/vi/K2ACS1cfCCI/0.jpg)](https://www.youtube.com/watch?v=K2ACS1cfCCI)

A function is a set of instructions detailing how to do a task. We can use the instructions to build something over and over again, in the same way that one blueprint can be used many times to build many buildings.

It is important to remember that there is a difference between a **function declaration** - creating the instructions, and a **function call** - following the instructions to perform a task.


For example, look at this **function declaration:**

```JavaScript
var greeting = () => {
    return "Hello There"
}
````

Notice the pieces of a function:

1.  Assigning a function to a variable.
2.  The name of the function
3.  Parentheses which can also take 'arguments'
4.  The fat arrow syntax
5.  Open and closing curly brackets
6.  A set of instructions inside the curly brackets
7.  A return statement right before the closing curly brackets


Great! We have a function. But this function has not yet been used in our program because we do not have a function call.  A **function call** looks like this....
```javascript
greeting()
```
Notice that we used the same name that we gave our variable that points to the function. Calling the function by its name will tell the program to run through the steps declared in the greeting function.

In order to see the output of our function, let's wrap our function call in a **console.log** like this..


```JavaScript
var greeting = () => {
    return "Hello There"
}
console.log(greeting())

output -->> Hello There
```

## Function Arguments

Functions often require external information in order to run. Pieces of outside information that is used when a function runs are called **arguments** to that function.  We put the arguments inside the parentheses of the function.

Let's rebuild our greeting() function to make it a little more versatile by allowing it to take in a name as an argument.

```JavaScript
greeting = (name) => {
    return "Hello " + name
}

console.log(greeting("Sally"))
output -->> Hello Sally
```
Notice that in the function we created a **placeholder** called `name`. This allows us to pass any name we want through the function during the function call.

The function is an encapsulated machine that can be called many times and give a unique output.

```JavaScript
console.log(greeting("Sam"))
output -->> Hello Sam
console.log(greeting("John"))
output -->> Hello John
console.log(greeting("Carol"))
output -->> Hello Carol
```

## Other Syntax for functions

There are lots of ways to write functions. The primary one we use today, and the one shown above is called an arrow (or fat arrow) function using `ES6 syntax`. Below is a version you'll see in older JavaScript. It accomplishes primarily the same thing, with a few differences in scope. ES6 syntax is quickly taking over and you should stick with it unless there is a reason not to. For reference: [https://www.w3schools.com/js/js_es6.asp](https://www.w3schools.com/js/js_es6.asp)

### Old-School function declarations

The word `function` is a keyword in JavaScript, and we can use it to declare a function.

```JavaScript
function greeting(name){
    return "Hello " + name
}

console.log(greeting("Sally"))

output >> Hello Sally
```


## Pseudocode

There are two things that are hard about writing functions. The first thing is deciding exactly what your function needs to do, and the second hard thing is figuring out the code that will make that happen.

Since both of those things are hard in the first place, it is really confusing to try and do both at once. So, it is common practice to write what we call pseudocode, which isn't actually code at all, just normal words.

Writing pseudocode is a really good mental habit to get into, because it breaks up the hard parts about writing functions into two separate stages. It goes like this:


1. Write out all the logical steps of what you need to do -- no code allowed

2. Turn those logical steps into actual code

This is great, because it means that while you are thinking up your logic, you're not distracted by how to write it in code. And conversely, when you are writing code, you're not also trying to think of what comes next.



Let's look at an example using pseudocode and adding a conditional inside the function.

Exercise: Write a function called tallEnough that takes an argument of a person's height as an argument and tells whether or not the person is tall enough to ride the rollercoaster.

Here's what the pseudocode might look like:
```JavaScript
//create a function called tallEnough

//takes in 1 number as an arguments

//if number is less than 40 return 'can not ride rollercoaster' (if/else statement)

//otherwise return 'allowed to ride rollercoaster'
```
Now let's build the actual code around the pseudocode.

```JavaScript
//create a function called tall_enough
//takes in 1 number as an arguments
var tallEnough = (number) => {
  //if number is less than 40 return 'can not ride rollercoaster'(if/else statement)
  if(number < 40){
    return "Can not ride rollercoaster"
  //otherwise return 'allowed to ride rollercoaster'
  } else {
    return "Allowed to ride rollercoaster"
  }
}

console.log(tallEnough(58))
output -->> "Allowed to ride rollercoaster"

console.log(tallEnough(37))
output -->> "Can not ride rollercoaster"

console.log(tallEnough(24)
output -->> "Can not ride rollercoaster"
```


## Verify

Notice that we called 'tallEnough' several times using different test cases.  You'll want to verify that your function is working by testing it with many different arguments.

## console.log()  vs  return
Notice that we can call console.log() as many times as we want and we can even call console.log inside functions like this...

```javascript
var greeting = (name) => {
    console.log(name)
    return "Hello " + name
}

console.log(greeting("Tom"))

output -> "Tom"
output -> "Hello Tom"
```

However, we can only have 1 return in a function.  Note that code after the function returns something will not execute.


## Challenges

**DON'T FORGET TO PSEUDOCODE**

1. Write a function named marco that returns "polo".

2. Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

3. Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

4. Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

5. Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.

6. Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

7. Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.


### STRETCH Challenges

**Test your functions with multiple calls**

1. What number's bigger: Write a function named greaterNum that takes 2 arguments, both numbers and returns whichever number is the greater (higher) number

2. The World Translator: Write a function named helloWorld that takes 1 argument, a language code (e.g. "es", "de", "en") and returns "Hello, World" for the given language, for at least 3 languages (it should [default](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) to returning English)

3. The Pluralizer: Write a function named pluralizer that takes 2 arguments, a number and a singular noun and returns the number and pluralized form of the noun, if necessary

  pluralizer = (5, cat)

  Expected outcome -->> "5 cats"

  pluralizer = (1, dog)

  Expected outcome -->> "1 dog"

- Bonus: Make it handle a few collective nouns like "sheep", "goose", "child", "person" and "species"


### Practice functions with [Edabit](https://edabit.com/challenges/javascript)

[Go to next lesson: JavaScript Functions, Loops, and Arrays](./functions-loops-arrays.md)

[Back to JavaScript Loops](./loops.md)

[Back to Syllabus](../README.md)
