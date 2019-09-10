# Destructuring assignments in Javascript

The destructuring assignment in Javascript is really just a special way of assigning variables in Javascript. What's great about the destructuring assignment is that it allows you to take something like an array or an object and unpack their values into individual variables.

## Array Destructuring

Array destructuring is probably the simplest form of destructuring and looks like this:

```javascript
let [firstVal, secondVal] = [1, 2]

console.log(firstVal)   // => 1
console.log(secondVal)  // => 2
```

Notice that an array destructuring assigment:

- Starts with a variable keyword
- In square brackets lists some variable names
- Uses the assignment operator to assign the array to unpack

Also notice that the variables are assigned in order. As in, the first variable name is assigned the first value of the value array.


