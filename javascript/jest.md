# JavaScript Testing with Jest

## Video: Jest
[![YouTube](http://img.youtube.com/vi/em5X2zJH-N0/0.jpg)](https://www.youtube.com/watch?v=em5X2zJH-N0)

## Overview
- Testing is process of creating automated quality assurance for your code
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
- $ yarn jest

## Additional Resources
- <a href="https://jestjs.io/" target="blank">Jest Docs</a>
- <a href="https://github.com/sapegin/jest-cheat-sheet#test-structure" target="blank">Jest Cheat Sheet</a>

## Set Up
- Create a new directory
- Add a file with the extension .test.js
- *If using AWS:* $ npm install -g yarn
- $ yarn add jest
- Write the tests and the code in the same file
- $ yarn jest

## Testing Code
One of the fastest ways to prove to future employers that you care about your code, and know what you are doing is to write good tests.  Your tests speak volumes about you as a developer, as much or more than the actual code.  Not all developers do this, so you can easily set yourself apart.  It's almost like cheating the job hunt.  Show off your tests and you'll get lots of second interviews.

In short, there is no end to the winning when you write tests for your code.  You win, your coworkers win, your employer wins, your users win, and your future self wins when you come back to the code in 6 months.


## Why Test?
- Better Code
- Less Bugs
- Help your job hunt
- Forces the developer to think about the input and output before beginning to code
- Avoid feature creep - stay focused on essential piece of the program
- Tests can save you lots of time bug fixing a new feature
- Communicates to other developers the intent of the function
- Allows for "safe" and confident refactoring of code

## TDD
**Test Driven Development**
There is another, and even more powerful benefit to writing tests for your code as well.  When we write our tests first, then write the code required to make them pass, we as developers, are think about our code in a different, more logical way.  Breaking the code into a series of tests helps us break the big problem down into much smaller ones, and smaller problems are easier to solve, so we write dramatically better code because of it.

If that is not enough to convince you to write great tests for your code, here is one more benefit, which is equally as important.  If you have solid tests, and decide that you want to refactor some part of your application because either the requirements of the application changed, or you have realized a better way, you are free to do so with confidence.  During the entire refactor, you are confident that you aren't breaking your app because your tests pass.  Its incredibly liberating!

**Process**
- Write the test first
- Run your testing suit to see a failing test
- Write the code
- Run your testing suit to see your test pass
- Refactor if necessary
- This is known as **Red-Green Refactor**

## Testing Syntax with Jest

Jest is a JavaScript testing framework. The framework is a collection of files that are managed by `yarn` a technology created by Facebook to manage dependency files.

- **describe()** - Jest uses a method called describe() that runs other nested methods
- **test()** - test() takes a argument of a statement that explains in regular words what the test is doing
- **expect()** - this method calls the function being tested, passes any test-case arguments, and compares the output


Here's an example of a JavaScript test using Jest:
```javascript
describe("hello", () => {
  test("returns a string that says hi", () => {
    expect(hello()).toEqual("hi")
  })
})
```
This is a test for a function called hello() that returns a string that says `hi`.

Run `yarn jest` in the terminal to run the test. the test will fail since we haven't created the function yet (the **red** part of **red-green refactor**).

```
 FAIL  ./jest.test.js
  hello
    ✕ returns a string that says hi (2ms)

  ● hello › returns a string that says hi

    ReferenceError: hello is not defined

      1 | describe("hello", () => {
      2 |   test ("returns a string that says hi", () => {
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

Yay! Failure! The test points to exactly where the issue is in the code. The test is looking for a function called hello and cannot find one.

Now we can build the function (the **green** part of **red-green refactor**):
```javascript
const hello = () => {
  return "hi"
}
```
**Notice:** There is no console.log() or function call. Jest handles all of that in the expect method.

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
### Another Example:

```javascript
// Write a test for a function that logs "eat food" if you are hungry and "keep working" if you are not hungry
// Notice this test contains two expect methods - one for each possible outcome

describe("areYouHungry", () => {
  test ("returns eat food or keep working based on input", () => {
    expect(areYouHungry("yes")).toEqual("eat food")
    expect(areYouHungry("no")).toEqual("keep working")
  })
})
```

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
      13 |   test ("returns eat food or keep working based on input", () => {
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
Notice that we now have 2 tests in the test suit. One test passes and one fails. The first function `hello()` passes but the second function has not been written yet so that test fails.

Now we can build the function (the **green** part of **red-green refactor**):

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

```
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

### One More Example

Sometimes it can be useful to create variables local to the test method. These variables are only available within the scope of the test.

```javascript
describe("addGranola", () => {
  let groceryList = ["apples", "carrots", "oatmeal"]
  let result = ["apples", "carrots", "oatmeal", "granola"]
  test ("adds granola to the end of an array", () => {
    expect(addGranola(groceryList)).toEqual(result)
  })
})
```

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
      31 |   test ("adds granola to the end of an array", () => {
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

Here's the function that would make this test pass.

```javascript
const addGranola = (array) => {
  return array.concat("granola")
}
```

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

## Challenges

1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function that will make the test pass.

2. Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function that will make the test pass.

3. Write the test for a function that returns "in budget" if a price is lower than $300.  Write the function that will make the test pass.

4. Write the test for a function that takes in two arguments(numbers) and returns the smaller number. Write the function that will make the test pass.

5. Write the test for a function that takes in one argument(number) and returns whether the number is odd. Write the function that will make the test pass.

6. Write the test for a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape. Write the function that will make the test pass.

7. Write the test for a function called Rick that returns "Morty". Write the function that will make the test pass.

8. Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen. Write the function that will make the test pass.

9. Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even. Write the function that will make the test pass.

10. Write the test for a function called doubler that takes an number and returns the result of the number multiplied by 2. Write the function that will make the test pass.

11. Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other. Write the function that will make the test pass.

12. Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5". Write the function that will make the test pass.

13. Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'. Write the function that will make the test pass.

[Go to next lesson: JavaScript Objects](./objects.md)

[Back to JavaScript Higher-Order Functions](./higher-order-functions.md)

[Back to Syllabus](../README.md)
