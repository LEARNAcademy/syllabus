# JavaScript Classes

## Video: Video Name
[![YouTube](http://img.youtube.com/vi/LudiZKHYvMo/0.jpg)](https://www.youtube.com/watch?v=LudiZKHYvMo)

## Overview
- Classes are the blueprint for objects
- Classes are reusable and customizable, much like functions

## Learning Objectives
- Understanding the anatomy of a class
- Creating a object with unique data from a class
- Understanding the purpose of a constructor
- Understanding the difference between an object and a class

## Vocabulary
- class
- object
- constructor
- this
- new
- PascalCase

## Additional Resources
- <a href="http://www.javascriptenlightenment.com/" target="blank">Javascript Enlightenment</a>
- <a href="https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch2.md#objects" target="blank">You Don't Know JS: Up & Going - Chapter 2: Into JavaScript</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Objects" target="blank">MDN: Objects</a>
- <a href="https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch3.md#chapter-3-function-vs-block-scope" target="blank">You Don't Know JS: Function vs. Block Scope</a>
- <a href="https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch5.md#chapter-5-scope-closure" target="blank">You Don't Know JS: Scope Closure</a>
(Caution: not for the faint of heart)
- <a href="https://github.com/airbnb/javascript" target="blank">Airbnb JavaScript Style Guidelines</a>

#### Process
- `cd` into the `javascript-foundations-challenges` repository
- Create a new branch: `classes-initials1-initials2` (ex. classes-aw-sp)
- `touch` a file with no spaces and `.js` extension: `classes-student1-student2.js` (ex. classes-austin-sarah.js)
- Open the folder in a text editor
- Code!

---

## Classes
Classes are a particular type of function that contain data and behavior. Classes are the blueprints of objects. Just like functions, classes have their own scope.

There are particular JavaScript keywords that are used to create and access information within a class:
- **constructor:** a special method for creating and initializing objects
- **this:** a JavaScript keyword that refers to the object it belongs to
- **new:** used when creating a new instance of a class (an object)

Class syntax conventions:

- Class names are always capitalized
- Class names are PascalCased (like camelCase, but the first word is capitalized)
- Instance of classes (objects) are always lowercase

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
// creating the instance of the class, saved as a variable
// rocky now has access to the class methods
var rocky = new Squirrel()

console.log(rocky.nutCount)
--> 0

rocky.storeNut()
console.log(rocky.nutCount)
--> 1

rocky.storeNut()
console.log(rocky.nutCount)
--> 2

rocky.eatNut()
console.log(rocky.nutCount)
--> 1
```

Just like functions, classes are reusable. Each object created from the class is independent from each other.

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
--> "Rocky has 0"

console.log("Alvin has ", alvin.nutCount )
--> "Alvin has 2"
```

Class instances can be used like any other 'thing' in JavaScript. We can rewrite the above like this:

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
// create a new array
var squirrels = []
// pushes new squirrel objects into the array
squirrels.push(new Squirrel())
squirrels.push(new Squirrel())

// accessing the object at array index 0
squirrels[0].storeNut()
squirrels[0].storeNut()

// mapping over array to access the information from the squirrels array
squirrels.map((value, index) => {
  console.log(`The squirrel at index ${index} has ${value.nutCount} nuts.`)
})
```

Class instances can store any kind of data.

```javascript
class DiceRoller{
  constructor(){
    this.rolls = []
  }

  roll(){
    // generating a random number between 1 and 6 and pushing to the this.rolls array
    this.rolls.push(Math.ceil(Math.random() * 6))
  }

  lastRoll(){
    //logging the last roll added to the array
    return this.rolls[this.rolls.length - 1]
  }
}

var roller = new DiceRoller()
console.log("Roll:", roller.lastRoll())
--> Roll: undefined

roller.roll()
console.log("Roll:", roller.lastRoll())
--> Roll: 6

roller.roll()
console.log("Roll:", roller.lastRoll())
--> Roll: 4

console.log("All Rolls:", roller.rolls)
--> All Rolls: [ 6, 4 ]
```
The constructor method can take arguments. This creates objects with unique data.

```javascript
class Dog{
  constructor(name, age){
    this.name = name
    this.age = age
  }

  description(){
    return `${this.name} is a ${this.age} year old dog.`
  }
}
// now when creating the new object, the constructor method is expecting two arguments: a name and an age
var rover = new Dog('Rover', 4)
console.log(rover.description())
--> "Rover is a 4 year old dog."
```
We can use the Dog class to create many different dog objects with different properties.

```javascript
var plato = new Dog('Plato', 8)
var bella = new Dog('Bella', 11)

console.log(plato.description())
--> "Plato is a 8 year old dog."

console.log(bella.description())
--> "Bella is a 11 year old dog."
```

Objects are still just variables that reference a class. Variables in JavaScript can be reassigned.

```javascript
var plato = new Dog('Plato', 8)
var bella = new Dog('Bella', 11)

console.log(plato.description())
--> "Plato is a 8 year old dog."

console.log(bella.description())
--> "Bella is a 11 year old dog."
bella = plato
console.log(bella.description())
--> "Plato is a 8 year old dog."
// !!!! bella got reassigned
```

## Challenges

1. Coffee Maker

```javascript
class Coffee {
  constructor(type, cream, sugar){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }

  creams(){
    if(this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if(this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}
```

- Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.

- Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.

2. Latte Maker

- Write a Latte class that takes a flavor, a milk type and a number of shots.

- Write a method for your Latte class that outputs the latte's profile.

- Write the code that makes a regular, single shot latte. Then, log the latte's profile.

- Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

3. Volume of a Cylinder

- Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr<sup>2</sup>h (r is the radius and h is the height of the cylinder)

- Write the code that creates three unique cylinder objects

---
[Back to Syllabus](../README.md#unit-one-javascript-foundations)
