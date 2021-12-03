# Ruby Conditionals

## Overview
- Decision structures, also called decision trees, conditional statements, or if/else statements, are fundamental to computer programming
- Conditional statements are a sequence of well-defined instructions that produce a unique output based on the value of the input
- Conditionals follow a flowchart-like structure

## Learning Objectives
- Understanding the Ruby syntax for conditionals
- Using Ruby string interpolation to display unique outcomes
- Using `puts` to render content to the terminal

## Vocabulary
- if/elsif/else
- unless
- puts
- #{}

## Additional Resources
- <a href="http://ruby-for-beginners.rubymonstas.org/conditionals.html" target="blank">Ruby Conditionals</a>

#### Process
- `cd` into the `ruby-challenges` repository
- Create a new branch: `conditionals-initials1-initials2` (ex. conditionals-aw-sp)
- `touch` a file with no spaces and `.rb` extension: `conditionals-student1-student2.rb` (ex. conditionals-austin-sarah.rb)
- Open the folder in a text editor
- Code!

---

## If/Else/End

Conditionals in Ruby use the keywords `if` `else` and `end`. Simple evaluations in Ruby don't need to be wrapped in () and code blocks don't have {} so **indentation is super important**. Just like JavaScript the `else` block is a catch all and does not take an evaluation.

```ruby
my_num = 10
if my_num == 10
  puts 'Your number is 10!'
else
  puts 'Your number is not 10.'
end
```

## If/Elsif/Else/End

To add additional evaluations to an `if/else` code block, Ruby offers the keyword `elsif`. After the if statement you may use as many `elsif` statements as you want. Ending with an `else` will capture all the leftover possibilities.

```ruby
my_num = 20
if my_num == 10
  puts 'Your number is 10!'
elsif my_num < 10
  puts "#{my_num} is less than 10."
elsif my_num > 10
  puts "#{my_num} is greater than 10."
else
  puts 'Something went wrong.'
end
```

## Unless

Ruby also offers `unless` as a way to make conditional statements. `Unless` is just like if !(...). It is just like an `if` in reverse. It's a conditional statement that executes only if the condition is false instead of true.

```ruby
my_num = 10
unless my_num > 20
  puts "#{my_num} is not greater than 20."
else
  puts "#{my_num} is greater than 20."
end
```

## Challenge: Rock, Paper, Scissors

**Story**: As _user 1_, I can see a prompt in the terminal asking me to type either "rock", "paper", or "scissors".

**Story**: As _user 2_, I can see a prompt in the terminal asking me to type either "rock", "paper", or "scissors".

**Story**: As a user, I can see a message in the terminal saying if _user 1_ or _user 2_ won the round.

**Story**: As a user, I can see a message in the terminal saying if there was a tie.

---
[Back to Syllabus](../README.md#unit-four-ruby)
