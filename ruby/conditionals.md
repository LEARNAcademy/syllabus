# Ruby Conditionals and Methods

#### Overview

Functions are customized snippets of code functionality that allow developers to create to reusable logic. Because Ruby is so very object oriented, functions are referred to as methods. Methods often need to make decisions about the data that is passed in. The decisions, or conditional statements, are a sequence of well-defined instructions that produce a unique output based on the value of the input. The combination of methods and conditional statements create powerful coding logic.

#### Previous Lecture: Conditionals (40 min)

[![YouTube](http://img.youtube.com/vi/dfw_pJsu6aI/0.jpg)](https://youtu.be/dfw_pJsu6aI)

#### Previous Lecture:Methods (21 min)

[![YouTube](http://img.youtube.com/vi/MJic4poiJPE/0.jpg)](https://youtu.be/MJic4poiJPE)

#### Learning Objectives

- can define the syntax of a conditional statement in Ruby
- can demonstrate proper Ruby syntax to define a method that accepts one or more arguments
- can define how to call a method and log the appropriate output
- can define implicit return

#### Vocabulary

- method
- def/end
- implicit return
- local scope
- if/else/end
- elsif
- unless
- gets
- chomp

#### Additional Resources

- [Ruby Conditionals](http://ruby-for-beginners.rubymonstas.org/conditionals.html)
- [Ruby Methods](https://www.w3resource.com/ruby/ruby-methods.php)

#### Process

- `cd` into the `ruby-challenges` repository
- Create a new branch: `conditionals-methods-initials1-initials2` (ex. conditionals-methods-aw-sp)
- `touch` a file with no spaces and `.rb` extension: `conditionals-methods-student1-student2.rb` (ex. conditionals-methods-austin-sarah.rb)
- Open the folder in a text editor
- Code!

---

### Ruby Methods

A Ruby **method** is a block of custom code logic that can be called as many times as needed. Methods in Ruby are defined using the keywords **def/end**. The keyword `def` is followed by the name of the method. The name of the method is written in snake_case. Ruby doesn't use curly braces so the block of code logic in the method is defined by the keyboard `end`. In between the `def` and `end` is the code to be executed.

Ruby has the keyword `return` but it is not necessary to use in every method. Ruby has an **implicit return** which means the value of the last line of a method is automatically returned without using the keyword `return`.

```ruby
def greeter
  return 'Hello World!'
end

p greeter
=> 'Hello World!'

# implicit return
def greeter
  'Hello World!'
end

p greeter
=> 'Hello World!'
```

### Local Variables

All variables defined inside a method stay in the **local scope** of that method. The variables inside a method are not available outside the method. Trying to access the variable outside the method will throw an exception.

```ruby
def fun_message
  response = 'This is so much fun'
  p response
end

fun_message
=> 'This is so much fun'

response
=> NameError
```

### Method with Parameters

Methods often need additional information to be useful in a project. Methods can take in information in the form of arguments. When passing in an argument to a method, a corresponding parameter is necessary. Ruby methods can take as many parameters as necessary.

```ruby
def greeter name
  "Hello, #{name}!"
end

> greeter 'LEARN Student'
=> 'Hello, LEARN Student!'
```

While Ruby doesn't require parentheses around the arguments for a method, it is best practice to use parentheses if there is more than one argument.

```ruby
def add_up(num1, num2)
  num1 + num2
end

add_up(1, 3)
=> 4

add_up(3, 4)
=> 7
```

### Conditional Statements

Conditionals in Ruby use the keywords **if/else/end** to create a decision tree. The first `if` statement starts the chain of evaluations. The `else` keyword is the catchall that doesn't take an evaluation and will only execute if none of the other conditions are met. Simple evaluations in Ruby don't need to be wrapped in () and code blocks don't user curly braces. Instead Ruby uses the keyword `end` to define the scope of the conditional evaluation.

```ruby
my_num = 10
if my_num == 10
  p 'Your number is 10!'
else
  p 'Your number is not 10.'
end

=> 'Your number is 10!'
```

Conditional statements are often used inside a method to produce a decision in the code logic. This allows for different outcomes based on the input. Every `def` has a corresponding `end` and every conditional statement needs an `end`. Nesting a conditional statement inside a method requires two ends each defining their own executable block of code.

```ruby
my_num = 10

def is_ten num
  if num == 10
    'Your number is 10!'
  else
    'Your number is not 10.'
  end
end

is_ten my_num
=> 'Your number is 10!'

is_ten 12
=> 'Your number is not 10.'
```

### Additional Branches on the Decision Tree

If more than the binary `if/else` decision is necessary, Ruby offers the keyword **elsif** which allows for additional evaluations in the conditional statement. After the `if` statement, as many `elsif` statements may be used as necessary. Ending with an `else` will capture any leftover possibilities.

```ruby
def number_checker num
  if num == 10
    'Your number is 10!'
  elsif num < 10
    "#{num} is less than 10."
  elsif num > 10
    "#{num} is greater than 10."
  else
    'Something went wrong.'
  end
end

number_checker 10
=> 'Your number is 10!'
number_checker 42
=> '42 is greater than 10.'
```

### Unless

Ruby also offers the keyword `unless` as a way to make conditional statements. The **unless** statement is the logical opposite, or negation, of an `if` statement. An `if` statement will execute when the condition is true while an `unless` statement executes only if the condition is false.

```ruby
my_name = 'LEARN'

def greeter name
  unless name == 'Rachael'
    "Hello, #{name}!"
  else
    'Hello there!'
  end
end

greeter my_name
=> 'Hello, LEARN!'

greeter 'Rachael'
=> 'Hello there!'
```

### Input

Ruby has the unique ability to not only produce an outcome in the terminal but to take user input in the terminal as well. The command for user input in the terminal is an action called called **gets**. It is a bit like `prompt()` in JavaScript. And just like `prompt()` the input value from gets needs to be stored in a variable to access later.

```ruby
puts 'Enter your name'
name = gets

# gets provides a blank line that accepts user input as a string
> LEARN Student
=> 'LEARN Student\n'
```

The string output from `gets` includes the return character you type to enter the user input. Ruby has a command called **chomp** that removes any additional line breaks and white space from the end of a string.

```ruby
puts 'Enter your name'
name = gets.chomp

=> 'LEARN Student'

puts "Hello, #{name}. How are you today?"
=> 'Hello, LEARN Student. How are you today?'
```

### ❤️ Challenges

- Create a method called sum_these_numbers which takes two integers as an argument and prints their sum to the screen.
- Create a method called is_even, which takes a single integer, and which then returns true if the number is even, and false otherwise.
- Create a method that takes a number as an argument and prints "Valid" if the number is between 1 and 10 (inclusive) and "Invalid" otherwise.
- Create a method that takes in a string and determines if the string is a palindrome.

### ✂️ Challenge: Rock, Paper, Scissors

- As the first user, I can see a prompt in the terminal to enter my name.
- As the second user, I can see a prompt in the terminal to enter my name.
- As the first user, I can see a prompt in the terminal asking me to type either "rock", "paper", or "scissors".
- As the second user, I can see a prompt in the terminal asking me to type either "rock", "paper", or "scissors".
- As a user, I can see a message in the terminal depicting which user won the round.
- As a user, I can see a message in the terminal noting if there was a tie.

### ✅ Challenge: Password Checker

As a developer, you have been tasked with creating the user registration for a secure web site. To test your code, enter the user ID and password in the terminal to find out if they are acceptable. The user ID and password must adhere to the to following criteria:

- User ID and password _cannot_ be the same.
- User ID and password _must_ be at least six characters long.
- Password _must_ contain at least one of: !#$
- User ID _cannot_ contain the following characters: !#$ or spaces
- Password _cannot_ be the word "password".
- User password _must_ contain at least one number.

---

[Back to Syllabus](../README.md#unit-four-ruby)
