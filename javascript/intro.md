# JavaScript Introduction

## Overview
- JavaScript is a versatile and powerful scripting language used to make a webpage dynamic

## Learning Objectives
- Interacting with JavaScript's primitive data types
- Exploring built-in methods
- Exploring type coercion in JavaScript

## Vocabulary
- data types
- concatenation
- type coercion
- floats
- modulo operator
- bang operator

## Useful Commands
- $ node
- control c

## Additional Resources
- <a href="https://www.w3schools.com/js/js_datatypes.asp" target="blank">JavaScript Data Types</a>
- <a href="https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm" target="blank">JavaScript Built-in Functions Organized By Data Type</a>

## Data Types

JavaScript takes in information in a very specific way. JS is a loosely typed language, meaning the programmer does not have to declare the type of data contained in a variable.

## Primitive Data Types

The basic data types are:
- Number
- String
- Boolean
- Undefined
- Null
- Symbol


### Numbers

Numbers can be integers (positive, negative or zero) as well as fractions of a whole number written as a decimal called a float.

##### Arithmetic

We can perform mathematical calculations with numbers in JavaScript.

```JavaScript
1           -> 1
1.0         -> 1

addition
2 + 2       -> 4
0.1 + 0.2   -> 0.3
3.7 + 5     -> 8.7

subtraction
2 - 2       -> 0

multiplication
2 * 2       -> 4

division
2 / 2       -> 1
2 / 0       -> Infinity
-2 / 0      -> -Infinity

modulo
2 % 2       -> 0
3 % 2       -> 1
18 % 5      -> 3

exponents
7 ** 2      -> 49
```
### Strings

We can store words or other characters in JavaScript by surrounding characters with quotation marks.

##### Concatenation

When we use the + on strings it combines the strings in a process called concatenation.

```
"hell" + "o"        -> "hello"
"hello " + "world"  -> "hello world"
"3 + 4"             -> "3 + 4"
"3 + 4" + "5"       -> "3 + 45"
```

##### Built-in String Functions/Methods

The JavaScript language has some pre-made functionality that can be used on the strings called built-in functions.

```
"hello".charAt(1)       -> "e"
"hello".length          -> 5
"hello".includes("he")  -> true
```

A function is a JavaScript procedure - a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it (unless it is built-in).


JavaScript methods are actions that can be performed on objects. A JavaScript method is a property containing a function definition.

### Boolean

Boolean expressions in JavaScript return `true` or `false`. Even though true and false are words, they are not strings. They represent the value of true/false.

```
true                 -> true
false                -> false
```

##### Comparison Operators
Comparison operators will return a Boolean value.

```
equality operator
true == false       -> false
3 == "3"            -> true

strict comparison
true === false      -> false
3 === "3"           -> false
```
##### Relational operators
Relational operators return a Boolean value.

```
greater than
2 > 0               -> true

less than
4 < 8               -> true

greater than or equal to
0 >= 2              -> false

less than or equal to
-4 <= 0.8           -> true
```
##### Logical Operators
Logical operators can return any type of data but uses the principle of Boolean data type to determine the outcome.

```
and
true && false       -> false
true && true        -> true

or
true  || false      -> true
false || false      -> false

not
!true               -> false
!false              -> true
true != false       -> true
true != true        -> false
!(true && false)    -> true
!(true && false)    -> true
```

### Undefined

If a variable is created but not assigned a value, the variable is undefined.

### Null

Null is equal to nothing else in your program. It is not zero, it is not false, it is nothing.

### Symbol

Symbol is a new data type created for the JS update ECMAScript 2015. Symbols are unique and immutable, used for the key in a JS object.


## Type Coercion

Because JavaScript is a loosely typed language, it does a funky thing called type coercion. If we combine data from different types, JavaScript tries to be helpful and make sense of the operation. This can lead to strange and unpredictable behavior and is generally best to avoid.

```
"2" + 2             -> "22"
!3                  -> false
!0                  -> true
true * 9            -> 9
false * 9           -> 0
```

## Variables

Just like in algebra, variables are used to store information. Variables must be declared and assigned a value using a single equals sign.


```
variable declared
var a               -> undefined
var a + 5           -> NaN (not a number)

variable declared and assigned
var a = 2           -> 2
a + 5               -> 7
a * 7               -> 14
a + a               -> 4
var a = null        -> null


variable reassigned
var a = "hello "    -> "hello "
a.length            -> 5
a + a               -> "hello hello "
a + 5               -> "hello 5"

new variable
var b = "world"     -> "world"
a + b               -> "hello world"

new variable using existing variables
var c = a + b       -> "hello world"
a                   -> "hello "
b                   -> "world"
c                   -> "hello world"
```

We have gone over most of the building blocks that compose a JavaScript program. No matter how complex a project you work on, the pieces you use to build it will still be composed of primitive data types and manipulated as variables.


## Challenges

Open up a terminal and start node (type "node" to start). To exit the node console use control-c twice. Then:

**Arithmetic Challenges**
- Add 34 and 71
- Subtract 67 from 123
- Multiply 56 and 23
- Divide 45 by 5
- Calculate 5 to the power of 7
- Find the remainder of 33/6

**String Challenges**
- Find the length of a string containing your name
- Does your string include the letter "e"?

**Boolean Challenges (return true or false)**
- Is 34 divided by 3 greater than 67 divided by 2?
- Does 5 evaluate to the same as "5"?
- Does 5 strictly equal "5"?
- Does !3 strictly equal 3?
- Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
- Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?

**Variables Challenges**
- Set a variable called favNum equal to your favorite number
- Log your favorite number divided by 2
- Set another variable called otherNum equal to 13
- What is favNum divided by otherNum?
- Save a string as a variable
- Find the length of the string
- Use the method charAt() to find what letter is at the 3rd index

[Go to next lesson: JavaScript Conditionals](./conditionals.md)

[Back to Syllabus](../README.md)
