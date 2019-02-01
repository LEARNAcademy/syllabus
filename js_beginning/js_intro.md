# Basic Elements of JavaScript

## Lecture

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



We have gone over most of the building blocks that compose a javascript program. No matter how complex a project you work on, the pieces you use to build it will still be the same variables, data types, if statements and functions.
## Challenges

#### Variables Challenge

Here are a few exercises for you to practice using variables:

- Set a variable called my_favorite_number equal to your favorite number.
- What is your favorite number divided by 2?

- Set another variable called someones_favorite equal to 13
- Change the value of someones_favorite to 7
- Subtract your favorite number from someones_favorite
- Change the value of my favorite number to be 26 times its current value



#### Strings Challenge

Javascript comes with some built in ways to work with Strings. For this exercise, try out some of the string methods for yourself.

##### Try locating a word in a string

Locate
```
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
```
What do you get back when you run this indexOf method on a string?
What happens with this method if a word occurs twice in a string?
Can you run this method on data types other than string?

##### Find the length of a string
You can call a method on a string by typing str.length (just like we did with indexOf above). Create a variable to hold a string and call .length on it to see what happens.
What is returned by the .length method?
What if there are spaces in the string?
Can you call this method on other data types?


#### Arithmetic Challenge

Add, subtract, multiply and divide some numbers (any combination of numbers)
Find the remainder of dividing two numbers using the modulo operator (%)
Divide a number by 0
