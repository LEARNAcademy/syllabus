# RUBY CLASSES

In Ruby, all values are objects and all objects belong to a class. The class defines what data and behavior are defined in the object.

Note that this class concept is not (directly) related to JavaScript's class. A Ruby class is most similar in JavaScript to a prototype, but Ruby classes are a bit different.

You can find out the class of something by calling the .class method.

```RUBY
> 1.class
# Fixnum
> 1.0.class
# Float
'hello'.class
# String
```

### Making Your Own Class
Let's say you want to keep track of people. You would create a Person class (capitalized, and usually singular). 

In a Ruby classes, we may want to expose the instance variables (the variables that are defined prefixed by @ symbol) to other classes. Don't worry too much about instance variables yet, we will cover them later in this lesson. Just think about an instance varible being locally scoped to the class it belongs to. Becuase of this, you will now want to write accessor methods (the `set` and `get` methods) in the class. The purpose of a `set` method is to _set_ the value of an instance variable. The purpose of a `get` method is to _get_ or _access_ the value of an instance variable.

```RUBY
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
person_one = Person.new
# Now you can set the name of the person by calling set_name and passing in an argument of 'Jon Snow'
person_one.set_name('Jon Snow')
```

Then you can call the method that contains the variable `@name`:

```RUBY
person_one.get_name
# 'Jon Snow'
```

### Instance Variables
The variable starting with @ is an instance variable, meaning it belongs to the "instance" of a class (an object). The instance variable @name belongs to class Person. Each "instance" of the class `Person` has it's own set of instance variables independent of other `Person` objects.

You can't just access an instance variable from outside of an object, as you can with variables in JavaScript. Think local scope.

```RUBY
irb(main):> person_one.name
# returns an error
NoMethodError (undefined method 'name' for #<Person:0x00007f812a1408b8 @name="Jon Snow">)
```

### Initialization
Finally, you will often want something to happen at the time an object is created. Perhaps it has a property that is an array, and you want to ensure that it always starts as an empty array.

The whole point of initialize is to allow you to create objects with arguments. If you give your class an initialize method, it will get executed immediately when an instance of the class is created. And _if_ it takes any arguments, you'll be required to give those when creating an instance.

A class with an initialize method:

```RUBY
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
> chosen_one = Jedi.new
# #<Jedi:0x007fb532a24d30 @title="Knight">
# chosen_one is already initialized with the title of "Knight"
> chosen_one.title
# "Knight"
```

Here's another example. By creating a new instance of the Fruit class, we immediately initialize an instance variable with an empty array called `@vitamins`, which can have elements pushed to it:

```RUBY
class Fruit

  def initialize
    @vitamins = []
  end

  def vitamins
    @vitamins
  end
  
end

# New instance (object) of the class:
apple = Fruit.new
#<Fruit:0x007fb532acc120 @vitamins=[]>

apple.vitamins        
# Returns an empty array

# Use the shovel operator to push values into the vitamin array
apple.vitamins << "C"
apple.vitamins << "D"
apple.vitamins  
# returns an array with two items: ["C", "D"]
```

Now let's create a class that requires an argument:

```RUBY
class SquareFoot

  def initialize(height, width)
    @height = height
    @width = width
  end
  
end

# Create a new instance of the class SquareFoot. Call it bedroom_wall
> bedroom_wall = SquareFoot.new

# bedroom_wall has an initialize method that requires some information, so you will get an error:
# ArgumentError (wrong number of arguments (given 0, expected 2))

# Let's properly create a new instance of SquareFoot by passing in some arguments
> bedroom_wall = SquareFoot.new(9, 12)
> bedroom_wall.height
# '9'
```

Arguments passed to a class are not automatically held anywhere. In order to save the values of the arguments, you will need to put those values into instance varibles like we did above using `@height` and `@width`.

One more example. Again, there will be an error if the `.new` method does not have an argument.

```RUBY
class Animal

  def initialize tude
    @attitude = tude
  end

  def attitude
    @attitude
  end
end

# New instance of the class without an argument, which gives error:
kitten = Animal.new
# ArgumentError (wrong number of arguments (given 0, expected 1))

> kitten = Animal.new :sweet
# #<Baz:0x007fb5331de210 @attitude=:sweet>
> kitten.attitude
# :sweet
> kitten = Animal.new 'sweet'
# #<Baz:0x007fb5331de210 @attitude="sweet">
> kitten.attitude
# "sweet"
```

## OBJECT ORIENTED PROGRAMMING IN RUBY
We've been talking throughout this class about how everything in Ruby is an object, but it can be difficult to visualize what that means when it comes to building a program. Let's take a moment with your Car challenge to take apart how Ruby's object-oriented behavior actually impacts you as a programmer.

**Given Classes**

Every object in Ruby belongs to a class. Another way of saying: each object is an instance of class. To find out what class an object is a part of you can call `.class` on any object and it will tell you. Once you know what class the object belongs to it is easy to Google that Ruby class and see all the methods of the class. **OR** use the Ruby method `.methods` in irb to generate a list of all the methods available to that class.

```RUBY
hello.class
1.class
1.0.class
true.class
Class.class
```

Classes are made up of Nouns (data) and Verbs (methods). Take a look at your Vehicle class. It probably looks like a list of class attributes, followed by a list of methods. The class attributes -- things like @wheels and @model_year -- are what make your object what it is: the class Vehicle (also a noun). The methods you've written are things you can do with Vehicle and its attributes: for example, print the Vehicle information or create a new vehicle. All Ruby classes have this structure.


## Challenge: Tasklist

### User Stories

**Story:**	As a developer, I can create a Task.
**Story:**	As a developer, I can give a Task a title and retrieve it.
**Story:**	As a developer, I can give a Task a description and retrieve it.
**Story:**	As a developer, I can mark a Task done.
**Story:**	As a developer, when I print a Task that is done, its status is shown.




[Go to next lesson: Ruby Inheritance](./inheritance.md)

[Back to Ruby Hashes](./hashes.md)

[Back to Syllabus](../README.md)
