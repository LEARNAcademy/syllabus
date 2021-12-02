# JavaScript Testing with Jest

## Video: Jest
[![YouTube](http://img.youtube.com/vi/em5X2zJH-N0/0.jpg)](https://www.youtube.com/watch?v=em5X2zJH-N0)

## Overview
- Testing is the process of creating automated quality assurance for your code
- Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase
- Jest was created by Facebook and used by Twitter, Spotify, and Airbnb

## Learning Objectives
- Understanding the anatomy of a Jest test
- Exploring the philosophy of test driven development
- Practicing red-green refactor development

## Vocabulary
- yarn
- Jest
- TDD
- red-green refactor

## Useful Commands
- $ yarn add jest
- $ yarn jest

## Additional Resources
- [Jest Official Documentation](https://jestjs.io/)
- [Jest Cheat Sheet](https://github.com/sapegin/jest-cheat-sheet#test-structure)
- [Jest Matchers](https://jestjs.io/docs/en/using-matchers)

#### Process
- `cd` into the `javascript-foundations-challenges` repository
- Create a new branch: `jest-initials1-initials2` (ex. jest-aw-sp)
- Create a new directory `mkdir` jest-student1-student2 (ex. jest-austin-sarah)
- `cd` into the directory you just created
- `touch` a file called: `jest.test.js`
- Add the dependencies by running $ `yarn add jest` in the terminal
- Open the Jest folder in a text editor
- Code!

---


## Testing Code
One of the fastest ways to prove to future employers that you care about your code, and know what you are doing, is to write good tests.  Your tests speak volumes about you as a developer, as much or more than the actual code.  

Not all developers do this, so you can easily set yourself apart.  It's almost like cheating the job hunt!  Show off your tests and you'll get lots of second interviews.

In short, there is no end to the winning when you write tests for your code.  You win, your coworkers win, your employer wins, your users win, and your future self wins when you come back to the code in 6 months.


## Why Test?
- Better, cleaner code
- Less bugs
- Helps in your job hunt
- Forces the developer to think about the input and output before beginning to code
- Avoid feature creep - stay focused on essential piece of the program
- Tests can save you lots of time bug fixing a new feature
- Communicates to other developers the intent of the function
- Allows for "safe" and confident refactoring of code


## TDD ( **Test Driven Development** )
There is another, and even more powerful benefit to writing tests for your code as well.  When we write our tests **first**, then write the code required to make them pass, we as developers, are thinking about our code in a different, more logical way.  

Breaking the code into a series of tests helps us break the big problem down into much *smaller* ones, and smaller problems are **easier** to solve, so we write dramatically better code because of it.

If that is not enough to convince you to write great tests for your code, here is one more benefit, which is equally as important.  If you have solid tests, and decide that you want to refactor some part of your application because either the requirements of the application changed, or you have realized a better way, you are free to do so with confidence.  During the entire refactor, you are confident that you aren't breaking your app because your tests pass.

Its *incredibly* liberating!


**Process**
- 1:  **Write the test first!**
- 2: Run your testing suit to see a failing test
- 3: Write the code
- 4: Run your testing suit to see your test pass
- 5: Refactor if necessary
- This is known as **Red-Green Refactor**


## Testing Syntax with Jest

Jest is a JavaScript testing framework. The framework is a collection of files that are managed by `yarn` a technology created by Facebook to manage dependency files.

- `describe()` - Jest uses a method called **describe()** that runs other nested methods.
  - Here we provide an argument of a string, with the name of our function, or the name of this particular test.
- `test()` or `it()` - **test()** or **it()** are methods nested within the describe's code block.
  - Here we provide an argument of string, which is a statement that explains in **regular words** what the test is doing.
- `expect()` - **expect()** is a method that is nested within the test's code block. It calls the function being tested, passes any test-case arguments.
  - Here we follow it with a **matcher** ( Example: **.toEqual()** or **.toBe()** ) that compares the output.
    - Learn more about [Jest Matchers](https://jestjs.io/docs/en/using-matchers).


Here's an example of a JavaScript test using Jest:

This is a test for a function called `hello()` that returns a string that says `hi`.

```javascript
// a describe method that lists the name of the function OR naming of the particular test.
describe("hello", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("returns a string that says hi", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(hello()).toEqual("hi")
  })
})
```

Every Jest test requires a describe method, a test method nested within that describe block, and at least one expect method nested within the test's block. In order for our expect to work, it needs to have a matcher chained onto it, which will check the returning output.

First we invoke the describe method, providing the argument of "hello" which is our function name, followed by a comma, a set of parentheses, a fat arrow and a opening curly brace to allow us to nest more code within its block scope.

Second we invoke the test method, providing it an argument that in plain words explains what the function does, followed by a comma, a set of parentheses, fat arrow and its own opening curly brace allowing us to nest more code within its block scope.

Third we then invoke the expect method, providing it an argument of the function call, and then chain a matcher to the end of it, in this case we use `.toEqual()`, which will check that the return of the function to be a string that says hi.


Run `yarn jest` in the terminal to run the test. We can expect that the test will fail since we haven't created the function yet (the **red** part of **red-green refactor**).

```
 FAIL  ./jest.test.js
  hello
    ✕ returns a string that says hi (2ms)

  ● hello › returns a string that says hi

    ReferenceError: hello is not defined

      1 | describe("hello", () => {
      2 |   it("returns a string that says hi", () => {
    > 3 |     expect(hello()).toEqual("hi")
        |     ^
      4 |   })
      5 | })
      6 |

      at Object.test (jest.test.js:3:5)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.102s
Ran all test suites.
```

Yay! A good failure! The test points to exactly where the issue is in the code through an error message and an arrow `^` at the point it failed. The test is looking for a function called hello and cannot find one.

We can tell this is the case, because of the `ReferenceError: hello is not defined` part of the fail message. This tells us that our test is written correctly, but it failed because when our expect method tried to invoke the function `hello()`, it couldn't find it.

It's important that we read our fail/error messages thoroughly, as it wont always be a ReferenceError. We may have messed up our syntax, or something else, but Jest will give us a good indication as to where it went wrong. In this case, it failed where we expected it to.

This failure message is exactly what we wanted, so now we can build the function to make the test pass (the **green** part of **red-green refactor**):
```javascript
const hello = () => {
  return "hi"
}
```
**Notice:** There is no console.log() or function call. Jest handles all of that in the expect method.

Our function name AND the return must exactly match what we provided our expect and matcher methods.

Now our test should pass (**green**).

```
 PASS  ./jest.test.js
  hello
    ✓ returns a string that says hi (6ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.652s
Ran all test suites.
✨  Done in 3.60s.
```
Excellent! Our test passes and we can now move on to creating more tests.

### Another Example:

```javascript
// Write a test for a function that logs "eat food" if you are hungry and "keep working" if you are not hungry

describe("areYouHungry", () => {
  it("returns eat food or keep working based on input", () => {
    expect(areYouHungry("yes")).toEqual("eat food")
    expect(areYouHungry("no")).toEqual("keep working")
  })
})
```

**Notice:** this test contains two expect methods - one for each possible outcome

Run the test file again:
```
 FAIL  ./jest.test.js

  hello
    ✓ returns a string that says hi (4ms)
  areYouHungry
    ✕ returns eat food or keep working based on input (1ms)

  ● areYouHungry › returns eat food or keep working based on input

    ReferenceError: areYouHungry is not defined

      12 | describe("areYouHungry", () => {
      13 |   it("returns eat food or keep working based on input", () => {
    > 14 |     expect(areYouHungry("yes")).toEqual("eat food")
         |     ^
      15 |     expect(areYouHungry("no")).toEqual("keep working")
      16 |   })
      17 | })

      at Object.test (jest.test.js:14:5)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.832s
Ran all test suites.
```
Notice that we now have 2 tests in the test suit. One test passes and one fails. The first function `hello()` passes but the second function `areYouHungry()` has not been written yet so that test fails.

Again we can identify this as the reason, because of the error it provides us: `ReferenceError: areYouHungry is not defined`.

**Notice:** We don't comment out the old tests and function. We leave those there, as the purpose of having tests is so that they are **AUTOMATED**. We simply keep the original code and tests and keep writing new ones below those.

Now we can build the function to make the test pass (the **green** part of **red-green refactor**):

```javascript
const areYouHungry = (string) => {
  if(string === "yes"){
    return "eat food"
  } else if(string === "no") {
    return "keep working"
  }
}
```

And now all our tests should pass (**green**).

```sh
PASS  ./jest.test.js

hello
    ✓ returns a string that says hi (6ms)
areYouHungry
    ✓ returns eat food or keep working based on input (1ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.801s
Ran all test suites.
✨  Done in 3.17s.
```

Excellent! Both tests pass!


### One More Example

**Using variables:**

Sometimes it can be useful to create variables before our test method for use later on in our expect methods.

 > Note: These variables are only available within the scope of the specific test it has been created in.

```javascript
describe("addGranola", () => {
  let groceryList = ["apples", "carrots", "oatmeal"]
  let result = ["apples", "carrots", "oatmeal", "granola"]
  it("adds granola to the end of an array", () => {
    expect(addGranola(groceryList)).toEqual(result)
  })
})
```
We can see here, utilizing variables for our arrays, that it keeps our code cleaner and easier to understand and read, versus having to put these huge arrays into the argument parentheses.

```
 FAIL  ./jest.test.js

  hello
    ✓ returns a string that says hi (3ms)
  areYouHungry
    ✓ returns eat food or keep working based on input
  addGranola
    ✕ adds granola to the end of an array (1ms)

  ● addGranola › adds granola to the end of an array

    ReferenceError: addGranola is not defined

      30 |   let result = ["apples", "carrots", "oatmeal", "granola"]
      31 |   it("adds granola to the end of an array", () => {
    > 32 |     expect(addGranola(groceryList1)).toEqual(result)
         |     ^
      33 |   })
      34 | })
      35 |

      at Object.test (jest.test.js:32:5)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 2 passed, 3 total
Snapshots:   0 total
Time:        1.491s
Ran all test suites.
```

Once again, we can see that the test failed, our error message `ReferenceError: addGranola is not defined` tells us the `addGranola()` function has not been created yet.

Here's the function that would make this test pass.

```javascript
const addGranola = (array) => {
  return array.concat("granola")
}
```

Running our test again now that the function has been created, we should see a passing test.

```
 PASS  ./jest.test.js
  hello
    ✓ returns a string that says hi (4ms)
  areYouHungry
    ✓ returns eat food or keep working based on input (1ms)
  addGranola
    ✓ adds granola to the end of an array (1ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.411s
Ran all test suites.
✨  Done in 2.46s.
```
Fantastic!


### Tips

**Focus Your Tests**

Use `fdescribe()` to focus on a describe-block without having to comment out all other describe-blocks

Use `fit()` to focus on an it-block without having to comment all other it-blocks


---

## Challenges
> **IMPORTANT**: Write the test FIRST, see it fail, then write the code to make it PASS.

> **IMPORTANT**: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.


1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.  
  - Write the function that will make the test pass.

2. Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
  - Write the function that will make the test pass.

3. Write the test for a function that returns "in budget" if a price is lower than $300.  
  - Write the function that will make the test pass.

4. Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
  - Write the function that will make the test pass.

5. Write the test for a function that takes in one argument(number) and returns whether the number is odd.
  - Write the function that will make the test pass.

6. Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
  - Write the function that will make the test pass.

7. Write the test for a function called `rick` that returns "Morty".
  - Write the function that will make the test pass.

8. Write the test for a function called `greeter` that takes a name as an argument and returns a greeting with that name to the screen.
  - Write the function that will make the test pass.

9. Write the test for a function called `oddOrEven` that takes a number as an argument and logs whether the number is odd or even.
  - Write the function that will make the test pass.

10. Write the test for a function called `doubler` that takes a number and returns the result of the number multiplied by 2.
  - Write the function that will make the test pass.

11. Write the test for a function called `multiply` that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
  - Write the function that will make the test pass.

12. Write the test for a function called `divisibleBy` that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
  - Write the function that will make the test pass.

13. Write the test for a function called `fizzbuzz`. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
  - Write the function that will make the test pass.

---
[Back to Syllabus](../README.md#unit-one-javascript-foundations)
