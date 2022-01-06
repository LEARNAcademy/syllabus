# Ruby Conditionals

#### Overview
Decision structures, also called decision trees, conditional statements, or if/else statements, are fundamental to computer programming. Conditional statements are a sequence of well-defined instructions that produce a unique output based on the value of the input. Conditionals follow a flowchart-like structure.

#### Learning Objectives
- can define the syntax of a conditional statement in Ruby
- can reproduce the syntax of string interpolation in Ruby

#### Vocabulary
- if/elsif/else
- unless
- gets
- chomp
- #{}

#### Additional Resources
- [Ruby Conditionals](http://ruby-for-beginners.rubymonstas.org/conditionals.html)

#### Process
- `cd` into the `ruby-challenges` repository
- Create a new branch: `conditionals-initials1-initials2` (ex. conditionals-aw-sp)
- `touch` a file with no spaces and `.rb` extension: `conditionals-student1-student2.rb` (ex. conditionals-austin-sarah.rb)
- Open the folder in a text editor
- Code!

---

### If/Else/End

Conditionals in Ruby use the keywords `if` `else` and `end`. Simple evaluations in Ruby don't need to be wrapped in () and code blocks don't have {} so **indentation is super important**. Just like JavaScript the `else` block is a catch all and does not take an evaluation.

```ruby
my_num = 10
if my_num == 10
  puts 'Your number is 10!'
else
  puts 'Your number is not 10.'
end
```

### If/Elsif/Else/End

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

### Unless

Ruby also offers `unless` as a way to make conditional statements. `Unless` is just like if !(...). It is just like an `if` in reverse. It's a conditional statement that executes only if the condition is false instead of true.

```ruby
my_num = 10
unless my_num > 20
  puts "#{my_num} is not greater than 20."
else
  puts "#{my_num} is greater than 20."
end
```

### Input
Ruby has the unique ability to not only produce an outcome in the terminal but to take user input in the terminal. The command for user input in the terminal is an action called called `gets`. It is a bit like `prompt()` in JavaScript. And just like `prompt()` the input value from gets needs to be stored in a variable to access later.

```ruby
> puts 'Enter your name'
=> "Enter your name"

> name = gets
# gets provides a blank line that accepts user input as a string
LEARN Student
=> "LEARN Student\n"

> puts "Hello, #{name}. How are you today?"
"Hello, LEARN Student
. How are you today?"
```

The string output from `gets` includes the return character you type to enter the user input. Ruby has a command called `chomp` that removes any additional line breaks and white space from the end of a string.

```ruby
> puts 'Enter your name'
=> "Enter your name"

> name = gets.chomp
=> "LEARN Student"

> puts "Hello, #{name}. How are you today?"
=> "Hello, LEARN Student. How are you today?"
```

## Challenge: Rock, Paper, Scissors

**Story**: As *user 1*, I can see a prompt in the terminal asking me to type either "rock", "paper", or "scissors".

**Story**: As *user 2*, I can see a prompt in the terminal asking me to type either "rock", "paper", or "scissors".

**Story**: As a user, I can see a message in the terminal saying if *user 1* or *user 2* won the round.

**Story**: As a user, I can see a message in the terminal saying if there was a tie.

---
[Back to Syllabus](../README.md#unit-four-ruby)
