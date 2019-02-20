# Testing Javascript with Jest


## Why Test?
* breaks problems down into smaller pieces
* helps avoid feature creep - stay focused on essential piece of the program
* keeps you focused on the current objective
* closer to 100% test coverage
* tests can save you time in the end (deployed app that breaks with no tests - could be hard to pinpoint problem.)

** "Red, Green, Refactor" **
1.  Write the test first
2.  Make it fail (red)
3.  Write the code
4.  Make it pass (green)
5.  Safer to refactor other parts of the app




** Unit or Functional** = smallest  -  just testing functions

** Integration Testing** is testing how everything is interacting with each other  (rails api)


## What Does Testing Syntax Look Like with Jest?

Here's an example of a Javscript test using Jest syntax...

```javaScript
describe("hello", () => {
    test ("returns a string that says hi", () => {
        expect(hello()).toBe("hi")
    })
})

```
This is a test for a function called hello() that returns a string that says 'hi'. The string inside the 'test' function can be anything we want it to be.

We would then run yarn jest to run our test.  Which would fail since we haven't created the function yet.

```javaScript
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
       6 |     test ("returns the word hi", () => {
    >  7 |         expect(hello()).toBe("hi")
         |         ^
       8 |     })
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

Now we can build our function...

```javaScript

    const hello = () => {
        return "hi"
    }

```

And our test should now pass...
```javaScript
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

### Let's look at another example....

Here's our challenge and corresponding test.

```javaScript
//Write a function that logs "eat food" if you are hungry and "keep working" if you are not hungry.


describe("eatOrWork", () => {
    test ("returns eat food or keep working based on input", () => {
        expect(eatOrWork("hungry")).toBe("eat food")
        expect(eatOrWork("not hungry")).toBe("keep working")
    })
 })
```

We run a our test and it will fail.(Red)

```javaScript
FAIL  jestpractice/jestpractice.test.js
 hello
   ✓ returns a string that says hi (5ms)
 eatOrWork
   ✕ returns eat food or keep working based on input (2ms)

 ● eatOrWork › returns eat food or keep working based on input

   ReferenceError: eatOrWork is not defined

     11 | describe("eatOrWork", () => {
     12 |     test ("returns eat food or keep working based on input", () => {
   > 13 |         expect(eatOrWork("hungry")).toBe("eat food")
        |         ^
     14 |         expect(eatOrWork("not hungry")).toBe("keep working")
     15 |     })
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
Notice that we now have 2 tests - one passes and one fails.  Our first function 'hello()' passes but our second function has not been written yet.  Let's write it now.

```javaScript

const eatOrWork = (str) => {
    if(str === "hungry"){
        return "eat food"
    } else if(str === "not hungry") {
        return "keep working"
    } else {
        return "Please put in either hungry or not hungry"
    }
}
```

And make our test pass...

```javaScript
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

```javaScript
describe("addGranola", () => {
    var groceryList1 = ["apples", "carrots", "oatmeal"]
    var result = ["apples", "carrots", "oatmeal", "granola"]
    test ("adds granola to the end of an array", () => {
        expect(addGranola(groceryList1)).toEqual(result)
    })
})
```
Notice how we defined two variables inside the test - groceryList1 and result.  Then we used these variables in our expect method.  

Here's the function that would make this test pass.

```javaScript
const addGranola = (arr1) => {
    var arr2 = arr1.concat("granola")
    return arr2
}

```

#### Jest Cheat Sheet 
https://github.com/sapegin/jest-cheat-sheet#test-structure

# Challenges

### Set up
* Create a folder on your desktop
* cd into your folder
* touch a file with the extension .test.js
* type atom .

From your terminal(in your project folder) type...

* yarn init -y
* yarn add jest


Write your first test.  From your terminal(make sure you are still in your project folder) type...

* yarn jest

Jest will run the code on that file.  Your test will fail (Red).

Now Build your function that satisfies your test and run yarn jest again.  Your test should now pass!(Green)

## Exercises

Use the following exercises to **write your test first**, make it fail(red), then write your function on the same file below the test and make it pass(green).  You can put all of these challenges (tests and functions) on one file.

1) Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.  Write the function and make the test pass.

2) Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function and make the test pass.

3) Write the test for a function that returns "in budget" if a price is lower than $300.  Write the function and make the test pass.

4) Write the test for a function that takes in two arguments(numbers) and returns the smaller number. Write the function and make the test pass.

5) Write the test for a function that takes in one argument(number) and returns whether the number is odd. Write the function and make the test pass.

6) Write the test for a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape. Write the function and make the test pass.

7) Write the test for a function called Rick that returns "Morty".  Write the function and make the test pass.

8) Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen. Write the function and make the test pass.


9) Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even. Write the function and make the test pass.


10) Write the test for a function called double that takes an number as an argument and returns the result of that number multiplied by 2. Write the function and make the test pass.


11) Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other. Write the function and make the test pass.


12) Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5". Write the function and make the test pass.


13) Consider this variable:
var product = { name: "chair", price: 14.99 }
Write the test for a function called describeProduct takes product as an argument and returns "The product is a chair. It costs $14.99". Write the function and make the test pass.
