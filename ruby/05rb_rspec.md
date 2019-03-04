# BEHAVIOR DRIVEN DEVELOPMENT PROCESS
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

The Outcome
The outcome of our labor - the deliverables - are the specification of the software, the rspec file, and an implementation that works according to the specification.

```bash
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

## BEHAVIOR-DRIVEN DEVELOPMENT
### Goals
Look through these now and then use them to test yourself after the session

- How do you run an RSpec test suite?
- How do you write a basic RSpec test?
- What aspects of your methods should you test?
- What is BDD?

### BDD
Behavior Driven Development is a way of approaching software development that derives some of its methodology from Test Driven Development. So to understand BDD it helps to understand TDD.

So what is Test Driven Development?

TDD is a process of developing software that specifies these steps:
1. Write a failing test
2. Write enough code to implement the test requirement
3. Verify that your implementation passes the test

Thats it in a nutshell. The advantages of following a TDD approach are:
1. Test coverage
2. Focus on the requirements of application
3. Tests serve as documentation for application
4. Confidence when you ship and when you refactor

BDD takes the core process of TDD and specifies that test be written in a way that describes the desired behavior of the application. It is a subtle departure from TDD methodology which does not state specific requirements on how tests are written. But the subtle difference in approach and reasoning has fairly important implications. Mainly, when writing tests in BDD we focus on the what of our application as opposed to the how in a language that both developers and business stakeholders or management can understand.

One of the characteristics, therefore, of a BDD test suite is that it reads like plain english. This is typically accomplished with testing tools that implement a DSL (Domain Specific Language) that utilizes language that is common in BDD. Tests are typically written in the form of user stories.

### Talk Outline
1. What is testing
2. What does TDD and BDD mean?
3. Testing Philosophies

### Why Rspec?
- What's a DSL
- Setting up and Running rspec
- Describe
- it shall be done
- What to Expect and How to Expect It
  - Kinds of expect
- Somebody Light a Matcher
  - to be
  - to_not
  - be_within(N).of(X)
  - change { object.attribute }
  - expect { raise StandardError }.to raise_error
- Formal or casual language?
- Are you mocking me?
  - Mock and Stubs
  - When to use them
  -  Why I don't think you should bother for a little while.
- Context and Other Things We're Not Talking Much About
  - Context
  - Let
  - Should
  - Subject
  - before(:each) and before(:after)
  - custom matchers
- Formatters and Outputs

## BDD Walkthrough Example
In the Terminal

- `mkdir autoban`
- `cd autoban`
- `touch car.rb`
- `touch car_spec.rb`
Access rspec and the separate file of car.rb within the car_spec.rb file
car_spec.rb

```RUBY
require 'rspec'          # searches the gem file path and grabs it.
require_relative 'car'   # gets the car, which is within the same folder.
```

Write the first test within the car_spec.rb file.
car_spec.rb

```RUBY
describe Car do
  it "has to be real" do
    expect{Car.new}.to_not raise_error
  end
end
```

Run your test in the Terminal:

```bash
rspec car_spec.rb
```

To get an idea of what to test, go to the stories and place them within your test.
car_spec.rb

```RUBY
describe Car do
  it "has to be real" do
    expect{Car.new}.to_not raise_error
  end

  it "has wheels"
  it "defaults the wheel count to 4"
  it "can set the wheel count when the car is created"

end
```

Now if you were to run these test rspec car_spec.rb, since you dont have any code in them, it will show them as (Pending)

This brings up a good point about doing BDD.

You write a spec, make it fail, then write the code to make it pass.
That means we will take our pending it 'has wheels' test, write in the code for the test, make sure it fails, then create the code to make it pass.

car_spec.rb

```bash
  it "has wheels" do
    expect{Car.new.wheels}.to_not raise_error
    expect(Car.new.wheels).to be(4)
    expect(Car.new.wheels).to be_a(Integer)
  end


  it "defaults the wheel count to 4"
  it  "can set the wheel count when the car is created"

end
```

Now when you run your test you will see two Pending and one Failure

When viewing your test start from the top to read all the failures.
The next step is to make the one Failure pass. That means we will go into our car.rb file and write the simplest code to make it pass.
car.rb

```bash
class Car
  def wheels
    return 4
  end
end
```

Now run the test and see if it passes.

```bash
rspec car_spec.rb
```

If it passes, go on to the next test, write in what you expect it to do, run the test, check that it fails, than write the code for make it pass.

Below is the first few stories broken down into test, than the code within the car.rb file to make the test pass.

car.rb

```RUBY
require 'rspec'
require_relative 'car'

describe Car do

  # Story: As a programmer, I can set there is a car
  it "has to be real" do
    expect{Car.new}.to_not raisse_error
    expect(Car.new).to be_a Car
  end

  # Story: As a programmer, I can see that the car has wheels
  it "has wheels" do
    expect{Car.new.wheels}.to_not raise_error
    expect(Car.new.wheels).to be(4)
    expect(Car.new.wheels).to be_a(Integer)
  end

  # Story: As a programmer, I can set the default wheel count to 4
  it "defaults the wheel count to 4" do
    expect(Car.new.wheels).to be(4)
  end

  # Story: As a programmer, I can set the wheel count when the car is created
  it  "can set the wheel count when the car is created"
    expect{Car.new(5)}.to_not raise_error
    car = Car.new(5)
    expect(car.wheels).to be(5)
  end

  # Story: As a programmer, I can determine the speed of a car. Speed starts at 0 km/h
  it "starts at 0 km/h" do
    car = Car.new
    expect(car.speed).to be_a Integer
    expect(car.speed).to be_eq(0)
  end

  # Story: As a programmer, I can speed a car up
  it "can speed up" do
    car = Car.new
    expect{car.accelerate}.to_not raise_error
    expect(car.speed).to be > 0
  end

  # Story: As a programmer, I can slow a car down to zero
  it "can slow down to zero" do
    car = Car.new
    expect{car.break}.to_not raise_error
    expect(car.speed).to eq(0)

    # Precondition
    car.accelerate
    expect(car.speed).to be > 0

    # Testing brake after accelerate
    expect{car.brake}.to_not raise_error
    expect(car.speed).to eq(0)
  end

end
```

car.rb

```RUBY
class Car

  def initialize(wheels=4)
    @wheels = wheels
    @speed = 0
  end

  def wheels
    return 4
  end

  def speed
    return 0
  end

  def accelerate
    @speed += 10
  end

  def brake
    @speed = 0
  end

end
```

## Resources
Read <a href="http://blog.teamtreehouse.com/an-introduction-to-rspec" target="_blank">this blog entry introduction to RSpec</a> from Treehouse for a slightly more formal grounding in the basics.

<a href="https://www.relishapp.com/rspec/rspec-core/v/2-4/docs" target="_blank">Relish RSpec official documentation</a>.

<a href="http://betterspecs.org" target="_blank">Better Specs</a>, which shows tons of examples of what you should and shouldn't do with RSpec.

<a href="http://net.tutsplus.com/tutorials/ruby/ruby-for-newbies-testing-with-rspec/" target="_blank">

<a href="http://www.anchor.com.au/wp-content/uploads/rspec_cheatsheet_attributed.pdf" target="_blank">RSpec Cheat Sheet</a>


[Go to Ruby Testing](./06rb_testing.md)


[Back to Ruby Classes and Objects](./04rb_inheritance.md)
