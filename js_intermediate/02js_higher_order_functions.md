# Higher-Order Functions

[![YouTube](http://img.youtube.com/vi/OHxBtQxC0ok/0.jpg)](https://www.youtube.com/watch?v=OHxBtQxC0ok&list=PLbsdmHaQ-46dMPNZkV3TEP6J_t1DASQCr&index=7&t=0s)


A higher-order function is simply a function that either takes in another function as an argument or returns another function.

We will focus on two higher order functions for this lesson -
**.map()** and **.filter()** both have three built-in arguments - the value, index, and array.

* .map(value, index, array)
* .filter(value, index, array)


1. The **value** at each index of an array

2.  The **index** of the array that we are looping through   

3.  The **array** that map was called on


## .map()

Let's start with .map() by looking at a loop example from a previous lesson...

```JavaScript

var arr = [5, 3, 2, 9, 8]

for(let i=0; i < arr.length; i++){
    console.log(arr[i] * 3);
}

```

Now let's look at this same objective with .map()

```JavaScript

var arr = [5, 3, 2, 9, 8]

var newArr = arr.map(function(index){
    return index * 3
})

console.log(newArr);

```

And with the new ES6 syntax we can reduce the code even further...

```JavaScript

var arr = [5, 3, 2, 9, 8]

var newArr = arr.map(value => value * 3)

console.log(newArr);

```

And finally let's put all that together in a function that can take in any array.

#### Before .map() and ES6 Syntax

```JavaScript

var arr = [5, 3, 2, 9, 8]

function mult3(array){
    let newArr = []
    for(let i = 0; i < array.length; i++){
        newArr.push(array[i] * 3)
    }
    return newArr
}

console.log(mult3(arr));
```
Notice with the above example that we are iterating through an array of numbers, multiplying each number by three, pushing each number into a new array and returning that new array.  


#### Using .map() and ES6 Syntax

```JavaScript

var arr = [5, 3, 2, 9, 8]

    mult3 = (array) => {
        let newArr = array.map(value => value * 3)
        return newArr
    }

console.log(mult3(arr));

```
Notice that .map() loops through the specified array AND pushes the updated values into a new array.


## .filter()

The .filter() function loops through an array and returns a new array with the values that are *truthy* or the values that satisfy your stated condition.

Let's look at a .filter() example by refactoring a function from a previous lesson.


#### Before .filter() and ES6 Syntax


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

So in the above example we have created a function that takes an array as an argument, loops through the array and returns a new array containing only the even numbers.

#### Using .filter() and ES6 Syntax

```JavaScript

var arr = [1, 2, 7, 4, 10, 8, 9]

    only_even = (array) => {
        let newArr = array.filter(value => value % 2 === 0)
        return newArr
    }

console.log(only_even(arr));

```

## Objects

You can use .map() or .filter() on arrays of objects as well.  

Example:  Consider this toons variable.  Use .map() or .filter() to return a new array with only the dogs.

```JavaScript

var toons = [{name: "Brian", animal: "dog"},
            {name: "Tom", animal: "duck"},
            {name: "Bugs", animal: "dog"},
            {name: "Daffy", animal: "duck"},
            {name: "Felix", animal: "dog"},
            {name: "Tabby", animal: "cat"}]


var animal = toons.filter(value => value.animal === "dog")



console.log(animal);

```

## .map() vs .filter()

When deciding which higher-order function to use remember that .map() will do something to each item in an array and return the same number of items.  Whereas .filter() will return a new, smaller array 'filtered' based on your specified criteria.

# Challenges

REMEMBER TO PSEUDO CODE FIRST!!

Use .map() or .filter() and ES6 syntax on the exercises below.

Write an anonymous function that takes in an array and returns a new array with all numbers multiplied by 10.

* var arr1 = [3, 9, 15, 4, 10]
* expected output -> [30, 90, 150, 40, 100]


Write an anonymous function that takes in an array and returns a new array with only odd numbers.

* var arr2 = [2, 7, 3, 5, 8, 10, 13]
* expected output = [7, 3, 5, 13]


Write a function that takes in an array of numbers and letters and returns a new array with only the letters. HINT: use typeof() method.

* var combo_arr = [7, "n", "i", "c", 10, "e", "w", 3, "o", "r", "k"]

Consider this array of objects:

```JavaScript
var animals = [
  { name: "Waffles", type: "dog", age: 12 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
];
```
* Create an anonymous function that takes in any array of objects and returns a new array with only those of type cat.

* Using the same array of objects above. Create an anonymous function that returns a new array with only the names of the animals.

## Epic Challenges

Remember to use .map() or .filter() and pseudo code first.  

Create a function that takes in a string and returns a new string with all the vowels removed.

* var str = "javascript is awesome"
* expected output -> "jvscrpt s wsm"


Create a function that merges two arrays, takes in two arrays as arguments returns one array with no duplicate values.

* var arr1 = [3, 7, 10, 5, 4, 3]
* var arr2 = [7, 8, 2, 1, 5, 4]
* expected output -> [3, 7, 10, 5, 4, 8, 2, 1]

[Go to Javascript Pig Latin](./03js_pig_latin_mob.md)

[Back to Javascript ES6 Syntax](./01js_es6_syntax.md)
