# Ruby Methods

## Simple Method

Methods are used to create small bits of functionality that can be called as many times as we need.

To create methods in Ruby we use the keywords `def` and `end`.

Example:
```RUBY
def hi
  puts "Hello World!"
end
```
`def hi` defines the method and gives it the name `hi`. In between is the code to be executed. The block of code ends with the keyword `end`.

Now we can call the method repeatedly by referencing the name `hi`.

In IRB:
```RUBY
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

When defining methods with variables within them, those variables stay local to that method.

```RUBY
def hi
  response = "This is so much fun"
  puts response
end
```
In IRB:
```RUBY
> hi
This is so much fun
=> nil

> response
  NameError
```

## Method with Parameters

Methods can also take parameters:

```RUBY
def add(num1, num2)
  num1 + num2
end
```

Ruby has an implicit return, which means the value of the last line of a method is automatically returned without using the keyword `return`.

To call the method:
```RUBY
> add(1, 2)   # => 3
> add 1, 3    # => 4
```

Parentheses are optional. They are typically used to make your code easier to read if passing multiple parameters.


## Ruby Blocks

Ruby has anonymous functions similar to Javascript. They are called blocks. Blocks can be created with the `do/end` keywords or with {}.

```RUBY
# Block with a `do/end`
nums.each() do |element|
  puts element
end

# Block with {}
nums.each() { |element| puts element }
```

Blocks can have multiple parameters.

```RUBY
# Block with a `do/end`
nums.each_with_index() do |element, index|
  puts "#{index.to_s} #{element.to_s}"
end

# Block with {}
nums.each_with_index() { |element, index| puts "#{index.to_s} #{element.to_s}" }
```


## Challenges: Intro

- Create a method called sum_these_numbers which takes two integers as an argument and prints their sum to the screen.
- Create a method called is_even, which takes a single integer, and which then returns true if the number is even, and false otherwise.


### Challenge: Password Checker

### User Stories

You are writing the user registration page for a secure web site.
On the registration page, the user has to enter a user ID and a password, which has to adhere to the to following criteria:

- User ID and password cannot be the same.
- User ID and password have to be at least six characters long.
- Password has to contain at least one of: !#$
- User ID cannot contain the following characters: !#$ or spaces
- Password cannot be the word "password".

### Developer Stories

- Write a function that tests is the User ID and password are the same.
- Write a function that checks whether the user ID is at least six characters long.
- Write a function that checks whether the password is at least six characters long.
- Write a function that checks whether the password contains one of the following: !#$.
- Write a function that checks whether the user ID contains !#$ or any spaces.
- Write a function that checks whether the password is the word "password".

### User Stories: Stretch

- As a user, I can enter my user ID and password and find out if the they are acceptable.

### Developer Stories: Stretch

- Write a method called validate_password that lets a user input both user ID and password.
- Then use the methods above to evaluate if the user ID and password combination is acceptable or not.
- Tells user what the result is.

### User Stories: Super Stretch

- As a user, my password has to contain at least one digit.

### Developer Stories: Super Stretch
- Write a method that determines if the password contains "0","1", "2" ... "9".


[Go to Ruby Loops](./rb_loops.md)

[Back to Syllabus](../README.md)
