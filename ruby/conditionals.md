# Ruby Conditionals

## If/Else/End

Conditionals in Ruby use the keywords `if` `else` and `end`. Simple evaluations in Ruby don't need to be wrapped in () and code blocks don't have {} so indentation is super important. Just like JavaScript the else block is a catch all and does not take an evaluation.

```Ruby
my_num = 1
if my_num == 3
  puts "Huh?"
else
  puts "What?"
end
```

## If/Elsif/Else/End

To add additional evaluations to an `if/else` code block, Ruby offers the keyword `elsif`. After the if statement you can use as many `elsif` statements as you want. Ending with an `else` will capture all the leftover possibilities.

```RUBY
my_num = 1
if my_num == 2
  puts "Huh?"
elsif my_num == 1
  puts "Who?"
else
  puts "Why?"
end
```

## Unless

Ruby also offers `unless` as a way to make conditional statements. `Unless` is just like if !(...). It is just like an `if` in reverse. It's a conditional statement that executes only if the condition is false, instead of true.

```RUBY
x = 1
unless x > 1
  puts "Okay"
else
  puts "Huh?"
end
```

## Challenge: Rock, Paper, Scissors

Write the code that allows two users to input their moves in terminal for "Rock, Paper, Scissors" and determines the winner (or if a tie occurred).

[Go to next lesson: Ruby Methods](./methods.md)

[Back to Ruby Intro](./intro.md)

[Back to Syllabus](../README.md)
