# Basic Elements of JavaScript

This section shows you some of the operators and syntax of Javascript and their uses.

## Data Types

There are

## Primitive Datatypes

Primitives

#### Numbers

##### Arithmetic

We can perform mathematical calculations with numbers in JavaScript just like we can with pen and paper or a calculator. Some of these operators, like `%` might look unfamiliar but are very useful. For example, `%` lets us find the remainder of a division operation.

```javascript
1           -> 1
1.0         -> 1
2+2         -> 4
2-2         -> 0
2*2         -> 4
2/2         -> 1
2%2         -> 0
3%2         -> 1
0.1+0.2     -> 0.300000000004
2/0         -> Infinity
-2/0        -> -Infinity
Infinity + -Infinity	-> NaN
```

##### Relations

We can compare values in JavaScript using the following operators. These operations return either a `true` or `false` value:

```
2 > 0          -> true
0 >= 2         -> false
2 != 0         -> true
2 === 0        -> false
```

##### Boolean

Boolean expressions in JavaScript return `true` or `false` values like the following:

```
true                 -> true
false                -> false

!true                -> false
!false               -> true

true === false       -> false
true == false        -> false
true != false        -> true
true != true         -> false
!(true === false)    -> true

true  || false       -> true	// || is pronounced "or"
false || false       -> false

true && false        -> false	// && is pronouced "and"
true && true         -> true
```

## Text Strings

We can make strings in JavaScript by surrounding characters with quotation marks:

```
"hell" + "o"              -> "hello"
"he'" + "ll"              -> "he'll"
'he said: "hello"'        -> "he said: "hello""
```

## Functions/Methods on Strings

In JavaScript, there are many built-in functions and methods that can be performed on strings to do some pretty cool things:

```
"hello".charAt(1)         -> "e";
"hello".length            -> 5
"hello".includes("hell")  -> true
```

## Mixing it up

JavaScript is a language that does what we call "type coercion", which means if we try to combine data types in an operation it will helpfully try to make sense of the operation anyway. This can lead to strange and unpredictable behavior:

```
"2" + 2                   -> 22
2 + "2"                   -> 22
parseInt("2")             -> 2
parseInt("2") + 2         -> 4
true * 9                  -> 9
false * 9                 -> 0
```

## Variables

Variables allow us to store and reuse information across operations.
Always, always, always use `var`; otherwise the identifier becomes a global variable.

```
var a;
a                 	-> undefined	// undefined is the value a variable has before we assign it a value
a + a;            	-> NaN			// using undefined in a calculation does NOT give an error
a = 2;
a; 					-> 2
3 + a; 				-> 5
a * a; 				-> 4
a = "hello"
a + a;             	-> "hellohello"
a = null;							// null is a special value that represents that we do not have a value
a;                 	-> null
a + a;              -> 0			// using null in a calculation does NOT give an error
```

## Functions

In JavaScript, functions are a way to define and store a set operation once so that we can perform it later without having to retype all of the attached logic:

```
function addOne(a) { return a+1; }
addOne(1);          -> 2

function add(a, b) { return a+b; }
add(1, 2);          -> 3
add("1", "2");		-> 12
add(1, add(2,3));	-> 6

function isAdult(age) { return age >= 18; }
isAdult(17);		-> false
isAdult(21);		-> true

function greet() { return "Hello"; }						// defining a function that takes no parameters
greet;				-> function greet() { return "Hello"; } // return the function itself
greet();			-> "Hello"							  	// return the result of running the function
```
