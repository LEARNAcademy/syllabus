# Functions, Loops and Arrays (Oh My!)

[![YouTube](http://img.youtube.com/vi/TlAI9_bXobg/0.jpg)](https://www.youtube.com/watch?v=TlAI9_bXobg)

## Putting it all together

Functions can utilize arrays, loops, and conditionals in combination to procure a particular outcome. Here are some examples of putting it all together.

* Create a function that takes in an array and returns a new array with all numbers multiplied by 5.

```JavaScript
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

* Create a function that takes in an array and returns a new array with only the even numbers.

```JavaScript
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

## Challenges

**DON'T FORGET TO PSEUDO CODE**

1. Write a function that takes in an array and returns a new array with all numbers multiplied by 3.

  var testArr1 = [3, 9, 15, 4, 10]

  Expected output -->> [9, 27, 45, 12, 30]


2. Write a function that takes in an array and returns a new array with only odd numbers.

  var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

  Expected output -->> [-7, 3, 5, 13]

3. Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.

  var myMessage = "Hello There"

  Expected output -->> "HELLO THERE"

4. Write a function that takes in an array of numbers and letters and returns a string with only the letters. **HINT:** use the typeof method

  var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

  Expected output -->> "nicework"

5. Create a function that returns the highest number

  var highestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]

  Expected output -->> 67

6. Create a function that returns the lowest number

  var lowestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]

  Expected output -->> -9

7. Create a function that calculates the sum

  var addThese1 = [1, 2, 3, 4]

  Expected output -->> 10

  var addThese2 = []

  Expected output -->> 0

8. Create a function that calculates the mean value

  var meanChecker = [1, 2, 3]
  Expected output -->> 2

9. Create a function that finds the index of the highest number

  var indexHighestNumber = [1, 4, 2]

  Expected output -->> 1

10. Create a function that takes in a string and returns only the middle value

  var testString1 = "hello"
  Expected output -->> "l"
  var testString2 = "boogeyman"
  Expected output -->> "e"

### STRETCH Challenges

1. Palindrome: Create a function that takes in a string and determines whether the string is a palindrome (the same word forward and backwards)

  var isPalindrome1 = "racecar"

  Expected output -->> "Yes racecar is a palindrome"

  var isPalindrome2 = "albatross"

  Expected output -->> "No albatross is not a palindrome"

2. Vowels Removed: Create a function that takes in a string and returns a new string with all the vowels removed

  var fullString1 = "javascript is awesome"

  Expected output -->> "jvscrpt s wsm"

  var fullString2 = "I am a LEARN student"

  Expected output -->> "m LRN stdnt"

3. Merge Arrays: Create a function that takes in two arrays as arguments and returns one array with no duplicate values.

  var arr1 = [3, 7, 10, 5, 4, 3, 3]

  var arr2 = [7, 8, 2, 3, 1, 5, 4]

  Expected output -->> [3, 7, 10, 5, 4, 8, 2, 1]

4. Clean Function: Create a function that filters false, null, 0 and blank values from an array.

  var filterArrayValues = [58, " ", "abcd", true, null, false, 0]

  Expected output -->> [58, "abcd", true]

5. Pre-fill: Write a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.

  fillArray = (6, 0)

  expected output -->> [0, 0, 0, 0, 0, 0]

  fillArray = (4, 11)

  expected output -->> [11, 11, 11, 11]

6. Create a function named addUp that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

  addUp = (4)

  Expected output -->> 10

  addUp = (13)

  Expected output -->> 91

  addUp = (600)

  Expected output  -->> 180300

### EPIC Challenge

#### High/Low Game
- Create an HTML page and link your JavaScript file
- More information about linking HTML to JavaScript [here](../tools_and_resources/linking_html_and_javascript.md)
- As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive)
- As a user, when I see if my guess is too high or too low
- As a user, if I guess the number correctly I am notified that I won
- STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message

[Go to next lesson: Higher Order Functions](../js_intermediate/02js_higher_order_functions.md)

[Back to Javascript Functions](./03js_functions.md)

[Back to Syllabus](../README.md)
