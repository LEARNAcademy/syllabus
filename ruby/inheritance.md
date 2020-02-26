# INHERITANCE

## Class
Class can be an abstract concept when you first come across it. To start, **class definition** describes the structure and behavior of a set of objects. Objects, meaning instances of a class, are realizations of a class that can be interacted with and store data. Objects are independent of each other. For example, with a class definition, we have the blueprint for an Apple. Objects allow us to interact with those classes directly in our code. Below we will use the "blueprint" of an apple to create some apples.

<img src="https://i.ibb.co/TRdWxFp/download.jpg" alt="download" border="0">

We just utilized the "DNA" of an apple (Class Apple), to make three brand new, independent apples with different data stored in "color".

This style of programming is called object-oriented, even if the programming focuses on classes to some extent.

### Ruby Inheritance
Since inheritance is a relation between two classes, to create the relation we use `<`. This allows the new class to get the features of the higher up class, but now you can add specific features. For example:

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

## Class Relationships
Think about our example above. Pointer `"is_a"` Dog. Pointer and Dog have an inheritance relationship based on their shared features.

`Dog` is the superclass ("super"/bigger) because it encompasses `Pointer` and `Shepherd`. The superclass should contain methods and variables that would be useful for the classes that inherit from it. In this example, `Pointer` is further down the inheritance hierarchy.

Classes further down from the superclass have more features specific to what they are -- `Pointer` can have more specific features and characteristics than the broad umbrella `Dog` -- making them more specialized.

Inheritance means that classes inherit the external interface of the superclasses. Therefore, classes can access and use their superclass' methods. Remember, instance variables are specific to each new instance of a class. That means that instance variables are not inherited.

<img src="https://i.ibb.co/mNjcxpy/download.jpg" alt="download" border="0">


## has_many, belongs_to

There's specific terminology that exists when referring to the different relationships between objects. These terms will come into play more when we get into databases, etc. but it's valuable to make a habit of being aware of these realtionships. 

For example, take this class called `Artist`.

```RUBY
class Artist
  # initialize method ensures that every instance of "Artist" will have a name and an empty array for songs
  def initialize(name)
    @name = name
    @songs = []
  end

  def name
    # get method to expose @name to other objects
    @name
  end

  def add_songs(song)
    # method to add songs to @song array using shovel operator
    @songs << song
  end

  def songs
    #get method to expose @song array to other objects
    @songs
  end
end
```

The as you can see, `Artist` has the ability to hold some songs. Let's create a class called `Songs` as a blueprint for all other song objects.

```RUBY
class Song
  # initialize method to ensure all new instances of "Song" will have a title
  def initialize(title)
    @title = title
  end

  def title
    #get method to expose @title to other objects
    @title
  end
end
```

Now we can bring it all together:

```RUBY
# Create a new instance of Artist
britney = Artist.new("Britney Spears")

# Create some new instances of Song
song1 = Song.new("Baby One More Time")
song2 = Song.new("Sometimes")
song3 = Song.new("Toxic")

# Call the function "add_songs" from the "britney" instance of Artist. Pass in the new instances of Song we created above.
britney.add_songs(song1.name)
britney.add_songs(song2.name)
britney.add_songs(song3.name)

# display all of britney's songs
p britney.songs
#["Baby One More Time", "Sometimes", "Toxic"]
```

Congrats we've made some relationships between objects! In this example, `britney` **has_many** `songs`, and each song belongs_to `britney`. Objects don't always have_many, though. Think about Britney Spears' body guard in the early 2000's. Let's assume that person had to guard Britney full-time. That relationship would be `body_guard` **has_one** client.

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
