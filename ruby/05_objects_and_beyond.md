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
