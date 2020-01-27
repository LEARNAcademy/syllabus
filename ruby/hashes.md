# Ruby Hashes

A hash is a collection of unique keys and their values. A hash is like an array but instead of the values being referenced by an index, the values are reference by their unique key. Hashes can be constructed in multiple ways.

Keys are strings and values are assigned using a hash rocket `=>`:

```RUBY
> shopping_cart = { "apples" => 5, "kiwis" => 2 }
```

Keys are symbols and values are assigned using a hash rocket `=>`:

```RUBY
> shopping_cart = { :yogurt => 6, :flour => "All Purpose" }
```

Key value pairs much like a JavaScript object:

```RUBY
> shopping_cart = { granola: "almond", bananas: 3 }
```

Accessing a value from the hash:

```RUBY
> shopping_cart[:granola]
# => "almond"
```

A hash can also be created through the `new` method:

```RUBY
> shopping_cart = Hash.new
> shopping_cart["lettuce"] = "spring mix"
# --or--
> shopping_cart[:cheese] = "Cheddar"
> shopping_cart
# => {"lettuce"=>"spring mix", :cheese=>"Cheddar"}
```

## each Loop and Hashes

.each calls block once for each key in the hash, passing the key-value pair as parameters.

If no block is given, an enumerator is returned instead.
```RUBY
> shopping_cart = { "apples" => 5, "kiwis" => 2 }
# => {"apples"=>5, "kiwis"=>2}

> shopping_cart.each do |key, value|
    puts "Get #{value} #{key} from the store."
  end
# Get 5 apples from the store.
# Get 2 kiwis from the store.
```

[Go to next lesson: Ruby Classes and Objects](./classes_objects.md)

[Back to Ruby Loops](./loops.md)

[Back to Syllabus](../README.md)
