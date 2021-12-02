# JavaScript Class Inheritance

## Video: Video Name
[![YouTube](http://img.youtube.com/vi/Rx5_-Y_bG5E/0.jpg)](https://www.youtube.com/watch?v=Rx5_-Y_bG5E)

## Overview
- Classes can inherit information from other classes creating a parent-child relationship
- Class inheritance keeps code from being repetitive

## Learning Objectives
- Understanding the flow of information from the parent class to the child class

## Vocabulary
- inheritance
- Object Oriented Programming (OOP)
- extends
- super()

#### Process
- `cd` into the `javascript-foundations-challenges` repository
- Create a new branch: `inheritance-initials1-initials2` (ex. inheritance-aw-sp)
- `touch` a file with no spaces and `.js` extension: `inheritance-student1-student2.js` (ex. inheritance-austin-sarah.js)
- Open the folder in a text editor
- Code!

---

## Classes Review
When we think of our application from an Object Oriented perspective, we think of it as a collection of objects, and actors who interact with those objects.

A car, for example is an object that is made up of many smaller objects. It has wheels, a horn, and an engine, all of which can be interacted with by a driver. Wheels, horns, engines, and drivers are all objects, and thus, all modeled using classes in our application.

Classes define attributes (data) and behaviors (methods). An engine has attributes such as horsepower, oil level, and rpm. It has behaviors as well, such as start, accelerate, and stop.

**Classes themselves are not real things,** but rather definitions of things. Think of classes as the product of an engineer sitting at a desk with a pencil and paper designing exactly what he or she wants the engine to be. Those plans then go to the manufacturing floor (our running application) and are made into real things which can interact with other things (objects).

Let's take a look at an example of an Engine class, and then creating an application around it where the engine can be built and used.

```javascript
class Engine{
  constructor(){
    this.oilLevel = 100
    this.rpm = 0
  }
}

// calling new Engine() is just like sending the plans to the production floor to have it built
let engine = new Engine()
console.log(engine)
--> Engine { oilLevel: 100, rpm: 0 }

// now that we have an instance of our engine to interact with

console.log("oil:", engine.oilLevel)
--> "oil:" 100

console.log("rpm:", engine.rpm)
--> "rpm:" 0
```

That's a start! We now have an engine, and can ask it details about its current state. But what if we want to be able to turn the engine on, and have it do some work for us? Remember that classes are collections of attributes and behavior, we can add a method to the class that turns the engine on and off.

```javascript
class Engine{
  constructor(){
    this.oilLevel = 100
    this.rpm = 0
  }

  start(){
    this.rpm = 500
  }

  stop(){
    this.rpm = 0
  }
}

let engine = new Engine()

console.log("rpm:", engine.rpm)
--> "rpm:" 0

// call the method start on the engine object variable to alter the rpm
engine.start()
console.log("rpm:", engine.rpm)
--> "rpm:" 500

engine.stop()
console.log("rpm:", engine.rpm)
--> "rpm:" 0
```

# Inheritance
Now we have an Engine class that has attributes and behavior. Just like in the real world, we are not limited to only having one type of engine. There can be many variations of engines, all of which share attributes and behaviors, but have additional attributes and behavior that are unique. JavaScript classes allow us to model this situation by using inheritance.

We start with an Engine class that has properties common to all engines. Then we can create another class that can inherit from the Engine class but also have its own specialized data and methods. This is a `parent - child` inheritance relationship.

Here is our Engine class again:

```javascript
class Engine{
  constructor(){
    this.oilLevel = 100
    this.rpm = 0
  }

  start(){
    this.rpm = 500
  }

  stop(){
    this.rpm = 0
  }
}
```

We can define a new type of engine called `TurboEngine` that inherits attributes and behavior from the base Engine class.

To create inheritance we need two new JavaScript keywords:
- `extends`- used in the declaration of the class, extending the data and behavior of the parent class (or the class we are inheriting from)
- `super` - within in the constructor method we call super() which passes the attributes from the constructor in the parent class

```javascript
class TurboEngine extends Engine{
  constructor(){
    super()
  }
}
var turbo = new TurboEngine()
console.log(turbo)
--> TurboEngine { oilLevel: 100, rpm: 0 }
```

Now we have a new class that is inheriting information from a parent class. By using `extends` and calling `super()` the turbo object variable contains all the information of the Engine class.

The TurboEngine class also can have information that is specific to its class, like attributes (data) like horsepower and behavior (methods) like acceleration and deceleration.

```javascript
class TurboEngine extends Engine{
  constructor(){
    super()
    this.horsepower = 450
  }
  accelerate(){
    this.rpm = 750
  }
  decelerate(){
    this.rpm = 0
  }
}
var turbo = new TurboEngine()
console.log(turbo)
--> TurboEngine { oilLevel: 100, rpm: 0, horsepower: 450 }

turbo.accelerate()
console.log("rpm:", turbo.rpm)
--> "rpm:" 750
```

Now our Turbo engine has its own properties as well as the properties passed from its parent class.

We can create another class called `StockEngine` that also inherits from Engine.

```javascript
class StockEngine extends Engine{
  constructor(){
    super()
    this.horsepower = 250
  }
  accelerate(){
    this.rpm = 250
  }
  decelerate(){
    this.rpm = 0
  }
}
var stock = new StockEngine()
console.log(stock)
--> StockEngine { oilLevel: 100, rpm: 0, horsepower: 250 }

stock.accelerate()
console.log("rpm:", stock.rpm)
--> "rpm:" 250

stock.decelerate()
console.log("rpm:", stock.rpm)
--> "rpm:" 0
```
The class StockEngine has access to the information from the parent class of Engine as well as its own unique data and methods.


## Challenges

1. **Story**: As a programmer, I can make a car.
- Write a variable called myCar which is an instance of the class Car

2. **Story**: As a programmer, I can give my car a model on initialization.
- The model for the car class can be "generic car"

3. **Story**: As a programmer, I can give my car a year on initialization.
- The year for the car class can be "myCar year"

4. **Story**:	As a programmer, I can tell how many wheels myCar has.
- Calling the method wheels will return 4

4. **Story**:	As a programmer, I can make a Tesla car.
- class Tesla inherits from class Car
- Create an object called myTesla which is a instance of class Tesla

5. **Story**: As a programmer, I can give my Tesla a model on initialization.
- The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

6. **Story**: As a programmer, I can give my Tesla a year on initialization.
- The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

7. **Story**:	As a programmer, I can make a Toyota car.
- class Toyota inherits from class Car
- create an object called myToyota which is a instance of class Toyota

8. **Story**: As a programmer, I can give my Toyota a model on initialization.
- The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

9. **Story**: As a programmer, I can give my Toyota a year on initialization.
- The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

10. **Story**:	As a programmer, I can make a Volkswagen car.
- class Volkswagen inherits from class Car
- create an object called myVolkswagen which is a instance of class Volkswagen

11. **Story**: As a programmer, I can give my Volkswagen a model on initialization.
- The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

12. **Story**: As a programmer, I can give my Volkswagen a year on initialization.
- The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

13. **Story**: As a programmer, I can give all my cars a lights property. Lights start in the off position.

14. **Story**: As a programmer, I can turn the lights in all my cars on and off.

15. **Story**:  As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

16. **Story**:	As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

17. **Story**:	As a programmer, I can speed my Tesla up by 10 per acceleration.

18. **Story**:	As a programmer, I can slow my Tesla down by 7 per braking.

19. **Story**:	As a programmer, I can speed my Toyota up by 5 per acceleration.

20. **Story**:	As a programmer, I can slow my Toyota down by 2 per braking.

21. **Story**:	As a programmer, I can speed my Volkswagen up by 7 per acceleration.

22. **Story**:	As a programmer, I can slow my Volkswagen down by 5 per braking.

23. **Story**:  As a programmer, I can call upon a carInfo method that will tell me all the information about a car.
- The method can be created in the parent class and accessed by all child classes

---
[Back to Syllabus](../README.md#unit-one-javascript-foundations)
