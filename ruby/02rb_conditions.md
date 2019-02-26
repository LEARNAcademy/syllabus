**Hash**

Now on to hashes. A hash is a collection of unique keys and their values, in other words, it's like a dictionary of key value pairs and can be easily created by using its implicit form:
````RUBY
burger_rating = { "Bacon Burger" => 10, "Guacamole Burger" => 9 }
```
Hashes allow an alternate syntax form where your keys are always symbols. Instead of
````RUBY
order_form = { :number_of_tacos => 10, :meat_type => "Carne Asada" }
```
You could write it as:

````RUBY
order_form = { number_of_tacos: 10, meat_type: "Carne Asada" }
```
Each named key is a symbol you can access in the hash:
````RUBY
order_form[:number_of_tacos]  # => 10
```
A Hash can also be created through its ::new method:
````RUBY
burger_rating = Hash.new
burger_rating["Double Cheese Burger"] = 10
```

Hashes have a default value that is returned when accessing keys that do not exist in the hash. If no default is set nil is used. You can set the default value by sending it as an argument to ::new:

**User-facing Functionality**

So let's look at some more predefined methods that will be useful.

In Javascript we used code like console.log and alert when trouble shooting and prompt when we wanted user inputted information. Similar commands in Ruby are **puts, print and gets**.

**Output**

The puts (short for "put string") and print commands are both used to display the results of evaluating Ruby code. The primary difference between them is that puts adds a newline after executing, and print does not.

Example in IRB:
````RUBY
print "Hello World"
Hello World # => nil

puts "Hello World"
Hello World
# => nil
```
In the example you can see differences and the newline the puts method adds.

**Input**

The gets method gets a string from the keyboard. So, like in Javascript, where you have prompt, Ruby has gets. And just like Javascript and prompt, you are going to want to store input from gets in a variable so you can access it later.



The moment you hit return IRB is going to run the code and wait for user input to store in the variable.

Example in IRB:
````RUBY
a = gets
Hello World #irb waits for user input on this line and for you to hit return to store it.
# => "Hello World\n"

```
How come the new line \n at the end of Hello World? Its because gets takes the string that you typed along with the RETURN key pressed to end your input.

How do we get rid of it? Ruby has another method for just such an occasion. Its called chomp. The chomp method gives you back the string, but without the terminating newline \n.

Example:
````RUBY
a = gets.chomp
Hello World #irb waits for user input on this line and for you to hit return to store it.
# => "Hello World"
```
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
**Defining Methods**

Simple Method

You can define your own methods, which as you know, are used to split your code into smaller bits of functionality and a way to use that functionality at a later time when needed.

Say I wanted to puts Hello World! numerous times, but don't want to write it out every time. Well, I can define a method.

Example:
````RUBY
def hi
  puts "Hello World!"
end
```
The code def hi, defines the method and gives it the name of hi. In between is the body, the code that I want to execute, and then the end tells Ruby we are done defining the method.

Now we can call the method repeatedly.

Example in IRB:
````RUBY
>hi
Hello World!
=>nil
>hi
Hello World!
=>nil
>hi
Hello World!
=>nil
```
When defining methods with variables within them, those variables stay local to just that method.
````RUBY
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
    ```
**Method with Parameters**

Methods can also take parameters:
````RUBY
def add(a, b)
  a + b
end
```
Ruby simply returns the value of the last line of a method (no return needed or wanted in general).

To call the method:
````RUBY
> add(1, 2)   # => 3
> add 1, 3    # => 4
```
Parentheses are optional (but please use them to make your code easier to read).

**Object Orientation**

Ruby is an object-oriented language. Ruby is so object-oriented that a common Ruby mantra is: "Everything is an object."

But what does that mean?

It's a bit tricky to explain what an "object" is; but, loosely speaking, it's a thing that you send a message to. All the action in Ruby happens because you send a message to an object.

In order for an object to respond meaningfully to a message, it must somehow possess internal knowledge of that message a pre-existing, primed response, saying what should happen when this particular message arrives.

This primed response is called a method. In other words, a method is simply a set of instructions saying what an object should do in response to a particular message.

To send a particular message to an object is to call that method of the object.

**Calling Methods on Objects. The DOT!**


In Ruby, you call a method to an object using the dot-notation: first the name of the object, then a dot, then the method. For example, if we had an object called Dog, we could call the method for it to bark like this:
````RUBY
dog.bark
```
That's a legal Ruby program in theory, but in fact it wont do anything useful all by itself. Right now, if you were to run that as a Ruby program, Ruby would give you an error message. That's because we dont have an object called Dog. And even if we did, it wouldnt necessarily know how to bark because there is no method called bark.

Let's try it with a real Ruby object like "Hello". You will notice that "hello" is a string. A string is an object that Ruby knows. So that means the string has a pre-existing, primed responses to certain messages.

Example:
````RUBY
Hello.upcase
```
The string "hello" knows when the upcase method is called on it, it needs to change all letters to an upper case.

**Given Classes**

We've established everything in Ruby is an object; and just like real world objects you can make them do something; "." means calling a method on (doing something to) an object.

Examples:
````RUBY
hello.length
hello.upcase
```
Every object in Ruby belongs to a class: (another way of saying: each object is an instance of class). To find out what class an object is a part of you can call .class on any object and it will tell you. Once you know it is easy to Google the class of Ruby and see the methods/capabilities of the class.
````RUBY
hello.class
1.class
1.0.class
true.class
Class.class
```
Do this for yourself to see the Ruby documentation:
Google: Ruby String class
Google: Ruby Fixnum class

Be sure to select the documentation for the version of Ruby you have installed (to find out use: ruby --version).

**Loops and Blocks**

Ruby has loops somewhat like the ones in Javascript (for, while and such), but experienced Ruby developers mostly use some different and easier-to-use sorts of loops.

Let's examine the major ones.

**.times Loop**
We saw this already in an earlier lesson. If you want to repeat some code a certain number of times, you do this (note that p x in Ruby means "print out the value of x").
````RUBY
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
  ```
Just as with Javascript, every function or method we call returns some sort of value. Ruby's built-in functions generally try hard to find something useful to return, and often they do this by giving you the last value they worked with. So in this case, a times loop returns how many times it ran.

**.each Loop**

Ruby's each also lets you do something with every element of an array.
````RUBY
> a = [1, 2, 3]
> a.each do |element|
      puts element
    end
  1
  2
  3
  # => [1, 2, 3]

> a   # => [1, 2, 3]
```
Note the original array is untouched.

**.each loop with a Hash and string interpolation**

.each calls block once for each key in the hash, passing the key-value pair as parameters.

If no block is given, an enumerator is returned instead.
````RUBY
burger_rating = { "Bacon Burger" => 10, "Quacamole Burger" => 9 }
burger_rating.each {|key, value| puts "The #{key} has a rating of #{value}" }

produces:

The Bacon Burger has a rating of 10
The Quacamole Burger has a rating of 9
```
**.map**

Ruby's map also lets you do something with every element of an array; it
returns a new array filled with whatever gets returned by the block each time it runs:
````RUBY
> a = [1, 2, 3]
> a.map { |n| n * n } # => [1, 4, 9]
> a                   # => [1, 2, 3]
```
Note the original array is untouched

**Blocks**

Ruby has two simple ways of creating anonymous functions similar to Javascript; they are called blocks:
````RUBY
nums.each() { |element| puts element }      
nums.each() do |element|
   puts element
   # Place more lines here
end
```
These blocks are equivalent. Use the {...} for one line blocks and the do ... end for multi-line blocks.

Blocks can have multiple parameters:
````RUBY
nums.each_with_index() { |element, index| puts index }

nums.each_with_index() do |element, index|
   puts index.to_s +   + element.to_s
end

# => Okay
```
The statement above with an if statement would have to look like below to get the same output.
````RUBY
x = 1
if !(x > 1)
  puts "Okay"
else
  puts "Huh?"
end

~> Okay
```
I think if I was going to have an else there, I would switch the above example to use an if

You can write if or unless at the end of a line, in which case it controls whether that line is executed.
````RUBY
x = 1
puts "Huh?" unless x == 1
# => nil

puts "Okay" if x > 0
Okay
# => nil
```





# Ruby Decision Structures Challenge

## If/Else

if, else
Ruby has quite a few more ways of branching than Javascript does, but they're simpler to use on the whole.

There is a simple if-else construct similar to Javascript.

x = 1
if x == 3
  puts "Huh?"
else
  puts "Just confused now."
end
elsif
When you need more than an either/or. elsif indicates an alternative to the preceding if and any other preceding elsif statements. So, you start off with the if, have any number of elsif alternatives, and end with an else to capture all the leftover possibilities. In Javascript it was spelled out as: else if.

x = 1
if x == 2
  puts "Double huh?"
elsif x == 1
  puts "That's right."
else
  puts "Just confused now."
end
We write elsif rather than Javascript's else if and you don't need the parentheses, but its otherwise pretty similar.

unless
There's also an unless, which is just like if !(...). The unless keyword is just if in reverse. It's a conditional statement that executes only if the condition is false, instead of true.

x = 1
unless x > 1
  puts "Okay"
else
  puts "Huh?"
end


## Challenges:

Write a loop that prints from 1 to 20. Try it with all the loops covered in this lesson. Do it again counting down from 20 to 1.
Write a program which takes a number and prints "Valid" if the number is between 1 and 10 (inclusive) and "Invalid" otherwise.
Write a program that prints the numbers from 1 to 100. But for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz
Create a method called sum_these_numbers which takes two integers as an argument and prints their sum to the screen.
Create a method called is_even, which takes a single integer, and which then returns true if the number is even, and false otherwise.
Create an array of words. Iterate through the array using .each and a block, then print each of those words in all capitals.
Write a method which calls another method, then uses its return value.
Write a function called valid_date that prompts the user for a date with a month, date, and year (all numerically expressed) and returns 'true' if this date exists and 'false' if it does not (for example: 7 28 2014 exists, but 22 34 1999 does not). Make sure to account for leap years. This program is easiest if you prompt for the month, date, and year separately.
Using if, elsif, and else blocks, write a function called rps_game which allows two users to input their moves in "Rock, Paper, Scissors" and which determines the winner (or if a tie occurred).

### Password Checker Challenge
You are writing the user registration page for a secure web site.
On the registration page, the user has to enter a user ID and a password, which has to adhere to the to following criteria:

User ID and password cannot be the same
User ID and password have to be at least six characters long
Password has to contain at least one of: !#$
User ID cannot contain the following characters: !#$ and space
Password cannot contain "password" in a capitalization
Proceed as follows:

Challenge: Write a function called same that takes a user ID and a password, and returns true if they are, and false otherwise.
Tests:

same("joe", "joe") -> true
same("joe", "joe1") -> false
Challenge: Write a function called long_enough that checks whether a String is at least six characters long, and returns true if it is, and false otherwise.
Tests:

long_enough("12345") -> false
long_enough("123456") -> true
Challenge Write a function called does_not_contain_special which checks to see if !, #, $ is not contained in a given String.
Tests:

does_not_contain_special("Hello Friend") -> true
does_not_contain_special("A#C") -> false
does_not_contain_special("A!C") -> false
does_not_contain_special("A$C") -> false
Challenge Write a method called contains_special which checks to see if !, #, $ is contained in a given String.
Tests:

contains_special("Hello Friend") -> false
contains_special("A#C") -> true
contains_special("A!C") -> true
contains_special("A$C") -> true
Challenge Write a method that inputs user ID and password from the user, and then tells the user if the they are acceptable.
Write a main method called validate_password that:

First lets a user input both user ID and password,
Then use the methods above to evaluate if the user ID and password combination is acceptable or not
Tells user what the result is.
Stretch Goal
Password has to contain at least one digit Task: Write a function using basic functions on String to see if a given String contains contains one of "0","1", "2", "9". Tests:
has_digit("abc") -> false
has_digit("a1c") -> true
Super Stretch Goal
Password has to contain a lower and an uppercase letter. Tests:
has_upper_and_lowercase("abc") -> false
has_upper_and_lowercase("aBc") -> true
has_upper_and_lowercase("123") -> false
