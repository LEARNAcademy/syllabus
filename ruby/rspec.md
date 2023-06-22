# Ruby Testing with RSpec

#### Overview

Testing is the process of creating automated quality assurance for code. RSpec is a unit test framework used to describe the behavior of objects in the Ruby programming language.

#### Previous Lecture (1 hour 18 min)

[![YouTube](http://img.youtube.com/vi/rkAziyxCCQs/0.jpg)](https://www.youtube.com/watch?v=rkAziyxCCQs)

#### Learning Objectives

- can define behavior driven development
- can define RSpec
- can define gem
- can explain the purpose of the describe, it, and expect statements in a test block
- can write an RSpec test

#### Vocabulary

- behavior driven development (BDD)
- gem
- RubyGems
- RSpec
- specs
- domaine specific language

#### Additional Resources

- [Better Specs](http://betterspecs.org)
- [Ruby for Newbies](http://net.tutsplus.com/tutorials/ruby/ruby-for-newbies-testing-with-rspec/)
- [RSpec Cheat Sheet](https://cheatography.com/dwapi/cheat-sheets/rspec-examples-with-factory-girl)
- [YouTube Video about TDD vs BDD](https://www.youtube.com/embed/fsSMuqIpu_c?ecver=2)
- [Uncle Bob on TDS](https://www.youtube.com/embed/GvAzrC6-spQ?ecver=2)

#### Process

- `cd` into the `ruby-challenges` repository
- Create a new branch: `rspec-initials1-initials2` (ex. rspec-aw-sp)
- Create a new directory `mkdir` rspec-student1-student2 (ex. rspec-austin-sarah)
- `cd` into the directory you just created
- `touch` a file called: `rspec.rb`
- `touch` a file called: `rspec_spec.rb`
- Add the dependencies by running $ `gem install rspec` in the terminal
- Open the RSpec folder in a text editor
- Code!

#### Useful Commands

- $ `gem install rspec`
- $ `rspec rspec_spec.rb`

---

### Testing Code

As we begin to write more complicated applications, we'll quickly realize that bugs can find their way into code in very unexpected places. Often making a small change in one place can break something seemingly unrelated. Without a good set of tests these kinds of bugs can be hard for a developer to find.

The most important tool to assure that code well written and as free of bugs as possible, is automated tests. Automated tests can be run over and over again assuring the developer that the code is solid and users will have a great experience.

### Behavior Driven Development

**Behavior driven development** or BDD, is the methodology of creating automated tests that will assure the development team that the code created will function properly for the end user. In practice, test driven development and behavior driven development are very similar. The difference is the scope of focus. In test driven development, the goal is checking the input and output of the code. In behavior driven development, the tests assure the code will behave for the user as expected.

Just like in test driven development, the process of behavior driven development follows the workflow of a developer creating a test, seeing the test fail, then creating the code that makes the test pass.

### Ruby Gems

A **gem** is library or snippet of code functionality. Gems are managed by the Ruby package manager called **RubyGems**. Gems package up Ruby code making it easier to implement commonly used functionality to an application. Gems also make it easier to share functionality with other developers.

### RSpec

**RSpec** (Ruby specification) is a domaine specific language used for testing the behavior of objects in the Ruby programming language. Developers can use RSpec to create specifications or **specs** that describe the desired output. A **domaine specific language** is a language that is used for one specific task as opposed to a general-purpose language like Ruby or JavaScript.

### RSpec Files and Dependencies

To create a space for writing tests we need a Ruby file, a test file, and the appropriate RSpec dependencies. To keep the code organized it is best practice to create a new directory. Inside this directory we will create one file with the standard Ruby extension such as `rspec.rb`. Then we will create another file called `rspec_spec.rb` to hold the specs. To add RSpec to the project, we ask RubyGems to install the RSpec gem using the command $ `gem install rspec`.

### Anatomy of a RSpec Test

**rspec_spec.rb**

```ruby
require 'rspec'
require_relative 'rspec'

describe Car do
  it 'has to be real' do
    expect{ Car.new }.to_not raise_error
  end
end
```

RSpec tests consists of the following:

1. Import statements

   - `require 'rspec'` will bring in the appropriate dependencies
   - `require_relative 'rspec'` connects the spec file to the file where the code will live using the relative file path

   ```ruby
   require 'rspec'
   require_relative 'rspec'
   ```

2. A `describe` statement

   - RSpec offers us a method called `describe` that takes an argument of the class and a block

   ```ruby
   require 'rspec'
   require_relative 'rspec'

   describe Car do
   end
   ```

3. An `it` statement

   - The `it` statements is nested within the describe code block
   - The `it` takes an argument of string, which is a statement that explains in _regular words_ what the test is doing and a block

   ```ruby
   require 'rspec'
   require_relative 'rspec'

   describe Car do
     it 'has to be real' do
     end
   end
   ```

4. At least one `expect` statement

   - The expect statement will execute the code

   ```ruby
   require 'rspec'
   require_relative 'rspec'

   describe Car do
     it 'has to be real' do
       expect{ Car.new }
     end
   end
   ```

5. Matcher

   - A matcher is a method that contains the expected output of the code

   ```ruby
   require 'rspec'
   require_relative 'rspec'

   describe Car do
     it 'has to be real' do
       expect{ Car.new }.to_not raise_error
     end
   end
   ```

Every RSpec test requires a `describe` method, an `it` method nested within that describe block, and at least one `expect` method. In order for the `expect` to work, it needs to have a matcher method chained onto it which will compare the test output to the actual output.

### Running the Test

Now that we have a test we can run the test in the terminal. After ensuring we are in the correct directory, we can run the command $ `rspec rspec_spec.rb`. We can expect that the test will fail.

```bash
An error occurred while loading ./rspec_spec.rb.
Failure/Error:
  describe Car do

    it 'has to be real' do
      expect{ Car.new }.to_not raise_error
    end

  end

NameError:
  uninitialized constant Car
# ./rspec_spec.rb:4:in `<top (required)>'
No examples found.


Finished in 0.00002 seconds (files took 0.07393 seconds to load)
0 examples, 0 failures, 1 error occurred outside of examples
```

Yay! A good failure! The output tells us exactly where the issue is in the code through an error message. The test is looking for something called `Car` and cannot find anything.

We can tell this is the case, because of the `NameError: uninitialized constant Car` part of the fail message. This tells us that our test is written correctly, but it failed because when our expect method tried to create an instance of the class `Car` it couldn't find it.

### Creating the Code

Now that we have a failing test, we can create the code that will make the test pass. This test is looking for a class called `Car` to exist. We can create just enough code to make the test pass.

**rspec.rb**

```ruby
class Car
end
```

**Notice:** There is no invocation of the class in this file. RSpec handles all of that in the expect method.

Back in the terminal we can run the same $ `rspec rspec_spec.rb` command and examine the outcome.

```bash
Finished in 0.00179 seconds (files took 0.0664 seconds to load)
1 example, 0 failures
```

Excellent! Our test passes. Now we can move on to the next feature of the class.

### Adding Class Data

Now that we have ensured the class exists, we can add instance variables that will hold data. Inside the same `describe` block, we will add another `it` block. To test that the class `Car` can have a model we need to create an instance of the `Car` class inside the `it` block. The variable is local to that particular test.

The test will have two `expect` statements. The first one will ensure that the class can be assigned the data for a model. To accomplish this we can use the RSpec matcher `.to eq` which will look for equality. The second expect statement will ensure the model data is of class `String`. To accomplish this we can use the RSpec matcher `to be_a`.

**rspec_spec.rb**

```ruby
require 'rspec'
require_relative 'rspec'

describe Car do
  it 'has to be real' do
    expect{ Car.new }.to_not raise_error
  end

  it 'has a model' do
    car = Car.new('Toyota')
    expect(car.model).to eq('Toyota')
    expect(car.model).to be_a(String)
  end
end
```

Ensuring we are in the correct directory, we can run the command $ `rspec rspec_spec.rb` in the terminal. We can expect that the test will fail.

```bash
Failures:

  1) Car has a model
     Failure/Error: car = Car.new('Toyota')

     ArgumentError:
       wrong number of arguments (given 1, expected 0)
     # ./rspec_spec.rb:10:in `initialize'
     # ./rspec_spec.rb:10:in `new'
     # ./rspec_spec.rb:10:in `block (2 levels) in <top (required)>'

Finished in 0.0016 seconds (files took 0.05854 seconds to load)
2 examples, 1 failure

Failed examples:

rspec ./rspec_spec.rb:9 # Car has a model
```

Notice there are two tests in the test file. One test passes and one fails. The first test passes but the code for the second has not been written yet so that test fails.

**Notice:** We don't comment out the previous tests. The purpose of creating tests is to create an automated snapshot of the code base.

Now we can build the code to accommodate the model. It feels reasonable to have the model be assigned on initialization. By adding the `attr_accessor` helper method we can have access to getter and setter methods for model.

**rspec.rb**

```ruby
class Car
  attr_accessor :model

  def initialize(model)
    @model = model
  end
end
```

But this introduces a new problem. The test we just wrote is passing but now the first test fails.

```bash
Failures:

  1) Car has to be real
     Failure/Error: expect{ Car.new }.to_not raise_error

       expected no Exception, got #<ArgumentError: wrong number of arguments (given 0, expected 1)> with backtrace:
         # ./rspec.rb:4:in `initialize'
         # ./rspec_spec.rb:6:in `new'
         # ./rspec_spec.rb:6:in `block (3 levels) in <top (required)>'
         # ./rspec_spec.rb:6:in `block (2 levels) in <top (required)>'
     # ./rspec_spec.rb:6:in `block (2 levels) in <top (required)>'

Finished in 0.00709 seconds (files took 0.05835 seconds to load)
2 examples, 1 failure

Failed examples:

rspec ./rspec_spec.rb:5 # Car has to be real
```

This is because we changed the code requirements to require a model on initialization. There are a few ways we can solve this problem. The one that makes the most sense here is to add a model to the first test.

**rspec_spec.rb**

```ruby
require 'rspec'
require_relative 'rspec'

describe Car do
  it 'has to be real' do
    expect{ Car.new('Toyota') }.to_not raise_error
  end

  it 'has a model' do
    car = Car.new('Toyota')
    expect(car.model).to eq('Toyota')
    expect(car.model).to be_a(String)
  end
end
```

Now both our tests pass.

```bash
Finished in 0.00176 seconds (files took 0.058 seconds to load)
2 examples, 0 failures
```

### Testing Data vs Behavior

Notice there is a difference between the expect statements in the first and second test. The `expect` statement in the first test is followed by curly braces and the second `expect` statement has parentheses. In the curly braces is a block of code `{ Car.new }` which is testing for a behavior. The behavior we are testing is the creation of a new object from the `Car` class. In the second test, we are looking for a static value. The expect statement is being passed `(car.model)` in parentheses. In this case, we are expecting our car's model to have a value and for that value to be a string.

### Setting Default Values

The next feature of the class `Car` is that it can have a color. The color can be assigned on initialization. If no color is given a new instance of class `Car` should be 'unpainted'.

This feature is going to require two different `expect` statements. One will test that the car can be given a color and the other will test for the default value.

**rspec_spec.rb**

```ruby
require 'rspec'
require_relative 'rspec'

describe Car do
  it 'has to be real' do
    expect{ Car.new('Toyota') }.to_not raise_error
  end

  it 'has a model' do
    car = Car.new('Toyota')
    expect(car.model).to eq('Toyota')
    expect(car.model).to be_a(String)
  end

  it 'can be given a color or be unpainted by default' do
    car = Car.new('Toyota')
    expect(car.color).to eq('unpainted')
    expect(car.color).to be_a(String)
    red_car = Car.new('Toyota', 'Red')
    expect(red_car.color).to eq('Red')
  end
end
```

Running the test file we will see the test fail.

```bash
Failures:

  1) Car can be given a color or be unpainted by default
     Failure/Error: expect(car.color).to eq('unpainted')

     NoMethodError:
       undefined method `color' for #<Car:0x0000000127bf2728 @model="Toyota">
     # ./rspec_spec.rb:17:in `block (2 levels) in <top (required)>'

Finished in 0.00184 seconds (files took 0.0587 seconds to load)
3 examples, 1 failure

Failed examples:

rspec ./rspec_spec.rb:15 # Car can be given a color or be unpainted by default
```

Now we can add the code to make the test pass.

**rspec.rb**

```ruby
class Car
  attr_accessor :model, :color

  def initialize(model, color='unpainted')
    @model = model
    @color = color
  end
end
```

The tests should pass. If no color is passed the value will be assigned to 'unpainted' and if there is a color passed in it will update accordingly.

```bash
Finished in 0.00185 seconds (files took 0.05706 seconds to load)
3 examples, 0 failures
```

### Testing Methods

Cars have a speed property. Speed can be measured at any given time and also change through the behavior of accelerating. The `Car` class should have a speed value that starts with a default value of the integer 0. The speed should be able to increase. This will require two different tests.

The first will be testing the speed property.

**rspec_spec.rb**

```ruby
require 'rspec'
require_relative 'rspec'

describe Car do
  it 'has to be real' do
    expect{ Car.new('Toyota') }.to_not raise_error
  end

  it 'has a model' do
    car = Car.new('Toyota')
    expect(car.model).to eq('Toyota')
    expect(car.model).to be_a(String)
  end

  it 'can be given a color or be unpainted by default' do
    car = Car.new('Toyota')
    expect(car.color).to eq('unpainted')
    expect(car.color).to be_a(String)
    red_car = Car.new('Toyota', 'Red')
    expect(red_car.color).to eq('Red')
  end

  it 'can have a speed property' do
    car = Car.new('Toyota')
    expect(car.speed).to eq(0)
    expect(car.speed).to be_a(Integer)
  end
end
```

All the other tests still pass but our new one fails as expected.

```bash
Failures:

  1) Car can have a speed property
     Failure/Error: expect(car.speed).to eq(0)

     NoMethodError:
       undefined method `speed' for #<Car:0x00000001399490f0 @model="Toyota", @color="unpainted">
     # ./rspec_spec.rb:25:in `block (2 levels) in <top (required)>'

Finished in 0.00193 seconds (files took 0.05765 seconds to load)
4 examples, 1 failure

Failed examples:

rspec ./rspec_spec.rb:23 # Car can have a speed property
```

Now we can add the speed property to the `Car` class.

**rspec.rb**

```ruby
class Car
  attr_accessor :model, :color, :speed

  def initialize(model, color='unpainted')
    @model = model
    @color = color
    @speed = 0
  end
end
```

The next test is for the behavior of acceleration. Note the curly braces when testing the behavior.

**rspec_spec.rb**

```ruby
require 'rspec'
require_relative 'rspec'

describe Car do
  it 'has to be real' do
    expect{ Car.new('Toyota') }.to_not raise_error
  end

  it 'has a model' do
    car = Car.new('Toyota')
    expect(car.model).to eq('Toyota')
    expect(car.model).to be_a(String)
  end

  it 'can be given a color or be unpainted by default' do
    car = Car.new('Toyota')
    expect(car.color).to eq('unpainted')
    expect(car.color).to be_a(String)
    red_car = Car.new('Toyota', 'Red')
    expect(red_car.color).to eq('Red')
  end

  it 'can have a speed property' do
    car = Car.new('Toyota')
    expect(car.speed).to eq(0)
    expect(car.speed).to be_a(Integer)
  end

  it 'can accelerate by a given amount' do
    car = Car.new('Toyota')
    expect{ car.accelerate(10) }.to change{ car.speed }.from(0).to(10)
  end
end
```

We see our test fail.

```bash
Failures:

  1) Car can accelerate by a given amount
     Failure/Error: expect{ car.accelerate(10) }.to change{ car.speed }.from(0).to(10)

     NoMethodError:
       undefined method `accelerate' for #<Car:0x0000000145933d20 @model="Toyota", @color="unpainted", @speed=0>
     # ./rspec_spec.rb:31:in `block (3 levels) in <top (required)>'
     # ./rspec_spec.rb:31:in `block (2 levels) in <top (required)>'

Finished in 0.00377 seconds (files took 0.05818 seconds to load)
5 examples, 1 failure

Failed examples:

rspec ./rspec_spec.rb:29 # Car can accelerate by a given amount
```

Now we can add the code to make the test pass.

```ruby
class Car
  attr_accessor :model, :color, :speed

  def initialize(model, color='unpainted')
    @model = model
    @color = color
    @speed = 0
  end

  def accelerate mph
    @speed += mph
  end
end
```

And the tests pass.

```bash
Finished in 0.00249 seconds (files took 0.05649 seconds to load)
5 examples, 0 failures
```

---

### ✅ Challenge: Tasks

**Process**: Copy the story into your RSpec file. Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

### 📚 User Stories

- As a developer, I can create a Task.
- As a developer, I can give a Task a title and retrieve it.
- As a developer, I can give a Task a description and retrieve it.
- As a developer, I can mark a Task done. Tasks should be initialized as 'in progress'.
- As a developer, when I print a Task that is done, its status is shown.
- As a developer, I can give a Task a due date.
  **Hint:** Use the built-in Ruby `Date` class.

### 🏔 Stretch Goals

- As a developer, I can add all of my Tasks to a TaskList.
- As a developer with a TaskList, I can print the completed items.
- As a developer with a TaskList, I can print the incomplete items.
- As a developer with a TaskList, I can list all the not completed items that are due today.
- As a developer with a TaskList, I can list all the incomplete items in order of due date.
- As a developer with a TaskList with and without due dates, I can list all the not completed items in order of due date, and then the items without due dates.

---

[Back to Syllabus](../README.md#unit-four-ruby)
