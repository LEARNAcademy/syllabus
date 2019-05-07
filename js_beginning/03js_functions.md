
# Intro to Functions
## Lecture
A function is a set of instructions detailing how to do a task. We can use the instructions to build something over and over again, in the same way that one blueprint can be used many times to build many buildings.

It is important to remember that there is a difference between a **function declaration** - creating the instructions, and a **function call** - following the instructions to perform a task.


For example, look at this **function declaration:**

```JavaScript
function greeting() {
    return "Hello There"
}
````

Notice the pieces of a function:

1.  The keyword 'function'
2.  The name of the function
3.  Parentheses which can also take 'arguments'
4.  Open and closing curly brackets
5.  A set of instructions inside the curly brackets
6.  A return statement right before the closing curly brackets


Great! We have a function. But this function has not yet been used in our program because we do not have a function call.  A **function call** looks like this....
```javascript
greeting()
```
 Notice that we used the same name that we gave when we declared the function. Calling the function by its name will tell the program to run through the steps declared in the greeting function.

In order to see the output of our function, let's wrap our function call in a **console.log** like this..


```JavaScript
function greeting() {
    return "Hello There"
}

console.log(greeting())

output >> Hello There

```


## Function Arguments

Functions often require some information in order to run. Pieces of outside information that is used when a function runs are called **arguments** to that function.  We put the arguments inside the parentheses of the function.

Let's rebuild our greeting() function to make it a little more versatile by allowing it to take in a name as an argument.  

```JavaScript

function greeting(name) {
    return "Hello " + name
}

console.log(greeting("Sally"))

output >> Hello Sally

```

Notice that in the function we created a **placeholder** called 'name'. This allows us to pass any name we want through the function during the function call.  


## Pseudo Code

There are two things that are hard about writing functions. The first thing is deciding exactly what your function needs to do, and the second hard thing is figuring out the code that will make that happen.

Since both of those things are hard in the first place, it is really confusing to try and do both at once. So, it is common practice to write what we call pseudo code, which isn't actually code at all, just normal words.

Writing pseudo code is a really good mental habit to get into, because it breaks up the hard parts about writing functions into two separate stages. It goes like this:


1. Write out all the logical steps of what you need to do -- no code allowed

2. Turn those logical steps into actual code

This is great, because it means that while you are thinking up your logic, you aren't distracted by how to write it in code. And conversely, when you are writing code, you aren't also trying to think of what comes next.



Let's look at an example using pseudo code and adding a conditional inside the function.

Exercise: Write a function called old_enough that takes in 1 number as an argument and tells whether or not the person is allowed to drink (over 21).  

Here's what the pseudo code might look like:
```Javascript
//create a function called old_enough

//takes in 1 number as an arguments

//if number is less than 21 retun 'can not drink' (if/else statment)

//otherwise return 'allowed to drink'
```
Now lets build the actual code around the pseudo code.

```JavaScript
//create a function called old_enough
//takes in 1 number as an arguments
function old_enough(number){
    //if number is less than 21 return 'can not drink'(if/else statement)
    if(number < 21){
        return "Can not drink"
    //otherwise return 'allowed to drink'
    } else {
        return "Allowed to drink"
    }
}

console.log(old_enough(25));
output -> Allowed to drink

console.log(old_enough(19));
output -> "Can not drink"

console.log(old_enough(12);
output -> "Can not drink"

```


## Verify

Notice that we called 'old_enough' several times using different test cases.  You'll want to verify that your function is working by testing it with many different arguments.  

## Console.log  vs  Return
Notice that we can call console.log as many times as we want and we can even call console.log inside functions like this...

```JavaScript
function greeting(name) {
    console.log(name);
    return "Hello " + name
}

console.log(greeting("Tom"))

output -> "Tom"
output -> "Hello Tom"

```
However, we can only have 1 return in a function.  Note that code after the function returns something will not execute.



## Challenges


Below are exercises in writing functions.

1.  Write a function called marco that returns "polo".

2.  Write a function called greeting that takes a name as an argument and returns 'welcome <person's name here>''

3.  Write a function called oddOrEven that takes an number as an argument and returns whether the number is odd or even.

4.  Write a function called triple that takes a number as an argument and returns the result of that number multiplied by 3.

5.  Write a function called multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.

6.  Write a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

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

[practice more with Edabit](https://edabit.com/challenges/javascript)

[Go to Javascript Arrays](./04js_arrays.md)


[Back to Javascript Functions](./02js_conditions.md)
