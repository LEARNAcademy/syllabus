# JavaScript Class Inheritance

[![YouTube](http://img.youtube.com/vi/WS6a1tCx_AI/0.jpg)](https://www.youtube.com/watch?v=WS6a1tCx_AI)

## Classes Review
When we think of our application from an Object Oriented perspective, we think of it as a collection of objects, and actors who interact with those objects.

A car, for example is an object that is made up of many smaller objects. It has wheels, a horn, and an engine, all of which can be interacted with by a driver. Wheels, horns, engines, and drivers are all objects, and thus, all modeled using classes in our application.

Classes define attributes (data) and behaviors (methods). An engine has attributes such as horsepower, oil level, and rpm. It has behaviors as well, such as start, accelerate, and stop.

**Classes themselves are not real things,** but rather definitions of things. Think of classes as the product of an engineer sitting at a desk with a pencil and paper designing exactly what he or she wants the engine to be. Those plans then go to the manufacturing floor (our our running application) and are made into real things which can interact with other things (objects).

Let's take a look at an example of an Engine class, and then creating an application around it where the engine can be built and used.

```JavaScript
class Engine{
  constructor(){
    this.oilLevel = 100
    this.rpm = 0
  }
}

// calling new Engine() is just like sending the plans to the production floor to have it built
let engine = new Engine()

// now that we have an instance of our engine to interact with

console.log("oil:", engine.oilLevel)
// Output -->> oil: 100
console.log("rpm:", engine.rpm)
// Output -->> rpm: 0
```
![racecar 1](https://s3.amazonaws.com/learn-site/curriculum/racecar-1.png)

That's a start! We now have an engine, and can ask it details about its current state. But what if we want to be able to turn the engine on, and have it do some work for us? Remember that classes are collections of attributes and behavior, we can add a method to the class that turns the engine on and off.

```JavaScript
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
// Output -->> rpm: 0

// call the method start on the engine object variable to alter the rpm
engine.start()
console.log("rpm:", engine.rpm)
// Output -->> rpm: 500

engine.stop()
console.log("rpm:", engine.rpm)
// Output -->> rpm: 0
```

![Video with more details](https://s3.amazonaws.com/learn-site/curriculum/racecar-3.png)

# Inheritance
Now we have an Engine class that has attributes and behavior. Just like in the real world, we are not limited to only having one type of engine. There can be many variations of engines, all of which share attributes and behaviors, but have additional attributes and behavior that are unique. JavaScript classes allow us to model this situation by using inheritance.

We start with an Engine class that has properties common to all engines. Then we can create another class that can inherit from the Engine class but also have its own specialized data and methods. This is a `parent - child` inheritance relationship.

Here is our Engine class again:

```JavaScript
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

```JavaScript
class TurboEngine extends Engine{
  constructor(){
    super()
  }
}
var turbo = new TurboEngine()
console.log(turbo)
// Output -->> TurboEngine { oilLevel: 100, rpm: 0 }
```
Now we have a new class that is inheriting information from a parent class. By using `extends` and calling `super()` the turbo object variable contains all the information of the Engine class.

The TurboEngine class also can have information that is specific to its class, like attributes (data) like horsepower and behavior (methods) like acceleration and deceleration.

```JavaScript
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
// Output -->> TurboEngine { horsepower: 450, oilLevel: 100, rpm: 0 }
turbo.accelerate()
console.log("rpm:", turbo.rpm)
// Output -->> rpm: 750
```
Now our Turbo engine has its own properties as well as the properties passed from its parent class.

We can create another class called `StockEngine` that also inherits from Engine.

```JavaScript
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
// Output -->> StockEngine { horsepower: 250, oilLevel: 100, rpm: 0 }
stock.accelerate()
console.log("rpm:", stock.rpm)
// Output -->> rpm: 250
stock.fillOil()
console.log("oilLevel:", stock.oilLevel)
// Output -->> oilLevel: 150
```
The class StockEngine has access to the information from the parent class of Engine as well as its own unique data and methods.


## Challenges

1. **Story**: As a programmer, I can make a car.
- Write a variable called myCar which is an instance of the class Car

2. **Story**:	As a programmer, I can tell how many wheels myCar has.
- calling a method named wheels will return 4

3. **Story**:	As a programmer, I can make a Tesla car.
- class Tesla inherits from class Car
- create an object called sThree which is a instance of class Tesla

4. **Story**:	As a programmer, I can make a Toyota car.
- class Toyota inherits from class Car
- create an object called fourRunner which is a instance of class Tesla

5. **Story**:	As a programmer, I can make a BMW car.
- class BMW inherits from class Car
- create an object called myBMW which is a instance of class BMW

6. **Story**:	As a programmer, I can tell which model year a vehicle is from. Model years never change.
**Hint**:	Make model year part of the initialization.

7. **Story**:	As a programmer, I can turn on and off the lights on a given Car.
**Hint**:	Create method(s) to allow programmer to turn lights on and off. Which class are the methods in?

8. **Story**:	As a programmer, I can determine if the lights are on or off. Lights start in the off position.

9. **Story**:  As a programmer, I can signal left and right. Turn signals starts off.

10. **Story**:	As a programmer, I can determine the speed of a car. Speed starts at 0 km/h.

11. **Story**:	As a programmer, I can speed my Teslas up by 10 per acceleration.

12. **Story**:	As a programmer, I can slow my Teslas down by 7 per braking.

13. **Story**:	As a programmer, I can speed my Tatas up by 2 per acceleration.

14. **Story**:	As a programmer, I can slow my Tatas down by 1.25 per braking.

15. **Story**:	As a programmer, I can speed my Toyotas up by 7 per acceleration.

16. **Story**:	As a programmer, I can slow my Toyotas down by 5 per braking.

17. **Story**:  As a programmer, I can call upon a car to tell me all it's information.
**Hint**:   Implement `carInfo` method on one or more classes. You can call a super class's `carInfo` with `super`.

### STRETCH Challenges

18. **Story**:	As a programmer, I can keep a collection of two of each kind of vehicle, all from different years.
**Hint**:	Create two of each vehicles, all from different model years, and put them into an Array.

19. **Story**:	As a programmer, I can sort my collection of cars based on model year.

20. **Story**:	As a programmer, I can sort my collection of cars based on model.
**Hint**:	Sort based on class name.

**Story**:	As a programmer, I can sort my collection of cars based on model and then year.

[Go to next lesson: React Intro](../react/01react_intro_to_react.md)

[Back to Javascript Classes](./02js_classes.md)

[Back to Syllabus](../README.md)
