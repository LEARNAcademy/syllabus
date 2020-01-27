# Ruby Introduction

Ruby is an open source, object-oriented programming language with a reputation for simplicity and a style that is both easy to read and write (no more curly braces!).

## Object Orientation

Ruby is an object-oriented language. Ruby is so object-oriented that a common Ruby mantra is: "Everything is an object."

But what does that mean?

It's a bit tricky to explain what an "object" is; but, loosely speaking, it's a thing that you send a message to. All the action in Ruby happens because you send a message to an object.

In order for an object to respond meaningfully to a message, it must somehow possess internal knowledge of that message a pre-existing, primed response, saying what should happen when this particular message arrives.

This primed response is called a method. In other words, a method is simply a set of instructions saying what an object should do in response to a particular message.

To send a particular message to an object is to call that method of the object.

## Ruby Style Guides

Correct styling conventions for Ruby made for code that is easy to read. You can find a maintained Ruby Styling Guide here: [Ruby Styling Guide.](https://rubystyle.guide/)

## Ruby Data Types

### Numbers (Integers)

Integer operators and arithmetic in Ruby are very similar to what you've seen so far in Javascript:

```RUBY
> 1 + 3   # => 4
> 2 * 2   # => 4
> 3 / 2   # => 1 # Note the lack of decimals
> 5 % 3   # => 2
> 6 - 2   # => 4
> 5 ** 2  # => 25
```

### Numbers (Floats)

If you want to return a non-whole number in Ruby you must pass a float into the equation.

```RUBY
> 3.0 / 2       # => 1.5
> 0.15 + 0.30   # => 0.44999999999999996
```
Ruby has NaN and Infinity, but only for floating point numbers. Integers generate exceptions in the same circumstances instead.

```RUBY
> 5 / 0     # => ZeroDivisionError (divided by 0)
> 0 / 0     # => ZeroDivisionError (divided by 0)
> 5.0 / 0   # => Infinity
> 0.0 / 0   # => NaN
```

### Boolean

Ruby's comparison operators should also look familiar. One difference is Ruby only as one equality operator: ==

```RUBY
> 7 == 7      # => true   # Note: Only two equal signs
> 6 > 4       # => true
> 8 < 9       # => true
> 10 != 20    # => true
> 15 <= 13    # => false
> 8 >= 2      # => true
> 8 >= 2 && 15 <= 13  # => false
> 8 >= 2 || 15 <= 13  # => true
```

### Strings

Ruby style guides say to use single quotes whenever suitable. A notable exception is the need to portray punctuation.

```RUBY
> 'hello'   # => "hello"
> "It's my party!" => "It's my party!"
```

### Calling Methods on Objects: The DOT!

In Ruby, methods are called on an objects (remember, in Ruby everything is an object) using dot-notation: first, the name of the object, then a dot, then the method.

Example:
````RUBY
> 'Hello'.upcase   # => "HELLO"
> 'hello'.capitalize      # => "Hello"
> 'HELLO'.downcase        # => "hello"
> 'hello'.reverse         # => "olleh"
> 'hello' * 3             # => "hellohellohello"
> 'hello'.upcase.reverse  # => "OLLEH"
````

### Other Datatypes

- **Nil** - the datatype that is equal to nothing else
- **Symbol** - the unique key in a key:value pair

### Variables

In Ruby variables do not require a declaration such as var or let. In Ruby variables are created with a single equal sign. The casing convention in Ruby is snake_case.

```RUBY
> my_num               # => ERROR  
> my_num = 1           # => 1
> my_num               # => 1
> foo = 'foo'          # => "foo"
> foo                  # => "foo"
> foo = foo + ' bar'   # => "foo bar"
> foo                  # => "foo bar"
```

### String Interpolation

String interpolation is replacing variables within a string with the values they represent. In Ruby, string interpolation is done with double quotes around the entirety of the string and the variable being wrapped in #{}

```RUBY
> num1 = 1
> num2 = 4
> puts "The number #{num1} is less than #{num1 + num2}"
      # => The number 1 is less than 5
```

### Arrays

Arrays are ordered collections of objects. Arrays can hold objects of any data type and each element can be reference by an index. Arrays are zero based, so the index of the first element is zero.

```RUBY
> my_nums = [8, 9, 10, 11, 12, 13]
```

### Array Methods

Like strings you can call methods on an array to interact with it.

```RUBY
> nums = [8, 9, 10, 11, 12, 13]
> nums.length     # => 6
> nums.first      # => 8
> nums.last       # => 13
> nums.reverse    # => [13, 12, 11, 10, 9, 8]

> nums[2]         # => 10
> nums[6]         # => nil
> nums[88]        # => nil
> nums[2] = 100   # => [13, 12, 100, 11, 10, 9, 8]
> nums[88] = 23   # => [13, ..., 23]
> nums.length     # => 89

> [1, 2, 3] << 99 # => [1, 2, 3, 99]
```
The append operator `<<` (a.k.a. "the shovel") basically sticks something at the end of the array.

It's good to note that the array is not permanently changed by calling the method reverse on it. It returns a new array with the elements reversed.

## Running Ruby: IRB

If you are using a Mac, Ruby comes preinstalled on your machine. To use it, open the terminal and type `irb` (interactive ruby shell) into terminal. And that's it! You're all set to start coding in Ruby.

The IRB prompts with >

**Troubleshooting:** IRB is much like console in Google Chrome. You can program in Ruby but entering code line by line can be difficult. If you find yourself with a prompt that says 1 or ? or " or ' IRB is expecting you to finish close your string or method.

If you are stuck in the middle of an incorrect statement and want to start over, press Ctrl-C and you will get a clean > prompt.

## Running Ruby: Terminal

To do this, create a file. Ruby can be run from a file with any sort of name, but it is common to give a ruby file a .rb extension.

To run a file with Ruby code in it, you give the command ruby and then a path to the file. So to execute a ruby file called run_it.rb in your current directory, you would run: ruby run_it.rb

**Output**

The puts (short for "put string") and print commands are both used to display the results of evaluating Ruby code. The primary difference between them is that puts adds a newline after executing, and print does not.

Example in IRB:
````RUBY
print "Hello World"
Hello World # => nil

puts "Hello World"
Hello World
# => nil
````
In the example you can see differences and the newline the puts method adds.

**Input**

Ruby also has a command for user input in the terminal called `gets`. It is a bit like `prompt()` in JavaScript. And just like `prompt()`, the input value from gets needs to be stored in a variable to access later.


````RUBY
> puts 'Enter your name'
> name = gets
> puts "Hello, #{name}. How are you today?"

    # => Enter your name
    # => Learn Student
    # => Hello, Learn Student
    # => . How are you today?
````

The string output from `gets` includes the return you type to enter the user input. Ruby has a command called `chomp` that removes any additional line breaks and white space from the end of a string.

````RUBY
> puts 'Enter your name'
> name = gets.chomp
> puts "Hello, #{name}. How are you today?"
    # => Enter your name
    # => Learn Student
    # => Hello, Learn Student. How are you today?
````


## Challenges

### Arithmetic Challenges
Remember that floats are numbers with a decimal point whereas integers have no fractional part so in Ruby, 1 and 1.0 are different types of things with slightly different behaviors.

- Add, subtract, multiply and divide some numbers and floats.
- Find the remainder of dividing two numbers using the modulo operator (%).
- Divide a number by 0.
- Divide 0 by 0.

### Variables Challenges

- Set a variable called my_favorite_number equal to your favorite number.
- Calculate your favorite number divided by 2.
- Set another variable called someones_favorite equal to 13.
- Change the value of someones_favorite to 7.
- Subtract my_favorite_number from someones_favorite.
- Change the value of my favorite number to be 26 times its current value.

## Strings Challenges

- Create a variable and return it in a sentence string interpolation.
- Create a variable that contains a string and test some of the Ruby string methods.

  - .upcase
  - .reverse
  - .include?
  - .capitalize

## Arrays Challenges

- Create an array with five or six of your favorite TV shows
- Find the length of the array.
- From the full TV show array, extract your top 3 TV shows in a new array.
- Reverse the array.
- Get one element from the array.

[Go to next lesson: Ruby Conditionals](./conditionals.md)

[Back to React State and Props](../react/state-and-props.md)

[Back to Syllabus](../README.md)
