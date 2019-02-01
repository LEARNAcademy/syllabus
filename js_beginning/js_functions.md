
# Intro to Functions
## Lecture
A function is a set of instructions detailing how to do a task. We can use the instructions to build something over and over again, in the same way that one blueprint can be used many times to build many buildings.

This means there is a difference between creating or 'declaring' a function (creating the instructions), and running the function (following the instructions to perform a task). When we 'call' or 'run' a function, it means we go through that set of instructions and do the task.  

For example, look at this function declaration:

```
function name: make_a_sandwich

// 1. Decide on the inner ingredients ( bacon, lettuce, tomato etc...)

// 2. Wrap the inner ingredients in bread

// 3. Put on plate

// 4. Serve sandwich

```

Great! We have a function. But -- no sandwich. Now, we need to follow our instructions to make a sandwich, all we have to do is say:
```
make_a_sandwich()
```
The above is a function 'call'. Notice that we used the same name that we gave when we declared the function. Calling the function by its name will tell the program to run through the steps declared in the make_a_sandwich function, which gets us a sandwich.

## Two big things

This brings us to the important bits about functions. Take a look at the two rules of functions:

1. Functions often require some information in order to run (in the case of our make_a_sandwich function, it needs to know what kind of sandwhich to make). Pieces of outside information that are used when a function runs are called 'arguments' to that function.

2. Functions must return something. In other words, a function that does some calculation or other work but never gives you back new information isn't very useful.

Remember that functions have to be very explicit about how to do things, because computers can only follow the instructions.


## Pseudo Code

There are two things that are hard about writing functions. The first thing is deciding exactly what your function needs to do, and the second hard thing is figuring out the code that will make that happen.

Since both of those things are hard in the first place, it is really confusing to try and do both at once. So, it is common practice to write what we call pseudo code, which isn't actually code at all, just normal words.

Writing pseudo code is a really good mental habit to get into, because it breaks up the hard parts about writing functions into two separate stages. It goes like this:


1. Write out all the logical steps of what you need to do -- no code allowed

2. Turn those logical steps into actual code

This is great, because it means that while you are thinking up your logic, you aren't distracted by how to write it in code. And conversely, when you are writing code, you aren't also trying to think of what comes next.


This is an example of using pseudo code:

```javascript
// TODO: Create a function that takes in a number between 1 & 10 (call this number: userNumber) and gives back a new, hard to guess number

	// 1. multiply the number by itself

	// 2. add 42

	// 3. multiply by .3

	// 4. return the result

```

Once we've decided what we need to do, it isn't so hard to create the code that does each of those things, we just tackle them step by step:

```javascript
function create_a_secret_number(userNumber) {
  // 1. multiply the number by itself
  var secretNumber = userNumber * userNumber
  // 2. add 42
  secretNumber = secretNumber + 42
  // 3. multiply by .3
  secretNumber = secretNumber * .3
  // 4. return the result
  return secretNumber
}
```

## Verify

The only thing to do now is verify that our function actually works! Run all the examples and fix any bugs.
This is another way that pseudo code will really help you out. If you have separated the logic from the code syntax, it is easier to see if the bug you found is a logic problem or a syntax problem.
With the above implementation `create_a_secret_number(4)` returns "17.4". Not too bad!! Now that we have it working, we can figure out how to make it better. For instance, we probably want to do something about that decimal number later. How would you make this function better?

## Challenges



Below are exercises in writing functions.

1.  Write a function called marco that logs "polo" to the screen.

2.  Write a function called greeter that takes a name as an argument and logs a greeting with that name to the screen.

3.  Write a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even.

4.  Write a function called triple that takes a number as an argument and logs the result of that number multiplied by 3.

5.  Write a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

6.  Write a function called divisibleBy that takes two numbers as arguments and logs whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

Below are slightly harder challenges.  
##### Remember to write the pseudo code for each function before you write the code!

#### What number's bigger?

Write a function named greaterNum that:
* takes 2 arguments, both numbers.
* returns whichever number is the greater (higher) number.
* Test the function 2 times with different number pairs


#### The World Translator

Write a function named helloWorld that:
* takes 1 argument, a language code (e.g. "es", "de", "en")
* returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
* Test the function for each of the supported languages

#### The Grade Assigner

Write a function named assignGrade that:
* takes 1 argument, a number score.
* returns a grade for the score, either "A", "B", "C", "D", or "F".
* Test the function for a few different scores.

#### The Pluralizer

Write a function named pluralize that:
* takes 2 arguments, a noun and a number.
* returns the number and pluralized form of the noun, if necessary.

``` pluralizer(5, cat) ``` should return "5 cats"
``` pluralizer(1, dog) ``` should return "1 dog" because the number one does not require a plural noun

* Bonus: Make it handle a few collective nouns like "sheep", "geese", "children", "people" and "species".

### Epic Challenge

Consider this variable:

var product = { name: "chair", price: 14.99 }

Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".

Consider this function:
````JavaScript
function message(product, inBudget){
  if (inBudget) {
    return "Product is within budget"
  } else {
    return "Product is beyond budget"
  }
}````
And consider this variable:

````JavaScript
var product = { name: "OledMonitor", price: 300.00 }
var budget = 275.00````

Write a function checkBudget that takes a product, budget and the message function as arguments, determines whether the product is within budget and returns the result of the message function.

Refactor the previous exercise to replace "Product" in the return to the name of the product.

For example

 checkBudget(product, budget, message) ----> "OledMonitor is beyond budget"
