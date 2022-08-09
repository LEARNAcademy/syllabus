# JavaScript Higher-Order Functions

#### Overview

Higher-order functions are built in methods in JavaScript. They are a specific subset of built in methods that take a function as an argument.

#### Previous Lecture (1 hour 35 min)

[![YouTube](http://img.youtube.com/vi/gvbLBhc20w4/0.jpg)](https://www.youtube.com/watch?v=gvbLBhc20w4)

#### Learning Objectives

- can define `.map()` and `.filter()` as array methods
- can distinguish between a regular function and a higher-order function
- can distinguish between a regular built in method and a higher-order function
- can utilize the required parameter for `.map()` and `.filter()`
- can recall the optional parameters for `.map()` and `.filter()`
- can demonstrate the proper use of both `.map()` and `.filter()` to produce expected outcomes

#### Vocabulary

- higher-order function
- .map()
- .filter()
- type coercion
- falsy
- truthy

#### Process

- `cd` into the `javascript-foundations-challenges` repository
- Create a new branch: `higher-order-initials1-initials2` (ex. higher-order-aw-sp)
- `touch` a file with no spaces and `.js` extension: `higher-order-student1-student2.js` (ex. higher-order-austin-sarah.js)
- Open the folder in a text editor
- Code!

#### Troubleshooting Tips

- Does the function have a return?
- Is there a `console.log` on the function invocation?
- Does the number of arguments match the number of parameters?

---

### Higher-Order Functions

A **higher-order function** is a built in method in JavaScript that takes in a function as an argument. Often higher-order functions are designed to operate on arrays. The function passed as an argument will execute once for every item in the array. This makes higher-order functions incredible useful for iteration.

We will focus on two higher-order functions for this lesson `.map()` and `.filter()`. Both of these have three built-in parameters: the current value, the index, and the array the higher-order function is called on.

What the parameters are named is technically arbitrary, but the order will always be the same. The higher-order functions have to take at least one argument (value) but can take two or three if needed.

`.map(value, index, array)`  
`.filter(value, index, array)`

1. The **value** of the array at the current iteration (required).

2. The **index** of the array at the current iteration (optional).

3. The **array** the higher-order function was called on (optional).

### Map

The **.map()** method iterates through an array and returns a new array of the same length.

Here is an example of iterating using a for loop:

```javascript
const myArray = [5, 3, 2, 9, 8]

let newArray = []
for (let i = 0; i < arr.length; i++) {
  newArray.push(myArray[i] * 3)
}

console.log(newArray)
```

Now let's look at this same objective with `.map()` method.

```javascript
const myArray = [5, 3, 2, 9, 8]

const multiplier = myArray.map((value) => {
  return value * 3
})

console.log(multiplier)
```

Because we are using an arrow function we can reduce the code even further. If there is only one line of code to be executed, we can remove the `return` keyword as the return is implied.

```javascript
const myArray = [5, 3, 2, 9, 8]

const multiplier = myArray.map((value) => value * 3)

console.log(multiplier)
```

And finally let's wrap the `.map()` logic in a function that can take in any array to make the function reusable. This allows us to call the `multiplier` function as many times as we deem useful.

```javascript
const myArray = [5, 3, 2, 9, 8]

const multiplier = (array) => {
  return array.map((value) => value * 3)
}
console.log(multiplier(myArray))
console.log(multiplier([3, 4, 5, 6, 7]))
```

Notice that `.map()` iterates through the specified array **AND** returns a new array with the updated values.

Here is another example with proper pseudo coding:

```javascript
// create a function that takes in an array and returns each word capitalized
const fruitArray = ["banana", "mango", "apple", "grape"]

// declare a function that takes in an array
const capitalizer = (array) => {
  // create a local variable that maps through the array
  let eachItem = array.map((value) => {
    // with each value access the first index and capitalize the letter then concatenate the remainder of the word
    return value[0].toUpperCase() + value.substring(1)
  })
  // return the local variable joined into a string
  return eachItem.join(" ")
}
// logging the function and pass in the array
console.log(capitalizer(fruitArray))
```

**Note:** - This function has a return for the outer function **AND** a return for the higher-order function.

### Truthy and Falsy

The JavaScript language supports type coercion. **Type coercion** is the evaluation of data that are not the same type by the conversion of one data type to another. Part of type coercion, and a quirk of JavaScript, is that all data types evaluate to either a true value or a false one. A **falsy value** is one that JavaScript deems to equate to the Boolean value false through the use of type coercion such as 0, null, and strings with no characters. A **truthy value** is one that JavaScript deems to equate to the Boolean value true through the use of type coercion such as non-zero numbers and strings with characters. This produces interesting outputs such as the following:

```javascript
1 + "1"
// --> "11"

true + 1
// --> 2

null + 4
// --> 4
```

Truthy and falsy values are important to understand and can be used to the advantage of the JavaScript developer. However, this quirk of JavaScript should not be exploited at the cost of code quality.

### Filter

The `.filter()` method iterates through an array and returns a new array with only the values that satisfy the stated condition. Filter needs an evaluation. The evaluation can be anything that will return a Boolean value of true or false or a truthy or falsy value. Values that are true or truthy are included in the subset while values that are false or falsy are excluded. This evaluation process allows filter to return a subset of the original array.

Here is an example of iterating and returning a subset of an array using a for loop:

```javascript
const numbersArray1 = [1, 2, 7, 4, 10, 8, 9]

const onlyEven = (array) => {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArr.push(array[i])
    }
  }
  return newArr
}

console.log(onlyEven(numbersArray1))
```

In the above example, we have created a function that takes an array, loops through the array, and returns a new array containing only the even numbers.

Here is the same example using the filter method.

```javascript
const numbersArray1 = [1, 2, 7, 4, 10, 8, 9]

const onlyEven = (array) => {
  return array.filter((value) => value % 2 === 0)
}

console.log(onlyEven(numbersArray1))
```

Here is another example with proper pseudo coding:

```javascript
// create a function that returns only the values at the odd indexes
const numbers = [4, 24, 5, 9, 0, 78]

// declare a function that takes in an array
const getOnlyOddIndex = (array) => {
  // return a higher-order function that takes in the value and the index
  return array.filter((value, index) => {
    // return only the values that have an odd index
    return index % 2 !== 0
  })
}
// log the function and pass in the array
console.log(getOnlyOddIndex(numbers))
```

### Map vs Filter

When deciding which higher-order function to use, remember these two differences:

- `.map()` will do something to each item in an array and return an array of the same length.
- `.filter()` will make a decision about each item in an array and return a subset based on the criteria given.

---

### 💻 Challenges

Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use `.map()` or `.filter()` to complete all of the following exercises.  
**Don't forget to pseudo code.**

1. Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

```javascript
const arr1 = [3, 9, 15, 4, 10]
// --> [30, 90, 150, 40, 100]
```

2. Write a function that takes in an array of numbers and returns a new array with only odd numbers.

```javascript
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// --> [7, 3, 5, 13]
```

3. Write a function that takes in an array of numbers and letters and returns a string with only the letters. **HINT:** Use the [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator.

```javascript
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// --> "nicework"
```

4. Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

```javascript
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// --> [58, "abcd", true]
```

**STRETCH Challenges**

1. Create a function that takes in a string and returns a new string with all the vowels removed.

```javascript
const str = "javascript is awesome"
// --> "jvscrpt s wsm"
```

2. Create a function that takes in two arrays as arguments returns one array with no duplicate values.

```javascript
const arr1 = [3, 7, 10, 5, 4, 3]
const arr2 = [7, 8, 2, 1, 5, 4]
// --> [3, 7, 10, 5, 4, 8, 2, 1]
```

---

[Back to Syllabus](../README.md#unit-two-javascript-foundations)
