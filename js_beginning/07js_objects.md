# Working with and thinking about Objects
[![YouTube](http://img.youtube.com/vi/1BZPSnXKK1M/0.jpg)](https://www.youtube.com/watch?v=1BZPSnXKK1M)
]
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

## Classes

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

for(var i=0; i < squirrels.length; i++){
  console.log("Squirrel ", i, "nut count: ", squirrels[i].nutCount)
}

```
```result
: Squirrel  0 nut count:  2
: Squirrel  1 nut count:  0
```


## Class instances can store any kind of data

```javascript
class DiceRoller{
  constructor(){
    this.rolls = []
  }

  roll(){
    this.rolls.push(Math.ceil(Math.random() * 6))
  }

  lastRoll(){
    return this.rolls[this.rolls.length - 1]
  }
}

var roller = new DiceRoller()
console.log("last: ", roller.lastRoll())
roller.roll()
console.log("last: ", roller.lastRoll())
roller.roll()
console.log("last: ", roller.lastRoll())
console.log("all rolls ", roller.rolls)
```
```result
: last:  undefined
: last:  1
: last:  4
: all rolls  [ 1, 4 ]
```


## Some Conventions

* Class names are always capitalized
* Class names are PascalCased (like camelCase, but the first word is capitalized)
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


### Object Challenges

Working with functions and objects.

#### Exercise 1

Consider this variable:

```javascript
var person = { fName: "Arthur", lastName: "Dent" }
```
Write the code that accesses the first name of the person object.
Then write the code that accesses the last name of the person object.

#### Exercise 2

Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

#### Exercise 3

Update the person object with a method that logs 'Arthur Dent is from planet Earth.'.


#### Exercise 4
Consider this variable:

```javascript
var product = { name: "chair", price: 14.99 }
```

Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".

#### Exercise 5

Consider this variable:

```javascript
var lunch = { name: "PB and Banana", type: "sandwich", ingredients: ["bread", "peanut butter", "banana"] }
```

Write the code that accesses the ingredients property.

#### Exercise 6

Write the code that access the 3rd ingredient of the lunch object.

#### Exercise 7

Write a function that takes an argument like the lunch object and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

#### Exercise 8

Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

### Class Challenges

#### Exercise 1

Consider this class.

```javascript
class Coffee {
  constructor(type, cream=0, sugar=0){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
  }

  creams(){
    if (this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if (this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}
```

Write the code that makes a black coffee.

#### Exercise 2

Write the code that makes a coffee with 1 cream and 2 sugars.

#### Exercise 3

Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.

#### Exercise 4

Write a Latte class that receives a type, a milk type (default to 'milk') and a number of shots (default to 1).

#### Exercise 5

Write a method for your Latte class that outputs the latte's profile.

#### Exercise 6

Write the code that makes a regular, single shot latte. Then, log the latte's profile.

#### Exercise 7

Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

#### Exercise 8

Write a class that accepts a product, and budget in its constructor.  Add a function that determines if the product is in budget, and displays the appropriate message:

* "This product is in budget."
* "This product is beyond budget."

Here is some sample data:
```javascript
var product = { name: "OledMonitor", price: 300.00 }
var budget = 275.00
```

Then:

Refactor the previous exercise to replace "Product" in the return to the name of the product.

For example:

```javascript
 checkBudget(product, budget, message)
 ----> "OledMonitor is beyond budget"
```

#### Exercise 9

Write a program to get the volume of a Cylinder with four decimal places using object classes.

Volume of a cylinder : V = πr2h

where r is the radius and h is the height of the cylinder.


#### Exercise 10

Write a program that calculates the total, tax, and weight of the items in a shopping cart.

```javascript
var cartItems = [
  {
    name: "banana",
    price: 2.34,
    weight: 1.2
  },
  {
    name: 'Cereal',
    price: 5.67,
    weight: 2.2
  },
  {
    name: 'Gogurt',
    price: 3.99,
    weight: 3.1
  }
]
```
#### Stretch Goal
Extend your shopping cart program by creating a new class called 'CartItem', and creating an instance of CartItem before passing each to the cart calculator.  Is it easier or harder to pass class instances around? Does it make the code easier to read and reason about?

#### SUPER STRETCH

#### Exercise 11
Write a program that has accessors to sort a list of books by title, author, or ID.  Your class should accept a list of books in its constructor, and have 3 accessor functions.

Hint:  Research alpha and numeric sorting in javascript.

```javascript
var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
```


## Links

[Go to next lesson: ES6 Syntax](../js_intermediate/07js_es6_syntax.md)

[Back to Javascript Functions, Loops and Arrays](./06js_funcLoopsArrays.md)

[Back to Syllabus](../README.md)
