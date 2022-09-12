# Ruby Inheritance

#### Overview

Object-oriented programming is a philosophy with a focus on classes and their instantiated objects. To make class data structures more efficient, developers can define relationships between classes. This allows for commonly used behavior to be shared between classes.

#### Previous Lecture (23 min)

[![YouTube](http://img.youtube.com/vi/IUlDH1M5VTk/0.jpg)](https://youtu.be/IUlDH1M5VTk)

#### Learning Objectives

- can define the syntax to create an inheritance relationships between two classes
- can explain the purpose of the super method
- can describe how to access parent class methods from within a child class instance
- can articulate that instance variables are not inherited from parent classes

#### Vocabulary

- four pillars of object-oriented programming
- superclass
- subclass
- inheritance
- super

#### Process

- `cd` into the `ruby-challenges` repository
- Create a new branch: `inheritance-initials1-initials2` (ex. inheritance-aw-sp)
- `touch` a file with no spaces and `.rb` extension: `inheritance-student1-student2.rb` (ex. inheritance-austin-sarah.rb)
- Open the folder in a text editor
- Code!

---

### Object-oriented Programming

The philosophy of object-oriented programming (OOP) is a human-constructed model that allows us to organize large code structures. OOP puts the primary focus on data and data structures. The tenets of the OOP philosophy are more thoroughly explained by the **four pillars of object-oriented programming**: Abstraction, Encapsulation, Polymorphism, and Inheritance.

Briefly, abstraction is keeping complex logic wrapped up inside the class and only exposing what is necessary to use the logic. An analogy of abstraction is that most of us wouldn't be able to build a television from scratch yet we can still use it to watch a show. We don't need to understand all the mechanical complexities since we are given access to what is needed to operate the TV.

Encapsulation is ensuring that all the content needed to perform logic is inside the scope of that data structure. In the television analogy, the inner workings of the TV stay contained. The only inputs have been predefined for the user by the buttons on the television and remote control.

Polymorphism is the ability for data to take many shapes. Many object can be instantiated from the same class. Each object will have the instance variables defined in the class yet each object can have different values. Many televisions can be made using the same inner mechanisms yet have different sizes, brands, or colors.

The last pillar of OOP is inheritance. Inheritance allows classes to have relationships with each other. With inheritance, classes can share behaviors making code more efficient.

### Ruby Class Inheritance

There are often situations where multiple classes have a need for very similar attributes. In this situation we can extract those common attributes so they can be shared among other classes. Putting common behaviors into a shared class is creating a **superclass**.

A superclass can then pass information down to a **subclass** that will be able to access the data from the superclass. A superclass can have many subclasses. This relationship of passing data is called **inheritance**. Inheritance is defined with the syntax `<`.

### Superclass

We can create a superclass called `Dog` that will hold information shared between many kinds of dogs. The `Dog` class will have a name value defined on initialization.

```ruby
class Dog
  def initialize(name)
    @name = name
  end
end
```

### Creating a Subclass

Now we will create a subclass called `Pointer` that will have an relationship with the superclass `Dog`. `Pointer` will inherit from `Dog`. This allows the `Pointer` class to have more specific information while still having access to the content from `Dog`.

The `Pointer` class will have its own data created on initialization. It will also note which data it will collect from the `Dog` class. The data we want from the `Dog` class will be passed into the `initialize` method as well as a method called `super`. The **super** method calls the `initialize` method in the superclass.

```ruby
class Pointer < Dog
  def initialize(name, breed)
    super(name)
    @breed = breed
  end

  def get_info
    "#{@name} is a #{@breed}."
  end
end

my_dog = Pointer.new('Jax', 'German Shorthaired Pointer')
p my_dog.get_info
# output: 'Jax is a German Shorthaired Pointer.'
```

### How Super Works

The `initialize` method invokes `super` with an argument called `name`. As soon as the `super` method is invoked, Ruby sends a message to the `Dog` class looking for a method called `initialize`. Now, `Pointer` is essentially borrowing `Dog`'s initialize method to assign an instance variable of `@name` to `Pointer`. The argument/s you pass to the new instance of your subclass will be the exact same arguments passed to `super`.

Because of the way this code behaves, you may be tempted to say that the instance variables are also inherited. But that is not how Ruby works. In the above code, `Pointer` defines an initialize method that chains to the initialize method of its superclass. The chained method assigns values to the variable `@name` which makes those variables come into existence for a particular instance of `Pointer`.

The `super` method is used in the subclass. After invoking `super` the subclass will have access to the instance variables within that method. Instance variables are not inherited since instance variables are local to a specific instance of a class. Via `super`, you are allowed to _borrow_ instance variables from the parent.

### Additional Subclasses

The superclass `Dog` can pass information to as many subclasses as needed. Each subclass can create unique instance variables. We can use the `attr_accessor` helper method to create getter and setter methods for the instance variables that the class `Dachshund` has access to.

```ruby
class Dachshund < Dog
  attr_accessor :tricks, :name
  def initialize(name, tricks)
    super(name)
    @tricks = tricks
  end
end

baby = Dachshund.new('Baby', 'playing fetch')
p baby.tricks
# output: 'playing fetch'

baby.name = 'Baby Dog'
p baby.name
# output: 'Baby Dog'
```

### 🐟 Challenges: Animal Kingdom

Read all stories before starting the challenge.

- As a developer, I can make a generic Animal class.
- As a developer, upon initialization, I can give my Animal a status of `alive`, which will be set to true.
- As a developer, I can give my Animal an `age` of 0 upon initialization.
- As a developer, I can age my Animal up one year at a time.
- As a developer, I can return my Animal's `age`, as well as if they're `alive`.
  - **Hint**: Use `attr_accessor` as well as an `initialize` method.
- As a developer, I can create a Fish that inherits from Animal.
- As a developer, I can initialize all of my fish to be `cold_blooded`. (Yes, there is _one_ fish who is technically fully warm-blooded but we aren't going to talk about that.)
- As a developer, I can create a Salmon that inherits from Fish.
- As a developer, I can initialize my Salmon to be a specific species (Atlantic, Sockeye, etc).
- As a developer, I can see that my Salmon is cold-blooded.
- As a developer, I can age my Salmon up.
- As a developer, I can see a message that tells me all of my Salmon's information.
- As a developer, if my Salmon reaches the ripe old age of 4, I can make it die peacefully after a full and happy life.
  - **Hint**: You will need a method that changes the status of `alive` in the initialize method of Animal.
- As a developer, I can create a Mammal that inherits from Animal.
- As a developer, I can initialize all of my Mammals to be `warm_blooded`.
- As a developer, I can create a Bear that inherits from Mammal.
- As a developer, I can age my Bear up.
- As a developer, I can see a message that tells me all of my Bear's information.
- As a developer, if my Bear turns 20 years old, I can make it die peacefully after a full and happy life.
  - **Hint**: You will need a method that changes the status of `alive` in the initialize method of Animal.
- As a developer, I can create a Mammal of my choice.
- As a developer, I can interact with the new Mammal via various methods.
- As a developer, I can see a message that tells me all of my new Mammal's information.

### 🏔 Stretch Goals

- As a developer, I can keep a collection of two of each Animal.
  - **Hint**: You'll want to add your Animals into an array.
- As a developer, I can sort my collection of Animals based on age.
  - **Hint**: Find out how the spaceship operator can help you with an array.
- As a developer, I can utilize a Ruby `module` to help DRY up my code. I can create a `swim` method inside of my `module` that will apply to Animals who can _swim_. This method should return "I can swim!"
  - **Hint**: Look into module `mix ins`. Since not all animals can swim, only certain Animals will have access to this module.

---

[Back to Syllabus](../README.md#unit-four-ruby)
