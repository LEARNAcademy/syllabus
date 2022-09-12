# Ruby Blocks and Iterables

#### Overview

Ruby is a developer friendly language with many, many built in methods providing easily accessible functionality. Many of the methods are iterables that will perform a particular action a given number of times. Some of the methods require additional static data passed in the form of an argument. Some require more than just static data. Much like map and filter in JavaScript, some methods in Ruby require an additional method is passed.

#### Previous Lecture (49 min)

[![YouTube](http://img.youtube.com/vi/wE8LaI6_0Dg/0.jpg)](https://youtu.be/wE8LaI6_0Dg)

#### Learning Objectives

- can identify the syntax of a Ruby block when passed to a iterative method
- can determine the appropriate built-in Ruby method needed to accomplish a task
- can use block logic inside of a custom method
- can identify the scope of variables in a block

#### Vocabulary

- Ruby block
- range

#### Process

- `cd` into the `ruby-challenges` repository
- Create a new branch: `blocks-initials1-initials2` (ex. blocks-aw-sp)
- `touch` a file with no spaces and `.rb` extension: `blocks-student1-student2.rb` (ex. blocks-austin-sarah.rb)
- Open the folder in a text editor
- Code!

---

### Ruby Blocks

Some Ruby methods require additional information be passed to modify the method action. A **Ruby block** is an anonymous function that is passed to a method to determine the outcome. Blocks are typically defined with the Ruby keywords `do` and `end`.

### Times

The `times` method is a very basic method that will repeat code a certain number of times. The `times` method requires a block to determine what action is to be performed.

```ruby
my_num = 5
# output: 5

my_num.times do
  p 'hello'
end

# output:
'hello'
'hello'
'hello'
'hello'
'hello'
```

### Each

The `each` method acts on a list-style data type. The `each` method will execute once for every item in an object or array. The block that is passed to the `each` method will determine what action is to be performed on each iteration. To determine what is happening to each value, a parameter is passed to the block. The parameter is defined inside of pipes.

Like most Ruby methods, the `each` method is an accessor and will not change the original array.

```ruby
nums = [1, 2, 3]

# each takes a block and the parameter of value
nums.each do |value|
  p value
end

# output:
1
2
3

# the parameter value can be modified inside the block
nums.each do |value|
  p value * 3
end

# output:
3
6
9
```

Blocks typically are defined by the keyword `do` and `end` but can be wrapped in curly braces. The best practice is to use `do` and `end` if the logic in the block is multiline. Single line code can be converted to curly braces.

```ruby
nums.each { |value| p value * 3 }

# output:
3
6
9
```

### While

The while method is a little bit different in that it doesn't take a block as an argument. A while loop requires a starting value and runs until a particular condition is met.

```ruby
number = 0
while number < 5
  p number
  number += 1
end

# output:
0
1
2
3
4
```

### Ranges

Arrays are a commonly way to store data. Arrays are also a very convenient way to store data as they are well organized, predictable, and allow for iterative actions. Arrays are not the only iterable data types in Ruby. Another way to store iterable data is in a range. A **range** is a Ruby class that represents an interval of consecutive data defined with a starting value and runs through an ending value.

```ruby
1..10
'a'..'z'
```

The range on its own doesn't do much but it can be used to create a list of all the values from the first to the last. To access the full list we can apply an `each` block. In order to indicate to Ruby that the each method is being applied to the range full range and not just the ending character we need to wrap the range in parentheses.

```ruby
(1..10).each do |value|
  p value
end

# output:
1
2
3
4
5
6
7
8
9
10
```

Ruby ranges can also be converted to arrays. Ruby has a set of methods that will covert data types as long as the conversion is possible. The method `.to_a` will convert data into an array.

```ruby
(1..10).to_a
# output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

('a'..'g').to_a
# output: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
```

### Map

Ruby's `map` method also lets you do something with every element of an array. The `map` method returns a new array the same length as the array it is called on. The new array is filled with whatever gets returned by the block.

The `map` method is an accessor and will not modify the array it is called on.

```ruby
my_array = [1, 2, 3, 4]

my_array.map do |value|
  value * value
end
# output: [1, 4, 9, 16]

my_array
# output: [1, 2, 3, 4]

# block with curly braces
my_array.map { |value| value * value }
# output: [1, 4, 9, 16]

my_array
# output: [1, 2, 3, 16]
```

### Mutators Methods

Ruby methods are accessors by default. To modify the original array apply the bang operator to the end of the method.

```ruby
my_array = [1, 2, 3, 4]

my_array.map! do |value|
  value * value
end
# output: [1, 4, 9, 16]

my_array
# output: [1, 4, 9, 16]
```

### ❤️ Challenges

- Create a loop that prints the numbers 1 to 20.
- Create a loop that prints the numbers 1 to 20 using a different approach than previously used.
- Create a loop that prints only even numbers from 20 to 0.
- Create a method that takes in an array of numbers and returns a new array with all the numbers multiplied by 5.
- Create a method that takes in an array of lowercase words and capitalizes all of the words, permanently modifying the original array.
- Create a method that takes in an array of numbers and returns the largest number in the array.
- Create a method that takes in an array of words and returns the word with the least number of characters.
- Create a method that takes in an array of numbers and returns only the odd numbers sorted from least to greatest.
- Create a method that takes in an array of strings and returns all the strings in reverse casing. All uppercase letters should be returned lowercased and all lowercased letters should be returned in uppercase letters.
- Create a method that will take in an array of numbers and return an array with the remainder of each number when divided by 2.
- Create a method that will take in a range of letters and return an array with all the letters capitalized.

### 🏔 Stretch Goals

- FizzBuzz: Create a method that prints the numbers from 1 to 100. For multiples of three print `Fizz` instead of the number, for multiples of five print `Buzz` instead of the number, for numbers that are multiples of both three and five print `FizzBuzz`, for all other numbers print the number.
- Create a method that takes in an array of words and returns all the words that start with a particular letter. Example: Given the array ['Apple', 'Avocado', 'Banana', 'Mango'] and the letter 'a' the method should return ['Apple', 'Avocado']. With the same method, given the letter 'm' should return ['Mango'].
- Create a method that takes in an array of mixed data types and returns an array without any false, null, 0, or blank values.

---

[Back to Syllabus](../README.md#unit-four-ruby)
