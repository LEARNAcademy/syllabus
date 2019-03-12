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


## has-a, has-many
Aggregation/composition/contains, has-a (uses): one class uses another class
Has-a: singular; have-many: plural, implying a collection (for instance, array).
Classes are related through storage or operation, but not more/less.

<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/26/original_has-a.png?1469057861"/>
<img src="http://s3.amazonaws.com/learn-site/app/public/redactor_rails/pictures/27/original_has-many.png?1469057876"/>



Objects, meaning instances of a class, are realizations of a class that can be interacted with and store data. Objects are independent of each other. With a class definition, we have the blueprint for what a Fruit class or an Apple class is and can do. Objects allow us to interact with those classes directly in our code; it's the difference between reading about an apple and being handed one.

This style of programming is called object oriented, even if the programming to some extent focuses on classes.

## Ruby Inheritance <
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

