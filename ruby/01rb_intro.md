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

`x = gets
puts x.upcase`
In the terminal run the file using ruby.

`ruby uppercase-me.rb
foo
FOO`

The puts command is a little different from p: p is more for programmers to see inside the thing being displayed, while puts just writes the string out to the terminal (try changing the example to p).

Now you can make a program have a kind of dialog with the user.

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
The string we're getting from gets includes the return you type to end it. We can strip that off with chomp, which removes line endings from a string.

puts "Enter your name"
name = gets.chomp
puts "Hello, #{name}. How are you today?"
wellness = gets.chomp
puts "Well, I hope you get over #{wellness} soon."
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

> 1 + 3   # => 4
> 2 * 2   # => 4
> 3 / 2   # => 1 # Note the lack of decimals
> 5 % 3   # => 2
> 6 - 2   # => 4
> 5 ** 2  # => 25
The exponentiation operator ** is new, and raises a number to the nth power.

Floating Point Numbers
For floating point numbers, Ruby also resembles Javascript.

> 3.0 / 2     # => 1.5
> 0.15+0.30   # => 0.44999999999999996
Ruby even has NaN and Infinity, but only for floating point numbers. Integers generate exceptions in the same circumstances instead.

> 5 / 0
    ZeroDivisionError: divided by 0
> 0 / 0
    ZeroDivisionError: divided by 0

> 5.0 / 0   # => Infinity
> 0.0 / 0   # => NaN
Boolean
Ruby's comparison operators should also look familiar, with one significant change:

> 7 == 7      # => true # Note: Only two equal signs
> 6 > 4       # => true
> 8 < 9       # => true
> 10 != 20    # => true
> 15 <= 13    # => false
> 8 >= 2      # => true
> 8 >= 2 && 15 <= 13  # => false
> 8 >= 2 || 15 <= 13  # => true
Strings
There are all kinds of neat things you can do with strings in Ruby. For example:

> "hello".capitalize    # => "Hello"
> "HELLO".downcase      # => "hello"
> "hello".reverse       # => "olleh"
> "hello" * 3           # => "hellohellohello"
> "hello".upcase.reverse  # => "OLLEH"
Notice the last example: You can absolutely chain methods in Ruby.

Simple Variables
Ruby's variables behave a lot like the ones in Javascript. Note that you don't need to remember the var busywork before you first use a variable. So in that essence Ruby doesn't care about declaring variables, they spring up into existence the first time they are seen in the code.

Example in IRB:

> x                 # => ERROR  
> x = 1             # Note: no var (unlike Javascript)
> x                 # => 1
> x = 'foo'
> x                 # => "foo"
> x = x + ' bar'    # => "foo bar"
> x                 # => "foo bar"
Arrays
Arrays are ordered collections of objects. A variable, for instance, can hold only one item at a time. Arrays can hold multiple items. These items are called elements of the array. Arrays can hold objects of any data type and each element can be referred to by an index. Arrays are zero based, so the index of the first element is zero.

Example of an Array:

nums = [8, 9, 10, 11, 12, 13]
Working with Arrays
Like strings you can call methods on an array to interact with it.

Examples in IRB:

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
The append operator, <<, (a.k.a. "the shovel") basically sticks something at the end of the array. The difference here is that we dont have to specify an index position when using the append operator.

It's good to note that the num array is not permanently changed by calling the method reverse on it. It returns a new array with the elements reversed.

Hash
Now on to hashes. A hash is a collection of unique keys and their values, in other words, it's like a dictionary of key value pairs and can be easily created by using its implicit form:

burger_rating = { "Bacon Burger" => 10, "Guacamole Burger" => 9 }
Hashes allow an alternate syntax form where your keys are always symbols. Instead of

order_form = { :number_of_tacos => 10, :meat_type => "Carne Asada" }
You could write it as:

order_form = { number_of_tacos: 10, meat_type: "Carne Asada" }
Each named key is a symbol you can access in the hash:

order_form[:number_of_tacos]  # => 10
A Hash can also be created through its ::new method:

burger_rating = Hash.new
burger_rating["Double Cheese Burger"] = 10
Hashes have a default value that is returned when accessing keys that do not exist in the hash. If no default is set nil is used. You can set the default value by sending it as an argument to ::new:

User-facing Functionality
So let's look at some more predefined methods that will be useful.

In Javascript we used code like console.log and alert when trouble shooting and prompt when we wanted user inputted information. Similar commands in Ruby are puts, print and gets.

Output
The puts (short for "put string") and print commands are both used to display the results of evaluating Ruby code. The primary difference between them is that puts adds a newline after executing, and print does not.

Example in IRB:

print "Hello World"
Hello World # => nil

puts "Hello World"
Hello World
# => nil
In the example you can see differences and the newline the puts method adds.

Input
The gets method gets a string from the keyboard. So, like in Javascript, where you have prompt, Ruby has gets. And just like Javascript and prompt, you are going to want to store input from gets in a variable so you can access it later.

Syntax:

gets
The moment you hit return IRB is going to run the code and wait for user input to store in the variable.

Example in IRB:

a = gets
Hello World #irb waits for user input on this line and for you to hit return to store it.
# => "Hello World\n"
How come the new line \n at the end of Hello World? Its because gets takes the string that you typed along with the RETURN key pressed to end your input.

How do we get rid of it? Ruby has another method for just such an occasion. Its called chomp. The chomp method gives you back the string, but without the terminating newline \n.

Example:

a = gets.chomp
Hello World #irb waits for user input on this line and for you to hit return to store it.
# => "Hello World"
String Interpolation
It is essential to be able to replace placeholders within a string with values they represent. In the programming paradigm, this is called "string interpolation". In Ruby, string interpolation is extremely easy.

a = 1
b = 4
puts "The number #{a} is less than #{a + b}"
The number 1 is less than 5
This only works with "", not '' strings:

puts 'The number #{a} is less than #{a + b}'
The number #{a} is less than #{a + b}
Defining Methods
Simple Method
You can define your own methods, which as you know, are used to split your code into smaller bits of functionality and a way to use that functionality at a later time when needed.

Say I wanted to puts Hello World! numerous times, but dont want to write it out every time. Well, I can define a method.

Example:

def hi
  puts "Hello World!"
end
The code def hi, defines the method and gives it the name of hi. In between is the body, the code that I want to execute, and then the end tells Ruby we are done defining the method.

Now we can call the method repeatedly.

Example in IRB:

>hi
Hello World!
=>nil
>hi
Hello World!
=>nil
>hi
Hello World!
=>nil
When defining methods with variables within them, those variables stay local to just that method.

def hi
  me = "This is so much fun"
  puts me
end

> hi
~> This is so much fun
> me
    NameError: undefined local variable or method `me' for main:Object
    from (irb):2
    from /Users/adam/.rvm/rubies/ruby-2.2.1/bin/irb:11:in `<main>'
Method with Parameters
Methods can also take parameters:

def add(a, b)
  a + b
end
Ruby simply returns the value of the last line of a method (no return needed or wanted in general).

To call the method:

> add(1, 2)   # => 3
> add 1, 3    # => 4
Parentheses are optional (but please use them to make your code easier to read).

Object Orientation
Ruby is an object-oriented language. Ruby is so object-oriented that a common Ruby mantra is: "Everything is an object."

But what does that mean?

It's a bit tricky to explain what an "object" is; but, loosely speaking, it's a thing that you send a message to. All the action in Ruby happens because you send a message to an object.

In order for an object to respond meaningfully to a message, it must somehow possess internal knowledge of that message a pre-existing, primed response, saying what should happen when this particular message arrives.

This primed response is called a method. In other words, a method is simply a set of instructions saying what an object should do in response to a particular message.

To send a particular message to an object is to call that method of the object.

Calling Methods on Objects. The DOT!
In Ruby, you call a method to an object using the dot-notation: first the name of the object, then a dot, then the method. For example, if we had an object called Dog, we could call the method for it to bark like this:

dog.bark
That's a legal Ruby program in theory, but in fact it wont do anything useful all by itself. Right now, if you were to run that as a Ruby program, Ruby would give you an error message. That's because we dont have an object called Dog. And even if we did, it wouldnt necessarily know how to bark because there is no method called bark.

Let's try it with a real Ruby object like "Hello". You will notice that "hello" is a string. A string is an object that Ruby knows. So that means the string has a pre-existing, primed responses to certain messages.

Example:

Hello.upcase
The string "hello" knows when the upcase method is called on it, it needs to change all letters to an upper case.

Given Classes
We've established everything in Ruby is an object; and just like real world objects you can make them do something; "." means calling a method on (doing something to) an object.
Examples:

hello.length
hello.upcase
Every object in Ruby belongs to a class: (another way of saying: each object is an instance of class). To find out what class an object is a part of you can call .class on any object and it will tell you. Once you know it is easy to Google the class of Ruby and see the methods/capabilities of the class.

hello.class
1.class
1.0.class
true.class
Class.class
Do this for yourself to see the Ruby documentation:
Google: Ruby String class
Google: Ruby Fixnum class

Be sure to select the documentation for the version of Ruby you have installed (to find out use: ruby --version).

Loops and Blocks
Ruby has loops somewhat like the ones in Javascript (for, while and such), but experienced Ruby developers mostly use some different and easier-to-use sorts of loops. Let's examine the major ones.

.times Loop
We saw this already in an earlier lesson. If you want to repeat some code a certain number of times, you do this (note that p x in Ruby means "print out the value of x").

> x = 5
  # => 5
> x.times do
>     puts 'hello'
?>   end
  "hello"
  "hello"
  "hello"
  "hello"
  "hello"
  # => 5
  >
Just as with Javascript, every function or method we call returns some sort of value. Ruby's built-in functions generally try hard to find something useful to return, and often they do this by giving you the last value they worked with. So in this case, a times loop returns how many times it ran.

.each Loop
Ruby's each also lets you do something with every element of an array.

> a = [1, 2, 3]
> a.each do |element|
      puts element
    end
  1
  2
  3
  # => [1, 2, 3]
  > x
  NameError: undefined local variable or method `x` for main:Object
> a   # => [1, 2, 3]
Note the original array is untouched.

.each loop with a Hash and string interpolation
.each calls block once for each key in the hash, passing the key-value pair as parameters.

If no block is given, an enumerator is returned instead.

burger_rating = { "Bacon Burger" => 10, "Quacamole Burger" => 9 }
burger_rating.each {|key, value| puts "The #{key} has a rating of #{value}" }
produces:

The Bacon Burger has a rating of 10
The Quacamole Burger has a ratting of 9
.map
Ruby's map also lets you do something with every element of an array; it
returns a new array filled with whatever gets returned by the block each time it runs:

> a = [1, 2, 3]
> a.map { |n| n * n } # => [1, 4, 9]
> a                   # => [1, 2, 3]
Note the original array is untouched

Blocks
Ruby has two simple ways of creating anonymous functions similar to Javascript; they are called blocks:

nums.each() { |element| puts element }      
nums.each() do |element|
   puts element
   # Place more lines here
end
These blocks are equivalent. Use the {...} for one line blocks and the do ... end for multi-line blocks.

Blocks can have multiple parameters:

nums.each_with_index() { |element, index| puts index }

nums.each_with_index() do |element, index|
   puts index.to_s +   + element.to_s
end

# => Okay
The statement above with an if statement would have to look like below to get the same output.

x = 1
if !(x > 1)
  puts "Okay"
else
  puts "Huh?"
end

~> Okay
I think if I was going to have an else there, I would switch the above example to use an if
You can write if or unless at the end of a line, in which case it controls whether that line is executed.

x = 1
puts "Huh?" unless x == 1
# => nil

puts "Okay" if x > 0
Okay
# => nil
Derek Banas' Ruby Tutorial Ruby in One Video


## Ruby Basics Challenge

### Arithmetic Challenge
Remember that floats are numbers with a decimal point whereas integers have no fractional part so in Ruby, 1 and 1.0 are different types of things with slightly different behaviors.

Just as you did with Javascript, try these, both with integers and floats:

Add, subtract, multiply and divide some numbers any combination of numbers
Find the remainder of dividing two numbers using the modulo operator (%)
Divide a number by 0
Divide 0 by 0
Variables Challenge
Here are a few exercises for you to practice using variables:

Set a variable called my_favorite_number equal to your favorite number.
Calculate what your favorite number divided by 2 is.
Set another variable called someones_favorite equal to 13
Change the value of someones_favorite to 7
Subtract your favorite number from someones
Change the value of my favorite number to be 26 times its current value

### Strings Challenge
For this exercise, try out some of the Ruby string methods for yourself.

.upcase
.reverse
.include?
capitalize
create a variable and put it into a string using string interpolation
Arrays Challenge
Read the introductory information about the pretty comprehensive set of Array features Ruby has.

Create an array with ten of your favorite movies
From that array, extract your top 3 movies in a new array
Find an expression that tells you how many elements are in the array
Reverse an array, try out slices, how to rotate them, and how to get a random element from the array
