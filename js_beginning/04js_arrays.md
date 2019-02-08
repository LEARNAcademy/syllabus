# JavaScript Arrays, Loops & Iteration

Until now we have dealt only with primitive data types. But what if we want to combine our data types?

An array is a grouping of multiple pieces of information of many data types stored as a single variable. Arrays give us the structure to assign placement of pieces of data and the ability to perform one function on


Array is the first example of a collection of data/value as a ordered set of variables.
An array is linear list of elements/variables that can be accessed with an integer index.

For more information see <a href="http://www.w3schools.com/jsref/jsref_obj_array.asp" target="_blank">Object Arrays</a> and <a href="http://eloquentjavascript.net/04_data.html" target="_blank">Eloquent JavaScript</a>

## JavaScript Language Array

Declare an array:

```javascript
var a = [9, 8, 7];
a;
```

#### Accessing Elements

```javascript
a[1];
a[2];
a[0];
```

#### Changing Elements

```javascript
a[1] = 17;
a[1];	// changed
a[0];	// unchanged
a[2];	// unchanged
```

#### Adding elements

```javascript
var b = [];
b;
b[0];
b[0] = 0;
b[1] = 10;

b[5] = 50;
b[5];
b[4];	-> undefined
b;    	-> [17, undefined � 4, 50]
```

## Array API

#### Length

```javascript
a.length	-> 3
```

Note: `length` is read-only property, not a function.

#### Concatenation

Adding element(s) at the end
```javascript
a[a.length] = 5;
a;              -> [..., 5]
```

```javascript
a.concat(6);    -> [..., 6]
a.concat(7,8);  -> [..., 7, 8]
a;              -> [..., 5] // unchanged
var c = a.concat(b);
c;              -> [..., 50]
```

`concat` returns a new array but leaves the original array untouched.

# JavaScript Arrays

Until now, we've always dealt with one piece of information at a time: one number, one string, one element on a page. But often, we need to group things together. For example, what if we wanted to have a list of the months of the year? We'd use an <strong>array</strong>, which is just a list of things grouped together. An array looks like this:
```javascript
var months = ["january", "february", "march", "april", "may", "june",
				"july", "august", "september", "november", "december"];
```
Here are some more arrays for you to try in the JavaScript console:
```javascript
[2, 5, 7, 3423, 85, 65]
["l", "e", "a", "r", "n", " ", "S", "D"]
["word", 45, "blah", 123]
```
You can put variables and expressions in your arrays, or even other arrays:
```javascript
var variable = "i'm a variable";
[variable, "i'm not a variable"]
[62, 62 / 2]
["string", 123, ["another string", 456], 321, "yet another string"]
```
Just like numbers and strings, arrays have methods. Here are a couple for you to start with:
```javascript
["apple", "orange", "kiwi"].pop();
"kiwi"
[1, 2, 3].reverse();
[3, 2, 1]
```
You can also add elements to an array, or combine two arrays:
```javascript
var greetings = [];
greetings.push('hi');
greetings.push('hello');
greetings.concat(['hola', 'buenos dias']);
```
Note that `concat` doesn't actually change the original array, but rather returns a new array that combines the two.

If you want to access an element from an array, the syntax is a bit different from anything we've seen before:
```javascript
var letters = ["l", "e", "a", "r", "n", " ", "S", "D"];
letters[0];
letters[4];
```
Just like with strings, we count array elements starting with zero. So the zeroth element of the array is `l`, and the fourth element is `o`.

[Go to Javascript Loops](./05js_loops.md)

[Back to Javascript Functions](./05js_functions.md)
