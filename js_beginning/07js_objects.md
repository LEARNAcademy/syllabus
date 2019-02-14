# Objects through Closures

## Object with Data

Creating an object in JSON:

```javascript
var person = { name: "Alex Keaton", phone: 123456789 };
```

Then we can access the properties with the "dot" notation:

```javascript
person.name;    -> "Alex Keaton"
person.phone;   -> 123456789
```

## Object with Function/Method

JSON Objects can also contain functions:

```javascript
var person = {
  name: "Alex Keaton",
  phone: 123456789,
  getData: function() { return this.name+"-"+this.phone }
};

person.getData();   -> "Alex Keaton-123456789"
```

## Classes make declaring Objects easier

Classes are like blueprints for objects, with a special 'constructor' function that you can use to create them:

```javascript
class Dog{
  constructor(name, age){
    this.name = name
    this.age = age
  }

  description(){
    return this.name + " is a " + this.age + " year old dog."
  }
}

var rover = new Dog('Rover', 4)
console.log(rover.description())
```
```result
: Rover is a 4 year old dog.
: Peaches is a 9 year old dog.
```

## Objects are independent of each other:

```javascript
var plato = new Dog('Plato', 8)
var bella = new Dog('Bella', 11)
console.log(plato.description())
console.log(bella.description())
```
```result
: Plato is a 8 year old dog.
: Bella is a 11 year old dog.
```

## However, object variables are references:

```javascript
var plato = new Dog('Plato', 8)
var bella = new Dog('Bella', 11)

console.log(plato.description())
console.log(bella.description())

bella = plato
console.log(bella.description()) // !!!! bella got reassigned
```
```result
: Plato is a 8 year old dog.
: Bella is a 11 year old dog.
: Plato is a 8 year old dog.
```

You can see this animated if you go to http://pythontutor.com, select javaScript, and paste in the code.
For further in-depth information see <a href="http://www.javascriptenlightenment.com/" target="_blank">Javascript Enlightenment</a>

## Class instances maintain internal state

```javascript
class Squirrel{
  constructor(){
    this.nutCount = 0
  }

  storeNut(){
    this.nutCount += 1
  }

  eatNut(){
    this.nutCount -= 1
  }
}

var rocky = new Squirrel()
console.log(rocky.nutCount)
rocky.storeNut()
console.log(rocky.nutCount)
rocky.storeNut()
console.log(rocky.nutCount)
rocky.eatNut()
console.log(rocky.nutCount)
```
```result
: 0
: 1
: 2
: 1
```

And the objects are independent, just like before:

```javascript
class Squirrel{
  constructor(){
    this.nutCount = 0
  }

  storeNut(){
    this.nutCount += 1
  }

  eatNut(){
    this.nutCount -= 1
  }
}

var rocky = new Squirrel()
var alvin = new Squirrel()
alvin.storeNut()
alvin.storeNut()
console.log("Rocky has ", rocky.nutCount )
console.log("Alvin has ", alvin.nutCount )
```
```result
: Rocky has  0
: Alvin has  2
```

## Class instances can be used like any other 'thing' in javascript.  We can rewrite the above like this:

```javascript
class Squirrel{
  constructor(){
    this.nutCount = 0
  }

  storeNut(){
    this.nutCount += 1
  }

  eatNut(){
    this.nutCount -= 1
  }
}

var squirrels = []
squirrels.push(new Squirrel())
squirrels.push(new Squirrel())

squirrels[0].storeNut()
squirrels[0].storeNut()

squirrels.map((squirrel, index)=>{
  console.log("Squirrel ", index, "nut count: ", squirrel.nutCount)
})

```
```result
: Squirrel  0 nut count:  2
: Squirrel  1 nut count:  0
```

## Some Conventions

* Class names are always capitalized
* Class names are camelCased
* instances of classes are always lowercase

## Resources

For more information on objects see:
<a href="http://www.javascriptenlightenment.com/" target="_blank">Javascript Enlightenment</a>
<a href="https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch2.md#objects" target="_blank">You Don't Know JS: Up & Going - Chapter 2: Into JavaScript</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Objects" target="_blank">MDN: Objects</a>

For more information on closures see:
<a href="http://www.javascriptenlightenment.com/" target="_blank">Javascript Enlightenment</a>, chapter 7.
<a href="https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch3.md#chapter-3-function-vs-block-scope" target="_blank">You Don't Know JS: Function vs. Block Scope</a>
<a href="https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch5.md#chapter-5-scope-closure" target="_blank">You Don't Know JS: Scope Closure</a>
(Caution: not for the faint of heart)


### Epic Challenges

Working with functions and objects.

Exercise 1
Consider this variable:

```javascript
var product = { name: "chair", price: 14.99 }
```

Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".

Exercise 2
Consider this function:

```JavaScript
function message(product, inBudget){
  if (inBudget) {
    return "Product is within budget"
  } else {
    return "Product is beyond budget"
  }
}````
And consider this variable:

````JavaScript
var product = { name: "OledMonitor", price: 300.00 }
var budget = 275.00
```

Write a function checkBudget that takes a product, budget and the message function as arguments, determines whether the product is within budget and returns the result of the message function.

Refactor the previous exercise to replace "Product" in the return to the name of the product.

For example

 checkBudget(product, budget, message) ----> "OledMonitor is beyond budget"


[Go to ES6 Syntax](../js_intermediate/07js_es6_syntax.md)

[Back to Javascript Functions, Loops and Arrays](./06js_funcLoopsArrays.md)

[Back to Syllabus](../README.md)
