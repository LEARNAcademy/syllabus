# JavaScript Functions, Loops, and Arrays (Oh My!)

#### Overview
Functions are powerful tools that can take any kind of data as an input. Often we need a function to interact with data sets and perform iterations. This section integrates functions, loops, and arrays to create reusable, iterative code machines.

#### Previous Lecture (42 min)
[![YouTube](http://img.youtube.com/vi/V6pmC4ylFjk/0.jpg)](https://www.youtube.com/watch?v=V6pmC4ylFjk)

#### Learning Objectives
- can extrapolate that an array can be passed into a function via an argument
- can create a function that acts on an array using a for loop

#### Process
- `cd` into the `javascript-foundations-challenges` repository
- Create a new branch: `func-loops-arrays-initials1-initials2` (ex. func-loops-arrays-aw-sp)
- `touch` a file with no spaces and `.js` extension: `func-loops-arrays-student1-student2.js` (ex. func-loops-arrays-austin-sarah.js)
- Open the folder in a text editor
- Code!

#### Troubleshooting Tips
- Does the function have a return?
- Is there a `console.log` on the function invocation?
- Does the number of arguments match the number of parameters?

---

### Putting It All Together
As we work to solve more complicated problems with code, we need to add more logic into our functions. In this section, we will explore how arrays and loops can be integrated into functions.

**Example:** Create a function that takes in an array and returns a new array with all numbers multiplied by 5.

```javascript
var myArr1 = [1, 5, 7, 3, 10]

const mult5 = (array) => {
  let newArr = []
  for(let i=0; i<array.length; i++){
    newArr.push(array[i] * 5)
  }
  return newArr
}

console.log(mult5(myArr1))
```

Notice that we created an empty array inside our function and used the **.push()** method to populate our empty array. The function then returned the newly populated array.

In the following example, we can add a nested conditional statement to return only certain items from the array.

**Example:** Create a function that takes in an array and returns a new array with only the even numbers.

```javascript
var myArr2 = [1, 2, 7, 4, 10, 8, 9]

const onlyEven = (array) => {
  let newArr = []
  for(let i=0; i<array.length; i++){
    if(array[i] % 2 === 0){
      newArr.push(array[i])
    }
  }
  return newArr
}

console.log(onlyEven(myArr2))
```

---

### Challenges
Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.  
**Don't forget to pseudo code.**

1. Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

```javascript
var testArr1 = [3, 9, 15, 4, 10]
// --> [9, 27, 45, 12, 30]
```

2. Write a function that takes in an array of numbers and returns a new array with only odd numbers.

```javascript
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// --> [-7, 3, 5, 13]
```

3. Write a function that takes in an array of numbers and letters and returns a string with only the letters. **HINT:** use the `typeof` method.

```javascript
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// --> "nicework"
```

4. Create a function that takes in an array of numbers and returns the sum.

```javascript
var addThese1 = [1, 2, 3, 4]
// --> 10

var addThese2 = []
// --> 0
```

5. Create a function that takes in an array of numbers and returns the index of the largest number.

```javascript
var indexHighestNumber = [1, 4, 2, 3]
// --> 1
```

**STRETCH Challenges**
1. Create a function that takes in two arrays and returns one array with no duplicate values.

```javascript
var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// --> [3, 7, 10, 5, 4, 8, 2, 1]
```

2. Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.

```javascript
var arrayLength = 6
var arrayValue = 0
// --> [0, 0, 0, 0, 0, 0]

var arrayLength = 4
var arrayValue = 11
// --> [11, 11, 11, 11]
```

3. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.

```javascript
var addUp1 = 4
// 1 + 2 + 3 + 4 = 10
// --> 10

var addUp2 = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// --> 55

var addUp3 = 600
// --> 180300
```

**EPIC Challenges**

- Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
- Create an HTML page and link your JavaScript file. More info [ here ](../tools_and_resources/linking_html_and_javascript.md).
- As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
- As a user, I can see if my guess is too high or too low.
- As a user, if I guess the "answer" correctly I am notified that I won.
- As a user, I can continue to guess the "answer" until I am correct.
- STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.

---
[Back to Syllabus](../README.md#unit-one-javascript-foundations)
