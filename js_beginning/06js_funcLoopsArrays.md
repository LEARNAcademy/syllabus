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

## Epic Challenges

Create a function that takes in a string and returns whether the string is a palindrome (same forward and backwards).

* var str = "damon nomad"
* expected output -> "Yes damon nomad is a palindrome"


Create a function that takes in a string and returns a new string with all the vowels removed.

* var str = "javascript is awesome"
* expected output -> "jvscrpt s wsm"


Create a function that merges two arrays, takes in two arrays as arguments returns one array with no duplicate values.

* var arr1 = [3, 7, 10, 5, 4, 3]
* var arr2 = [7, 8, 2, 1, 5, 4]
* expected output -> [3, 7, 10, 5, 4, 8, 2, 1]

[Go to Javascript Objects](./07js_objects.md)


[Back to Javascript Loops](./05js_loops.md)