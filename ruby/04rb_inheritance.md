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

### Classes have Relationships
In your Car challenge, you have at minimum a Vehicle class and a Car class. There can be as many Cars as you want to make, and they will share a lot of the same attributes as Vehicle. Any time you identify this kind of relationship forming, whether it's one to many or one to one, it's a strong indication that there should be inheritance between the two classes. This will allow you to share methods across related classes.

### Objects are Interrelated
Creating a program in Ruby is a little bit like playing Jenga; all the bits and pieces rely on each other to stand up, and removing the wrong piece can wreak havoc. Because of their relationships, objects impact each other and you have to remember those relationships as you're writing your code. Take the example of the Vitamin class from this morning's presentation. Vitamin and Apple have a many to many relationship. There can be as many Apples with Vitamins as you want to create, and you can create them using the method you already wrote for creating items in the Fruit class, which is pretty cool. But what happens when you write a method in the Fruit class to grab all Fruit with Vitamins, and it grabs an instance of the Fruit class that doesn't inherit from Vitamin? You'll get an error. One solution to this is creating a separate array for storing items with Vitamins in Fruit, so the two types don't clash. Remembering how your objects impact each other is very important when writing applications in Ruby.

## has-a, has-many
Aggregation/composition/contains, has-a (uses): one class uses another class
Has-a: singular; have-many: plural, implying a collection (for instance, array).
Classes are related through storage or operation, but not more/less.

<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/26/original_has-a.png?1469057861"/>
<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/27/original_has-many.png?1469057876"/>



Objects, meaning instances of a class, are realizations of a class that can be interacted with and store data. Objects are independent of each other. With a class definition, we have the blueprint for what a Fruit class or an Apple class is and can do. Objects allow us to interact with those classes directly in our code; it's the difference between reading about an apple and being handed one.

This style of programming is called object oriented, even if the programming to some extent focuses on classes.

### Ruby Inheritance
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

[Back to Syllabus](../README.md)
