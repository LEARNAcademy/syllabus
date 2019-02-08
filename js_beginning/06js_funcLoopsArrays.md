## Functions, Loops and Arrays (Oh My!)

In some cases, we will need to build functions that utilize all of these topics.  Let's put all these concepts together with the following exercise.

1.  Create a function that takes in an array and returns a new array with all numbers multiplied by 5.

```JavaScript
var arr1 = [1, 5, 7, 3, 10]

function mult5(array){
    let newArr = []
    for(let i = 0; i < array.length; i++){
        newArr.push(array[i] * 5)
    }
    return newArr
}

console.log(mult5(arr1));

```

Notice that we created an empty array inside our function and used the **.push()** method to populate our empty array.  We then returned our newly populated array.  Later we will learn how to greatly reduce this amount of code by using a built in higher order function called .map().

The above functions works great when we want to do something with each item in an array, but what if we wanted to return only certain items from an array? Let's look at another exercise.

1.  Create a function that takes in an array and returns a new array with only the even numbers.

```JavaScript
var arr1 = [1, 2, 7, 4, 10, 8, 9]

function only_even(array){
    let newArr = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            newArr.push(array[i])
        }
    }
    return newArr
}

console.log(only_even(arr1));
```

Notice that we used a conditional inside our loop that was inside our function.  Later we will learn a higher order function that greatly reduces this code called .filter().

## Challenges

You can refer to the lecture notes above, but do not copy and paste them.  Try building them from scratch.

DON'T FORGET TO PSEUDO CODE

Write a function that takes in an array and returns a new array with all numbers multiplied by 3.

* var arr1 = [3, 9, 15, 4, 10]
* expected output -> [9, 27, 45, 12, 30]


Write a function that takes in an array and returns a new array with only odd numbers.

* var arr2 = [2, 7, 3, 5, 8, 10, 13]
* expected output = [7, 3, 5, 10, 13]

Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.

* var sent = "Hello There"
* expected output = "HELLO THERE"

Write a function that takes in an array of numbers and letters and returns a new array with only the letters. HINT: use typeOf() method.

* var combo_arr = [7, "n", "i", "c", 10, "e", "w", 3, "o", "r", "k"]

Create a function that finds the highest number.
 * `highestNumber([1,4,2])` should return 4

 * Hint: create a variable called max, and assign it a reasonable start value; then use a for loop: if an element is higher than max, change max.

Create a function that finds the lowest number.
 * `lowestNumber([1,4,2])` should return 1

Create a function that calculate the sum.
 * `sum([1,2,3])` should return 6
 * `sum([])` should return 0

Create a function that calculate the mean value.
 * `mean([1,2,3])` should return 2

Create a function that finds the index of the highest number.
 * `indexHighestNumber([1,4,2])` should return 1


## Epic Challenges


#### Pre-fill
Write a Javascript function called fillArray to create a specified number of elements with a pre-filled numeric values in an array.

fillArray(6, 0) should return [0, 0, 0, 0, 0, 0]
fillArray(4, 11) should return [11, 11, 11, 11]

#### Clean Function
Write a Javascript function to filter false, null, 0 and blank values from an array.

* filterArrayValues([58, '', 'abcd', true, null, false, 0])
* should return [58, "abcd", true]

## Hi/Low Game

#### Goal

* Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and repeatedly asks the user for guesses.
* If the user's guess is too high or too low, the computer notifies them of that
* Otherwise, if the user guesses the secret number correctly, the computer displays a winning message and the game is over.

Hint: See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random" target="_blank">Math.random()</a>
#### Stretch goal 1

Create an HTML page and link your javascript file.  You can use prompt() and alert()

#### Stretch goal 2


If the user has not guessed the secret number in seven tries, the user loses.





#### Palindrome
Create a function that takes in a string and returns whether the string is a palindrome (same forward and backwards).

* var str = "damon nomad"
* expected output -> "Yes damon nomad is a palindrome"

#### Vowels Removed
Create a function that takes in a string and returns a new string with all the vowels removed.

* var str = "javascript is awesome"
* expected output -> "jvscrpt s wsm"

#### Merge Arrays
Create a function that merges two arrays, takes in two arrays as arguments returns one array with no duplicate values.

* var arr1 = [3, 7, 10, 5, 4, 3]
* var arr2 = [7, 8, 2, 1, 5, 4]
* expected output -> [3, 7, 10, 5, 4, 8, 2, 1]

[Go to Javascript Objects](./07js_objects.md)


[Back to Javascript Loops](./05js_loops.md)