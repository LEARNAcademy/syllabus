# OBJECT ORIENTED PROGRAMMING IN RUBY
We've been talking throughout this class about how everything in Ruby is an object, but it can be difficult to visualize what that means when it comes to building a program. Let's take a moment with your Car challenge to take apart how Ruby's object-oriented behavior actually impacts you as a programmer.


**Given Classes**

We've established everything in Ruby is an object; and just like real world objects you can make them do something; "." means calling a method on (doing something to) an object.

Examples:

```RUBY
hello.length
hello.upcase
```

Every object in Ruby belongs to a class: (another way of saying: each object is an instance of class). To find out what class an object is a part of you can call .class on any object and it will tell you. Once you know it is easy to Google the class of Ruby and see the methods/capabilities of the class.

```RUBY
hello.class
1.class
1.0.class
true.class
Class.class
```

Do this for yourself to see the Ruby documentation:
Google: Ruby String class
Google: Ruby Fixnum class

Be sure to select the documentation for the version of Ruby you have installed (to find out use: ruby --version).

Classes are made up of Nouns and Verbs
Take a look at your Vehicle class. It probably looks like a list of class attributes, followed by a list of methods. The class attributes -- things like @wheels and @model_year -- are what make your object what it is: the class Vehicle (also a noun). The methods you've written are things you can do with Vehicle and its attributes: for example, print the Vehicle information or create a new vehicle. All Ruby classes have this structure.

Classes have Relationships
In your Car challenge, you have at minimum a Vehicle class and a Car class. There can be as many Cars as you want to make, and they will share a lot of the same attributes as Vehicle. Any time you identify this kind of relationship forming, whether it's one to many or one to one, it's a strong indication that there should be inheritance between the two classes. This will allow you to share methods across related classes.

Objects are Interrelated
Creating a program in Ruby is a little bit like playing Jenga; all the bits and pieces rely on each other to stand up, and removing the wrong piece can wreak havoc. Because of their relationships, objects impact each other and you have to remember those relationships as you're writing your code. Take the example of the Vitamin class from this morning's presentation. Vitamin and Apple have a many to many relationship. There can be as many Apples with Vitamins as you want to create, and you can create them using the method you already wrote for creating items in the Fruit class, which is pretty cool. But what happens when you write a method in the Fruit class to grab all Fruit with Vitamins, and it grabs an instance of the Fruit class that doesn't inherit from Vitamin? You'll get an error. One solution to this is creating a separate array for storing items with Vitamins in Fruit, so the two types don't clash. Remembering how your objects impact each other is very important when writing applications in Ruby.


RUBY CLASS
In Ruby, all values are objects. Anything you have any way of referring to is an object.

All objects in Ruby belong to a class. The class defines what it means to be that kind of thing, which is to say what the thing does.

Note that this class concept is not (directly) related to JavaScript's class. A Ruby class is most similar in JavaScript to a prototype, but Ruby classes are a bit different.

You can find out the class of something by calling its .class method.

```RUBY
> 1.class
=> Fixnum
> 1.0.class
=> Float
'hello'.class
=> String
```

The nice thing about Ruby's OOP capabilities is that they're deep and subtle and powerful and you can spend a lot of time getting really good at OOP and being able to do many amazing things. Yet for most purposes, you can stick to simple OOP features and get nearly anything done that you might want.

Making Your Own Class
Let's say you want to keep track of people. You would create a Person class (capitalized, and usually singular). This can be created in IRB.

```RUBY
class Person
  def set_given_name(name)
    @given_name = name
  end

  def get_given_name()
    @given_name
  end

end
Then you can create a new instance of the Person class. You create a new instance of a class with .new.

a_person = Person.new()
a_person.set_given_name('Bilbo')
```

Then you can call the methods that have stored the names:

```RUBY
a_person.get_given_name()
=> 'Bilbo'
```

Instance Variables
The variable starting with @ is an instance variable, meaning it belongs to the instance of Person.
And each instance of Person has it's own set of instance variables independent of other Persons.

You can't just access an instance variable from outside of an object, as you can in JavaScript.

```RUBY
> a_person.given_name
NoMethodError: undefined method `given_name` for #<Person:0x007fec7287d9b0>
> p.@given_name
SyntaxError: (irb):60: syntax error, unexpected tIVAR, expecting '('
```

This is why we have written accessor methods - the get... and set... methods in my class. And remember that Ruby methods return the value of whatever they last did, which is how my get... methods work.

Simplifying the Methods
To keep things simple, I've written the accessor methods in a much more cumbersome way than you would normally do it in Ruby. First, it would clearly be nicer to be able to set a variable value using the same sort of syntax we would use in JavaScript:

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
This lets you write a_person.given_name = 'Baggins', which is interpreted as aPerson.given_name=("Baggins")
```

For example:

```RUBY
>  a_person.given_name = 'Bracegirdle'
>  a_person.given_name
=> 'Bracegirdle'
```

Initialization
Finally, you will often want to do something at the time an object is created. Perhaps it has a property that is an array, and you want to ensure that it always starts as an empty array.

If you give your class an initialize method, it will get executed immediately when an instance of the class is created. And if it takes any arguments, you'll be required to give those when creating an instance.

class with initialize:

```RUBY
class Jedi

  def initialize
    @title = "Knight"
  end

  def title
    @title
  end
end
```

Creating a new instance of the Jedi class, which immediately initializes an instance variable with an empty array, which can than have elements pushed to it:

```RUBY
> chosen_one = Jedi.new
=> #<Jedi:0x007fb532a24d30 @title="Knight">
> chosen_one.title
=> "Knight"
```

Another example with initialize for a one-to-many/has-many relationship:

```RUBY
class Fruit

  def initialize
    @vitamins = []
  end

  def vitamins
    @vitamins
  end
end
New instance of the class:

generic_fruit = Fruit.new
=> #<Fruit:0x007fb532acc120 @vitamins=[]>
generic_fruit.vitamins => []            # No vitamins
generic_fruit.vitamins << "C"
generic_fruit.vitamins << "D"
generic_fruit.vitamins => ["C", "D"]
```

One more Example, but this one is looking for an argument to be passed into it when it is initialized. So it gives an error of wrong number of arguments if one is not passed in.

```RUBY
class Animal

  def initialize att
    @attitude = att
  end

  def attitude
    @attitude
  end
end
New instance of the class, which gives error.

> kitten = Animal.new
ArgumentError: wrong number of arguments (0 for 1)
from (irb):77:in `initialize'
from (irb):81:in `new'
Correct instance of the class, with passing in 1 argument.

> kitten = Animal.new :sweet
=> #<Baz:0x007fb5331de210 @attitude=:sweet>
> kitten.attitude
=> :sweet
```

[Go to Ruby Inheritance](./04rb_inheritance.md)


[Back to Ruby Conditions, Methods, Loops, and Hashes](./02rb_cond_methods_loops_hashes.md)
