# JavaScript Testing with Jest

[![YouTube](http://img.youtube.com/vi/em5X2zJH-N0/0.jpg)](https://www.youtube.com/watch?v=em5X2zJH-N0)]

## What is Testing?
Testing is the process of automating quality assurance for your code.

## Why Test?
- Helps break down problems into smaller pieces
- Avoid feature creep - stay focused on essential piece of the program
- Keeps focus on the current objective
- Tests can save you lots of time bug fixing a new feature

## TDD
**Test Driven Development**
-  Write the test first
-  Run your testing suit to see a failing test
-  Write the code
-  Run your testing suit to see your test pass
-  Refactor if necessary
- This is known as **Red-Green Refactor**

## Testing Syntax with Jest

Jest is a JavaScript testing framework. We use a package manager called `yarn` to run Jest. Here's an example of a Javascript test using Jest syntax:

```javascript
describe("hello", () => {
  test ("returns a string that says hi", () => {
    expect(hello()).toEqual("hi")
  })
})
```
This is a test for a function called hello() that returns a string that says `hi`. The string inside the `test` function can be anything we want it to be.

We would then run `yarn jest` in the terminal to run our test. Which would fail since we haven't created the function yet (the **red** part of **red-green refactor**).

```JavaScript
yarn run v1.6.0
warning package.json: No license field
warning ../package.json: No license field
$ /Users/damonlemmons/Desktop/JStesting/node_modules/.bin/jest
 FAIL  ./JStesting.test.js
  hello
    ✕ returns the word hi (10ms)

  ● hello › returns the word hi

    ReferenceError: hello is not defined

       5 | describe("hello", () => {
       6 |   test ("returns the word hi", () => {
    >  7 |     expect(hello()).toEqual("hi")
         |        ^
       8 |   })
       9 | })
      10 |

      at Object.expect (JStesting.test.js:7:9)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        3.038s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

Now we can build our function.
```JavaScript
const hello = () => {
  return "hi"
}
```
**Notice there is no function call or console.log()**

Now our test should pass (**green**).
```JavaScript
PASS  jestpractice/jestpractice.test.js
 hello
   ✓ returns a string that says hi (4ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.641s
Ran all test suites matching /jestpractice.test.js/i.
✨  Done in 2.74s.
```

### Another Example:

```JavaScript
// Write a function that logs "eat food" if you are hungry and "keep working" if you are not hungry.

describe("eatOrWork", () => {
  test ("returns eat food or keep working based on input", () => {
    expect(eatOrWork("hungry")).toEqual("eat food")
    expect(eatOrWork("not hungry")).toEqual("keep working")
  })
})
```

We run a our test and it will fail (**red**).

```JavaScript
FAIL  jestpractice/jestpractice.test.js
 hello
   ✓ returns a string that says hi (5ms)
 eatOrWork
   ✕ returns eat food or keep working based on input (2ms)

 ● eatOrWork › returns eat food or keep working based on input

   ReferenceError: eatOrWork is not defined

     11 | describe("eatOrWork", () => {
     12 |   test ("returns eat food or keep working based on input", () => {
   > 13 |     expect(eatOrWork("hungry")).toEqual("eat food")
        |         ^
     14 |     expect(eatOrWork("not hungry")).toEqual("keep working")
     15 |   })
     16 | })

     at Object.expect (jestpractice/jestpractice.test.js:13:9)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.895s
Ran all test suites matching /jestpractice.test.js/i.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
Notice that we now have 2 tests in the test suit - one passes and one fails.  Our first function `hello()` passes but our second function has not been written yet so that test fails. Let's write it now.

```JavaScript
const eatOrWork = (string) => {
  if(string === "hungry"){
    return "eat food"
  } else if(string === "not hungry") {
      return "keep working"
  } else {
    return "Please put in either hungry or not hungry"
  }
}
```

And now all our tests should pass (**green**).

```JavaScript
PASS  jestpractice/jestpractice.test.js
  hello
    ✓ returns a string that says hi (5ms)
  eatOrWork
    ✓ returns eat food or keep working based on input (2ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        3.189s
Ran all test suites matching /jestpractice.test.js/i.
✨  Done in 5.41s.
```

### One more example...

```JavaScript
describe("addGranola", () => {
  var groceryList1 = ["apples", "carrots", "oatmeal"]
  var result = ["apples", "carrots", "oatmeal", "granola"]
  test ("adds granola to the end of an array", () => {
      expect(addGranola(groceryList1)).toEqual(result)
  })
})
```
Notice how we defined two variables inside the test - groceryList1 and result. Then we used these variables in our expect method.  

Here's the function that would make this test pass.

```JavaScript
const addGranola = (array) => {
  return array.concat("granola")
}
```

#### Jest Cheat Sheet
https://github.com/sapegin/jest-cheat-sheet#test-structure


### Jest Setup
- Create a new directory
- touch a file with the extension .test.js
- cd into the directory and type the following in terminal:
- `yarn init -y`
- `yarn add jest`
-  When you are ready to run your tests enter `yarn jest`
- Follow the practice of **red-green refactor** to complete the challenges
- Write your test and your code in the same file

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
