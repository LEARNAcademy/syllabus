
## Loops

#### for loop

This is the most common type of loop you will see used in javascript. It gives you the most control over how you are iterating over items by letting you define:

1. Where the count (index) starts
2. When the function should end (a condition that at some point returns false)
3. What to do after each loop




Can you guess what this loop will do?

```JavaScript

for(var i=0; i < 5; i++){
    console.log(i)
}

```

How about this loop...

```JavaScript

for(var i=10; i > 0; i--) {
    console.log(i);
}
```

For loops are especially helpful when we want to iterate through an array and do something to each element.

```javascript

//loop through and array of numbers and return each number multiplied by 3.

var arr = [5, 3, 2, 9, 8]


for(i=0; i < arr.length; i++){
    console.log(arr[i] * 3);
}

```

So what's going on in the above example?  During each loop the array[i] is being replaced with..

arr[0] which becomes 5 * 3

arr[1] which becomes 3 * 3

arr[2] which becomes 2 * 3

etc.

We can also 'filter' an array based on certain conditions (if / else statements)

```JavaScript

//write a for loop that logs all numbers except 5
//expected output [3,2,7]

var arr = [5, 3, 5, 2, 5, 7]

for(i=0; i < arr.length; i++){
    if(arr[i] !== 5){
        console.log(arr[i])
    }      
}
```

Notice the indentation in the above example.  This helps us to see if we have closed all of our open curly brackets.  We can see that line 71 closes our if/else statement and line 72 closes our for loop.


#### while loop


## Loops/Iteration Challenges

Below are exercises in using loops and iteration. Beneath each prompt write the code to fulfill the exercise requirement.

1.  Write a for loop that logs each number from 1 - 20.

2.  Write a for loop that logs the result of each number from 1 - 20 tripled.

3.  Consider this variable: var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].  Write a for loop that logs each number.

4.  Create a for loop that logs each EVEN number from 1-20, and in the place of every odd number, returns the word "ODD"
So the result should be: [ODD, 2, ODD, 4, ODD, 6 ....]

5.  Your friend is training for a marathon and you are going to help them. They are running on a track, but often lose count of how many loops they have done. You need to create a for loop to log their progress as they run. Create the code to satisfy the pseudo code below:

```JavaScript

//Initial number of laps is 0
//Track size: 1/4 mile
//Goal: Run 8 miles

for(....create the loop condition ....) {
      log laps until your friend has run their 8 miles
}

//EXTRA: For extra challenge, add code that logs an encouraging message to your friend at the 4, 6, and 7 mile markers

```


Use a for loop to log each number from the numbers variable above in reverse.
