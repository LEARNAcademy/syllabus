# Ruby Loops

Ruby has lots of looping methods. Let's examine a few of them now.

## times

If you want to repeat some code a certain number of times.

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
Just as with Javascript, every function or method we call returns some sort of value. Ruby's built-in functions generally try hard to find something useful to return, and often they do this by giving you the last value they worked with. So in this case, a times loop returns how many times it ran.

**.each Loop**

Ruby's each also lets you do something with every element of an array.
````RUBY
> a = [1, 2, 3]
> a.each do |element|
      puts element
    end
  1
  2
  3
  # => [1, 2, 3]

> a   # => [1, 2, 3]
````
Note the original array is untouched.


**.map**

Ruby's map also lets you do something with every element of an array; it
returns a new array filled with whatever gets returned by the block each time it runs:
````RUBY
> a = [1, 2, 3]
> a.map { |n| n * n } # => [1, 4, 9]
> a                   # => [1, 2, 3]
````
Note the original array is untouched


## Challenges

* Write a loop that prints from 1 to 20. Try it with all the loops covered in this lesson. Do it again counting down from 20 to 1.
* Write a program which takes a number and prints "Valid" if the number is between 1 and 10 (inclusive) and "Invalid" otherwise.
* FIZZBUZZ - Write a program that prints the numbers from 1 to 100. But for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz
- Create an array of words. Iterate through the array using .each and a block, then print each of those words in all capitals.

[Go to Ruby Hashes](./rb_hashes.rb)

[Back to Syllabus](../README.md)
