**Hash**

Now on to hashes. A hash is a collection of unique keys and their values, in other words, it's like a dictionary of key value pairs and can be easily created by using its implicit form:
````RUBY
burger_rating = { "Bacon Burger" => 10, "Guacamole Burger" => 9 }
````
Hashes allow an alternate syntax form where your keys are always symbols. Instead of
````RUBY
order_form = { :number_of_tacos => 10, :meat_type => "Carne Asada" }
````
You could write it as:

````RUBY
order_form = { number_of_tacos: 10, meat_type: "Carne Asada" }
````
Each named key is a symbol you can access in the hash:
````RUBY
order_form[:number_of_tacos]  # => 10
````
A Hash can also be created through its ::new method:
```RUBY
burger_rating = Hash.new
burger_rating["Double Cheese Burger"] = 10
```

Hashes have a default value that is returned when accessing keys that do not exist in the hash. If no default is set nil is used. You can set the default value by sending it as an argument to ::new

**.each loop with a Hash and string interpolation**

.each calls block once for each key in the hash, passing the key-value pair as parameters.

If no block is given, an enumerator is returned instead.
```RUBY
    burger_rating = { "Bacon Burger" => 10, "Quacamole Burger" => 9 }
    burger_rating.each {|key, value| puts "The #{key} has a rating of #{value}" }

    produces:

    The Bacon Burger has a rating of 10
    The Quacamole Burger has a rating of 9
 ```

[Back to Syllabus](../README.md)
