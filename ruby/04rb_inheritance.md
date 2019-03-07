# INHERITANCE

## Class
Class can be an abstract concept when you first come across it. Let's try to clear up what class is and how it behaves. To start, "class definition" describes the structure and behavior of a set of objects.

## Inheritance
Inheritance is a relationship between two classes. For instance, an Apple "is a" Fruit. Apple and Fruit have an inheritance relationship based on their shared features.
Fruit is the Superclass,"super"/bigger, because it encompasses more things (like other classes or Fruits) and is the broader class definition.

Apple would be a good example of a class further down the inheritance hierarchy.



Classes further down from the superclass have more features specific to what they are -- like Apple has more specific features and characteristics than the broad umbrella Fruit -- making them more specialized.

Inheritance means that classes inherit the external interface of the superclasses. That is a slightly complicated way of saying that, in Ruby, classes can access and use their superclass' methods. The "private parts" of those methods -- the instance variables -- are not inherited (only the methods in a class can access them).

<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/12/original_is-a.png?1464387871"/>


## has-a, has-many
Aggregation/composition/contains, has-a (uses): one class uses another class
Has-a: singular; have-many: plural, implying a collection (for instance, array).
Classes are related through storage or operation, but not more/less.

<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/26/original_has-a.png?1469057861"/>
<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/27/original_has-many.png?1469057876"/>



Objects, meaning instances of a class, are realizations of a class that can be interacted with and store data. Objects are independent of each other. With a class definition, we have the blueprint for what a Fruit class or an Apple class is and can do. Objects allow us to interact with those classes directly in our code; it's the difference between reading about an apple and being handed one.

This style of programming is called object oriented, even if the programming to some extent focuses on classes.

## Ruby Inheritance <
Since inheritance is a relation between two classes, to create the relation we use <. This allows the new class to get the features of the higher up class, but now you can add specific features. For example:

```RUBY
class Fruit

  def initialize  color
    @color = color
  end

  def color
    @color
  end

  def is_sweet
    true
  end
end
```
Now we will create a new class called Apple and have it inherit from Fruit.

And since we are inheriting from the Fruit class, which initializes an instance variable, and requires a parameter, we have to do the same with our Apple class. So we create an initialize method, and pass in the parameter as super. Using super will call the original method from Fruit and pass in the parameter.

```RUBY
class Apple < Fruit

  def initialize color
    super color + " Apple"
  end

  def spoils
    "Spoils in 7 days"
  end

end

apple_one = Apple.new("Red")
apple_one.color
=> "Red Apple"
apple_one.is_sweet
=> true
apple_one.spoils
=> "Spoils in 7 days"
```

## Process

Before starting the implemention, copy each story into the editor as a comment, and use the function recipe to guide the implementation of each method

## Stories

**Story**:	As a programmer, I can make a vehicle.
**Hint**:	Create a class called `Vehicle`, and create a variable called `my_vehicle` which contains an object of class `Vehicle`.

**Story**:	As a programmer, I can make a car.
**Hint**:	Create a class called `Car`, and create a variable called `my_car` which contains an object of class `Car`.

**Story**:	As a programmer, I can tell how many wheels a car has; default is four.
**Hint**:	`initialize` the car to have four wheels, then create a method to return the number of wheels.

**Story**:	As a programmer, I can make a Tesla car.
**Hint**:	Create an variable called `my_tesla` which is of class `Tesla` which inherits from class `Car`.

**Story**:	As a programmer, I can make a Tata car.

**Story**:	As a programmer, I can make a Toyota car.

**Story**:	As a programmer, I can tell which model year a vehicle is from. Model years never change.
**Hint**:	Make model year part of the initialization.

**Story**:	As a programmer, I can turn on and off the lights on a given Vehicle.
**Hint**:	Create method(s) to allow programmer to turn lights on and off. Which class are the methods in?

**Story**:	As a programmer, I can determine if the lights are on or off. Lights start in the off position.

```
You should be able to test the car now:
vehicle = Vehicle.new(...)
vehicle.lights_on # should return false because they start false
vehicle.lights_on = true # this should change the lights to true
vehicle.lights_on # should now return true
vehicle.lights_on = false # this should change the lights to false
vehicle.lights_on? # should return false
```

**Story**:  As a programmer, I can signal left and right. Turn signals starts off.

**Story**:	As a programmer, I can determine the speed of a car. Speed starts at 0 km/h.

**Story**:	As a programmer, I can speed my Teslas up by 10 per acceleration.

**Story**:	As a programmer, I can slow my Teslas down by 7 per braking.

**Story**:	As a programmer, I can speed my Tatas up by 2 per acceleration.

**Story**:	As a programmer, I can slow my Tatas down by 1.25 per braking.

**Story**:	As a programmer, I can speed my Toyotas up by 7 per acceleration.

**Story**:	As a programmer, I can slow my Toyotas down by 5 per braking.

**Story**:  As a programmer, I can call upon a car to tell me all it's information.
**Hint**: Implement `to_s` on one or more classes. You can call a super class's `to_s` with super.

**Story**:	As a programmer, I can keep a collection of two of each kind of vehicle, all from different years.
**Hint**:	Create two of each vehicles, all from different model years, and put them into an Array.

**Story**:	As a programmer, I can sort my collection of cars based on model year.

**Story**:	As a programmer, I can sort my collection of cars based on model.
**Hint**:	Sort based on class name.

**Story**:	As a programmer, I can sort my collection of cars based on model and then year.
**Hint**:   Find out how the spaceship operator can help you with an array.

[Go to Ruby Testing with Rspec](./05rb_rspec.md)


[Back to Ruby Classes and Objects](./03rb_classes_objects.md)
