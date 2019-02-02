# Basic Elements of JavaScript

## Overview

JavaScript is a versatile and powerful scripting language used to make a webpage dynamic.

## Data Types

JavaScript takes in information in a very specific way. JS is a loosely typed language, meaning the programmer does not have to declared the type of data contained in a variable.

## Primitive Data Types

The basic data types are:
<ul>
<li>Number</li>
<li>String</li>
<li>Boolean</li>
<li>Undefined</li>
<li>Null</li>
<li>Symbol</li>
</ul>

### Numbers

Numbers can be integers (positive, negative or zero) as well as fractions of a whole number written as a decimal called a float.

##### Arithmetic

We can perform mathematical calculations with numbers in JavaScript.

```javascript
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

The JavaScript language has some pre-made functionality called, built-in functions and methods that can be used on the strings.

```
"hello".charAt(1)       -> "e"
"hello".length          -> 5
"hello".includes("he")  -> true
```

### Boolean

Boolean expressions in JavaScript return `true` or `false`. Even though true and false are words they are not strings, they represent the value of true/false.

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
Relational operators return a Boolean value

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

Because JavaScript is a loosely typed language it does a funky thing called type coercion. If we combine data from different types, JS tries to be helpful and make sense of the operation. This can lead to strange and unpredictable behavior and is generally best to avoid.

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



We have gone over most of the building blocks that compose a javascript program. No matter how complex a project you work on, the pieces you use to build it will still be composed of primitive data types and manipulated as variables.



## Challenges

Open up a JS file in atom, run your program in terminal with node.

#### Arithmetic Challenge

<ul>
<li>Add, subtract, multiple, and divide integers and floats</li>
<li>Find the remainder of 33/6</li>
<li>Calculate 5 to the power of 7</li>
</ul>

#### String Challenge

<ul>
<li>Find the length of a string containing your name</li>
<li>Does your string include the letter "e"?</li>
<li>Concat two strings and find the length</li>
</ul>


### Variables Challenge

<ul>
<li>Set a variable called favNum equal to your favorite number</li>
<li>What is your favorite number divided by 2?</li>
<li>Set another variable called otherNum equal to 13</li>
<li>Divide favNum by otherNum</li>
<li>Is otherNum greater than favNum?</li>
</ul>

<ul>
<li>Save a string as a variable</li>
<li>Find the length of the string</li>
<li>Use the method charAt() to find what letter is at the 3rd index</li>
</ul>

<ul>
<li>Try combining different data types to see what happens</li>
</ul>
