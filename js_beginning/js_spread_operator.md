# JS Spread Syntax

The official definition: Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more
arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded
in places where zero or more key-value pairs (for object literals) are expected.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" target="_blank">MDN Spread Syntax</a>

### Examples:

#### A better way to concatenate arrays

```javascript
// Append all items from arr2 onto arr1 before ES6

var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]

arr1 = arr1.concat(arr2) -->> [0, 1, 2, 3, 4, 5]


// With the spread operator

var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]

arr1 = [...arr1, ...arr2]
```

#### We can also duplicate arrays:
```javascript
var arr1 = [1, 2, 3]
var arr2 = [...arr1]
arr2.push(4)

console.log(arr2) -->> [1, 2, 3, 4]
console.log(arr1) -->> [1, 2, 3]
// arr1 remains unaffected
```

#### Passing a dynamic number of arguments

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

For another example look at <a href="https://github.com/bravo-2018/daily_challenges/blob/master/March-28/dedupe/dedupe.js">this </a> deduping function challenge refactored to make use of spread syntax.