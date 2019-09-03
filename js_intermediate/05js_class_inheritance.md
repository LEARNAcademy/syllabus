# Classes in ES6

[![YouTube](http://img.youtube.com/vi/WS6a1tCx_AI/0.jpg)](https://www.youtube.com/watch?v=WS6a1tCx_AI)

One of the highly anticipated additions to the Javascript language introduced in ES6 was Classes.  When we think of our   application from an Object Oriented perspective, we think of it as a collection of objects, and actors who interact with  those objects.  A car, for example is an object that is made up of many smaller objects.  It has wheels, a horn, and an   engine, all of which can be interacted with by a driver.  Wheels, horns, engines, and drivers are all objects, and thus,  all modeled using classes in our application.

Classes define attributes and behaviors.  An engine has attributes such as horsepower, oil level, rpm, and temperature,   for example.  It has behaviors as well, such as start, accelerate, and stop.

Classes themselves are not real things, but rather definitions of things.  Think of them as the product of an engineer    sitting at a desk with a pencil and paper designing exactly what he or she wants the engine to be.  Those plans then go   to the manufacturing floor (our our running application) and are made into real things which can interact with other      things.

Let's take a look at an example of specifying an Engine class, and then creating an application around it where the       engine can be built and used.

We'll start by creating a new application called 'racecar.html'.

```Javascript
// ./racecar.html
<html>
  <head>
  </head>
  <body>
    <script>
      class Engine{
        constructor(){
          this.horsepower = 350
          this.oilLevel = 100
          this.rpm = 0
        }
      }

      // calling `new Engine()' is just like sending the plans
      // to the production floor to have it built
      let engine = new Engine()

      // now that we have an instance of our engine built,
      // we can interact with it
      console.log("horsepower:", engine.horsepower)
      console.log("oil:", engine.oilLevel)
      console.log("rpm:", engine.rpm)
    </script>
  </body>
</html>
```

![racecar 1](https://s3.amazonaws.com/learn-site/curriculum/racecar-1.png)


That's a start!  We now have an engine, and can ask it details about its current state.  But what if we want to be able   to turn the engine on, and have it do some work for us?  Remember that classes are collections of attributes and          behavior, we can add a method to the class that turns it on.

```Javascript
    <script>
      class Engine{
        constructor(){
          this.horsepower = 350
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
      engine.start()
      console.log("rpm:", engine.rpm)

      engine.stop()
      console.log("rpm:", engine.rpm)
    </script>
```

That works, but we want to be able to accelerate, and decelerate as well.  Let's add those methods as well.


```Javascipt
    <script>
      class Engine{
        constructor(){
          this.horsepower = 350
          this.oilLevel = 100
          this.rpm = 0
        }

        start(){
          this.rpm = 500
        }

        stop(){
          this.rpm = 0
        }

        accelerate(){
          if(this.rpm != 0){
            this.rpm += 500
          }
        }

        decelerate(){
          if(this.rpm != 0){
            this.rpm -= 500
          }
        }
      }

      let engine = new Engine()

      console.log("rpm:", engine.rpm)
      engine.start()
      console.log("rpm:", engine.rpm)

      engine.accelerate()
      console.log("rpm:", engine.rpm)

      engine.accelerate()
      console.log("rpm:", engine.rpm)

      engine.decelerate()
      engine.decelerate()
      console.log("rpm:", engine.rpm)

      engine.stop()
      console.log("rpm:", engine.rpm)
    </script>

```

And now we can rev the engine.
![rev it up](https://s3.amazonaws.com/learn-site/curriculum/racecar-2.png)

Excellent!  Now that we have an engine, we can go back to our pencil pushing engineer and ask her to design the racecar   that our engine will power.

```Javascript
class Racecar{
  constructor(){
    this.speed = 0
  }
}
```

That's a start, but our racecar doesn't have an engine!  We're not going to win many races if we can't propel ourselves   down the track, so we go back to the engineer and ask her to allow us to add an engine to the car, along with an          ignition, throttle, transmission, speedometer, and shift lever.

```Javascript
class Racecar{
  constructor(engine){
    this.engine = engine
    this.speed = 0
    this.gear = 1
  }

  start(){
    this.engine.start()
  }

  shiftUp(){
    if(this.gear < 5){
      this.gear++
      this.speed = this.calculateSpeed()
    }
  }

  shiftDown(){
    if(this.gear > 1){
      this.gear --
      this.speed = this.calculateSpeed()
    }
  }

  accelerate(){
    this.engine.accelerate()
    this.speed = this.calculateSpeed()
  }

  decelerate(){
    this.engine.decelerate()
    this.speed = this.calculateSpeed()
  }

  calculateSpeed(){
    return this.engine.rpm * this.gear / 50
  }
}
```

We're ready to take our racecar out for a test drive around the track.


```Javascript
let engine = new Engine()
let racecar = new Racecar(engine)

racecar.start()
console.log('accelerating')
racecar.accelerate()
console.log('speed:', racecar.speed)

console.log('accelerating')
racecar.accelerate()
console.log('speed:', racecar.speed)

console.log('shifting Up')
racecar.shiftUp()
console.log('speed:', racecar.speed)

console.log('shifting Down')
racecar.shiftDown()
console.log('speed:', racecar.speed)

```

![test drive](https://s3.amazonaws.com/learn-site/curriculum/racecar-3.png)


# Inheritance

Recall the Engine class that we built in the Class module.  That engine worked great to propel our car, but just like in  the real world, we're not limited to only having one type of engine.  There can be many variations of engines, all of     which share attributes and behaviors, but are different in their own ways.  Javascript classes allow us to model this     situation by using inheritance.  We start with an Engine class that has properties common to all engines, and then can    inherit from it to create new Engine classes that are specialized.

For this example, we'll move the Racecar class out to its own file, and include it in our application.

Starting where we left off:

```HTML
<html>
  <head>
    <script type='text/javascript' src='racecar.js'></script>
  </head>
  <body>
    <script>
      class Engine{
        constructor(){
          this.horsepower = 350
          this.oilLevel = 100
          this.rpm = 0
        }

        start(){
          this.rpm = 500
        }

        stop(){
          this.rpm = 0
        }

        accelerate(){
          if(this.rpm != 0){
            this.rpm += 500
          }
        }

        decelerate(){
          if(this.rpm != 0){
            this.rpm -= 500
          }
        }
      }
    </script>
  </body>
</html>
```

We can define two new types of engine, TurboEngine, and StockEngine that inherit most of their attributes and behavior    from the base Engine class.  The only difference is that they accelerate and decelerate at different rates:


```Javascript
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

  accelerate(){
    console.log("Warning!  This is a base class method, should not be called")
  }

  decelerate(){
    console.log("Warning!  This is a base class method, should not be called")
  }
}

class TurboEngine extends Engine{
  constructor(){
    super()
    this.horsepower = 450
  }
  accelerate(){
    if(this.rpm != 0){
      this.rpm += 750
    }
  }

  decelerate(){
    if(this.rpm != 0){
      this.rpm -= 750
    }
  }
}

class StockEngine extends Engine{
  constructor(){
    super()
    this.horsepower = 250
  }
  accelerate(){
    if(this.rpm != 0){
      this.rpm += 250
    }
  }

  decelerate(){
    if(this.rpm != 0){
      this.rpm -= 250
    }
  }
}

```


And When we take our racecars out for a test drive, here is the results

![inheritance](https://s3.amazonaws.com/learn-site/curriculum/inheritance-1.png)

## A note about ```super()```

Did you notice that in the constructor of our child classes we called ```super()```?

```Javascript
class Engine{
  constructor(){
    this.oilLevel = 100
    this.rpm = 0
  }
  ...

class TurboEngine extends Engine{
  constructor(){
    super()
    this.horsepower = 450
  }
  ...

class StockEngine extends Engine{
  constructor(){
    super()
    this.horsepower = 250
  }
  ...
```

What is that all about?  When we inherit from a parent class we often times will overwrite methods defined on the parent   in the child, but we still want to call those parent methods.  In this case, we have setup work to do that in the parent  constructor, as well as work to do in the child. ```super()``` allows us access the parent method that has the same name.

Here is the complete application for reference:


```Javascript
// ./racecar.js

class Racecar{
  constructor(engine){
    this.engine = engine
    this.speed = 0
    this.gear = 1
  }

  start(){
    this.engine.start()
  }

  shiftUp(){
    if(this.gear < 5){
      this.gear++
      this.speed = this.calculateSpeed()
    }
  }

  shiftDown(){
    if(this.gear > 1){
      this.gear --
      this.speed = this.calculateSpeed()
    }
  }

  accelerate(){
    this.engine.accelerate()
    this.speed = this.calculateSpeed()
  }

  decelerate(){
    this.engine.decelerate()
    this.speed = this.calculateSpeed()
  }

  calculateSpeed(){
    return this.engine.rpm * this.gear / 50
  }
}

```


```HTML
// ./racecar.html

<html>
  <head>
    <script type='text/javascript' src='racecar.js'></script>
  </head>
  <body>
    <script>
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

        accelerate(){
          console.log("Warning!  This is a base class method, should not be called")
        }

        decelerate(){
          console.log("Warning!  This is a base class method, should not be called")
        }
      }

      class TurboEngine extends Engine{
        constructor(){
          super()
          this.horsepower = 450
        }
        accelerate(){
          if(this.rpm != 0){
            this.rpm += 750
          }
        }

        decelerate(){
          if(this.rpm != 0){
            this.rpm -= 750
          }
        }
      }

      class StockEngine extends Engine{
        constructor(){
          super()
          this.horsepower = 250
        }
        accelerate(){
          if(this.rpm != 0){
            this.rpm += 250
          }
        }

        decelerate(){
          if(this.rpm != 0){
            this.rpm -= 250
          }
        }
      }




      let turbo = new TurboEngine()
      let fastRacecar = new Racecar(turbo)

      let stock = new StockEngine()
      let slowRacecar = new Racecar(stock)

      console.log("Test drive the fast racecar")
      fastRacecar.start()
      console.log('accelerating')
      fastRacecar.accelerate()
      console.log('speed:', fastRacecar.speed)

      console.log('shifting Up')
      fastRacecar.shiftUp()
      console.log('speed:', fastRacecar.speed)


      console.log("Test drive the slow racecar")
      slowRacecar.start()
      console.log('accelerating')
      slowRacecar.accelerate()
      console.log('speed:', slowRacecar.speed)

      console.log('shifting Up')
      slowRacecar.shiftUp()
      console.log('speed:', slowRacecar.speed)
    </script>
  </body>
</html>

```

## Process

Before starting the implementation, copy each story into the editor as a comment, and it as pseudo code to help you write each method

## Stories

**Story**:	As a programmer, I can make a car.
**Hint**:	Create a class called `Car`, and create a variable called `myCar` which contains an object of class `Car`.

**Story**:	As a programmer, I can tell how many wheels a car has; default is four.

**Story**:	As a programmer, I can make a Tesla car.
**Hint**:	Create an variable called `myTesla` which is of class `Tesla` which inherits from class `Car`.

**Story**:	As a programmer, I can make a Tata car.

**Story**:	As a programmer, I can make a Toyota car.

**Story**:	As a programmer, I can tell which model year a vehicle is from. Model years never change.
**Hint**:	Make model year part of the initialization.

**Story**:	As a programmer, I can turn on and off the lights on a given Car.
**Hint**:	Create method(s) to allow programmer to turn lights on and off. Which class are the methods in?

**Story**:	As a programmer, I can determine if the lights are on or off. Lights start in the off position.

**Story**:  As a programmer, I can signal left and right. Turn signals starts off.

**Story**:	As a programmer, I can determine the speed of a car. Speed starts at 0 km/h.

**Story**:	As a programmer, I can speed my Teslas up by 10 per acceleration.

**Story**:	As a programmer, I can slow my Teslas down by 7 per braking.

**Story**:	As a programmer, I can speed my Tatas up by 2 per acceleration.

**Story**:	As a programmer, I can slow my Tatas down by 1.25 per braking.

**Story**:	As a programmer, I can speed my Toyotas up by 7 per acceleration.

**Story**:	As a programmer, I can slow my Toyotas down by 5 per braking.

**Story**:  As a programmer, I can call upon a car to tell me all it's information.
**Hint**:   Implement `carInfo` method on one or more classes. You can call a super class's `carInfo` with `super`.

**Story**:	As a programmer, I can keep a collection of two of each kind of vehicle, all from different years.
**Hint**:	Create two of each vehicles, all from different model years, and put them into an Array.

**Story**:	As a programmer, I can sort my collection of cars based on model year.

**Story**:	As a programmer, I can sort my collection of cars based on model.
**Hint**:	Sort based on class name.

**Story**:	As a programmer, I can sort my collection of cars based on model and then year.

[Go to next lesson: React Intro](../react/01react_intro_to_react.md)

[Back to Javascript Higher Order Functions](./02js_higher_order_functions.md)

[Back to Syllabus](../README.md)
