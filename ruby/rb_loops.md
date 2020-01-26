# Ruby Loops

Ruby has lots of looping methods. Ruby uses the basic `do/end` keywords to create a block. By adding a method we can create iteration.

## times do

Time Loop will repeat code a certain number of times.

```RUBY
> my_num = 5   
      # => 5
> my_num.times do
>   puts 'hello'
> end
      # => "hello"
      # => "hello"
      # => "hello"
      # => "hello"
      # => "hello"
      # => 5
  >
```

## each do

Each loop will let you do something with every element of an array.

```RUBY
> my_array = [1, 2, 3]

> my_array.each do |element|
    puts element
  end
# 1
# 2
# 3
# => [1, 2, 3]

> my_array   
# => [1, 2, 3]
````
Note the original array is untouched.

## map

Ruby's map method also lets you do something with every element of an array. Map returns a new array filled with whatever gets returned by the block each time it runs.

````RUBY
> my_array = [1, 2, 3]

> my_array.map do |n|
    n * n
  end
# => [1, 4, 9]

> my_array
# => [1, 2, 3]

# --or--

> my_array.map { |n| n * n }
# => [1, 4, 9]

> my_array                   
# => [1, 2, 3]
````
Note the original array is untouched.


## Challenges

- Write a loop that prints from 1 to 20.
- Write a loop that prints 20 to 1.
- Create an array of 10 numbers. Write loop that multiplies the numbers by 5.
- Create an array of words. Iterate through the array using .each and a block, then print each of those words in all capitals.

### Stretch Challenges: FIZZBUZZ
- Write a program that prints the numbers from 1 to 100. For multiples of three print Fizz instead of the number, for multiples of five print Buzz instead of the number, for numbers that are multiples of both three and five print FizzBuzz, for all other numbers print the number.

[Go to Ruby Hashes](./rb_hashes.md)

[Back to Syllabus](../README.md)
