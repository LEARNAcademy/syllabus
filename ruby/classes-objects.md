# Ruby Objects, Classes, and Inheritance

#### Overview
In Ruby, everything belongs to a class. We can also create custom classes that hold data and behavior. Inheritance describes relationships between classes.

#### Learning Objectives
- can define instance variables
- can define getter methods and setter methods
- can define the initialize method
- can define what action the `.class` method performs
- can demonstrate the syntax to write a custom class
- can define attr_accessor
- can explain how to create a new object that requires arguments in the initialize method
- can define the syntax to create an inheritance relationships between two classes
- can explain the purpose of the super method
- can describe how to access parent class methods from within a child class instance
- can articulate that instance variables are not inherited from parent classes

#### Vocabulary
- instance variables
- getter methods
- setter methods
- initialize method
- Ruby classes
- Ruby inheritance
- super()

#### Process
- `cd` into the `ruby-challenges` repository
- Create a new branch: `classes-initials1-initials2` (ex. classes-aw-sp)
- `touch` a file with no spaces and `.rb` extension: `classes-student1-student2.rb` (ex. classes-austin-sarah.rb)
- Open the folder in a text editor
- Code!

---

#### Troubleshooting Tips
- In `irb` run the name of a Ruby class with `.methods` to see all the methods available to that class, e.g.) `String.methods`

### Ruby Classes
In Ruby, all values are objects and all objects belong to a class. The class defines what data and behavior exist in the object.

Note that this class concept is not (directly) related to JavaScript's class. A Ruby class is most similar in JavaScript to a prototype, but Ruby classes are a bit different.

You can find out the class of something by calling the .class method.

```ruby
> 1.class
# => Integer
> 1.0.class
# => Float
'hello'.class
# => String
```

### Custom Classes
Let's say you want to keep track of people. You would create a Person class (capitalized, and usually singular).

In a Ruby classes, we may want to expose the instance variables (the variables that are defined prefixed by @ symbol) to other classes. Don't worry too much about instance variables yet, we will cover them later in this lesson. Just think about an instance variable being locally scoped to the class it belongs to. Because of this, you will now want to write accessor methods (the `set` and `get` methods) in the class. The purpose of a `set` method is to *set* the value of an instance variable. The purpose of a `get` method is to *get* or *access* the value of an instance variable.

```ruby
class Person
  def set_name(name)
    @name = name
  end

  def get_name
    @name
  end
end

# Notice that the Person class is very re-usable and can be used for any name we want to pass it (no names are hard-coded in).

# Now you can create a new instance of the Person class with the .new method.
# This new instance will be called person_one
p person_one = Person.new
# => #<Person:0x00007fea6c8d55a0>

# Now you can set the name of the person by calling set_name and passing in an argument of 'Jon Snow'
person_one.set_name('Jon Snow')
```

Then you can call the method that contains the variable `@name`:

```ruby
p person_one.get_name
# => 'Jon Snow'
```

### Instance Variables
The variable starting with @ is an instance variable, meaning it belongs to the "instance" of a class (an object). The instance variable `@name` belongs to class Person. Each "instance" of the class `Person` has its own set of instance variables independent of other `Person` objects.

You can't just access an instance variable from outside of an object, as you can with variables in JavaScript. Think local scope.

```
p person_one.name
# => returns an error: undefined method `name' for #<Person:0x00007fc99f09d420 @name="Jon Snow"> (NoMethodError)
```

### Class Initialization
Finally, you will often want something to happen at the time an object is created. Perhaps it has a property that is an array, and you want to ensure that it always starts as an empty array.

The whole point of initialize is to allow you to create objects with arguments. If you give your class an initialize method, it will get executed immediately when an instance of the class is created. And *if* it takes any arguments, you'll be required to give those when creating an instance.

A class with an initialize method:

```ruby
class Jedi
  # Create in initialize method that gives all new instances of Jedi the title "Knight"
  def initialize
    @title = "Knight"
  end

  # Create a get method to be able to access the title of this instance of Jedi
  def title
    @title
  end
end

# Create a new instance of the class Jedi. Call it chosen_one
p chosen_one = Jedi.new
# => #<Jedi:0x00007fd704951ae0 @title="Knight">

# chosen_one is already initialized with the title of "Knight"
p chosen_one.title
# => "Knight"
```

Here's another example. By creating a new instance of the Fruit class, we immediately initialize an instance variable with an empty array called `@vitamins`, which can have elements pushed to it:

```ruby
class Fruit
  def initialize
    @vitamins = []
  end

  def vitamins
    @vitamins
  end
end

# New instance (object) of the class:
p apple = Fruit.new
# => #<Fruit:0x00007fc85b042fd8 @vitamins=[]>

p apple.vitamins        
# Returns an empty array

# Use the shovel operator to push values into the vitamin array
apple.vitamins << "C"
apple.vitamins << "D"
p apple.vitamins  
# returns an array with two items: ["C", "D"]
```

Now let's create a class that requires an argument:

```ruby
class SquareFoot
  def initialize(height, width)
    @height = height
    @width = width
  end
end

# Create a new instance of the class SquareFoot. Call it bedroom_wall
p bedroom_wall = SquareFoot.new

# bedroom_wall has an initialize method that requires some information, so you will get an error:
# `initialize': wrong number of arguments (given 0, expected 2) (ArgumentError)

# Let's properly create a new instance of SquareFoot by passing in some arguments
p bedroom_wall = SquareFoot.new(9, 12)
# => #<SquareFoot:0x00007f889b80d880 @height=9, @width=12>
```

Arguments passed to a class are not automatically held anywhere. In order to save the values of the arguments, you will need to put those values into instance varibles like we did above using `@height` and `@width`.

One more example. Again, there will be an error if the `.new` method does not have an argument.

```ruby
class Animal
  def initialize tude
    @attitude = tude
  end

  def attitude
    @attitude
  end
end

# New instance of the class without an argument, which gives error:
p kitten = Animal.new
# `initialize': wrong number of arguments (given 0, expected 1) (ArgumentError)

p kitten = Animal.new('sweet')
# => #<Animal:0x00007f82ed095a98 @attitude="sweet">
p kitten.attitude
# => "sweet"
```

### attr_accessor
So far, we have used **setter methods** to _set_ or _assign_ values in a class, as well as **getter methods** to then _get_ or _retrieve_ those values. But there's a shortcut we can use!

In Ruby, `attr_accessor` automatically sets up getters and setters for instance variables. Using `attr_accessor` allows us to _set_ and _get_ values from outside of the class.

```ruby
class FoodOrder
  # At the top of this class, we utilize attr_accessor to identify which instance variable we will want to access. We refer to the instance variable's name using a symbol :order.
  attr_accessor :order

  def initialize(order)
    @order = order
  end
end

# We can now refer to the order instance variable directly from outside of the class (get).
lunch = FoodOrder.new("Sandwich")
p lunch.order
# => "Sandwich"

# We can also reassign this instance variable from outside of the class (set).
lunch.order = "Salad"
p lunch.order
# => "Salad"
```

To access multiple instance variable values, add commas between each proceeding symbol.

```ruby
class FoodOrder
  attr_accessor :item1, :item2, :item3

  def initialize(item1, item2, item3)
    @item1 = item1
    @item2 = item2
    @item3 = item3
  end
end

lunch = FoodOrder.new("Sandwich", "Fruit", "La Croix")
p lunch.item3
# => "La Croix"

lunch.item3 = "Coke"
p lunch.item3
# => "Coke"
```

There are other options as well including `attr_reader` and `attr_writer`.

- `attr_reader` will only allow you to _get_ a value.
- `attr_writer` will only allow you to _set_ a value.
- `attr_accessor` allows you to do both.

### Object Oriented Programming in Ruby
We've been talking throughout this class about how everything in Ruby is an object, but it can be difficult to visualize what that means when it comes to building a program. Let's take a moment with your Car challenge to take apart how Ruby's object-oriented behavior actually impacts you as a programmer.

Again, every object in Ruby belongs to a class, meaning each object is an _instance_ of class. Once you know what class the object belongs to (by using the `.class` method), it is a good next step to Google the name of the Ruby class and investigate all the methods available to that class.

Classes are made up of Nouns (data) and Verbs (methods). Take a look at a Vehicle class. It probably looks like a list of class attributes, followed by a list of methods. The class attributes -- things like `@year`, `@make`, and `@model` -- are what your object is composed of. The methods you've written are things you can do with Vehicle and its attributes: for example, print the Vehicle information or create a new vehicle. All Ruby classes have this structure.

```ruby
class Vehicle
  def initialize(year, make, model)
    @year = year
    @make = make
    @model = model
  end

  def show_vehicle_info
    "This is a #{@year} #{@make} #{@model}."
  end
end
```

### Ruby Class Inheritance
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
    "#{@name} is a #{@breed}."  
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

The `super()` method is used in the child class. It calls the method of the *same name* in the parent class. After invoking `super()`, the child class will have access to the instance variables within that method. Instance variables are not inherited since instance variables are local to a specific instance of a class. Via `super()`, you are allowed to _borrow_ instance variables from the parent.

### Challenges

#### For the following Task challenge, use initialize and getter methods in your class

- As a developer, I can create a class called Task.
- As a developer, I can create three instances (objects) of class Task. (e.g laundry = Task.new)
- As a developer, I can initialize each instance of class Task with a title.
- As a developer, I can see the title of each instance of class Task.
- As a developer, I can initialize each instance of class Task with a status that has a default value of 'incomplete'.
- As a developer, I can update the status of each instance of class Task when the task has been completed.

#### For the following ColorPalette challenge use initialize and `attr_accessor` methods in your class
- As a developer, I can create a class called ColorPalette.
- As a developer, I can create three instances (objects) of class ColorPalette. (e.g green = ColorPalette.new)
- As a developer, I can initialize each inistance of the class ColorPalette with three colors. (e.g. green = ColorPalette.new('Chartreuse', 'Kelly', 'Seafoam'))
- As a developer, I can print the value of each individual color.
- As a developer, I can create a method called `all_colors` that when called will print a sentence telling me the three colors of a given palette.
- As a developer, I can change one or more colors of a given palette.

#### Animal Kingdom
- As a developer, I can make an Animal (generic Animal class).
- As a developer, upon initialization, I can give my Animal a status of `alive`, which will be set to true.
- As a developer, I can give my Animal an `age` of 0 upon creation.
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
- **STRETCH:** As a developer, I can keep a collection of two of each Animal.
  - **Hint**:	You'll want to add your Animals into an array.
- **STRETCH:** As a developer, I can sort my collection of Animals based on age.
  - **Hint**: Find out how the spaceship operator can help you with an array.
- **SUPER STRETCH:** As a developer, I can utilize a Ruby `module` to help DRY up my code. I can create a `swim` method inside of my `module` that will apply to Animals who can _swim_. This method should return "I can swim!"  
  - **Hint**: Look into module `mix ins`. Since not all animals can swim, only certain Animals will have access to this module.

---
[Back to Syllabus](../README.md#unit-four-ruby)
