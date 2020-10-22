# Ruby Inheritance

## Overview
- Ruby inheritance describes relationships between classes

## Learning Objectives
- Pass data and behavior from parent to child class

## Vocabulary
- Ruby classes
- Ruby inheritance
- super()

## Set Up
- Create a file with the extension `.rb`
- In terminal run `ruby` followed by the file name

## Ruby Classes
Class can be an abstract concept when you first come across it. To start, **class definition** describes the structure and behavior of a set of objects. Objects, meaning instances of a class, are realizations of a class that can be interacted with and store data. Objects are independent of each other. For example, with a class definition, we have the blueprint for an Apple. Objects allow us to interact with those classes directly in our code. Below we will use the "blueprint" of an apple to create some apples.

<img src="https://i.ibb.co/TRdWxFp/download.jpg" alt="download" border="0">

We just utilized the "DNA" of an apple (Class Apple), to make three brand new, independent apples with different data stored in "color".

This style of programming is called object-oriented, even if the programming focuses on classes to some extent.

## Ruby Inheritance
To create an inheritance relationship, we use `<` between the child class name and the parent class name. This allows the new class to inherit the features of the superclass, but now you can add specific features. For example:

```ruby
class Dog  
  def initialize(breed)  
    @breed = breed  
  end  
end
```
Now we will create a new class called Pointer and have it inherit from Dog.

When you invoke a superclass with arguments, Ruby sends a message to the *parent* (`Dog`) of the *current object* (`Pointer`), asking it to invoke a method of the same name as the method invoking `super`.

For example: below, our `initialize` method invokes `super` with an argument called `breed`. As soon as super is invoked, Ruby sends a message to our `Dog` class, looking for a method called `initialize`. Now, `Pointer` is essentially borrowing `Dog`'s initialize method to assign an instance variable of `@breed `to `Pointer`. The argument/s you pass to the new instance of your subclass will be the exact same arguments passed to `super`.

```ruby
class Pointer < Dog  
  def initialize(breed, name)  
    super(breed)  
    @name = name  
  end  

  def get_info  
    "(#@breed, #@name)"  
  end  
end

my_dog = Pointer.new("Pointer", "Jax").get_info
```

The get_info method in class Pointer references `@breed` from the superclass Dog. This code uses string interpolation to return a string of the dog's info:

```ruby
my_dog = Pointer.new("Pointer", "Jax").get_info #(Pointer, Jax)
```

Because of the way this code behaves, you may be tempted to say that the instance variables are also inherited. But remember, that is not how Ruby works. In the above code, Pointer defines an initialize method that chains to the initialize method of its superclass. The chained method assigns values to the variable `@breed`, which makes those variables come into existence for a particular instance of Pointer.

## Summary
- Use `<` to create an inheritance relationship between a parent and child class.
- The `super()` method is used in the child class. It calls the method of the _same name_ in the parent class. After invoking `super()`, the child class will have access to the instance variables within that method.
- Instance variables are not inherited since instance variables are local to a specific instance of a class. Via `super()`, you are allowed to _borrow_ instance variables from the parent.


## Challenge: Car Challenge
**Story**: As a programmer, I can make a car.  
**Hint**:	Create a class called `Car`, and create a variable called `my_car` which contains an object of class `Car`.

**Story**: As a programmer, I can give my car a model on initialization.  
**Hint**: The model for the car class can be "generic car"

**Story**: As a programmer, I can give my car a year on initialization.  
**Hint**: The year for the car class can be "my_car year"

**Story**: As a programmer, I can tell how many wheels a car has. The default is four.  
**Hint**:	`initialize` the car to have four wheels, then create a method to return the number of wheels.

**Story**: As a programmer, I can make a Tesla car.  
**Hint**:	Create an variable called `my_tesla` which is an instance of class `Tesla` which inherits from class `Car`.

**Story**: As a programmer, I can give my Tesla a model on initialization.

**Story**: As a programmer, I can give my Tesla a year on initialization.

**Story**:As a programmer, I can make a Toyota car.

**Story**: As a programmer, I can give my Toyota a model on initialization.

**Story**: As a programmer, I can give my Toyota a year on initialization.

**Story**: As a programmer, I can make a Honda car.

**Story**: As a programmer, I can give my Honda a model on initialization.

**Story**: As a programmer, I can give my Honda a year on initialization.

**Story**:	As a programmer, I can turn on and off the lights in my cars. Lights start in the off position.

**Story**:  As a programmer, I can signal left and right. Turn signals starts off.

**Story**:	As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

**Story**:	As a programmer, I can speed my Teslas up by 10 per acceleration.

**Story**:	As a programmer, I can slow my Teslas down by 7 per braking.

**Story**:	As a programmer, I can speed my Toyotas up by 7 per acceleration.

**Story**:	As a programmer, I can slow my Toyotas down by 5 per braking.

**Story**:	As a programmer, I can speed my Hondas up by 5 per acceleration.

**Story**:	As a programmer, I can slow my Hondas down by 2 per braking.

**Story**:  As a programmer, I can call upon a car to tell me all its information.  
**Hint**: Implement `to_s` on one or more classes. You can call a super class's `to_s` with super.


### Stretch Challenges

**Story**: As a programmer, I can keep a collection of two of each kind of car model, all from different years.  
**Hint**:	Create two of each vehicles, all from different model years, and put them into an array.

**Story**: As a programmer, I can sort my collection of cars based on model.

**Story**: As a programmer, I can sort my collection of cars based on year.  
**Hint**: Find out how the spaceship operator can help you with an array.

[ Go to next lesson: Ruby Testing with RSpec ](./rspec.md)

[ Back to Ruby Classes and Objects ](./classes_objects.md)

[ Back to Syllabus ](../README.md#unit-four-ruby)
