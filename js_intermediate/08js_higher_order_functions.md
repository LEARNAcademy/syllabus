# Higher-Order Functions

A higher-order function is simply a function that either takes in another function as an argument or returns another function.  

We will focus on two higher order functions for this lesson - **.map()** and **.filter()**.

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

### Before .map() and ES6 Syntax

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


### Using .map() and ES6 Syntax

```JavaScript

var arr = [5, 3, 2, 9, 8]

    mult3 = (array) => {
        let newArr = array.map(value => value * 3)
        return newArr
    }

console.log(mult3(arr));

```
Notice that .map() loops through the specified array AND pushes the updated values into a new array.
