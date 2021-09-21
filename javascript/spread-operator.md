# JavaScript Spread Operator

## Video: Spread Syntax
[![YouTube](http://img.youtube.com/vi/72qhgQQNkOo/0.jpg)](https://www.youtube.com/watch?v=72qhgQQNkOo)

## Overview
- Spread syntax was introduced in the ES6 update
- Spread syntax expands an iterable to its individual elements
- Spread syntax allows a dynamic number of arguments to be passed in a function

## Learning Objectives
- Exploring use cases for spread syntax

## Vocabulary
- spread syntax ...
- iterable

## Additional Resources
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" target="blank">MDN Spread Syntax</a>
- <a href="https://github.com/bravo-2018/daily_challenges/blob/master/March-28/dedupe/dedupe.js" target="blank">Deduping function challenge</a> refactored to make use of spread syntax


Offical MDN Definition: Spread syntax allows an iterable (such as an array or string) to be expanded in places where zero or more
arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded
in places where zero or more key-value pairs (for object literals) are expected.

---

## Array concatenation

Historically when we wanted to concatenate 2 arrays (join 2 arrays) we had to use the Array **concat()** method:

```javascript
// Pre ES6: .concat() method

var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]

var combined = arr1.concat(arr2)

console.log(combined)
--> [0, 1, 2, 3, 4, 5]
```

While that wasn't terrible to use, we now have ability to use the spread operator to accomplish the same task:

```javascript
// ES6 Spread operator

var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]

var combined = [...arr1, ...arr2]
console.log(combined)
--> [0, 1, 2, 3, 4, 5]
```

Notice the code is more declarative and more readable.

## Array Duplication

The spread operator also makes duplicating an array very simple.

```javascript
var arr1 = [1, 2, 3]
var arr2 = [...arr1]

console.log(arr2)
--> [1, 2, 3]

console.log(arr1)
--> [1, 2, 3]
```

Where we may have duplicated the array using a map or slice, we now have again a more declarative technique for doing the same at our disposal. Just like the previously mentioned techniques, the spread operator is non destructive.

```javascript
var arr1 = [1, 2, 3]
var arr2 = [...arr1]
arr2.push(4)

console.log(arr2)
--> [1, 2, 3, 4]

console.log(arr1)
--> [1, 2, 3]

// arr1 remains unaffected
```

## Passing a dynamic number of arguments

Finally, the spread operator gives us a way to handle cases in which we are passing an unknown number of arguments to a function or method.

```javascript
// Before ES6

function createSentence(w1, w2, w3) {
  return w1 + w2 + w3
}

console.log(createSentence("hello", "there", "world"))
--> "Hello there world"

// With spread operator

createSentence(...words){
  return words.join(" ")
}

console.log(createSentence("hello", "y'all", "what's", "up", "doc"))
--> "hello y'all what's up doc"
```

## Challenges

#### Exercise 1

Consider this function:

```javascript
function combineArrays(arrOne, arrTwo) {
  return arrOne.concat(arrTwo)
}

console.log(combineArrays([2, 4, 2], [4, 6, 11]))
```

Refactor this function to use the spread operator to combine the arrays.

#### Exercise 2

Consider this function:

```javascript
function combineAndFilterOdd(arrOne, arrTwo, arrThree){
  return arrOne.concat(arrTwo).concat(arrThree).filter(num => num % 2 !== 0)
}

console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))
```

Refactor this function to use the spread operator to combine the array arguments.

**STRETCH**

Recall the **combineAndFilterOdd()** function from the previous exercise. Refactor the function to take any number of arguments.

---
[Back to Syllabus](../README.md#unit-one-javascript-foundations)
