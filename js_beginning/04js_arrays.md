# JavaScript Arrays

Until now, we've only dealt with one piece of information at a time: one number, one string, one element on a page. But often, we need to group things together. For example, what if we wanted to have a list of the months of the year? We'd use an array, which is just a list of things grouped together.

Here are a few examples of arrays assigned to variables -

```JavaScript
var months = ["January", "February", "March", "April", "May"]

var numbers = [17, 15, 14, 3, 5, 10]

var combined = [17, "January", 15, "February", 14, "March", 3, "April", 5, "May", 10]

```
Notice that strings in an array have quotes but numbers don't need them.

The anatomy of an array consist of the following characteristics

* Opening and closing **square brackets** [ ] with a comma in between each item.

* The **value** in between each commma

* And a hidden **index** that exists behind each value

Note that the **index starts at 0** and increases by 1 each time.  So the first value we see is actually at index 0.

```JavaScript
var letters = ["l", "e", "a", "r", "n", " ", "S", "D"]

```

In the above example, the first letter "l" is at index 0 and the letter "r" is at index 3.  So the letter "S"
 is at what index?


#### Accessing Elements

We can use our variable (in this case letters) and an index number in square brackets to pull out values in an array.

```javascript
var letters = ["l", "e", "a", "r", "n", " ", "S", "D"];

console.log(letters[3])
r

console.log(letters[7])
D

console.log(letters[8])
undefined

```

#### Changing Elements

We can also reassign values in an array by using the variable, sqaure brackets and the index with an '=' and a new value.

```javascript

var letters = ["l", "e", "a", "r", "n", " ", "S", "D"];

letters[2] = "SEE"
console.log(letters);
["l", "e", "SEE", "r", "n", " ", "S", "D"]

letters[4] = 100
console.log(letters);
["l", "e", "SEE", "r", 100, " ", "S", "D"]

```
#### Built-in Methods
Javascript has many array methods that help us to manipulate our arrays.  Let's look at a few examples including:

* **.length** - gives you the length of an array (a read only property, not a function).

```javascript

var array1 = [1, 7, 10, 9, 3, 4, 2]

console.log(array1.length);
7

```

**Mutators** - also know as "setters" - methods that change the original array.

* **.push()** - pushes a value into the end of an array
* **.pop()** - removes and returns the last value in an array
* **.shift()** - removes the first value in an array
* **.unshift(value)** - adds a new element to the beginning of an array
* **.reverse()** - reverses the order of the values in an array


Let's do a few examples with mutator methods.

```JavaScript
var colors = ["red", "green", "blue"]

colors.push("black", "teal")
console.log(colors);
["red", "green", "blue", "black", "teal"]

colors.pop()
console.log(colors);
["red", "green", "blue", "black"]

colors.shift()
console.log(colors);
["green", "blue", "black"]

colors.unshift("magenta")
console.log(colors);
["magenta", "green", "blue", "black"]

colors.reverse()
console.log(colors);
["black", "blue", "green", "magenta"]


```


**Accessors** - also known as "getters" - methods that access an array and do not change the original array.  

* **.concat()** - merges two or more arrays to form one combined array
* **.join("")** - converts all values in an array to a string
* **.indexOf()** - gives the index of a given value
* **.lastIndexOf()** - gives us the last index of a value (usually used when there are values that are the same)

Let's look at some examples of accessor methods.  

```JavaScript
var letters = ["m", "o", "n"]
var letters2 = ["d", "a", "y"]


console.log(letters.concat(letters2))
["m", "o", "n", "d", "a", "y"]
```
Notice that we get the output that we want but because **.concat()** is an accessor method, we need a way to use our combined array later in our program.  We do this by setting it to a variable.

```JavaScript
var letters = ["m", "o", "n"]
var letters2 = ["d", "a", "y"]


var combined = letters.concat(letters2))
console.log(combined);
["m", "o", "n", "d", "a", "y"]
```

In this next example we are setting a variable called 'join' and using the **.join("")** method.  This takes our array and turns it into a string.  You can also see that we need to put quotes in the parentheses of the method.  What happens if you put a space between the quotes?  What if we put a symbol like '$' ?



```javascript

var combined = ["m", "o", "n", "d", "a", "y"]

var joined = combined.join("")
console.log(joined);
"monday"

```
In this next example we will take our string and turn it back into an array using the **.split()** method.  We will also save this new array into a variable.  

```JavaScript
var joined = "monday"

var newArr = joined.split("")
console.log(newArr);
["m", "o", "n", "d", "a", "y"]

```

And finally, let's look at **.indexOf** and **lastIndexOf**.

```javascript

var arr1 = ["S", 2, "y", 3, "y", 1, "t" ]

console.log(arr1.indexOf("t"))
6

console.log(arr1.lastIndexOf("y"));
4
```

# Challenges
Array Methods Practice

**Exercise 1** -  Consider this variable:
 var groceryList1 = ["chips", "dip", "cookies"]

 * Write the code that will add "soda" to the end of the original array.

**Exercise 2** - Consider this variable:
var numbers1 = [2, 4, 6, 8, 10]

* Write the code that will add the number 0 to the beginning of the array.

* Write the code that will add the number 12 to the end of the array.

* Write the code that will remove the first number from the array.

**Exercise 3** - Consider this variable:
 var groceryList2 = ["apples", "carrots", "oatmeal"]

 * Write the code that will add "granola" to the end of array without altering the original array.

**Exercise 4** - Consider this variable:
 var numbers2 = [1, 2, 3, 4, 5]

 * Write the code that will add the number 0 to the beginning of the array without altering the original array.

 **Exercise 5** - Consider this variable:
 var numbers3 = [2, 13, 6, 8, 4, 2]

 * Write the code that finds the index of the first appearance of the number 2.

 * Write the code that finds the index of the last appearance of the number 2.

**Exercise 6** - Consider this variable:
 var chars = ["y", "a", "r", "r", "a"]

 * Write the code that brings all the letters in the chars array together into a string.

 *  Write the code that reverses the order of the letters in the chars array and saves it into a variable called charsReversed.

 * Write the code that brings all the letters in the charsReversed array together into a string with a hyphen between each letter.

 * Write the code that brings all the letters in the charsReversed Array together into a string without separators.

**Exercise 7** - Create two arrays consisting of three first names of your cohort members in each.

* Sort the names in alphabetical order.

* Sort the names in reverse alphabetical order.

* Sort all the names in alphabetical order. Hint: Combine the arrays into a single array.

#### Magic 8 Ball

* Create an array with 6 different (appropriate) Magic 8 Ball answers
* Create a random number to select one of the answers (hint: use Math.random()
* Output the random answer


[Go to next lesson: Javascript Loops](./05js_loops.md)

[Back to Javascript Conditionals](./02js_conditions.md)

[Back to Syllabus](../README.md)
