# JavaScript Testing with Jest

#### Overview

Testing is the process of creating automated quality assurance for code. Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. Jest was created by Facebook and used by Twitter, Spotify, and Airbnb.

#### Previous Lecture (1 hour 15 min)

[![YouTube](http://img.youtube.com/vi/_21rFhm4p7g/0.jpg)](https://www.youtube.com/watch?v=_21rFhm4p7g)

## Learning Objectives

- can define yarn and jest
- can recall the proper naming syntax for a jest file
- can explain the purpose of test driven development
- can define the anatomy of a jest test
- can write a basic jest test for a given prompt
- can identify that the test input/output exists in a test environment that is separate from the development environment

#### Vocabulary

- test driven development (TDD)
- red-green-refactor
- Jest
- dependencies
- yarn
- package manager

#### Additional Resources

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
- Open the Jest directory in a text editor
- Code!

#### Useful Commands

- $ `yarn add jest`
- $ `yarn jest`

#### Troubleshooting Tips

- Are you in the correct directory?
- Did you install the dependencies?
- Did you install the dependencies in the correct directory?
- Are you reading the output of your tests?
- Is the test calling your function?

---

### Testing Code

One of the fastest ways to prove to future employers that you care about your code, and know what you are doing, is to write good tests. Your tests speak volumes about you as a developer, as much or more than the actual code.

Not all developers do this, so you can easily set yourself apart. It's almost like cheating the job hunt! Show off your tests and you'll get lots of second interviews.

In short, there is no end to the winning when you write tests for your code. You win, your coworkers win, your employer wins, your users win, and your future self wins when you come back to the code in six months.

### Why Testing is Important

Writing tests is can be a time consuming process but the benefits will always be larger than the time commitment of the developer. Writing tests forces the developer to think about the input and output of the code. Creating test is a bit like pseudocoding in that you it requires an understanding of the problem at hand before just jumping in and creating code.

Testing will also help developers avoid feature creep, meaning that it ensures focus on essential piece of the program rather than continuing to add "just one more thing" to the code functionality.

Tests also communicates the intent of the function to other developers. This is very important when it comes to adding additional features to a project.

It also allows for "safe" refactoring of code. Tests will ensure the code outcomes have not changed when a developer is finding different or better ways to solve a problem. During a refactor, tests provide a level of confidence that the app will not break as long as all the tests pass.

### Test Driven Development

There is another, and even more powerful benefit to writing tests for your code as well. By writing the tests first then write the code required to make them pass, we as developers, are thinking about our code in a different, more logical way. This philosophy of writing tests, seeing them fail, then creating the code that makes the test pass is called **test driven development** or TDD. Practicing TDD wil incorporate the tests into the development process ensuring the two pieces are inextricably linked.

### Process for Testing

When practicing TDD, we will write the test first! Then we will run the testing suit to see a failing test. Write the appropriate code. Run your testing suit to see your test pass. Once the tests pass, refactor if necessary. This particular implementation of test driven development where the test is written first is called **red-green-refactor**. First the output is red from the failing test, then green from the passing test, then the code is protected and can be refactored.

1. Write the test
2. See the test fail
3. Write the code
4. See the test pass
5. Refactor, if necessary

### Jest

**Jest** is a JavaScript testing framework. The Jest framework is made up of a collection of files called **dependencies** which contain snippets of code functionality. Using all these code snippets together in the right way will give us the ability to run tests. There are many dependencies to manage and all need to work together in exactly the right way. This is a challenge on its own so in 2016 Facebook created a package manager called **yarn** to manage all the dependency files. A **package manager** will install dependencies, manage the dependencies, and give us the terminal commands to execute the tests.

### Jest Files and Dependencies

To create a space for writing tests we need a Jest file and the appropriate Jest dependencies. To keep the code organized it is best practice to create a new directory. Inside this directory we will create a file with the extension `.test.js` which will tell Jest what files to execute. Next we need to install dependencies by running the command $ `yarn add jest` which will create a new directory called `node_modules` and two new files called `package.json` and `yarn.lock`. These files and directories contain the dependencies and will be managed by the package manager `yarn`. The code for the test and the function will be in the file with the extension `.test.js`.

### Anatomy of a Jest Test

**jest.test.js**

```javascript
describe("greeter", () => {
  it("returns a generic greeting", () => {
    expect(greeter()).toEqual("Hello, LEARN student!")
  })
})
```

Jest tests consists of the following:

1. A `describe` statement

   - Jest offers us a method called `describe` that takes an argument of a string and a function
   - The string is the name of the testing suit
   - The function will call all the tests in the testing suite

   ```javascript
   describe("greeter", () => {})
   ```

2. An `it` statement

   - The `it` statements is nested within the describe code block
   - The `it` takes an argument of string, which is a statement that explains in _regular words_ what the test is doing and a function

   ```javascript
   describe("greeter", () => {
     it("returns a generic greeting", () => {})
   })
   ```

3. At least one `expect` statement

   - The expect statement will call the function
   - All necessary arguments will be passed in
   - Multiple expect statements can be used if necessary

   ```javascript
   describe("greeter", () => {
     it("returns a generic greeting", () => {
       expect(greeter())
     })
   })
   ```

4. Matcher

   - A matcher is a method that contains the expected output of the function
   - The matcher `.toEqual` uses strict equality to compare the actual output to the output in the test

   ```javascript
   describe("greeter", () => {
     it("returns a generic greeting", () => {
       expect(greeter()).toEqual("Hello, LEARN student!")
     })
   })
   ```

Every Jest test requires a `describe` method, an `it` method nested within that `describe` block, and at least one `expect` method. In order for the `expect` to work, it needs to have a matcher method chained onto it which will compare the test output to the actual output.

### Running the Test

Now that we have a test we can run the test and practice the _red_ step in the red-green-refactor implementation of test driven development. In the terminal we need to ensure we are in the correct directory. The directory should contain the test file and the Jest dependencies. Now we can run the command $ `yarn jest` in the terminal. This will use Jest to run the test. We can expect that the test will fail.

```bash
 FAIL  ./jest.test.js
  greeter
    ✕ returns a generic greeting (1 ms)

  ● greeter › returns a generic greeting

    ReferenceError: greeter is not defined

      1 | describe("greeter", () => {
      2 |   it("returns a generic greeting", () => {
    > 3 |     expect(greeter()).toEqual("Hello, LEARN student!")
        |     ^
      4 |   })
      5 | })
      6 |

      at Object.expect (jest.test.js:3:5)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
```

Yay! A good failure! The test points to exactly where the issue is in the code through an error message and an arrow `^` at the point where it failed. The test is looking for a function called `greeter` and cannot find one.

We can tell this is the case, because of the `ReferenceError: greeter is not defined` part of the fail message. This tells us that our test is written correctly, but it failed because when our expect method tried to invoke the function `greeter()`, it couldn't find it.

It's important that we read our failing messages thoroughly. If there was a syntax error in the test, it would still fail but give a different error. In this case, it failed where we expected it to.

### Creating the Code

In the same file as the test, we can define the function that will make the test pass. The function must follow what we defined in the test. In this case, we will have a function named exactly `greeter` and the return value should match exactly what we put in the matcher method.

**jest.test.js**

```javascript
const greeter = () => {
  return "Hello, LEARN student!"
}
```

**Notice:** There is no console.log() or function call. Jest handles all of that in the expect method.

Back in the terminal we can run the same $ `yarn jest` command and examine the outcome.

```bash
 PASS  ./jest.test.js
  greeter
    ✓ returns a generic greeting (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
```

Excellent! Our test passes which is the _green_ step in red-green-refactor. In this case there isn't much to refactor so we can call that a success and move to the task.

### Multiple Expect Statements

It is common for a function to have multiple options of output. For example, if a function contains a conditional statement with an `if` and an `else` there are two possible outcomes of the function. A well-written test should account for all the possible outcomes of a function. To achieve this, we can add additional expect statements.

An expect statement calls the function and passes in any arguments. In this example, if the argument is the string "yes" the expected output is "eat food" while if the argument value is the string "no", the expected output is "keep coding".

The test will examine only the actual input values and the corresponding expected output.

**jest.test.js**

```javascript
describe("areYouHungry", () => {
  it("returns eat food or keep coding based on input", () => {
    expect(areYouHungry("yes")).toEqual("eat food")
    expect(areYouHungry("no")).toEqual("keep coding")
  })
})
```

Ensuring we are in the correct directory, we can run the command $ `yarn jest` in the terminal. We can expect that the test will fail.

```bash
 FAIL  ./jest.test.js
  greeter
    ✓ returns a generic greeting (1 ms)
  areYouHungry
    ✕ returns eat food or keep coding based on input

  ● areYouHungry › returns eat food or keep working based on input

    ReferenceError: areYouHungry is not defined

      11 | describe("areYouHungry", () => {
      12 |   it("returns eat food or keep working based on input", () => {
    > 13 |     expect(areYouHungry("yes")).toEqual("eat food")
         |     ^
      14 |     expect(areYouHungry("no")).toEqual("keep coding")
      15 |   })
      16 | })

      at Object.expect (jest.test.js:13:5)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
```

Notice there are two tests in the test file. One test passes and one fails. The first function `greeter()` passes but the second function `areYouHungry()` has not been written yet so that test fails.

Again we can identify this as the reason, because of the error it provides us: `ReferenceError: areYouHungry is not defined`.

**Notice:** We don't comment out the previous tests and functions. The purpose of creating tests is to create an automated snapshot of the code base.

Now we can build the function to make the test pass.

**jest.test.js**

```javascript
const areYouHungry = (string) => {
  if (string === "yes") {
    return "eat food"
  } else if (string === "no") {
    return "keep coding"
  }
}
```

And now all the tests should pass.

```bash
 PASS  ./jest.test.js
  greeter
    ✓ returns a generic greeting (1 ms)
  areYouHungry
    ✓ returns eat food or keep coding based on input

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
```

Excellent! Both tests pass!

### Troubleshooting Failing Tests

The goal of creating tests is to ensure the code produces the exact expected output. If the test still fails after creating the function it could be an error or typo in the function code.

**jest.test.js**

```javascript
describe("areYouHungry", () => {
  it("returns eat food or keep coding based on input", () => {
    expect(areYouHungry("yes")).toEqual("eat food")
    expect(areYouHungry("no")).toEqual("keep coding")
  })
})

const areYouHungry = (string) => {
  if (string === "yes") {
    return "eat food"
  } else if (string === "no") {
    return "keep coing" // tests identify typos
  }
}
```

If the function output doesn't match what the test is expecting, we will get a failing test.

```bash
 FAIL  ./jest.test.js
  greeter
    ✓ returns a generic greeting (1 ms)
  areYouHungry
    ✕ returns eat food or keep coding based on input (1 ms)

  ● areYouHungry › returns eat food or keep coding based on input

    expect(received).toEqual(expected) // deep equality

    Expected: "keep coding"
    Received: "keep coing"

      12 |   it("returns eat food or keep coding based on input", () => {
      13 |     expect(areYouHungry("yes")).toEqual("eat food")
    > 14 |     expect(areYouHungry("no")).toEqual("keep coding")
         |                                ^
      15 |   })
      16 | })
      17 |

      at Object.toEqual (jest.test.js:14:32)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
```

When the test fails it will point to the section of code that is producing the error. It will also note what the test was expecting to receive and what it actually received. This show why looking at the full output in the terminal is incredibly important.

### Using Variables in a Test

It can often be useful to define variables inside the scope of a test. If we are given test variables (like on the weekly assessments - _hint, hint_!) putting the test variables inside the test will create an encapsulated code block as well as very clear communication as to the developers intent.

These variables are only available within the scope of the specific test.

**jest.test.js**

```javascript
describe("addItem", () => {
  it("adds a given grocery item to the end of the grocery list array", () => {
    const groceryList1 = ["apples", "carrots", "oatmeal"]
    const item1 = "bananas"
    expect(addItem(groceryList1, item1)).toEqual([
      "apples",
      "carrots",
      "oatmeal",
      "bananas"
    ])
    const groceryList2 = ["orange juice", "peanut butter", "cheese"]
    const item2 = "crackers"
    expect(addItem(groceryList2, item2)).toEqual([
      "orange juice",
      "peanut butter",
      "cheese",
      "crackers"
    ])
  })
})
```

We have organized the test so that each set of test variables is followed by the expected output of that particular data.

```bash
 FAIL  ./jest.test.js
  greeter
    ✓ returns a generic greeting (1 ms)
  areYouHungry
    ✓ returns eat food or keep coding based on input
  addItem
    ✕ adds a given grocery item to the end of the grocery list array

  ● addItem › adds a given grocery item to the end of the grocery list array

    ReferenceError: addItem is not defined

      28 |     const groceryList1 = ["apples", "carrots", "oatmeal"]
      29 |     const item1 = "bananas"
    > 30 |     expect(addItem(groceryList1, item1)).toEqual([
         |     ^
      31 |       "apples",
      32 |       "carrots",
      33 |       "oatmeal",

      at Object.expect (jest.test.js:30:5)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 2 passed, 3 total
```

Once again, we can see that the the other two tests in our file are passing and that our new test failed. The error message `ReferenceError: addItem is not defined` tells us the `addItem` function has not yet been created. This is good failure and ensures we are on the right track.

Now we can create the function that will make the test pass.

**jest.test.js**

```javascript
const addItem = (groceryList, item) => {
  return [...groceryList, item]
}
```

Running our test again now that the function has been created, we should see a passing test.

```bash
 PASS  ./jest.test.js
  greeter
    ✓ returns a generic greeting (1 ms)
  areYouHungry
    ✓ returns eat food or keep coding based on input
  addItem
    ✓ adds a given grocery item to the end of the grocery list array

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
```

### Focus Your Tests

Troubleshooting is a bit part of creating tests and practicing test driven development. The goal is to create an automated test file where all the tests run together as a snapshot. However, sometimes it can be helpful to focus on particular aspects of a test during troubleshooting. Rather than commented out code, there is a tool that will focus in on one `describe` block or one `it` block and ignore everything else.

Replacing the `describe` method with `fdescribe()` or focus-describe will tell Jest to skip all other describe blocks.

```bash
 PASS  ./jest.test.js
  greeter
    ✓ returns a generic greeting (1 ms)
  areYouHungry
    ○ skipped returns eat food or keep coding based on input
  addItem
    ○ skipped adds a given grocery item to the end of the grocery list array

Test Suites: 1 passed, 1 total
Tests:       2 skipped, 1 passed, 3 total
```

The same tool can be used to focus on a particular `it` block. Replace the `it` method with `fit()` or focus-it to skip all other it blocks.

---

### 💻 Challenges

**Process**: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

**Note**: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

- Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
  - Create the function that will make the test pass.
- Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
  - Create the function that will make the test pass.
- Write the test for a function that returns "in budget" if a price is lower than $300.
  - Create the function that will make the test pass.
- Write the test for a function that takes in two numbers and returns the smaller number.
  - Create the function that will make the test pass.
- Write the test for a function that takes in one numbers and returns whether the number is odd.
  - Create the function that will make the test pass.
- Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
  - Create the function that will make the test pass.
- Write the test for a function called `rick` that returns "Morty".
  - Create the function that will make the test pass.
- Write the test for a function called `greeter` that takes a name as an argument and returns a greeting with that name to the screen.
  - Create the function that will make the test pass.
- Write the test for a function called `oddOrEven` that takes a number as an argument and logs whether the number is odd or even.
  - Create the function that will make the test pass.
- Write the test for a function called `doubler` that takes a number and returns the result of the number multiplied by 2.
  - Create the function that will make the test pass.
- Write the test for a function called `multiply` that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
  - Create the function that will make the test pass.
- Write the test for a function called `divisibleBy` that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that `divisibleBy(10, 5)` logs "10 is evenly divisible by 5".
  - Create the function that will make the test pass.
- Write the test for a function called `fizzbuzz`. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
  - Create the function that will make the test pass.

---

[Back to Syllabus](../README.md#unit-two-javascript-foundations)
