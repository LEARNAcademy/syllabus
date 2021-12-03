# Ruby Inheritance

## Overview
- Ruby inheritance describes relationships between classes

## Learning Objectives
- Pass data and behavior from parent to child class

## Vocabulary
- Ruby classes
- Ruby inheritance
- super()

#### Process
- `cd` into the `ruby-challenges` repository
- Create a new branch: `inheritance-initials1-initials2` (ex. inheritance-aw-sp)
- `touch` a file with no spaces and `.rb` extension: `inheritance-student1-student2.rb` (ex. inheritance-austin-sarah.rb)
- Open the folder in a text editor
- Code!

---

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

When you invoke a superclass with arguments, Ruby sends a message to the *parent* (`Dog`) of the *current object* (`Pointer`), asking it to invoke a method of the same name as the method invoking `super`.

For example: above, our `initialize` method invokes `super` with an argument called `breed`. As soon as super is invoked, Ruby sends a message to our `Dog` class, looking for a method called `initialize`. Now, `Pointer` is essentially borrowing `Dog`'s initialize method to assign an instance variable of `@breed `to `Pointer`. The argument/s you pass to the new instance of your subclass will be the exact same arguments passed to `super`.

The get_info method in class Pointer references `@breed` from the superclass Dog. This code uses string interpolation to return a string of the dog's info:

```ruby
my_dog = Pointer.new("Pointer", "Jax").get_info #(Pointer, Jax)
```

Because of the way this code behaves, you may be tempted to say that the instance variables are also inherited. But remember, that is not how Ruby works. In the above code, Pointer defines an initialize method that chains to the initialize method of its superclass. The chained method assigns values to the variable `@breed`, which makes those variables come into existence for a particular instance of Pointer.

## Summary
- Use `<` to create an inheritance relationship between a parent and child class.
- The `super()` method is used in the child class. It calls the method of the _same name_ in the parent class. After invoking `super()`, the child class will have access to the instance variables within that method.
- Instance variables are not inherited since instance variables are local to a specific instance of a class. Via `super()`, you are allowed to _borrow_ instance variables from the parent.


## Challenge: Animal Kingdom
**Story**: As a developer, I can make an Animal.

**Story**: As a developer, upon initialization, I can give my Animal a status of `alive`, which will be set to true.

**Story**: As a developer, I can give my Animal an `age` of 0 upon creation.

**Story**: As a developer, I can age my Animal up one year at a time.

**Story**: As a developer, I can return my Animal's `age`, as well as if they're `alive`.
**Hint**: Use `attr_accessor` as well as an `initialize` method.

**Story**: As a developer, I can create a Fish that inherits from Animal.

**Story**: As a developer, I can initialize all of my fish to be `cold_blooded` (yes, there is _one_ fish who is technically fully warm-blooded but we aren't going to talk about that).

**Story**: As a developer, I can create a Salmon that inherits from Fish.

**Story**: As a developer, I can initialize my Salmon to be a specific species (Atlantic, Sockeye, etc).

**Story**: As a developer, I can see that my Salmon is cold-blooded.

**Story**: As a developer, I can age my Salmon up.

**Story**: As a developer, I can see a message that tells me all of my Salmon's information.

**Story**: As a developer, if my Salmon reaches the ripe old age of 4, I can make it die peacefully after a full and happy life.
**Hint**: You will need a method that changes the status of `alive` in the initialize method of Animal.

**Story**: As a developer, I can create a Mammal that inherits from Animal.

**Story**: As a developer, I can initialize all of my Mammals to be `warm_blooded`.

**Story**: As a developer, I can create a Bear that inherits from Mammal.

**Story**: As a developer, I can age my Bear up.

**Story**: As a developer, I can see a message that tells me all of my Bear's information.

**Story**: As a developer, if my Bear turns 20 years old, I can make it die peacefully after a full and happy life.
**Hint**: You will need a method that changes the status of `alive` in the initialize method of Animal.

**Story**: As a developer, I can create a Mammal of my choice.

**Story**: As a developer, I can interact with the new Mammal via various methods.

**Story**: As a developer, I can see a message that tells me all of my new Mammal's information.

### Stretch Challenges

**Story**: As a developer, I can keep a collection of two of each Animal.
**Hint**:	You'll want to add your Animals into an array.

**Story**: As a developer, I can sort my collection of Animals based on age.
**Hint**: Find out how the spaceship operator can help you with an array.


### Super Stretch Challenge

**Story**: As a developer, I can utilize a Ruby `module` to help DRY up my code. I can create a `swim` method inside of my `module` that will apply to Animals who can _swim_. This method should return "I can swim!"  
**Hint**: Look into module `mix ins`. Since not all animals can swim, only certain Animals will have access to this module.

---
[Back to Syllabus](../README.md#unit-four-ruby)
