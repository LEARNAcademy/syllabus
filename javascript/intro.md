# JavaScript Introduction

#### Overview
JavaScript is a versatile and powerful programming language. JavaScript is a scripting language, meaning it is used to create logic that will make a webpage react to the interactions from a user. Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.

#### Previous Lecture (41 min)
[![YouTube](http://img.youtube.com/vi/qG1M9_zwW-k/0.jpg)](https://www.youtube.com/watch?v=qG1M9_zwW-k)

#### Learning Objectives
- can name the six primitive data types
- can produce boolean, string, and number data types
- can recall the syntax of creating a variable
- can recognize and distinguish equality, relational, logical operators
- can recall the definition of type coercion
- can successfully run JavaScript code directly in the node terminal

#### Vocabulary
- JavaScript
- data types
- primitive data type
- composite data type
- number
- float
- modulo operator
- string
- concatenation
- Boolean
- equality operator
- relational operator
- logical operator
- bang operator
- undefined
- null
- symbol
- type coercion
- variable
- variable declaration
- camelCase
- assignment operator
- index
- build-in method
- argument

#### Additional Resources
- [JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)
- [JavaScript Built-in Functions Organized By Data Type](https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm)

#### Process
- `cd` into the `javascript-intro-challenges` repository
- Create a new branch: `intro-initials1-initials2` (ex. intro-aw-sp)
- `touch` a file with no spaces and `.js` extension: `intro-student1-student2.js` (ex. intro-austin-sarah.js)
- Open the folder in a text editor
- Code!

#### Troubleshooting Tips
- Is the file path is correct?

---

### JavaScript Fundamentals
**JavaScript** is a dynamic, loosely-typed, scripting programming language. JavaScript allows us to perform logic to evaluate and manipulate data. To perform logic, JavaScript must know what type of data we are currently working with. **Data types** specify what kind of information can be stored and how it can be manipulated within a program. There are two basic categories of data types in JavaScript: primitive and composite. **Primitive data types** are the building blocks of the language that cannot be broken down into any simpler parts. **Composite data types** are collections of other data types.

In JavaScript there are six primitive data types:
- Number
- String
- Boolean
- Undefined
- Null
- Symbol


### Number
**Numbers** are a data type that is made up of whole number integers (positive, negative, or zero) as well as fractions of a whole number written as a decimal called a **float**.

```javascript
// whole number
8
// float
8.7
```

Numbers are used to perform mathematical calculations and make evaluations. The calculations are the usual addition, subtraction, multiplication, and division as well as exponents, and the **modulo operator** which returns the whole number remainder of a division problem.

```javascript
// addition
2 + 2       // output --> 4
0.1 + 0.2   // output --> 0.3
3.7 + 5     // output --> 8.7

// subtraction
2 - 2       // output --> 0

// multiplication
2 * 2       // output --> 4

// division
2 / 2       // output --> 1
2 / 0       // output --> Infinity
-2 / 0      // output --> -Infinity

// exponents
7 ** 2      // output --> 49

// modulo
2 % 2       // output --> 0
3 % 2       // output --> 1
18 % 5      // output --> 3
```

### Strings
**Strings** are a collection of characters wrapped in quotation marks. Quotation marks can be single or double quotes as long as we are consistent. At LEARN we use double quotes for strings unless there is a specific reason to do otherwise. Strings can contain any type of characters and as many characters as needed.

```javascript
"Hello world!"
"42"
```

There are many properties and operations that can be applied to strings. One of the fundamental concepts is the idea of concatenation. **Concatenation** is the joining of multiple strings. We can do this by using the `+` between two strings.

```javascript
"hell" + "o"        // output --> "hello"
"hello " + "world"  // output --> "hello world"
"3 + 4"             // output --> "3 + 4"
"3 + 4" + "5"       // output --> "3 + 45"
```

### Boolean
**Boolean** expressions in JavaScript return `true` or `false`. Even though true and false are words they are not strings. They represent the value of true/false.

```javascript
true                 // output --> true
false                // output --> false
```

Boolean values are very useful when making evaluations about data. **Equality operators** compare one value to the other and judge if the values equate to the same thing. If they do equate to the same a Boolean value of true is returned if not we get a Boolean value of false. There are two types of equality operators, the loose equality operator and the strict equality operator. The loose equality operator converts the two items to the same data type before making a comparison and the strict equality operator requires the two items being compared must be the same data type to return true.

```javascript
// loose equality operator
true == false       // output --> false
3 == "3"            // output --> true

// strict equality operator
true === false      // output --> false
3 === "3"           // output --> false
```

**Relational operators** looks for a relationship between two values. A Boolean value is returned.

```javascript
// greater than
2 > 0              // output --> true

// less than
4 < 8              // output --> true

// greater than or equal to
0 >= 2             // output --> false

// less than or equal to
-4 <= 0.8          // output --> true
```

**Logical operators** are `and`, `or`, and `not`. The `and` and `or` operators take two complete statements and chain them together. The `logical and` is denoted by `&&` and states that both sides of the equation must be true. The `logical or` is denoted by `||` and states that at least one side of the equation must be true. The `logical not` is denoted by a **bang operator** that sets the logical opposite.

```javascript
// and
true && false       // output --> false
true && true        // output --> true
6 > 5 && 7 > 4      // output --> true

// or
true || false       // output --> true
true || true        // output --> true
4 > 2 || 3 === "3"  // output --> true

// not
!true               // output --> false
!false              // output --> true
true != false       // output --> true
true != true        // output --> false
5 != 5              // output --> false
!(true && false)    // output --> true
!(true && true)     // output --> false
```

### Undefined
If a variable is created but not assigned a value, the variable is **undefined**.

### Null
**Null** is equal to nothing else in your program. It is not zero, it is not false, it is nothing.

### Symbol
**Symbol** is a new data type created for the JavaScript update ECMAScript 2015. Symbols are unique and immutable, used for the key in a JavaScript object.


### Type Coercion
JavaScript has an interesting behavior called **type coercion** that happens when  we ask our JavaScript program to make comparisons or evaluations about incompatible data types. Often, this can lead to strange and unpredictable behavior and is generally best to avoid.

```javascript
"2" + 2              // output --> "22"
!3                   // output --> false
!0                   // output --> true
true * 9             // output --> 9
false * 9            // output --> 0
```

### Running JavaScript Code
There are many ways we can run a JavaScript file and see the outcome of our logic. For our pair programming JavaScript challenges we will use the terminal. To run a JavaScript file in the terminal, we must ensure we are in the directory containing the file. By using `cd` we can navigate into the correct directory. Then we can use the command `$ node` that will execute a JavaScript run time followed by the file name. The notation of `$` indicates a terminal command and is not included in the command itself.

```
$ node javascript-intro.js
```

This will run the file, but there is one more thing to achieve an output. We need to wrap `console.log()` around to code we wish to view.

```javascript
console.log(4 > 2 || 3 === "3")
```

### Variables
Making evaluations and comparisons about data is a key component of creating logic in programming. It is often necessary to store and label the information in a container called a **variable**. Just like in algebra, variables are placeholders for the values they are assigned. To create a variable in JavaScript we need four things:

1. Variable declaration
    - In JavaScript, when creating a variable we need to announce to the program our intent. This announcement is called a **variable declaration**. There are several ways to declare variables depending on the use and placement in the program. For now we will use the variable declaration `var`.
2. Variable name
    - Variables can be called (almost) whatever we, as developers, choose as long as we follow a couple of principles. Variable names in JavaScript should follow the naming convention of camel case. **Camel case** is a way to write multiple words without spaces and itLooksLikeThis. The first letter of the first word is lowercase and the first letter of each additional word is uppercase. Variable names should NOT start with a capital letter or have spaces. Variable names should *communicate intent*.
    - `var myCamelCasedVariableName`
2. Assignment operator
    - Once we have declared and named a variable JavaScript will recognize its existence. At this point, the variable will have a value of `undefined`. To change that we can use a single equal sign `=` or **assignment operator** to give the variable a value.
    - `var myCamelCasedVariableName =`
3. Data
    - The information that our variable holds can be anything as long as it is recognized by JavaScript, meaning it must be a JavaScript data type.

```javascript
// variable declaration
var myNum
console.log(myNum)
// output --> undefined


// variable declared and assigned
var myNum = 2
console.log(myNum)
// output --> 2

myNum + 5
console.log(myNum)
// output --> 7

myNum * 7
console.log(myNum)
// output --> 14

myNum + myNum
console.log(myNum)
// output --> 4


// variable reassigned
var myNum = null
console.log(myNum)
// output --> null

var myNum = "hello"
console.log(myNum)
// output --> "hello"

console.log(myNum + myNum)
// output --> "hellohello"

console.log(myNum + 5)
// output --> "hello5"
```

### String Methods and Properties
Strings are a collection of characters that have certain properties that are innate to the data type. For example, strings have a length property and each character in the string can be accounted for by its placement called an **index**. Strings are *zero indexed* meaning the counting of the characters starts at 0 and moves forward.

```javascript
// returning a length property of the string
console.log("hello".length )       
// output --> 5

// referencing a single character from the string by its index
console.log("hello"[0])
// output --> "h"
console.log("hello"[2])
// output --> "l"
```

There are many common actions that developers want to preform. To keep us from reinventing the wheel, the JavaScript language has a bunch of pre-made functionality that can be used on the data type string. These are called **built-in methods**. The built-in methods often rely on properties that are innate to the data type of string. Often the methods require additional information called an **argument** that gets passed into a set of parentheses after the method name.

```javascript
var greeting = "hello"

// upcase all the letters in a string
console.log(greeting.toUpperCase())
// output --> "HELLO"

// returns the character that is at a particular index
console.log(greeting.charAt(1))
// output --> "e"

// returns the index of a particular character
console.log(greeting.indexOf("e"))
// output --> 1

// returns a Boolean value if a subset of characters exists within the string
console.log(greeting.includes("he"))
// output --> true

// returns a subset of a string based on a starting and ending index
console.log(greeting.slice(1, 3))
// output --> "el"
```

---

### Challenges
Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

1. Write the code that will log the outcome of 34 added to 71.
2. Write the code that will log the outcome of 67 subtracted from 123.
3. Write the code that will log the outcome of 56 multiplied by 23.
4. Write the code that will log the outcome of 45 divided by 5.
5. Write the code that will log the outcome of 5 to the power of 7.
6. Write the code that will log the whole number remainder of 33 divided by 6.
7. Write the code that will log the length of a string containing your name.
8. Write the code that will log whether your string includes the letter "e"?
9. Write the code that will log the character at the first index of the string.
10. Write the code that will log the string in all uppercase letters.

Write the code that will log true or false for the following:  

11. Is 34 divided by 3 greater than 67 divided by 2?
12. Does 5 evaluate to the same as "5"?
13. Does 5 strictly equal "5"?
14. Does !3 strictly equal 3?
15. Does `"LEARN".length` strictly equal 5 AND `"Student".length` strictly equal 7?
16. Does `"LEARN".length` strictly equal 5 OR `"Student".length` strictly equal 10?
17. Does "LEARN" contain the subset `"RN"`?
18. Does "LEARN" contain the subset `"rn"`?
19. Does "LEARN"[0] strictly equal `"l"`?
20. Modify the code from the previous question to return `true`.

Consider the variables:
```javascript
var theQuestion = "life, the universe, and everything"
var theAnswer = 42
```
21. Write the code that will log `theAnswer` divided by 2.
22. Write the code that will log the length of `theQuestion`.
23. Write the code that will log the index of the character `"f"` in the `theQuestion`.
24. Write the code that will log the concatenation of the two variables.
25. Write the code that will log "the universe".
26. Write the code that will log the character `"l"` from `theQuestion`.
27. Write the code that will log whether `theQuestion.length` is greater than `theAnswer`.

---
[Back to Syllabus](../README.md#unit-one-javascript-foundations)
