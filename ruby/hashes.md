# Ruby Hashes

## Overview
- A hash is a collection of unique keys and their values
- A hash is a bit like an array but instead of the values being referenced by an index, the values are reference by their unique key
- The class `Hash` falls under the category of enumerable, which means you can use iterable methods on a hash

## Learning Objectives
- Exploring the different ways hashes can be constructed
- Applying iterable methods to a hash

## Vocabulary
- Hash
- Symbol
- Hash rocket
- Enumerable
- Duck Typing

## Additional Resources
- [ Ruby Hash Docs ](https://ruby-doc.org/core-2.7.0/Hash.html)
- [ Ruby Hashes for Beginners ](http://ruby-for-beginners.rubymonstas.org/built_in_classes/hashes.html)
- [ Ruby's Magical Enumerable Module ](https://blog.appsignal.com/2018/05/29/ruby-magic-enumerable-and-enumerator.html)

#### Process
- `cd` into the `ruby-challenges` repository
- Create a new branch: `hashes-initials1-initials2` (ex. hashes-aw-sp)
- `touch` a file with no spaces and `.rb` extension: `hashes-student1-student2.rb` (ex. hashes-austin-sarah.rb)
- Open the folder in a text editor
- Code!

---

## Ruby Hashes
A hash is a container for data. The data in a hash are stored in key:value pairs.

As is common in programming, are many ways to define the keys and values in a hash. As of Ruby 2.7, the accepted syntax of creating a hash looks like this:

```ruby
recipe = { flour: "2 1/4 cups", sugar: "1 cup", eggs: 2 }
```

Looking at the output in the terminal we get this:
```
=> {:flour=>"2 1/4 cups", :sugar=>"1 cup", :eggs=>2}
```

This output illustrates an older syntax of hashes. There are two things to note with the syntax of this output:

1. The first is the data type of the key which is a Ruby **symbol**. A symbol is expressed with the colon on the left side of the variable such as `:flour`.

2. The second is the **hash rocket** that separates the key and the value. A hash rocket is this syntax `=>`. Hash rockets used to be the only way to define a value in a hash. The later versions of Ruby adopted a more JavaScript-like syntax to make the code more readable. Hash rockets are still valid Ruby code and are seen in terminal outputs so it is important to recognize the many hash syntaxes.

## Operations on a Hash

**Create**  
As we know, everything in Ruby is a class. So we can call the `.new` method on the class `Hash` to instantiate a new hash.

```ruby
> recipe = Hash.new
```

**Read**  
When we call `recipe` we can see it is an empty hash.
```ruby
> recipe
 => {}
```

**Update**  
We can add values to the hash by providing a key in square braces and assigning that key a value.

```ruby
> recipe[:flour] = "2 1/4 cups"
> recipe[:sugar] = "1 cup"
> recipe[:eggs] = 1
```

Now we can see the output of the hash with the keys and values.
```ruby
> recipe
=> {:flour=>"2 1/4 cups", :sugar=>"2cups", :eggs=> 1}
```

This same syntax can be used to update the value in a hash.

```ruby
> recipe[:eggs] = 2
=> {:flour=>"2 1/4 cups", :sugar=>"2 cups", :eggs=>2}
```

Now, what if we needed to update the name of a key? That requires a little bit more Ruby code.

```ruby
> recipe
> recipe[:buter] = "1 cup"
```

Oops, we misspelled butter. Let's update that key to be the correct spelling using this format: `hash[:new_key] = hash.delete :old_key`

```ruby
> recipe[:butter] = recipe.delete :buter
```

**Show**  
We can look at just a single value from the hash by calling its key.

```ruby
> recipe[:sugar]
=> "2 cups"
```

**Delete**  
If we want to remove a key:value pair from the hash all together we can use the Ruby method `.delete` and pass in the key as an argument. Ruby will return the value from the deleted key as an output of that method. And when we call the variable `recipe` we see the key:value pair has been removed.

```ruby
> recipe.delete(:butter)
=> "1 cup"
> recipe
=> {:flour=>"2 1/4 cups", :sugar=>"2 cups", :eggs=>2}
```

## Enumerables and Duck Typing
Everything in Ruby is an instance of a class. And each class has certain abilities. For example, class Integer has the ability to have mathematical operations performed on its instances while that is not true of NilClass.

We know that methods are functions that belong to a class. And Ruby decides which methods belong to which class based on the ability of the class (what it can do) rather than what each class is. This concept is called **Duck Typing**. "If it looks like a duck and quacks like a duck just go ahead and treat it like a duck."

The power of Duck Typing is that because Hashes share abilities with classes like Arrays and Ranges, we can use the same methods available to those classes on class Hash.

Hashes, like Arrays and Ranges, have the ability to iterate. So we can use methods such as `.each` and `.map` on Hashes.

`.each` calls a block once for each key in the hash, passing the key-value pair as a parameter.

If no block is given, an enumerator is returned instead.

```ruby
> recipe = {flour: "2 1/4 cups", sugar: "2 cups", eggs: 2, butter: "1 cup"}

> recipe.each do |key, value|
  puts "Add #{value} #{key} to the bowl."
end
```
When applied to a hash, `.each` can take two possible arguments - the key and the value. These arguments are simply placeholders used inside the do/end block.

`.each` executes once time for each key:value pair in the hash.

Output:
```
Add 2 1/4 cups flour to the bowl.
Add 2 cups sugar to the bowl.
Add 2 eggs to the bowl.
Add 1 cup butter to the bowl.
=> {:flour=>"2 1/4 cups", :sugar=>"2 cups", :eggs=>2, :butter=>"1 cup"}
```

`.map` also executes once for each key:value pair and returns an array of the same length.

```ruby
> recipe.map do |key, value|
>   "Add #{value} #{key} to the bowl."
> end
```

Output:
```
=> ["Add 2 1/4 cups flour to the bowl.", "Add 2 cups sugar to the bowl.", "Add 2 eggs to the bowl.", "Add 1 cup butter to the bowl."]
```

## Summary
- Hashes are collections of key:value pairs.
- The class Hash can be created by assigning a variable or by using the `.new` method.
- Hashes can have new key value pairs added, updated or deleted.
- Hashes have enumerable abilities allowing developer the ability to use methods such as `.each` and `.map` to iterate over the key:value pairs.

## Challenges: Practice with Hashes
- As a developer, I can create a hash called my_phone using the Ruby method `.new`.
- As a developer, I can add five key:value pairs of app names and their descriptions to my hash.
- As a developer, I can return a value from my_phone by passing in the name of a key.
- As a developer, I can update two keys in my_phone.
- As a developer, I can update two values in my_phone.
- As a developer, I can delete two key:value pairs from my_phone.
- As a developer, I can use an enumerable method to return information about all of my_phone's applications.

### Stretch Challenges
- As a developer, I can create a custom method that takes in my_phone and returns an array with the app name capitalized and information about each phone app.

---
[Back to Syllabus](../README.md#unit-four-ruby)
