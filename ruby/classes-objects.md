# Ruby Objects and Classes

#### Overview

Ruby is an object-oriented programming language in which everything is defined by a class. We can use the classes that Ruby defines to create objects that can be manipulated to perform logic. We can also create custom classes that hold data and behavior. These custom classes allow for the creation of customized reusable code.

#### Previous Lecture (1 hour 23 min)

[![YouTube](http://img.youtube.com/vi/GbjwKLHCZ9M/0.jpg)](https://youtu.be/GbjwKLHCZ9M)

#### Learning Objectives

- can define what action `.class` method performs
- can demonstrate the syntax to write a custom class
- can define instance variables
- can define getter methods and setter methods
- can define the initialize method
- can explain how to create a new object that requires arguments in the initialize method
- can define attr_accessor

#### Vocabulary

- Ruby classes
- PascalCase
- instantiation
- instance variables
- getter method
- setter method
- initialize method
- helper methods

#### Additional Resources

- [attr_accessor](https://www.rubyguides.com/2018/11/attr_accessor/)

#### Process

- `cd` into the `ruby-challenges` repository
- Create a new branch: `classes-initials1-initials2` (ex. classes-aw-sp)
- `touch` a file with no spaces and `.rb` extension: `classes-student1-student2.rb` (ex. classes-austin-sarah.rb)
- Open the folder in a text editor
- Code!

#### Troubleshooting Tips

- Are you printing your desired outcome?
- What is the error message telling you?

---

### Ruby Classes

In Ruby, all values are objects and all objects belong to a class. **Ruby classes** are the blueprint, or template, from which objects are created. Classes define the type of data and what behavior can be applied to the object.

Note that this class concept is not (directly) related to JavaScript's class. Ruby classes are a bit different.

You can find out the class of anything in Ruby by calling the `.class` method.

```ruby
1.class
# output: Integer

1.0.class
# output: Float

'hello'.class
# output: String
```

### Custom Classes

Custom classes allow developers to create reusable code. Class names are written in the **PascalCase** naming convention in which the first letter is capitalized along with the first letter of each additional word. Classes are typically singular.

Classes are defined by the keyword `class` and use the keyword `end` to define their scope. Classes must be instantiated. Class **instantiation** is creating an object from the class. Each object created from the class is a unique instance. To instantiate a class, we can use the `.new` method. This will return a unique instance of the class which represented by a number hash. It is common to store this value in a variable.

```ruby
class Person
end

p Person.new
# output: #<Person:0x000000013400d8d8>

mickey = Person.new
p mickey
# output: #<Person:0x000000015498b188>
```

### Instance Variables

Once a class has been instantiated, it's time to create data. Class data is stored in special variables that belong to the class called **instance variables** denoted with an `@` symbol. Each instance of the class will have the same instance variables but the values can be unique to the object.

Instance variables are locally scoped which means they are only available inside the scope of the object.

### Getters and Setters

Data in a class should be accessible and updatable. These actions are known as getter and setter methods. The **getter method** returns the value of the data. The **setter method** allows the data to be updated.

The `name` value can only be accessed through the getter method called `get_name` and can only be modified through the setter method called `set_name`. Attempting to call the `name` value directly will result in an error.

```ruby
class Person

  # setter method
  def set_name(name)
    @name = name
  end

  # getter method
  def get_name
    @name
  end

end

mickey = Person.new

# setting the value
mickey.set_name('Mickey')

# getting the value
p mickey.get_name
# output: 'Mickey'

p mickey.name
# output: returns an error: undefined method name for #<Person:0x0000000122092950 @name="Mickey"> (NoMethodError)
```

### Class Initialization

The `Person` class is set to create as many objects as we need in our program. Each object can be set with a unique name and the name can be returned with the get method. This works well, but there is a point when a new person object exists but doesn't yet have a name value. If we want every person have a name immediately on instantiation, we can refactor the code to be more efficient.

The refactor of our code will be adding an initialize method. An **initialize method** is a special Ruby class method that will run every time the `.new` method is called. That means every time we instantiate a class the initialize method will execute. It is very useful for setting data in our newly created objects.

Putting a parameter in the initialize method will allow us to create unique names for each of our people. Since the initialize method runs when `.new` is called, we can pass an argument to `.new`.

The getter and setter methods still work as before to retrieve the value and update the value as needed.

```ruby
class Person

  def initialize(name)
    @name = name
  end

  # setter method
  def set_name(name)
    @name = name
  end

  # getter method
  def get_name
    @name
  end

end

mickey = Person.new('Mickey')
p mickey
# output: #<Person:0x0000000129896528 @name="Mickey">

# setting the value
mickey.set_name('Mickey Mouse')

# getting the value
p mickey.get_name
# output: 'Mickey Mouse'
```

Calling `.new` without an argument will result in an error.

```ruby
class Person

  def initialize(name)
    @name = name
  end

  # setter method
  def set_name(name)
    @name = name
  end

  # getter method
  def get_name
    @name
  end

end

mickey = Person.new('Mickey')
p mickey
# output: #<Person:0x0000000129896528 @name="Mickey">

minnie = Person.new
# output: returns an error: wrong number of arguments (given 0, expected 1) (ArgumentError)
```

### Adding Additional Data

Now that our `Person` class is working effectively, it is time to add more data. We will add an age attribute to the `Person` class. The age variable will start at 0 and we will need our setter method to increment that value. Since we have decided to start age at 0 for every instance of class `Person` we don't need to pass the value as an argument. It can be hard coded. Then we will add the appropriate corresponding getter and setter methods.

```ruby
class Person

  def initialize(name)
    @name = name
    @age = 0
  end

  # setter method
  def set_name(name)
    @name = name
  end

  # getter method
  def get_name
    @name
  end

  # setter method
  def happy_birthday
    @age += 1
  end

  # getter method
  def get_age
    @age
  end

end

mickey = Person.new('Mickey')
p mickey
# output: #<Person:0x000000015998a238 @name="Mickey", @age=0>

minnie = Person.new('Minnie')
p minnie
# output: #<Person:0x000000015998a030 @name="Minnie", @age=0>
```

We can now call the age setter method to increase the age value. Every time we call the `happy_birthday` method the age value increases by one. Calling the `get_age` method will return the current age.

```ruby
class Person

  def initialize(name)
    @name = name
    @age = 0
  end

  # setter method
  def set_name(name)
    @name = name
  end

  # getter method
  def get_name
    @name
  end

  # setter method
  def happy_birthday
    @age += 1
  end

  # getter method
  def get_age
    @age
  end

end

mickey = Person.new('Mickey')
p mickey
# output: #<Person:0x000000015998a238 @name="Mickey", @age=0>

mickey.happy_birthday
mickey.happy_birthday

p mickey.get_age
# output: 2

minnie = Person.new('Minnie')
p minnie
# output: #<Person:0x000000015998a030 @name="Minnie", @age=0>

minnie.happy_birthday

p minnie.get_age
# output: 1
```

We can get all the information about the object through individual getter methods. However this isn't great user experience. By adding one more method, we can use string interpolation to get a nice clean output.

```ruby
class Person

  def initialize(name)
    @name = name
    @age = 0
  end

  # setter method
  def set_name(name)
    @name = name
  end

  # getter method
  def get_name
    @name
  end

  def happy_birthday
    @age += 1
  end

  # getter method
  def get_age
    @age
  end

  def get_info
    "#{@name} is #{@age} years old."
  end

end

mickey = Person.new('Mickey')

mickey.happy_birthday
mickey.happy_birthday

p mickey.get_info
# output: 'Mickey is 2 years old.'
```

### attr_accessor

Our class is working well. We can set data on initialization, update data, and retrieve data. However, as we add more data to the class we will have to add more getter and setter methods. This can make our class very lengthy. Luckily, Ruby offers us some convenient shortcuts.

The Ruby programming language always has developer happiness at its core. To make programming more pleasant to code, Ruby has many methods and operators making common tasks more manageable. The method `attr_accessor` is a Ruby helper method. Ruby **helper methods** are utility methods that make routine actions more efficient. The `attr_accessor` method takes one or more symbols as arguments and returns a getter and setter method for that symbol. Symbols are unique identifiers that represent an instance variable. While we still need our unique `happy_birthday` setter method and our `get_info` getter method, all others can be removed as the actions have been replaced my the `attr_accessor`.

```ruby
class Person

  attr_accessor :name, :age

  def initialize(name)
    @name = name
    @age = 0
  end

  def happy_birthday
    @age += 1
  end

  def get_info
    "#{@name} is #{@age} years old."
  end

end

mickey = Person.new('Mickey')
p mickey.get_info
# output: 'Mickey is 0 years old.'

mickey.name = 'Micky Mouse'
p mickey.get_info
# output: 'Micky Mouse is 0 years old.'

p mickey.name
# output: 'Micky Mouse'

mickey.happy_birthday
mickey.happy_birthday

p mickey.age
# output: 2

p mickey.get_info
# output: 'Micky Mouse is 2 years old.'
```

There are additional Ruby helper methods that can be used based on your needs as a developer.

- `attr_reader` will create only getter methods.
- `attr_writer` will create only setter methods.
- `attr_accessor` allows you to create both getter and setter methods.

---

### ❤️ Challenges

**For the following Task challenge use initialize, setter, and getter methods for your class.**

- As a developer, I can create a class called Task.
- As a developer, I can create three instances (objects) of class Task.
  e.g `laundry = Task.new`
- As a developer, I can initialize each instance of class Task with a title.
- As a developer, I can see the title of each instance of class Task.
- As a developer, I can initialize each instance of class Task with a status that has a default value of 'incomplete'.
- As a developer, I can update the status of each instance of class Task when the task has been completed.

**For the following ColorPalette challenge use initialize and `attr_accessor` methods in your class.**

- As a developer, I can create a class called ColorPalette.
- As a developer, I can create three instances (objects) of class ColorPalette.
  - e.g `green = ColorPalette.new`
- As a developer, I can initialize each instance of the class ColorPalette with three colors.
  - e.g. `green = ColorPalette.new('Chartreuse', 'Kelly', 'Seafoam')`
- As a developer, I can print the value of each individual color.
- As a developer, I can create a method called `all_colors` that when called will print a sentence telling me the three colors of a given palette.
- As a developer, I can change one or more colors of a given palette.

---

[Back to Syllabus](../README.md#unit-four-ruby)
