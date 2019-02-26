# Ruby
Ruby is an open source, object-oriented programming language with a reputation for simplicity and a style that is both easy to read and write (no more curly braces!).

If you are using a Mac, Ruby comes preinstalled on your machine. To use it, open the terminal and type `irb` (interactive ruby shell) into terminal. And that's it! You're all set to start coding in Ruby.

If you're using Windows, go here: <a href="https://www.codecademy.com/articles/ruby-setup"> Windows Ruby Setup</a>

## Running Ruby from a file
Time to start running Ruby from a file.

To do this, create a file. Ruby can be run from a file with any sort of name, but it is common to give a ruby file a .rb extension. We've built up quite a few files with our Javascript work, so you might like to start putting your Ruby work in a new folder.

To run a file with Ruby code in it, you give the command ruby and then a path to the file (you'll need to be clear about how paths work; a quick google will get you thousands of explanations if you're still unclear). So to execute a ruby file called doit.rb in your current directory, you would do: ruby doit.rb

When Ruby is running from the shell like this, you can read in a line from the user with the gets command.
uppercase-me.rb

````RUBY
x = gets
puts x.upcase
````
In the terminal run the file using ruby.

````RUBY
ruby uppercase-me.rb
foo
FOO
````

The puts command is a little different from p: p is more for programmers to see inside the thing being displayed, while puts just writes the string out to the terminal (try changing the example to p).

Now you can make a program have a kind of dialog with the user.
````RUBY
puts "Enter your name"
name = gets
puts "Hello, #{name}. How are you today?"
wellness = gets
puts "Well, I hope you get over #{wellness} soon."
This doesn't quite work.

Enter your name
Guy
Hello, Guy
. How are you today?
fine
Well, I hope you get over fine
soon.

````
The string we're getting from gets includes the return you type to end it. We can strip that off with chomp, which removes line endings from a string.
````RUBY
puts "Enter your name"
name = gets.chomp
puts "Hello, #{name}. How are you today?"
wellness = gets.chomp
puts "Well, I hope you get over #{wellness} soon."
````
You can also run a ruby file while in irb by using load, then in quotes the file name.


load './your_file.rb'
IRB
The IRB lines that prompt you with > are for new statements.

When the prompt says 1 or ? or " or 'instead, that means you are inside a method or string, and IRB is expecting you to finish entering your text and close your string or method with another quotation mark or end statement.

What you are doing is trying to enter your statement again, before you get a new (>) prompt.

If you are stuck in the middle of an incorrect statement and want to start over, press Ctrl-C and you will get a clean > prompt.

RUBY STYLE GUIDE
Correct styling conventions for Ruby made for code that is easy to read. You can find a maintained Ruby Styling Guide here: Ruby Styling Guide.

## Ruby Data Types
Numbers
Integers
Integer operators and arithmetic in Ruby are very similar to what you've seen so far in Javascript:

`````RUBY

> 1 + 3   # => 4
> 2 * 2   # => 4
> 3 / 2   # => 1 # Note the lack of decimals
> 5 % 3   # => 2
> 6 - 2   # => 4
> 5 ** 2  # => 25
````
The exponentiation operator ** is new, and raises a number to the nth power.

**Floating Point Numbers**

For floating point numbers, Ruby also resembles Javascript.

````RUBY
> 3.0 / 2     # => 1.5
> 0.15+0.30   # => 0.44999999999999996
````
Ruby even has NaN and Infinity, but only for floating point numbers. Integers generate exceptions in the same circumstances instead.
````RUBY
> 5 / 0
    ZeroDivisionError: divided by 0
> 0 / 0
    ZeroDivisionError: divided by 0

> 5.0 / 0   # => Infinity
> 0.0 / 0   # => NaN
````
**Boolean**

Ruby's comparison operators should also look familiar, with one significant change:
````RUBY
> 7 == 7      # => true # Note: Only two equal signs
> 6 > 4       # => true
> 8 < 9       # => true
> 10 != 20    # => true
> 15 <= 13    # => false
> 8 >= 2      # => true
> 8 >= 2 && 15 <= 13  # => false
> 8 >= 2 || 15 <= 13  # => true
````
**Strings**

There are all kinds of neat things you can do with strings in Ruby. For example:

````RUBY

> "hello".capitalize    # => "Hello"
> "HELLO".downcase      # => "hello"
> "hello".reverse       # => "olleh"
> "hello" * 3           # => "hellohellohello"
> "hello".upcase.reverse  # => "OLLEH"
````
Notice the last example: You can absolutely chain methods in Ruby.

**String Interpolation**

It is essential to be able to replace placeholders within a string with values they represent. In the programming paradigm, this is called "string interpolation". In Ruby, string interpolation is extremely easy.
````RUBY
a = 1
b = 4
puts "The number #{a} is less than #{a + b}"
The number 1 is less than 5
This only works with "", not '' strings:

puts 'The number #{a} is less than #{a + b}'
The number #{a} is less than #{a + b}
```

**Simple Variables**

Ruby's variables behave a lot like the ones in Javascript. Note that you don't need to remember the var busywork before you first use a variable. So in that essence Ruby doesn't care about declaring variables, they spring up into existence the first time they are seen in the code.

Example in IRB:
````RUBY
> x                 # => ERROR  
> x = 1             # Note: no var (unlike Javascript)
> x                 # => 1
> x = 'foo'
> x                 # => "foo"
> x = x + ' bar'    # => "foo bar"
> x                 # => "foo bar"
````


**Arrays**

Arrays are ordered collections of objects. A variable, for instance, can hold only one item at a time. Arrays can hold multiple items. These items are called elements of the array. Arrays can hold objects of any data type and each element can be referred to by an index. Arrays are zero based, so the index of the first element is zero.

Example of an Array:
````RUBY
nums = [8, 9, 10, 11, 12, 13]
````
**Working with Arrays**

Like strings you can call methods on an array to interact with it.

Examples in IRB:
````RUBY
> nums.length   # => 6
> nums.first    # => 8
> nums.last     # => 13
> nums.reverse  # => [13, 12, 11, 10, 9, 8]

> nums[2]       # => 10
> nums[6]       # => nil
> nums[88]      # => nil
> nums[2] = 100 # => [13, 12, 100, 11, 10, 9, 8]
> nums[88] = 23 # => [13, ..., 23]
> nums.length   # => 89

> [1, 2, 3] << 99 # => [1, 2, 3, 99]
```
The append operator, <<, (a.k.a. "the shovel") basically sticks something at the end of the array. The difference here is that we dont have to specify an index position when using the append operator.

It's good to note that the num array is not permanently changed by calling the method reverse on it. It returns a new array with the elements reversed.


Derek Banas' Ruby Tutorial Ruby in One Video


## Ruby Basics Challenge

### Arithmetic Challenge
Remember that floats are numbers with a decimal point whereas integers have no fractional part so in Ruby, 1 and 1.0 are different types of things with slightly different behaviors.

Just as you did with Javascript, try these, both with integers and floats:

* Add, subtract, multiply and divide some numbers - any combination of numbers
* Find the remainder of dividing two numbers using the modulo operator (%)
* Divide a number by 0
* Divide 0 by 0

**Variables Challenge**

Here are a few exercises for you to practice using variables:

* Set a variable called my_favorite_number equal to your favorite number.
* Calculate what your favorite number divided by 2 is.
* Set another variable called someones_favorite equal to 13
* Change the value of someones_favorite to 7
* Subtract your favorite number from someones
Change the value of my favorite number to be 26 times its current value

** Strings Challenge**

For this exercise, try out some of the Ruby string methods for yourself.
````RUBY
.upcase
.reverse
.include?
.capitalize
```
* create a variable and put it into a string using string interpolation

**Arrays Challenge**

* Create an array with ten of your favorite movies
* From that array, extract your top 3 movies in a new array
* Find an expression that tells you how many elements are in the array
* Reverse an array, try out slices, how to rotate them, and how to get a random element from the array
