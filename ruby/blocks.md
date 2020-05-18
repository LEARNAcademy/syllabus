# Ruby Loops and Higher Order Functions

## Overview
- Ruby has lots of looping methods
- Ruby uses the basic `do/end` keywords to create a block or {}

## Learning Objectives
- Interacting with Ruby loops
- Exploring the do/end vs {} syntax

## Vocabulary
- do/end
- times do
- each do
- map
- blocks

## Set Up
- Create a file with the extension `.rb`
- In terminal run `ruby` followed by the file name

## times do

Time Loop will repeat code a certain number of times.

```ruby
my_num = 5
=> 5

> my_num.times do
   puts 'hello'
 end

hello
hello
hello
hello
hello
=> 5
```

## each do

Each loop will let you do something with every element of an array.

```ruby
> nums = [1, 2, 3]

> nums.each do |value|
    puts value
  end
1
2
3
=> [1, 2, 3]

> nums  
=> [1, 2, 3]
````
Note the original array is untouched.

## Ruby Blocks

Ruby has anonymous functions similar to JavaScript. They are called blocks. Blocks can be created with the `do/end` keywords **OR** with {}.

```ruby
# Block with a `do/end`
> nums.each do |value|
    puts value
  end
1
2
3
=> [1, 2, 3]


# Block with {}
> nums.each { |value| puts value }
1
2
3
=> [1, 2, 3]
```

Blocks can have multiple parameters.

```ruby
# Block with a `do/end`
> nums.each_with_index do |value, index|
    puts "#{index.to_s} #{value.to_s}"
  end
0 1
1 2
2 3
=> [1, 2, 3]


# Block with {}
> nums.each_with_index { |value, index| puts "#{index.to_s} #{value.to_s}" }
0 1
1 2
2 3
=> [1, 2, 3]
```

## map

Ruby's map method also lets you do something with every element of an array. Map returns a new array filled with whatever gets returned by the block each time it runs.

```ruby
> my_array = [1, 2, 3]

# Block with a `do/end`
> my_array.map do |value|
    value * value
  end
=> [1, 4, 9]

> my_array
=> [1, 2, 3]

# --OR--

# Block with {}
> my_array.map { |value| value * value }
=> [1, 4, 9]

> my_array                   
=> [1, 2, 3]
```
Note the original array is untouched. To modify the original array use the bang operator.

```ruby
> my_array = [1, 2, 3]

> my_array.map! do |value|
    value * value
  end
=> [1, 4, 9]

> my_array
=> [1, 4, 9]
```


## Challenges

- Write a loop that prints from 1 to 20.
- Write a loop that prints 20 to 1.
- Create an array of 10 numbers. Write loop that multiplies the numbers by 5.
- Create an array of words. Iterate through the array using .each and a block, then print each of those words in all capitals.

### Stretch Challenges: FIZZBUZZ
- Write a program that prints the numbers from 1 to 100. For multiples of three print Fizz instead of the number, for multiples of five print Buzz instead of the number, for numbers that are multiples of both three and five print FizzBuzz, for all other numbers print the number.

[Go to next lesson: Ruby Classes and Objects](./classes_objects.md)

[Back to Ruby Hashes](./hashes.md)

[Back to Syllabus](../README.md)
