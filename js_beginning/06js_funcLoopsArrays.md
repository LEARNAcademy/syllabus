# Functions, Loops and Arrays (Oh My!)

[![YouTube](http://img.youtube.com/vi/TlAI9_bXobg/0.jpg)](https://www.youtube.com/watch?v=GOZsrmfAbfI)

## Putting it all together

Functions can utilize arrays, loops, and conditionals in combination to procure a particular outcome. Here are some examples of putting it all together.

* Create a function that takes in an array and returns a new array with all numbers multiplied by 5.

```JavaScript
var myArr1 = [1, 5, 7, 3, 10]

function mult5(array){
  let newArr = []
  for(let i = 0; i < array.length; i++){
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

function onlyEven(array){
  let newArr = []
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      newArr.push(array[i])
    }
  }
  return newArr
}

console.log(onlyEven(myArr2))

```

### Challenges

DON'T FORGET TO PSEUDO CODE

1. Write a function that takes in an array and returns a new array with all numbers multiplied by 3.

* var testArr1 = [3, 9, 15, 4, 10]
* expected output -->> [9, 27, 45, 12, 30]


2. Write a function that takes in an array and returns a new array with only odd numbers.

* var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
* expected output -->> [-7, 3, 5, 13]

3. Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.

* var myMessage = "Hello There"
* expected output -->> "HELLO THERE"

4. Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method

* var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
* expected output -->> "nicework"

5. Create a function that returns the highest number

* var highestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]
* expected output -->> 67

6. Create a function that returns the lowest number

* var lowestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]
* expected output -->> -9

7. Create a function that calculates the sum
* var addThese1 = [1, 2, 3, 4]
* expected output -->> 10
* var addThese2 = []
* expected output -->> 0

8. Create a function that calculates the mean value
* var meanChecker = [1, 2, 3]
* expected output -->> 2

9. Create a function that finds the index of the highest number
* var indexHighestNumber = [1, 4, 2]
* expected output -->> 1

10. Create a function that takes in a string and returns only the middle value

* var testString1 = "hello"
* expected output -->> "l"
* var testString2 = "boogeyman"
* expected output -->> "e"

### Stretch Challenges

1. Palindrome: Create a function that takes in a string and determines whether the string is a palindrome (the same word forward and backwards)

* var isPalindrome1 = "racecar"
* expected output -->> "Yes racecar is a palindrome"
* var isPalindrome2 = "albatross"
* expected output -->> "No albatross is not a palindrome"

2. Vowels Removed: Create a function that takes in a string and returns a new string with all the vowels removed

* var fullString1 = "javascript is awesome"
* expected output -->> "jvscrpt s wsm"
* var fullString2 = "I am a LEARN student"
* expected output -->> "m LRN stdnt"

3. Merge Arrays: Create a function that takes in two arrays as arguments and returns one array with no duplicate values.

* var arr1 = [3, 7, 10, 5, 4, 3, 3]
* var arr2 = [7, 8, 2, 3, 1, 5, 4]
* expected output -->> [3, 7, 10, 5, 4, 8, 2, 1]

4. Clean Function: Create a function that filters false, null, 0 and blank values from an array.

* var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
* expected output -->> [58, "abcd", true]

5. Pre-fill: Write a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.

* fillArray(6, 0)
* expected output -->> [0, 0, 0, 0, 0, 0]
* fillArray(4, 11)
* expected output -->> [11, 11, 11, 11]

6. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

* 4 ➞ 10
* 13 ➞ 91
* 600 ➞ 180300

7. Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

* ([1, 2, 3, 4, 5]) ➞ [1, 5]
* ([2334454, 5]) ➞ [5, 2334454]
* ([1]) ➞ [1, 1]





### Super Stretch Challenge

#### High/Low Game
* Create an HTML page and link your JavaScript file
* Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and asks the user to guess a number HINT: use prompt(), OR `<input>`
* If the user's guess is too high, the user will be notified
* If the user's guess is too low, the user will be notified
* If the user guesses the secret number correctly, a winning message will be displayed HINT: use alert() OR `innerHTML`
* Stretch: If the user has not guessed the secret number in seven tries, a losing message will be displayed
* Stretch: Add styling to your page and push it to a GitHub repository


[Go to Javascript Objects](./07js_objects.md)

[Back to Javascript Functions](./03js_functions.md)
