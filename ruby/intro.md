# Ruby Introduction

#### Overview
Ruby is an open source, object-oriented programming language created by Yukihiro "Matz" Matsumoto in the early 1990s. Ruby has a reputation for simplicity and a style that is both easy to read and write. Ruby is a general-purpose, interpreted, dynamically-typed, server-side scripting language. Ruby has many helpful built in methods and great documentation.

#### Previous Lecture (52 min)
[![YouTube](http://img.youtube.com/vi/UinI_s6wwgA/0.jpg)](https://www.youtube.com/watch?v=UinI_s6wwgA)

#### Learning Objectives
- can access the Interactive Ruby Shell in terminal
- can define Ruby data types
- can reproduce the proper syntax of dot notation to execute methods on data
- can reproduce the syntax required to define a variable
- can reproduce the syntax required to define an array
- can determine the proper use of either p or puts depending on a desired outcome
- can explain the fundamentals of object-oriented programming

#### Vocabulary
- Interactive Ruby Shell (irb)
- Object oriented programming
- snake_case
- method
- puts/p

#### Additional Resources
- [Ruby Styling Guide](https://rubystyle.guide)
- [The Object Model](https://launchschool.com/books/oo_ruby/read/the_object_model)
- [Yukihiro "Matz" Matsumoto's GitHub](https://github.com/matz)

#### IRB
- Ruby can be run directly in the Mac terminal through the **Interactive Ruby Shell**, a REPL environment for interacting with Ruby code
- `irb` - enter irb console
- `exit` - return to the regular terminal

#### Process
- `cd` into the `ruby-challenges` repository
- Create a new branch: `intro-initials1-initials2` (ex. intro-aw-sp)
- `touch` a file with no spaces and `.rb` extension: `intro-student1-student2.rb` (ex. intro-austin-sarah.rb)
- Open the folder in a text editor
- Code!

---

### Object Orientated Programming

From The Object Model, a great read about Object Oriented Programming:

"Object Oriented Programming, often referred to as OOP, is a programming paradigm that was created to deal with the complexity of large software systems. Programmers found out very early on that as applications grew in complexity and size, they became very difficult to maintain. One small change at any point in the program would trigger a ripple effect of errors due to dependencies throughout the entire program.

Programmers needed a way to create containers for data that could be changed and manipulated without affecting the entire program. They needed a way to section off areas of code that performed certain procedures so that their programs could become the interaction of many small parts, as opposed to one massive blob of dependency."

Ruby is an object-oriented language. Ruby is so object-oriented that a common Ruby mantra is: "Everything is an object."

Objects are the intersection of data and behavior. The data is information stored in variables and the behavior are functions that belong to the object (methods). A method is a set of instructions saying what an object should do in response to a particular message.

To send a particular message to an object is to call that method on the object.

### Running Ruby: IRB

Ruby comes preinstalled on Mac computers. To use it, open the terminal and type `irb` (Interactive Ruby Shell) into terminal. And that's it! You're all set to start coding in Ruby.

The IRB prompts with `>`

**Troubleshooting:** IRB is much like console in Google Chrome. You can program in Ruby but entering code line by line can be difficult. If you find yourself with a prompt that says 1 or ? or " or ' IRB is expecting you to finish close your string or method.

If you are stuck in the middle of an incorrect statement and want to start over, type `control-c` and you will get a clean prompt.


### Ruby Data Types
In Ruby all data types are defined by classes.

### Integers
Integer operators and arithmetic in Ruby are very similar to what you've seen so far in JavaScript:

```ruby
# addition
> 1 + 3   
=> 4

# subtraction
> 6 - 2   
=> 4

# multiplication
> 2 * 2   
=> 4

# division
> 3 / 2   
=> 1 # Note the lack of decimals

# exponents
> 5 ** 2  
=> 25

# modulo
> 5 % 3   
=> 2
```

### Floats
If you want to return a non-whole number in Ruby you must pass a float into the equation.

```ruby
> 3.0 / 2     
=> 1.5

> 0.15 + 0.30
=> 0.44999999999999996
```
Ruby has NaN and Infinity, but only for floating point numbers. Integers generate exceptions in the same circumstances instead.

```ruby
> 5 / 0  
=> ZeroDivisionError (divided by 0)

> 0 / 0  
=> ZeroDivisionError (divided by 0)

> 5.0 / 0
=> Infinity

> 0.0 / 0
=> NaN
```

### Boolean

Ruby's comparison operators should look familiar. One difference is Ruby only as one equality operator: ==

```ruby
# Equality operator
> 7 == 7    
=> true   # Note: Only two equal signs

# Relational operators
> 6 > 4     
=> true

> 8 < 9     
=> true

> 10 != 20  
=> true

> 15 <= 13  
=> false

> 8 >= 2    
=> true

# Logical operators
> 8 >= 2 && 15 <= 13
=> false

> 8 >= 2 || 15 <= 13
=> true
```

### Strings

Ruby style guides say to use single quotes whenever suitable. A notable exception is the need to portray punctuation.

```ruby
> 'hello'
=> "hello"

> "It's my party!"
=> "It's my party!"
```

### Calling Methods on Objects: The DOT!

In Ruby, methods are called on an objects (remember, in Ruby everything is an object) using dot-notation. First pass the name of the object, then a dot, then the method.

Examples:
```ruby
> 'Hello'.upcase        
=> "HELLO"

> 'hello'.capitalize    
=> "Hello"

> 'HELLO'.downcase      
=> "hello"

> 'hello'.reverse       
=> "olleh"

> 'hello' * 3           
=> "hellohellohello"

# Methods can be chained together
> 'hello'.upcase.reverse
=> "OLLEH"
```

### Other Datatypes

- **Nil** - the datatype that is equal to nothing else
- **Symbol** - the unique key in a key:value pair

### Variables

In Ruby variables do not require a declaration such as var, let, or const. In Ruby, variables are created with a single equal sign. The casing convention in Ruby is snake_case.

```ruby
> my_num            
=> ERROR  

> my_num = 1        
=> 1

> my_num            
=> 1
```

### String Interpolation

String interpolation is replacing variables within a string with the values they represent. In Ruby, string interpolation is done with double quotes around the entirety of the string and the variable being wrapped in `#{}`

```ruby
> num1 = 1
> num2 = 4
> "The number #{num1} is less than #{num1 + num2}"
=> "The number 1 is less than 5"
```

### Arrays
Arrays are ordered collections of objects. Arrays can hold objects of any data type and each element can be reference by an index. Arrays are zero based, so the index of the first element is zero.

```ruby
nums = [8, 9, 10, 11, 12, 13]
```

### Array Methods
Just like strings you can call methods on arrays.

```ruby
> nums = [8, 9, 10, 11, 12, 13]

# Return the length of the array
> nums.length  
=> 6

# Return the first item in the array (index 0)
> nums.first   
=> 8

# Return the last item in the array
> nums.last    
=> 13

# Return the array in reversed order
> nums.reverse
=> [13, 12, 11, 10, 9, 8]

# Return the value from a specific index in an array
> nums[2]      
=> 10

# If the index doesn't exist in the array, Ruby will return nil
> nums[20]     
=> nil

# Reassign the value at a particular index in an array
> nums[2] = 100
=> 100
> nums
=> [8, 9, 100, 11, 12, 13]

# If the index doesn't exist, Ruby will assign the value and fill the in between indexes with nil
> nums[20] = 23
=> 23

> nums.length  
=> 21

> nums
=> [8, 9, 100, 11, 12, 13, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, 23]

# Append operator
> [1, 2, 3] << 99
=> [1, 2, 3, 99]
```
The append operator `<<` (a.k.a. "the shovel") basically sticks something at the end of the array.

### Accessors vs Mutators
For the most part, Ruby methods are all accessors, meaning they do not mutate the object they are called on. For a method to permanently change the object it is called on, follow it with a bang operator.

```ruby
# Declaring a variable in IRB
> nums = [8, 9, 10, 11, 12, 13]
=> [8, 9, 10, 11, 12, 13]

# Calling the reverse method
> nums.reverse
=> [13, 12, 11, 10, 9, 8]

# Calling the original variable
> nums
=> [8, 9, 10, 11, 12, 13]

# Calling the reverse method with a bang operator
> nums.reverse!
=> [13, 12, 11, 10, 9, 8]

# Calling the original variable
> nums
=> [13, 12, 11, 10, 9, 8]
```

## Running Ruby: Terminal
To do this, create a file. Ruby can be run from a file with any sort of name, but it is common to give a ruby file a `.rb` extension.

To run a file with Ruby code in it, you give the command `ruby` and then a path to the file. So to execute a ruby file called `run_it.rb` in your current directory, you would run: $ `ruby run_it.rb`

The `puts` (short for "put string") and `p` commands are both used to display the results of evaluating Ruby code. The primary difference between them is that puts is short for "puts string" so the output is stringified. `p` is an alternative to puts that is useful in seeing the raw data output.

In the example you can see differences between the output of puts and the raw output of p.
```ruby
puts 'Hello World'
Hello World
=> nil

p 'Hello World'
"Hello World"
=> "Hello World"
```

---

### Challenges

### Arithmetic Challenges
Remember that floats are numbers with a decimal point whereas integers have no fractional part so in Ruby, 1 and 1.0 are different types of things with slightly different behaviors.
- Add, subtract, multiply and divide some numbers and floats.
- Find the remainder of dividing two numbers using the modulo operator (%).
- Divide a number by 0.
- Divide 0 by 0.

### Variables Challenges
- Set a variable called my_favorite_number equal to your favorite number
- Calculate your favorite number divided by 2
- Set another variable called someones_favorite equal to 13
- Change the value of someones_favorite to 7
- Subtract my_favorite_number from someones_favorite
- Change the value of my favorite number to be 26 times its current value

### Strings Challenges
- Create a variable and return it in a sentence string interpolation
- Create a variable that contains a string and test some of the Ruby string methods
  - .upcase
  - .reverse
  - .include?
  - .capitalize

### Arrays Challenges
- Create an array that contains the name of at least five TV shows
- Find the length of the array
- Return the first item in the array
- Return the fourth item in the array
- Permanently reverse the order of the array
- Create a new empty array for your top favorite TV shows
- From the full TV show array, add your top two favorite shows to the empty array

---
[Back to Syllabus](../README.md#unit-four-ruby)
