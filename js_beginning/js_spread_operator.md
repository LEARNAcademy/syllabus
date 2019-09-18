# JS Spread Syntax

The official definition: Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more
arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded
in places where zero or more key-value pairs (for object literals) are expected.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" target="_blank">MDN Spread Syntax</a>

Let's look at some use cases.

## Array concatenation

Historically when we wanted to concatenate 2 arrays ( join 2 arrays) we had to use the Array **concat()** method:

```javascript
// Pre ES6: .concat() method

var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]

var combined = arr1.concat(arr2) -->> [0, 1, 2, 3, 4, 5]

console.log(combined)
```

While that wasn't terrible to use, we now have ability to use the spread operator to accomplish the same task:

```javascript
// ES6 Spread operator

var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]

var combined = [...arr1, ...arr2]
console.log(combined)
```

Notice the result is more declarative and more readable.

## Array Duplication

The spread operator also makes duplicating an array very simple.

```javascript
var arr1 = [1, 2, 3]
var arr2 = [...arr1]

console.log(arr2) -->> [1, 2, 3]
console.log(arr1) -->> [1, 2, 3]
```

Where we may have duplicated the array using a map or slice, we now have again a more declarative technique for doing the same at our disposal. Just like the previously mentioned techniques, the spread operator is non destructive.

```javascript
var arr1 = [1, 2, 3]
var arr2 = [...arr1]
arr2.push(4)

console.log(arr2) -->> [1, 2, 3, 4]
console.log(arr1) -->> [1, 2, 3]
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
-->> "Hello there world"

// With spread operator

createSentence(...words){
    return words.join(" ")
}

console.log(createSentence("hello", "y'all", "what's", "up", "doc"))
-->> "hello y'all what's up doc"
```

For another example look at <a href="https://github.com/bravo-2018/daily_challenges/blob/master/March-28/dedupe/dedupe.js" target="_blank">this </a> deduping function challenge refactored to make use of spread syntax.

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
  return arrOne.concat(arrTwo).concat(arrThree).filter(num => num % 2 != 0)
}

console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))
```

Refactor this function to use the spread operator to combine the array arguments.

**STRETCH**

Recall the **combineAndFilterOdd()** function from the previous exercise. Refactor the function to take any number of arguments.