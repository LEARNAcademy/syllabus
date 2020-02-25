# INHERITANCE

## Class
Class can be an abstract concept when you first come across it. Let's try to clear up what class is and how it behaves. To start, **class definition** describes the structure and behavior of a set of objects.

## Inheritance
Inheritance is a relationship between two classes. For instance, an Apple `"is a"` Fruit. Apple and Fruit have an inheritance relationship based on their shared features.

For example, `Fruit` is the superclass ("super"/bigger) because it encompasses `Apple` and `Citrus`. The superclass will have the broader **class definition**. In this example, `Apple` is further down the inheritance hierarchy.

Classes further down from the superclass have more features specific to what they are -- `Apple` has more specific features and characteristics than the broad umbrella `Fruit` -- making them more specialized.

Inheritance means that classes inherit the external interface of the superclasses. Therefore, classes can access and use their superclass' methods. Remember, instance variables are specific to each new instance of a class. That means that instance variables are not inherited.

<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/12/original_is-a.png?1464387871"/>

### Classes have Relationships
In your Car challenge, you will have at minimum a Vehicle class and a Car class. You can make as many Cars as you want, and they will share a lot of the same attributes as Vehicle. Any time you identify this kind of relationship forming, whether it's one-to-many or one-to-one, it's a strong indication that there should be inheritance between the two classes. This will allow you to share methods across related classes.

## has-a, has-many
Aggregation/composition/contains, has-a (uses): one class uses another class

Has-a: singular; have-many: plural, implying a collection (for instance, array).

Classes are related through storage or operation, but not more/less.

<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/26/original_has-a.png?1469057861"/>
<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/27/original_has-many.png?1469057876"/>



Objects, meaning instances of a class, are realizations of a class that can be interacted with and store data. Objects are independent of each other. With a class definition, we have the blueprint for what a Fruit class or an Apple class is and can do. Objects allow us to interact with those classes directly in our code; it's the difference between reading about an apple and being handed one.

This style of programming is called object oriented, even if the programming to some extent focuses on classes.

### Objects are Interrelated
Creating a program in Ruby is a little bit like playing Jenga; all the bits and pieces rely on each other to stand up, and removing the wrong piece can wreak havoc. Because of their relationships, objects impact each other and you have to remember those relationships as you're writing your code. 

Take the example of the Vitamin class above. Vitamin and Apple have a many-to-many relationship. There can be as many Apples with Vitamins as you want to create. But what happens when you write a method in the Fruit class to grab all Fruit with Vitamins, and it grabs an instance of the Fruit class that doesn't inherit from Vitamin? You'll get an error. One solution to this is creating a separate array for storing items with Vitamins in Fruit, so the two types don't clash. Remembering how your objects impact each other is very important when writing applications in Ruby.



### Ruby Inheritance
Since inheritance is a relation between two classes, to create the relation we use <. This allows the new class to get the features of the higher up class, but now you can add specific features. For example:

```RUBY
class Dog  

  def initialize(breed)  
    @breed = breed  
  end  
  
end
```
Now we will create a new class called Pointer and have it inherit from Dog.

When you invoke a superclass with arguments, Ruby sends a message to the _parent_ (`Dog`) of the _current object_ (`Pointer`), asking it to invoke a method of the same name as the method invoking `super`. 

For example: below, our `initialize` method invokes `super` with an argument called `breed`. As soon as super is invoked, Ruby sends a message to our `Dog` class, looking for a method called `initialize`. Now, `Pointer` is essitially borrowing `Dog`'s initialize method to assign an instance variable of @breed to `Pointer`. The argument/s you pass to the new instance of your subclass will be the exact same arguments passed to `super`.

```RUBY
class Pointer < Dog  

  def initialize(breed, name)  
    super(breed)  
    @name = name  
  end  
  
  def to_s  
    "(#@breed, #@name)"  
  end  
  
end 

my_dog = Lab.new("Pointer", "Jax").to_s 
```

The to_s method in class Pointer references @breed variable from the superclass Dog. This code works as you probably expect it to:

```RUBY
my_dog = Lab.new("Pointer", "Jax").to_s #(Pointer, Jax)
```

Because this code behaves as expected, you may be tempted to say that these variables are inherited. But remember, that is not how Ruby works. In the above code, Pointer defines an initialize method that chains to the initialize method of its superclass. The chained method assigns values to the variable @breed, which makes those variables come into existence for a particular instance of Pointer.


## Challenge: Car Challenge

### Programmer Stories

**Story**:	As a programmer, I can make a car.
**Hint**:	Create a class called `Car`, and create a variable called `my_car` which contains an object of class `Car`.

**Story**: As a programmer, I can give my car a model on initialization. **Hint**: The model for the car class can be "generic car"

**Story**: As a programmer, I can give my car a year on initialization.
**Hint**: The year for the car class can be "my_car year"

**Story**:	As a programmer, I can tell how many wheels a car has. The default is four.
**Hint**:	`initialize` the car to have four wheels, then create a method to return the number of wheels.

**Story**:	As a programmer, I can make a Tesla car.
**Hint**:	Create an variable called `my_tesla` which is an instance of class `Tesla` which inherits from class `Car`.

**Story**: As a programmer, I can give my Tesla a model on initialization.

**Story**: As a programmer, I can give my Tesla a year on initialization.

**Story**:	As a programmer, I can make a Toyota car.

**Story**: As a programmer, I can give my Toyota a model on initialization.

**Story**: As a programmer, I can give my Toyota a year on initialization.

**Story**:	As a programmer, I can make a Honda car.

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

[Go to next lesson: Ruby Testing with RSPEC](./rspec.md)

[Back to Ruby Classes and Objects](./classes_objects.md)

[Back to Syllabus](../README.md)
