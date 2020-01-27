# TEST DRIVEN DEVELOPMENT PROCESS

### [Video of TDD/BDD with Rspec and Ruby](https://player.vimeo.com/video/168104193)

The process to follow is:

1) Determine a feature or behavior to implement.
2) Create the describe and it blocks for pertaining to the that feature only. If there are more than one it block, put in pending in the blocks.
3) Put in expects in one it block to assert how the objects/the system should behave.
4) Run the tests and see that they fail.
5) Implement just enough of the software to make the tests pass.
6) Add more expects and repeat the process, until all tests pass and all features are implemented.

### Set Up
Create a file called car.rb and file called car_spec.rb in the same folder.
Put the following into the spec file:

- require 'rspec' - searches the gem file path and grabs it.
- require_relative 'car' - gets the car, which is within the same folder.

In the terminal, cd to the folder with the files; then:

```bash
rspec car_spec.rb
and see that world is good and fine.
```

## Getting to Work
### First Feature: A Car is a Thing
Write the first test within the car_spec.rb file:
Car has to be a thing, in other words, Car has to be a class that we can use.

```RUBY
describe "Car" do
  it "has to be real" do
    expect{Car.new}.to_not raise_error
  end
end
```

Run your test in the Terminal:

```bash
rspec car_spec.rb
```

Now implement a Car class in the car.rb file:

```bash
class Car
end
```

And run the tests again. Do they pass? YES!

You can now change the test to use the class name: describe Car do instead of the string.

Great on to the next feature!

### Feature Two: Cars have Color
#### Story: A Car has a Color

We can express this as:

```bash
...
  it "has a color" do
    a_car = Car.new
    expect(a_car.color).to be_a String
  end
...
```

The be_a matcher will take a class name. When we give it String, our example car passes the test.

#### Story: A Car's color can be changed

```bash
...
  it "can change color" do
    a_car = Car.new
    a_car.color = "Red"
    expect(a_car.color).to eq "Red"
  end
...
```

With this test, we create a new car and assign it a color. For this test we use the eq matcher, which will compare your expectation to the test's result exactly as it is.

In the process, we realize that a_car.color should never have an empty value and that value should always be a String, otherwise our test that checks for class type won't pass. Let's write a new test to reflect this default behavior:

```bash
...
  it "has a color when it's created" do
    a_car = Car.new
    expect(a_car.color).to be_a String
    expect(a_car.color).to eq "Unpainted"
  end
...
```

### Feature Three: The need for Speed
#### Story: Cars have Speed

```bash
...
  it "has a speed" do
    a_car = Car.new
    expect(a_car.speed).to be_a Numeric
  end
...
```

We expect car.speed to be a number. We use the Numeric class in our test because it is the broadest class that includes round numbers; it includes Fixnum and Integer.

#### Story: A car's Initial Speed is Zero

```bash
...
  it "starts at speed zero" do
    a_car = Car.new
    expect(a_car.speed).to be 0
  end
...
```

#### Story: A Car can Accelerate

```bash
...
  it "can accelerate by an amount" do
    a_car = Car.new
    a_car.accelerate_by 42

    # A weak expectation
    expect(a_car.speed).to be > 0

    # Simple way to test
    expect(a_car.speed).to be 42

    # Alternative way to test
    expect{a_car.accelerate_by(13)}.to change{a_car.speed}.from(42).to(13+42)
  end
...
```

## The Outcome
The outcome of our labor - the deliverables - are the specification of the software, the rspec file, and an implementation that works according to the specification.

car_spec.rb
```
require 'rspec'
require_relative 'car'

describe Car do

  it "is a thing" do
    expect{Car.new}.to_not raise_error
  end

  it "always has a color" do
    a_car = Car.new
    expect(a_car.color).to be_a String
    expect(a_car.color).to eq "Unpainted"
  end

  it "can change color" do
    a_car = Car.new
    a_car.color = "Red"
    expect(a_car.color).to eq "Red"
  end

  it "has a speed" do
    a_car = Car.new
    expect(a_car.speed).to be_a Numeric
  end

  it "starts at speed zero" do
    a_car = Car.new
    expect(a_car.speed).to be 0
  end

  it "can accelerate by an amount" do
    a_car = Car.new
    a_car.accelerate_by 42
    expect{a_car.accelerate_by(13)}.to change{a_car.speed}.from(42).to(13+42)
  end

end
```
car.rb
```
class Car

  def initialize
    @color = "Unpainted"
    @speed = 0
  end

  def color
    @color
  end

  def color= new_color
    @color = new_color
  end

  def speed
    @speed
  end

  def accelerate_by add_speed_by
    @speed = @speed + add_speed_by
  end

end
```

## Set Up Rspec
To get great looking output, create a file called .rspec in your home folder
(which you can get to by typing just cd in the Terminal).
Put the following in the file:

```
--color --format documentation
```

## AWS Set Up
To set up your environment in AWS you will need to enter a few commands into the terminal.  Setting up your files and running ```rspec car_spec.rb``` in your terminal will operate the same as a local development environment.

### Terminal Commands for AWS RSPEC Set Up

```
sudo apt install ruby-rspec-core
gem install rspec
```
After running those commands in the terminal of AWS you are able to run your test.

```
rspec car_spec.rb
```

## Resources
Read <a href="http://blog.teamtreehouse.com/an-introduction-to-rspec" target="blank">this blog entry introduction to RSpec</a> from Treehouse for a slightly more formal grounding in the basics.

<a href="https://www.relishapp.com/rspec/rspec-core/v/2-4/docs" target="blank">Relish RSpec official documentation</a>.

<a href="http://betterspecs.org" target="blank">Better Specs</a>, which shows tons of examples of what you should and shouldn't do with RSpec.

<a href="http://net.tutsplus.com/tutorials/ruby/ruby-for-newbies-testing-with-rspec/" target="blank">

<a href="http://www.anchor.com.au/wp-content/uploads/rspec_cheatsheet_attributed.pdf" target="blank">RSpec Cheat Sheet</a>

## Challenge: Car Challenge with TDD

### Process

Before starting the implementation, copy each story into the editor as a comment, and use the function recipe to guide the implementation of each method.


**Keep each class in it's own file with it's own test file.**

### Stories

**Story**:	As a programmer, I can make a vehicle.
**Hint**:	Test that `Vehicle.new` does not raise any errors.

**Story**:	As a programmer, I can make a car.
**Hint**:	Test that creating an instance of the new class does not raise any errors.

**Story**:	As a programmer, I can tell how many wheels a car has; default is four.
**Hint**:	`initialize` the car to have four wheels, then create a method to return the number of wheels.

**Story**:	As a programmer, I can honk the horn.
**Hint**:	When I call `honk_horn`, I get a "BEEP!".

**Story**:	As a programmer, I can make a Toyota car.
**Hint**:	Test that class `Toyota` which inherits from class `Car` can be created.

**Story**:	As a programmer, I can honk the horn of a Toyota car which makes the sound "whoop".

**Story**:	As a programmer, I can make a Honda car.

**Story**:	As a programmer, I can honk the horn of a Honda car - "beep".

**Story**:	As a programmer, I can make a Tesla car.

**Story**:	As a programmer, I can honk the horn of Tesla - "Beep-bee-bee-boop-bee-doo-weep".

**Story**:	As a programmer, I can tell which model year a vehicle is from. Model years never change.
**Hint**:	Make model year part of the initialization.

**Story**:	As a programmer, I can turn on and off the lights on a given Vehicle.
**Hint**:	Create method(s) to allow programmer to turn lights on and off. Which class are the methods in?

**Story**:	As a programmer, I can determine if the lights are on or off. Lights start in the off position.

**Story**:  As a programmer, I can signal left and right. Turn signals starts off.

**Story**:	As a programmer, I can determine the speed of a car. Speed starts at 0 km/h.

**Story**:	As a programmer, I can speed my Teslas up by 10 km/h per acceleration.

**Story**:	As a programmer, I can slow my Teslas down by 7 km/h per braking.

**Story**:	As a programmer, I can speed my Hondas up by 2 km/h per acceleration.

**Story**:	As a programmer, I can slow my Hondas down by 1.25 km/h per braking.

**Story**:	As a programmer, I can speed my Toyotas up by 7 km/h per acceleration.

**Story**:	As a programmer, I can slow my Toyotas down by 5 km/h per braking.

**Story**:  As a programmer, I can call upon a car to tell me all it's information.
**Hint**:   Implement `to_s` on one or more classes. You can call a super class's `to_s` with `super`.

**Story**:  As a programmer, I can store and retrieve all of my cars from a garage.
**Hint**:   "Garage" is a noun, "store" and "retrieve" are verbs.

**Story**:	As a programmer, I can sort the cars in my garage based on model year.

**Story**:	As a programmer, I can sort the cars in my garage based on model.
**Hint**:	Sort based on class name.

**Story**:	As a programmer, I can sort the cars in my garage based on model and then year.
**Hint**:   Find out how the spaceship operator can help you with an array.

[Go to next lesson: Intro to Postgres](../sql/intro_postgres.md)

[Back to Ruby Inheritance](./inheritance.md)

[Back to Syllabus](../README.md)
