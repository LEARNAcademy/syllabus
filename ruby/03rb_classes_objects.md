# RUBY CLASSES

In Ruby, all values are objects. Anything you have any way of referring to is an object.

All objects in Ruby belong to a class. The class defines what it means to be that kind of "thing," which is to say what data and behavior are defined in the object.

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

The nice thing about Ruby's OOP (Object Oriented Programming) capabilities is that they're deep, subtle and powerful and you can spend a lot of time getting really good at OOP and being able to do many amazing things. Yet for most purposes, you can stick to simple OOP features and get nearly anything done that you might want.

### Making Your Own Class
Let's say you want to keep track of people. You would create a Person class (capitalized, and usually singular). This can be created in IRB.

```RUBY
class Person
  def set_given_name(name)
    @given_name = name
  end

  def get_given_name
    @given_name
  end

end
# Then you can create a new instance of the Person class. You create a new instance of a class with the .new method.

a_person = Person.new
a_person.set_given_name('Bilbo')
```

Then you can call the method that contains the variable given_name:

```RUBY
a_person.get_given_name
# 'Bilbo'
```

### Instance Variables
The variable starting with @ is an instance variable, meaning it belongs to the "instance" of a class (an object). The instance variable @given_name belongs to class Person. Each "instance" of the class `Person` has it's own set of instance variables independent of other `Person` objects.

You can't just access an instance variable from outside of an object, as you can with variables in JavaScript.

```RUBY
irb(main):> a_person.given_name
# returns an error
NoMethodError (undefined method 'given_name' for #<Person:0x00007f812a1408b8 @given_name="Bilbo">)
```

This is why we have written accessor methods - the `get` and `set` methods in the class. Remember, Ruby methods return the value of whatever they last did, which is how the `get` methods work.

### Simplifying the Methods
To keep things simple, here is the accessor methods in a much more cumbersome way than you would normally do it in Ruby. First, it would clearly be nicer to be able to set a variable value using syntax similar to JavaScript:

```RUBY
a_person.given_name = 'Bilbo'
```

And in fact we can do that. Without restarting your irb, enter this:

```RUBY
class Person
  def given_name=(name)
    @given_name = name
  end

  def given_name
    @given_name
  end
end
# This lets you write a_person.given_name='Baggins', which is interpreted as aPerson.given_name=("Baggins")
```

For example:

```RUBY
>  a_person.given_name = 'Bracegirdle'
>  a_person.given_name
# 'Bracegirdle'
```

### Initialization
Finally, you will often want to do something at the time an object is created. Perhaps it has a property that is an array, and you want to ensure that it always starts as an empty array.

If you give your class an initialize method, it will get executed immediately when an instance of the class is created. And if it takes any arguments, you'll be required to give those when creating an instance.

A class with an initialize method:

```RUBY
class Jedi

  def initialize
    @title = "Knight"
  end

  def title
    @title
  end
end

> chosen_one = Jedi.new
# #<Jedi:0x007fb532a24d30 @title="Knight">
> chosen_one.title
# "Knight"
```

Creating a new instance of the Fruit class, which immediately initializes an instance variable with an empty array, which can than have elements pushed to it:

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
apple.vitamins << "C"
apple.vitamins << "D"
apple.vitamins  
# returns an array with two items: ["C", "D"]
```

One more example, but this one is looking for an argument to be passed when the object is initialized. There will be an error if the `.new` method does not have an argument.

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

[Go to Ruby Inheritance](./04rb_inheritance.md)

[Back to Syllabus](../README.md)
