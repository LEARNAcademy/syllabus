# Ruby Hashes

## Overview
- A hash is a collection of unique keys and their values
- A hash is a bit like an array but instead of the values being referenced by an index, the values are reference by their unique key

## Learning Objectives
- Exploring the different ways hashes can be constructed

## Vocabulary
- hash
- symbol
- hash rocket
- .new

## Additional Resources
[ Ruby Hash ](https://ruby-doc.org/core-2.7.0/Hash.html)

## Set Up
- Create a file with the extension `.rb`
- In terminal run `ruby` followed by the file name

## Ruby Hashes
A hash is a container for data. The data in a hash are stored in key:value pairs.

As is common in programming, are many ways to define the keys and values in a hash. As of Ruby 2.7, the accepted syntax of creating a hash looks like this:

```ruby
recipe = { flour: "2 1/4 cups", sugar: "1 cup", eggs: 2 }
```

Looking at the output in the terminal we get this:
```
{:flour=>"2 1/4 cups", :sugar=>"1 cup", :eggs=>2}
```

This output illustrates an older syntax of hashes. There are two things to note with the syntax of this output. The first is the symbol.



4. A hash can also be created through the `new` method:

```ruby
> shopping_cart = Hash.new
> shopping_cart["lettuce"] = "spring mix"

# --OR--
> shopping_cart[:cheese] = "Cheddar"
> shopping_cart
=> {"lettuce"=>"spring mix", :cheese=>"Cheddar"}
```

For the rest of this class, we'll be using symbols for our keys, because symbols are immutable (every symbol is unique, and it can’t be changed) and more efficient than using strings (see the benchmark data here: [Benchmarking Ruby Symbols vs Strings](https://gist.github.com/matugm/410f46ca87455b2701faa9a88edee8df))

## Symbols vs Strings
Some people confuse symbols with variables, but they have nothing to do with variables. Instead, a symbol is a lot more like a string. As you know by now, strings are used to work with data, but symbols are identifiers. In the above example, `granola` represents the `@granola` instance variable. You should use symbols as names or labels for things (like methods) & use strings when you care more about the data (individual characters).

The cool thing about symbols is that you don't have to pre-declare them and they're guaranteed to be unique.

There's no need to assign some kind of value to a symbol - Ruby takes care of that for you. Ruby also guarantees that no matter where it appears in your program, a particular symbol will have the same value.

Alternatively, you can consider the colon to mean "thing named" so `id:` is "the thing named id." You can also think of `id:` as meaning the name of the variable id, and plain id as meaning the value of the variable.

A Symbol is the most basic Ruby object you can create. It's just a name and an internal ID. Symbols are useful because a given symbol name refers to the same object throughout a Ruby program. Symbols are more efficient than strings. Two strings with the same contents are two different objects, but for any given name there is only one Symbol object. This can save both time and memory.


Accessing a value from the hash with a string:

```ruby
> shopping_cart["granola"]
# => "almond"
```

## Interacting with Ruby Hashes
Accessing a value from the hash with a symbol:

```ruby
> shopping_cart[:granola]
=> "almond"
```

## each Loop and Hashes

.each calls a block once for each key in the hash, passing the key-value pair as parameters.

If no block is given, an enumerator is returned instead.

```ruby
> shopping_cart = { "apples" => 5, "kiwis" => 2 }

> shopping_cart.each do |key, value|
    puts "Get #{value} #{key} from the store."
  end

=> Get 5 apples from the store.
=> Get 2 kiwis from the store.
=> {"apples"=>5, "kiwis"=>2}
```


## Challenges: Practice with Hashes
- Create a

[ Go to next lesson: Ruby Classes and Objects ](./classes_objects.md)

[ Back to Ruby Blocks and Iterables ](./blocks.md)

[ Back to Syllabus ](../README.md#unit-four-ruby)
