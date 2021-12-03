# Ruby Methods

## Overview
- Methods are used to create customized bits of functionality that can be called as many times as we need
- Ruby methods can take any number of arguments

## Learning Objectives
- Using Ruby syntax to create a simple method
- Passing arguments to a Ruby method
- Calling a method and logging an outcome to the terminal

## Vocabulary
- def/end
- Implicit return

## Additional Resources
- <a href="https://www.w3resource.com/ruby/ruby-methods.php" target="blank">Ruby Methods</a>

#### Process
- `cd` into the `ruby-challenges` repository
- Create a new branch: `methods-initials1-initials2` (ex. methods-aw-sp)
- `touch` a file with no spaces and `.rb` extension: `methods-student1-student2.rb` (ex. methods-austin-sarah.rb)
- Open the folder in a text editor
- Code!

---

## Method Syntax

To create methods in Ruby we use the keywords `def` and `end`.

`def` stands for defines. `def` is followed with the name of the method. The block of code ends with the keyword `end`. In between is the code to be executed.

Example:
```ruby
# defines a method called greeter
def greeter
  "Hello World!"
end
```

Now we can call the method repeatedly by referencing the name `greeter`.

In IRB:
```
>greeter
Hello World!
=>nil

>greeter
Hello World!
=>nil

>greeter
Hello World!
=>nil
```

## Implicit Return
Ruby has an implicit return, which means the value of the last line of a method is automatically returned without using the keyword `return`.


## Local Variables
When defining methods with variables within them, those variables stay local to that method.

```ruby
def fun_message
  response = "This is so much fun"
  puts response
end

> fun_message
This is so much fun
=> nil

> response
  NameError
```

## Method with Parameters
Methods can also take parameters:

```ruby
def greeter name
  "Hello, #{name}!"
end

> greeter 'LEARN Student'
=> "Hello, LEARN Student!"
```

While Ruby doesn't require parentheses around the arguments for a method, it is best practice to use parentheses if there is more than one argument.

```ruby
def add(num1, num2)
  num1 + num2
end

> add 1, 3
=> 4

> add(1, 2)
=> 3
```


## Challenges

- Create a method called sum_these_numbers which takes two integers as an argument and prints their sum to the screen.
- Create a method called is_even, which takes a single integer, and which then returns true if the number is even, and false otherwise.
- Create a method that takes a number as an argument and prints "Valid" if the number is between 1 and 10 (inclusive) and "Invalid" otherwise.
- Create a method that takes in a string and determines if the string is a palindrome.


## Challenge: Password Checker

### User Stories

You are writing the user registration page for a secure web site.
On the registration page, the user has to enter a user ID and a password, which has to adhere to the to following criteria:

- As a developer, I can create a method that checks for the following rules for a user ID and password:
  - User ID and password _cannot_ be the same.
  - User ID and password _must_ be at least six characters long.
  - Password _must_ contain at least one of: !#$
  - User ID _cannot_ contain the following characters: !#$ or spaces
  - Password _cannot_ be the word "password".

### User Stories: Stretch

- As a user, I can enter my user ID and password into the terminal after being prompted to find out if the they are acceptable.

### User Stories: Super Stretch

- As a developer, my method ensures that the user's password _must_ contain at least one number.

---
[Back to Syllabus](../README.md#unit-four-ruby)
