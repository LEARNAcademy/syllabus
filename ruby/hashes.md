# Ruby Hashes

## Overview
- A hash is a collection of unique keys and their values
- A hash is like an array but instead of the values being referenced by an index, the values are reference by their unique key

## Learning Objectives
- Exploring the different ways hashes can be constructed

## Vocabulary
- hash
- symbol
- hash rocket
- .new

## Set Up
- Create a file with the extension `.rb`
- In terminal run `ruby` followed by the file name

## Creating a Hash
Hashes can be constructed in multiple ways.

1. Keys are strings and values are assigned using a hash rocket `=>`:

```ruby
> shopping_cart = { "apples" => 5, "kiwis" => 2 }
```

2. Keys are symbols and values are assigned using a hash rocket `=>`:

```ruby
> shopping_cart = { :yogurt => 6, :flour => "All Purpose" }
```

3. Key value pairs much like a JavaScript object:

```ruby
> shopping_cart = { granola: "almond", bananas: 3 }
```

4. A hash can also be created through the `new` method:

```ruby
> shopping_cart = Hash.new
> shopping_cart["lettuce"] = "spring mix"

# --OR--
> shopping_cart[:cheese] = "Cheddar"
> shopping_cart
=> {"lettuce"=>"spring mix", :cheese=>"Cheddar"}
```

## Interacting with Ruby Hashes
Accessing a value from the hash:

```ruby
> shopping_cart[:granola]
=> "almond"
```

## each Loop and Hashes

.each calls block once for each key in the hash, passing the key-value pair as parameters.

If no block is given, an enumerator is returned instead.

```ruby
> shopping_cart = { "apples" => 5, "kiwis" => 2 } => {"apples"=>5, "kiwis"=>2}

> shopping_cart.each do |key, value|
    puts "Get #{value} #{key} from the store."
  end

Get 5 apples from the store.
Get 2 kiwis from the store.
=> {"apples"=>5, "kiwis"=>2}
```

[Go to next lesson: Ruby Classes and Objects](./classes_objects.md)

[Back to Ruby Loops](./loops.md)

[Back to Syllabus](../README.md)
