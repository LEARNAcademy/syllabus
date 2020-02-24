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

## Set Up
- Create a file with the extension `.rb`
- In terminal run `ruby` followed by the file name

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

Ruby also offers `unless` as a way to make conditional statements. `Unless` is just like if !(...). It is just like an `if` in reverse. It's a conditional statement that executes only if the condition is false, instead of true.

```ruby
my_num = 10
unless my_num > 20
  puts "#{my_num} is not greater than 20."
else
  puts "#{my_num} is greater than 20."
end
```

## Challenge: Rock, Paper, Scissors

Write the code that allows two users to input their moves in terminal for "Rock, Paper, Scissors" and determines the winner (or if a tie occurred).

[Go to next lesson: Ruby Methods](./methods.md)

[Back to Ruby Intro](./intro.md)

[Back to Syllabus](../README.md)
