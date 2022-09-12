# Ruby Introduction

#### Overview

Ruby is an open source, object-oriented programming language created by Yukihiro "Matz" Matsumoto in the early 1990s. Ruby has a reputation for simplicity and a style that is both easy to read and write. Ruby is a general-purpose, interpreted, dynamically-typed, server-side scripting language. Ruby has many helpful built in methods and great documentation.

#### Previous Lecture (52 min)

[![YouTube](http://img.youtube.com/vi/UinI_s6wwgA/0.jpg)](https://www.youtube.com/watch?v=UinI_s6wwgA)

#### Learning Objectives

- can explain the fundamentals of object-oriented programming
- can define basic Ruby data types
- can reproduce the syntax of string interpolation in Ruby
- can reproduce the syntax required to define a variable
- can reproduce the proper syntax to execute built in methods
- can reproduce the syntax required to define an array
- can access the interactive Ruby shell in the Mac terminal
- can determine the proper use of either p or puts depending on a desired outcome

#### Vocabulary

- object-oriented programming (OOP)
- interactive Ruby shell (IRB)
- REPL
- snake_case
- shovel operator
- puts
- p

#### Additional Resources

- [Ruby Styling Guide](https://rubystyle.guide)
- [The Object Model](https://launchschool.com/books/oo_ruby/read/the_object_model)
- [Yukihiro "Matz" Matsumoto's GitHub](https://github.com/matz)

#### Useful Commands

- `irb` - enter Ruby console
- `exit` - return to the regular terminal

#### Process

- `cd` into the `ruby-challenges` repository
- Create a new branch: `intro-initials1-initials2` (ex. intro-aw-sp)
- `touch` a file with no spaces and `.rb` extension: `intro-student1-student2.rb` (ex. intro-austin-sarah.rb)
- Open the folder in a text editor
- Code!

#### Troubleshooting Tips

- Are you in IRB or your regular terminal?
- If you see an IRB prompt that says 1 or ? or " or ' you left syntax finished
- `control + c` will clear your IRB
- Are you printing your desired outcome?

---

### Object-orientated Programming

From The Object Model, a great read about object-oriented programming:

> "**Object-oriented programming**, often referred to as OOP, is a programming paradigm that was created to deal with the complexity of large software systems. Programmers found out very early on that as applications grew in complexity and size, they became very difficult to maintain. One small change at any point in the program would trigger a ripple effect of errors due to dependencies throughout the entire program.

> Programmers needed a way to create containers for data that could be changed and manipulated without affecting the entire program. They needed a way to section off areas of code that performed certain procedures so that their programs could become the interaction of many small parts, as opposed to one massive blob of dependency."

Ruby is an object-oriented language. Ruby is so object-oriented that a common Ruby mantra is: "Everything is an object."

Objects are the intersection of data and behavior. The data is information stored in variables and the behavior are functions that belong to the object (methods). A method is a set of instructions saying what an object should do in response to a particular prompt.

### Running Ruby: IRB

Ruby comes preinstalled on Mac computers. To use it, open the terminal and type `irb`. The **interactive Ruby shell** is a REPL environment for interacting with Ruby code in terminal. **REPL** (Read, Evaluate, Print, Loop) is a computer environment where user inputs are processed and produce an output. IRB is much like the Ruby version of the JavaScript console in Google Chrome.

When in the Ruby shell, the file structure will be replaced with a `>` prompt. To return to the regular terminal, type `exit`.

### Troubleshooting IRB

You can program in Ruby but entering code line by line can be difficult. If you find yourself with a prompt that says 1 or ? or " or ' IRB is expecting you to finish close your string or method.

If you are stuck in the middle of an incorrect statement and want to start over, type `control-c` and you will get a clean prompt.

### Ruby Data Types

Ruby is very object oriented. In Ruby all data types are objects. Another way of saying that is that all data types are defined by a class. Every data type used in a Ruby program is an instance of the class that defines it.

### Integers

Integer operators and arithmetic in Ruby are very similar to numbers in JavaScript:

```ruby
# addition
1 + 3
# output: 4

# subtraction
6 - 2
# output: 4

# multiplication
2 * 2
# output: 4

# division
3 / 2
# output: 1 # Note the lack of decimals

# exponents
5 ** 2
# output: 25

# modulo
5 % 3
# output: 2
```

### Floats

If you want to return a non-whole number in Ruby you must pass a float into the equation.

```ruby
3.0 / 2
# output: 1.5

0.15 + 0.30
# output: 0.44999999999999996
```

Ruby has NaN and Infinity, but only for floating point numbers. Integers generate exceptions in the same circumstances instead.

```ruby
5 / 0
# output: ZeroDivisionError (divided by 0)

0 / 0
# output: ZeroDivisionError (divided by 0)

5.0 / 0
# output: Infinity

0.0 / 0
# output: NaN
```

### Boolean

Ruby will return a Boolean value for comparison operators. The comparison operators are equality, relational, logical, and negation.

The equality operator is two equal signs. In Ruby there is no such thing as loose and strict equality. Data types that are not of the same class cannot be compared.

```ruby
7 == 7
# output: true

4 == 2 + 2
# output: true

'hi' == 'hi'
# output: true

7 == '7'
# output: false
```

The relational operators are less than `<`, greater than `>`, less than or equal to `<=`, and greater than or equal to `>=`.

```ruby
6 > 4
# output: true

8 < 9
# output: true

7 < 2
# output: false

15 <= 13
# output: false

8 >= 2
# output: true
```

Ruby also has logical AND, logical OR, and negations.

```ruby
8 >= 2 && 15 <= 13
# output: false

true && 'hi' == 'hi'
# output: true

8 <= 2 || 4 == 2 + 2
# output: true

```

### Strings

Ruby style guides say to use single quotes whenever suitable. A notable exception is the need to portray punctuation.

```ruby
'hello'

"It's my party!"
```

### Calling Methods on Objects: The DOT!

In Ruby, methods are called on an objects (remember, in Ruby everything is an object) using dot-notation. First pass the name of the object, then a dot, then the method.

Examples:

```ruby
'Hello'.upcase
# output: "HELLO"

'hello'.capitalize
# output: "Hello"

'HELLO'.downcase
# output: "hello"

'hello'.reverse
# output: "olleh"

'hello' * 3
# output: "hellohellohello"

# Methods can be chained together
'hello'.upcase.reverse
# output: "OLLEH"
```

### Other Datatypes

- Nil - the datatype that is equal to nothing else
- Symbol - the unique identifier in a key:value pair

### Variables

In Ruby variables do not require a declaration such as var, let, or const. In Ruby, variables are created with a single equal sign. The casing convention in Ruby is snake_case. The **snake_case** convention is all lowercase with each word separated by an underscore.

```ruby
my_num
# output: ERROR

my_num = 1
# output: 1

my_num
# output: 1
```

### String Interpolation

String interpolation is replacing variables within a string with the values they represent. In Ruby, string interpolation is done with double quotes around the entirety of the string and the variable being wrapped in `#{}`

```ruby
num1 = 1
num2 = 4

"The number #{num1} is less than #{num2}."
# output: "The number 1 is less than 4."

"The number #{num1} plus the number #{num2} equals #{num1 + num2}."
# output: "The number 1 plus the number 4 equals 5."
```

### Arrays

Arrays are ordered collections of objects. Arrays can hold objects of any data type and each element can be reference by an index. Arrays are zero based, so the index of the first element is zero. Specific values in the array can be accessed by passing the index inside bracket notation.

```ruby
nums = [8, 9, 10, 11, 12, 13]

# Return the value from a specific index in an array
nums[2]
# output: 10

# If the index doesn't exist in the array Ruby will return nil
nums[20]
# output: nil

# Reassign the value at a particular index in an array
nums[2] = 100
# output: 100

nums
# output: [8, 9, 100, 11, 12, 13]

# If the index doesn't exist, Ruby will assign the value and fill the in between indexes with nil
nums[20] = 23
# output: 23

nums
# output: [8, 9, 100, 11, 12, 13, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, 23]

```

### Array Methods

Just like strings you can call methods on arrays. By default, most Ruby methods are accessors that will not permanently modify the object they are being called on.

```ruby
nums = [8, 9, 10, 11, 12, 13]

# Return the length of the array
nums.length
# output: 6

# Return the first item in the array (index 0)
nums.first
# output: 8

# Return the last item in the array
nums.last
# output: 13

# Return the array in reversed order
nums.reverse
# output: [13, 12, 11, 10, 9, 8]
```

### Accessors vs Mutators

For the most part, Ruby methods are all accessors, meaning they do not mutate the object they are called on. For a method to permanently change the object it is called on, follow it with a bang operator.

```ruby
# Declaring a variable in IRB
nums = [8, 9, 10, 11, 12, 13]
# output: [8, 9, 10, 11, 12, 13]

# Calling the reverse method
nums.reverse
# output: [13, 12, 11, 10, 9, 8]

# Calling the original variable
nums
# output: [8, 9, 10, 11, 12, 13]

# Calling the reverse method with a bang operator
nums.reverse!
# output: [13, 12, 11, 10, 9, 8]

# Calling the original variable
nums
# output: [13, 12, 11, 10, 9, 8]
```

### Append Operator

The append operator a.k.a. **shovel operator** is an array mutator that will add an new item at the end of the array using the syntax `<<`.

```ruby
nums << 99
# output: [8, 9, 10, 11, 12, 13, 99]
```

## Running Ruby: Terminal

To do this, create a file. Ruby can be run from a file with any sort of name, but it is common to give a ruby file a `.rb` extension.

To run a file with Ruby code call the command `ruby` and then a path to the file. So to execute a ruby file called `run_it.rb` in your current directory, you would run: $ `ruby run_it.rb`

There are two ways of noting the code that should be logged as an output in the terminal. The **puts** command is short for "put string" which will "stringify" the output when logging data to the terminal. Another way to log data is using the **p** command which will display a more raw version of the results of evaluating Ruby code.

In the example you can see differences between the output of puts and the raw output of p.

```
puts 'Hello World'
# output: Hello World

p 'Hello World'
# output: 'Hello World'
```

---

### ❤️ Challenges

Remember that floats are fractional numbers whereas integers are whole numbers. In Ruby, 1 and 1.0 are defined by different data types with slightly different behaviors.

**Complete the following challenges in the IRB console.**

- Open the IRB terminal. Exit the terminal and reopen the terminal.
- Add, subtract, multiply, and divide integers.
- Add, subtract, multiply, and divide floats.
- Find the remainder of dividing two numbers using the modulo operator (%).
- Divide an integer by 0.
- Divide a float by 0.
- Divide 0 by 0.
- Create a variable and assign an integer.
- Calculate the variable divided by 2.
- Find the remainder of the variable when divided by 3.
- Create another variable and assign it the integer 13.
- Use the relational operators on the two variables.
- Reassign the value of one variable to be 7.
- Reassign the value of one variable to be 26 times its current value.

**Complete the following challenges in a Ruby file.**

- Create a variable and return it in a sentence using string interpolation.
- Create a variable that contains a string and test some of the Ruby string methods:
  - .upcase
  - .reverse
  - .include?
  - .capitalize
  - .delete
  - .index
  - .swapcase
- Create an array that contains the name of at least five TV shows you enjoy.
- Find the length of the array.
- Return the first item in the array.
- Return the fourth item in the array.
- Permanently reverse the order of the array.
- Create a new empty array for your top favorite TV shows.
- Using the full TV show array, add your top two favorite shows to the empty array.

---

[Back to Syllabus](../README.md#unit-four-ruby)
