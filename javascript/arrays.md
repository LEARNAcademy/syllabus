# JavaScript Arrays

#### Overview
Arrays are variables that store collections of data in an ordered list. Having an organized data set gives developers the ability to access particular pieces of information, access every item in the set, or make a decision about every item in the data set. Arrays are indexed which means the data can be accessed by its location within the array. Arrays also have many built-in methods that can be used to manipulate and access the content.

#### Previous Lecture (43 min)
[![YouTube](http://img.youtube.com/vi/Bj3li2W6yks/0.jpg)](https://www.youtube.com/watch?v=Bj3li2W6yks)

#### Learning Objectives
- can recall the syntax of an array
- can define the value and index
- can conceptualize the difference between mutator and accessor methods
- can extract a single value from an array
- can apply built in methods to mutate and access the array

#### Vocabulary
- array
- element
- value
- index
- zero indexed
- built-in method
- argument
- mutator/setter methods
- accessor/getter methods
- destructuring

#### Additional Resources
- [ W3Schools JavaScript Arrays ](https://www.w3schools.com/js/js_arrays.asp)
- [ W3Schools JavaScript Array Methods](https://www.w3schools.com/js/js_array_methods.asp)

#### Process
- `cd` into the `javascript-intro-challenges` repository
- Create a new branch: `arrays-initials1-initials2` (ex. arrays-aw-sp)
- `touch` a file with no spaces and `.js` extension: `arrays-student1-student2.js` (ex. arrays-austin-sarah.js)
- Open the folder in a text editor
- Code!

#### Troubleshooting Tips
- Is the file path is correct?

---


### Arrays: Collections of Data
Until now, we've only dealt with one piece of information at a time: one number, one string, one element on a page. But, often we need to group things together. For example, what if we wanted to have a list of the months of the year? We'd use an **array**, which is a collection of ordered data. Arrays can contain any type of information as long as it is a data type JavaScript recognizes.

Here are a few examples of arrays assigned to variables:

```javascript
var months = ["January", "February", "March", "April", "May", "June"]

var numbers = [17, 15, 14, 3, 5, 10]

var comboDataArray = [17, "January", true, "March 14", 42, null, false, "LEARN", 10]
```

### Anatomy of an Array

```javascript
var learnStudents = ["Debra", "Jonas", "Joel"]
```

Arrays consists of the following:
1. Variable declaration
    - Just like any other variable, we must inform JavaScript of our intention to create a variable
    - `var`
2. Variable name
    - Variables must be camelCase and descriptive
    - `var learnStudents`
3. Single equal sign
    - Variables must be assigned with a single equal sign
    - `var learnStudents =`
4. Opening and closing square brackets `[]`
    - The contents of an array are stored inside square brackets
    - `var learnStudents = []`
5. Elements in the array
    - Each item in the array is called an **element**
    - Elements are separated from each other by a comma
    - Elements in the array must be a data type recognized by JavaScript
    - `var learnStudents = ["Debra", "Jonas", "Joel"]`

### Value
Each element in the array must be a JavaScript data type. The content of each element is called the **value**.

```javascript
var learnStudents = ["Debra", "Jonas", "Joel"]
```
- `"Debra"` is a value in the array
- `"Jonas"` is a value in the array
- `"Joel"` is a value in the array

### Index
Every value in an array has a particular location know as the **index**. Indexes are sequential numbers that are a bit like an address for every element in the array. Arrays are **zero indexed** which means the elements are numbered starting with the number 0 and increase by one whole number for each new element.

```javascript
var learnStudents = ["Debra", "Jonas", "Joel"]
```
- The value `"Debra"` is at the index of `0`
- The value `"Jonas"` is at the index of `1`
- The value `"Joel"` is at the index of `2`

### Accessing Elements
One of the many benefits to storing data in arrays is that we can access the individual values. Since the indexes are like an address, we can reference the variable that holds the entire array and the specific index in square brackets in order to retrieve the value. If the index does not exist the output will be undefined.

```javascript
var learnStudents = ["Debra", "Jonas", "Joel"]

console.log(learnStudents[0])
// output --> "Debra"

console.log(learnStudents[2])
// output --> "Joel"

console.log(learnStudents[6])
// output --> undefined
```

### Changing Elements
By referencing the array and the index we are essentially creating a variable for that particular value. Just like any other variable we can reassign its value using a single equal sign and a new item. This will permanently modify the array.

```javascript
var learnStudents = ["Debra", "Jonas", "Joel"]

learnStudents[0] = "Summer"
console.log(learnStudents)
// output --> ["Summer", "Jonas", "Joel"]

learnStudents[1] = "Brian"
console.log(learnStudents)
// output --> ["Summer", "Brian", "Joel"]
```

### Length Property
Because arrays are an ordered collection of data, they have a length property. The length of an array is dynamic, which means it can change depending on the needs of a developer. `.length` is an informational command that returns the number of elements in the array. The length is the always the last index of the array plus one.

```javascript
var learnStudents = ["Debra", "Jonas", "Joel"]

console.log(learnStudents.length)
// output --> 3
```

### Built-in Methods
JavaScript has many built-in methods. A **built-in method** is a small piece of functionality that has been added to the language to accomplish a common task. Since arrays are a great way to store data it makes sense that there are a lot of built-in methods that act on arrays to help us to access and modify the content. Some built-in methods will require additional information to perform the action intended. This additional information is passed into the parentheses that follow the built-in method which is called an **argument**.

Built-in methods for arrays fall into one of two categories: mutators and accessors. **Mutators** are built-in methods that modify the original array, also know as "setter methods." **Accessors** are built-in methods that do not change the original array, also known as "getter methods."

### Mutators
Mutator methods modify the array the method is called on. When working with mutators it is important to remember the output of the method action will not always be the array. To see the effect of the mutator method we can call the variable containing the array.

**.push(value)**
- Adds a value onto the end of an array
- Takes an argument of what is to be added
- The argument must be a data type recognized by JavaScript
- The output of the method itself is the length of the new array

```javascript
var learnStudents = ["Debra", "Jonas", "Joel"]

console.log(learnStudents.push("Ryan"))
// output --> 4

console.log(learnStudents)
// output --> ["Debra", "Jonas", "Joel", "Ryan"]
```

**.pop()**
- Removes the last value in an array
- The output of the method itself is the value that is removed

```javascript
var learnStudents = ["Debra", "Jonas", "Joel"]

console.log(learnStudents.pop())
// output --> "Joel"

console.log(learnStudents)
// output --> ["Debra", "Jonas"]
```

**.unshift(value)**
- Adds a value to the beginning of an array
- Takes an argument of what is to be added
- The argument must be a data type recognized by JavaScript
- The output of the method itself is the length of the new array

```javascript
var learnStudents = ["Debra", "Jonas", "Joel"]

console.log(learnStudents.unshift("Rachael"))
// output --> 4

console.log(learnStudents)
// output --> ["Rachael", "Debra", "Jonas", "Joel"]
```

**.shift()**
- Removes the value at the zeroth index of the array
- The output of the method itself is the value that is removed

```javascript
var learnStudents = ["Debra", "Jonas", "Joel"]

console.log(learnStudents.shift())
// output --> "Debra"

console.log(learnStudents)
// output --> ["Jonas", "Joel"]
```

**.reverse()**
- Reverses the order of the values in an array
- The output of the method itself is the modified array

```javascript
var learnStudents = ["Debra", "Jonas", "Joel"]

console.log(learnStudents.reverse())
// output --> ["Joel", "Jonas", "Debra"]

console.log(learnStudents)
// output --> ["Joel", "Jonas", "Debra"]
```

**.sort()**
- Alphabetizes the values in an array
- Can take an optional argument for more advanced sorting actions
- The output of the method itself is the modified array
- Can take arguments for numbers

```javascript
var learnStudents = ["Debra", "Jonas", "Joel"]

console.log(learnStudents.sort())
// output --> ["Debra", "Joel", "Jonas"]

console.log(learnStudents)
// output --> ["Debra", "Joel", "Jonas"]

let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]
```

### Accessors  
Accessor methods do not modify the original array. Accessors return a specific output or a new array. In order to keep the output of an accessor method, we need to save it as a variable.

**.indexOf(value)**
- Returns the index of the first instance of a given value
- If the value does not exist within the array, returns `-1`
- The original array is unchanged

```javascript
var learnStudents = ["Debra", "Jonas", "Joel"]

console.log(learnStudents.indexOf("Joel"))
// output --> 2

var joelIndex = learnStudents.indexOf("Joel")
console.log(joelIndex)
// output --> 2

console.log(learnStudents.indexOf("Mary"))
// output --> -1

console.log(learnStudents)
// output --> ["Debra", "Jonas", "Joel"]
```

**.lastIndexOf(value)**
- Returns the last index of a given value
- Useful when there are repeated values in an array
- If the value does not exist within the array, returns `-1`
- The original array is unchanged

```javascript
var learnStudents = ["Debra", "Joel", "Jonas", "Joel"]

console.log(learnStudents.lastIndexOf("Joel"))
// output --> 3

var lastJoelIndex = learnStudents.lastIndexOf("Joel")
console.log(lastJoelIndex)
// output --> 3

console.log(learnStudents.lastIndexOf("Mary"))
// output --> -1

console.log(learnStudents)
// output --> ["Debra", "Jonas", "Joel"]
```

**.slice(staringIndex, endingIndex)**
- Returns a subset of the array
- Slice requires an argument for the starting index of the subset
- The ending index is an optional argument, if no ending index is specified the default is the end of the array
- The original array is unchanged

```javascript
var learnStudents = ["Debra", "Mary", "Jonas", "Joel"]

console.log(learnStudents.slice(0, 2))
// output --> ["Debra", "Mary"]

console.log(learnStudents.slice(2))
// output --> ["Jonas", "Joel"]

var slicedArray = learnStudents.slice(2)
console.log(slicedArray)
// output --> ["Jonas", "Joel"]

console.log(learnStudents)
// output --> ["Debra", "Mary", "Jonas", "Joel"]
```

**.concat()**
- Merges two or more arrays to form one combined array
- The original array is unchanged

```javascript
var learnStudents1 = ["Debra", "Jonas", "Joel"]
var learnStudents2 = ["Mary", "Juan", "Matt"]

console.log(learnStudents1.concat(learnStudents2))
// output --> ["Debra", "Jonas", "Joel", "Mary", "Juan", "Matt"]

var comboArrays = learnStudents1.concat(learnStudents2)
console.log(comboArrays)
// output --> ["Debra", "Jonas", "Joel", "Mary", "Juan", "Matt"]

console.log(learnStudents1)
// output --> ["Debra", "Jonas", "Joel"]
```

### Strings to Arrays and Back Again
In JavaScript, arrays and strings have a lot of similar properties. They both are a collection of items, both have a length property, both are zero-indexed. But strings and arrays have many differences. It is often convenient to convert string into arrays and vice-versa.

**.join("")**
- Converts all values in an array to a string
- Join takes an optional argument that describes what is between each value
- The original array is unchanged

```javascript
var learnStudents = ["Debra", "Mary", "Jonas", "Joel"]

console.log(learnStudents.join())
// output --> "Debra,Mary,Jonas,Joel"

console.log(learnStudents.join(""))
// output --> "DebraMaryJonasJoel"

console.log(learnStudents.join(" "))
// output --> "Debra Mary Jonas Joel"

console.log(learnStudents.join("-"))
// output --> "Debra-Mary-Jonas-Joel"

var joinedNames = learnStudents.join(" ")
console.log(joinedNames)
// output --> "Debra Mary Jonas Joel"

console.log(learnStudents)
// output --> ["Debra", "Mary", "Jonas", "Joel"]
```

**.split("")**
- Converts a string into an array
- Split takes an optional argument that describes where the string is split
- The original string is unchanged

```javascript
var learnStudents = "Debra Mary Jonas Joel"

console.log(learnStudents.split())
// output --> ["Debra Jonas Joel"]

console.log(learnStudents.split(""))
// output --> ["D", "e", "b", "r", "a", " ", "J", "o", "n", "a", "s", " ", "J", "o", "e", "l"]

console.log(learnStudents.split(" "))
// output --> ["Debra", "Mary", "Jonas", "Joel"]

console.log(learnStudents.split("a"))
// output --> ["Debr", " M", "ry Jon", "s Joel"]

var splitNames = learnStudents.split(" ")
console.log(splitNames)
// output --> ["Debra", "Mary", "Jonas", "Joel"]

console.log(learnStudents)
// output --> ["Debra", "Mary", "Jonas", "Joel"]
```

### Array Destructuring
The destructuring assignment is a special way of assigning variables in JavaScript. **Destructuring** allows you to take an array and unpack each value into individual variables in a singe assignment.

Destructuring assignments requires variables names in square brackets and an equal number of values. Each variable is assigned in order.

```javascript
var [firstName, secondName] = ["Mary", "Debra"]

console.log(firstName)
// output --> "Mary"

console.log(secondName)
// output --> "Debra"
```
---

### Challenges
Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

Consider the variable:
```javascript
var groceryList = ["chips", "dip", "cookies"]
```

1. Write the code that will add "soda" to the end of the original array.

2. Write the code that will add "granola" to the end of array without altering the original array.

3. Write the code that will return a subset of the array containing only "chips" and "dip".

4. Write the code that will add "beans" to the "chips" and "dip" array.

Consider the variable:
```javascript
var numbers = [2, 4, 6, 8, 10]
```
5. Write the code that will add the number 0 to the beginning of the array.

6. Write the code that will add the number 12 to the end of the array.

7. Write the code that will remove the first number from the array.

8. Write the code that will add the number 0 to the beginning of the array without altering the original array. **HINT**: it's not `.unshift` You'll have to get creative! ;)

Consider the variable:
```javascript
var numSet = [2, 13, 6, 8, 4, 2]
```
9. Write the code that finds the index of the first appearance of the number 2.

10. Write the code that finds the index of the last appearance of the number 2.

11. Write the code that returns the number at the third index.

Consider the variable:

```javascript
var characters = ["y", "a", "r", "r", "a"]
```
12. Write the code that brings all the letters in the characters array together into a string.

13. Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.

14. Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.

15. Write the code that brings all the letters in the charsReversed array together into a string without separators.

Create two arrays consisting of three first names of your cohort members in each.

16. Write the code that sorts the names in alphabetical order.

17. Write the code that sorts the names in reverse alphabetical order.

18. Write the code that sorts all the names in alphabetical order in a single array.

Consider the variables:

```javascript
var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []
```
19. Write the code that logs the values from the numbers array that are at odd indexes.

20. Write the code that adds the values from odd indexes into the oddIndexes array.

---
[Back to Syllabus](../README.md#unit-one-javascript-foundations)
