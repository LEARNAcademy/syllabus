# JavaScript Spread Operator

#### Overview

Spread syntax was introduced in the JavaScript ES6 update. Spread syntax expands an iterable to its individual elements. Spread syntax allows a dynamic number of arguments to be passed in a function.

#### Previous Lecture (18 min)

[![YouTube](http://img.youtube.com/vi/72qhgQQNkOo/0.jpg)](https://www.youtube.com/watch?v=72qhgQQNkOo)

#### Learning Objectives

- can explain how the spread operator is utilized
- can demonstrate the use of a spread operator in multiple ways
- can demonstrate how to pass a dynamic number of arguments to a function with a spread operator

#### Vocabulary

- spread syntax
- iterable

#### Additional Resources

- [MDN Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

---

### Spread Syntax

Official MDN Definition: Spread syntax allows an iterable (such as an array or string) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

### Array concatenation

Historically when we wanted to concatenate 2 arrays (join 2 arrays) we had to use the Array **concat()** method:

```javascript
// pre ES6: .concat() method

const arr1 = [0, 1, 2]
const arr2 = [3, 4, 5]

const combined = arr1.concat(arr2)

console.log(combined)
// output: [0, 1, 2, 3, 4, 5]
```

While that wasn't terrible to use, we now have ability to use the spread operator to accomplish the same task:

```javascript
// ES6 Spread operator

const arr1 = [0, 1, 2]
const arr2 = [3, 4, 5]

const combined = [...arr1, ...arr2]
console.log(combined)
// output: [0, 1, 2, 3, 4, 5]
```

Notice the code is more declarative and more readable.

### Array Duplication

The spread operator also makes duplicating an array very simple.

```javascript
var arr1 = [1, 2, 3]
var arr2 = [...arr1]

console.log(arr2)
// output: [1, 2, 3]

console.log(arr1)
// output: [1, 2, 3]
```

Where we may have duplicated the array using a map or slice, we now have again a more declarative technique for doing the same at our disposal. Just like the previously mentioned techniques, the spread operator is non destructive.

```javascript
var arr1 = [1, 2, 3]
var arr2 = [...arr1]
arr2.push(4)

console.log(arr2)
// output: [1, 2, 3, 4]

console.log(arr1)
// output: [1, 2, 3]

// arr1 remains unaffected
```

### Passing a dynamic number of arguments

Finally, the spread operator gives us a way to handle cases in which we are passing an unknown number of arguments to a function or method.

```javascript
// before ES6
const createSentence => (w1, w2, w3) => {
  return w1 + w2 + w3
}

console.log(createSentence("hello", "there", "world"))
// output: "Hello there world"

// with spread operator
const createSentence = (...words) => {
  return words.join(" ")
}

console.log(createSentence("hello", "y'all", "what's", "up", "doc"))
// output: "hello y'all what's up doc"
```

---

### 💻 Challenges

Consider this function:

```javascript
const combineArrays = (arrOne, arrTwo) => {
  return arrOne.concat(arrTwo)
}

console.log(combineArrays([2, 4, 2], [4, 6, 11]))
```

Refactor this function to use the spread operator to combine the arrays.

Consider this function:

```javascript
const combineAndFilterOdd = (arrOne, arrTwo, arrThree) => {
  return arrOne
    .concat(arrTwo)
    .concat(arrThree)
    .filter((num) => num % 2 !== 0)
}

console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))
```

Refactor this function to use the spread operator to combine the array arguments.

### 🏔 Stretch Goals

Recall the `combineAndFilterOdd()` function from the previous exercise. Refactor the function to take any number of arguments.

---

[Back to Syllabus](../README.md#unit-one-javascript-foundations)
